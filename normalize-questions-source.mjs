import { readFileSync, writeFileSync } from "node:fs";
import { buildQuestionBankFromSources, SOURCE_FILES } from "./question-bank.js";

const GENERATED_CORRECT_PATTERNS = [
  / is correct because it directly fits the key requirement in the prompt:/i,
  /This is the strongest answer because /i,
  /The deciding issue here is /i,
  / is the best choice because /i,
  / is correct because it is the workflow or delivery practice most likely to solve the problem /i,
  / is correct because it matches the model, retrieval, hosting, or infrastructure concept required /i,
  / is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement /i,
  / is correct because it is the safeguard or governance control that best addresses /i,
  / matches the model, retrieval, hosting, or infrastructure concept required /i,
  / provides the governance, safety, privacy, or fairness control needed /i,
  / is the option that adds the governance, safety, privacy, or fairness control /i,
  / is the prompt technique or output control that best addresses /i,
  / adds the governance, safety, privacy, or fairness control the scenario requires/i,
  / is the control that best addresses /i,
  / is the data preparation, analysis, or evaluation step that best fits it/i,
  / is the engineering practice that directly addresses /i,
  / scenario depends on agent behavior and control flow/i,
  / matches the planning, orchestration, tool-use, or control pattern needed /i
];
const GENERATED_INCORRECT_VALUES = new Set([
  "The other options either confuse adjacent model, hosting, retrieval, or infrastructure concepts, or they do not solve the specific requirement in the scenario.",
  "The other options adjust the wrong prompt control, confuse prompting with a different architecture choice, or fail to produce the requested behavior.",
  "The other options do not provide the governance, privacy, bias, or security control required by the scenario.",
  "The other options refer to different data lifecycle steps, skip required validation, or do not address the data-quality issue in the prompt.",
  "The other options describe a different engineering activity, overstate what automation can guarantee, or do not solve the workflow constraint being tested.",
  "The other options describe adjacent tooling ideas, but they do not match the planning, tool-use, state, or orchestration behavior the question is testing."
]);

function deduplicate(questionBank) {
  const seen = new Set();
  return questionBank.filter((question) => {
    const signature = `${question.text}::${question.options.map((option) => `${option.letter}:${option.text}`).join("|")}`;
    if (seen.has(signature)) {
      return false;
    }
    seen.add(signature);
    return true;
  });
}

function cleanDomainLabel(domain) {
  return (domain || "")
    .replace(/^(?:Domain\s*:\s*)+/i, "")
    .replace(/^Domain\s+\d+\s*:\s*/i, "")
    .trim();
}

function getDisplayDomain(question) {
  return cleanDomainLabel(question.officialDomain) || cleanDomainLabel(question.domain) || "Uncategorized";
}

function getDomainBucket(question) {
  const domain = getDisplayDomain(question).toLowerCase();

  if (domain.includes("prompt")) {
    return "prompt";
  }

  if (domain.includes("ethics") || domain.includes("security")) {
    return "security";
  }

  if (domain.includes("data research") || domain.includes("analysis")) {
    return "data";
  }

  if (domain.includes("development") || domain.includes("workflow automation")) {
    return "development";
  }

  if (domain.includes("agentic")) {
    return "agentic";
  }

  return "models";
}

function normalizeSentence(text) {
  return text.replace(/\s+/g, " ").trim();
}

function getSentences(text) {
  return normalizeSentence(text)
    .match(/[^.!?]+[.!?]?/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];
}

function lowerFirst(text) {
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

function getSetupSummary(questionText) {
  const sentences = getSentences(questionText);
  if (sentences.length <= 1) {
    return normalizeSentence(questionText).replace(/[?!.]$/, "");
  }

  return sentences.slice(0, -1).join(" ").replace(/[?!.]$/, "");
}

function getAnswerText(question, answerLetter) {
  const option = question.options.find((item) => item.letter === answerLetter);
  return option ? `${option.letter}. ${option.text}` : answerLetter;
}

function getAnswerTextForRationale(question, answerLetter) {
  const option = question.options.find((item) => item.letter === answerLetter);
  if (!option) {
    return answerLetter;
  }

  return `${option.letter}. ${option.text.replace(/[.!?]+$/, "")}`;
}

function getConstraintLead(question) {
  const setupSummary = getSetupSummary(question.text);
  if (!setupSummary) {
    return "the requirement described in the prompt";
  }

  return lowerFirst(setupSummary);
}

function getScenarioTarget(question) {
  const constraintLead = getConstraintLead(question);

  if (/^(when|while|during|under|after|before|because|to comply|instead of|rather than)\b/i.test(constraintLead)) {
    return constraintLead;
  }

  if (/^(what|which|why|how)\b/i.test(constraintLead)) {
    return "the concept being tested in the question";
  }

  return `the scenario where ${constraintLead}`;
}

function getQuestionFocus(questionText) {
  const sentences = getSentences(questionText);
  const focus = sentences[sentences.length - 1] || normalizeSentence(questionText);
  return focus.replace(/[?!.]$/, "").trim();
}

function buildScenarioPhrase(question) {
  const target = getScenarioTarget(question);

  if (target === "the concept being tested in the question") {
    return target;
  }

  if (/^(when|while|during|under|after|before|because|to comply|instead of|rather than)\b/i.test(target)) {
    return target;
  }

  return `a scenario where ${target.replace(/^the scenario where\s+/i, "")}`;
}

function buildWhyCorrect(question, index) {
  if (question.rationaleCorrect && !GENERATED_CORRECT_PATTERNS.some((pattern) => pattern.test(question.rationaleCorrect))) {
    return question.rationaleCorrect;
  }

  const answerText = question.correctAnswers.map((letter) => getAnswerTextForRationale(question, letter)).join(" and ");
  const constraintLead = getConstraintLead(question);
  const scenarioTarget = buildScenarioPhrase(question);
  const focusLead = lowerFirst(getQuestionFocus(question.text));
  const variant = index % 3;

  switch (getDomainBucket(question)) {
    case "prompt":
      if (variant === 0) {
        return `This is the strongest answer because ${answerText} is the prompt technique or output control that best addresses ${scenarioTarget}.`;
      }

      if (variant === 1) {
        return `${answerText} is correct because it is the prompt design choice most likely to produce the requested behavior in ${scenarioTarget}.`;
      }

      return `${answerText} fits best here because the question is really about prompt structure and control, and that choice matches ${scenarioTarget}.`;
    case "security":
      if (/^(what|which|why|how)\b/i.test(constraintLead)) {
        return `${answerText} is correct because it is the safeguard or governance control that best addresses the core requirement in this question.`;
      }

      if (variant === 0) {
        return `${answerText} is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in ${scenarioTarget}.`;
      }

      if (variant === 1) {
        return `In ${scenarioTarget}, ${answerText} is the strongest fit because it adds the safeguard or oversight the situation is missing.`;
      }

      return `${answerText} is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.`;
    case "data":
      if (variant === 0) {
        return `The deciding issue here is ${constraintLead}, and ${answerText} is the data preparation, analysis, or evaluation step that best fits it.`;
      }

      if (variant === 1) {
        return `${answerText} is correct because it is the part of the data workflow that most directly addresses ${scenarioTarget}.`;
      }

      return `${answerText} fits because the question is really about the right data-quality, analysis, or evaluation step for ${scenarioTarget}.`;
    case "development":
      if (variant === 0) {
        return `${answerText} is the best choice because it is the engineering practice that directly addresses ${scenarioTarget}.`;
      }

      if (variant === 1) {
        return `${answerText} is correct because it is the workflow or delivery practice most likely to solve the problem the prompt describes.`;
      }

      return `${answerText} makes the most sense here because it matches the engineering constraint the scenario is actually testing.`;
    case "agentic":
      if (variant === 0) {
        return `This scenario depends on agent behavior and control flow, and ${answerText} is the option that best matches ${scenarioTarget}.`;
      }

      if (variant === 1) {
        return `${answerText} is correct because it aligns with the planning, tool-use, memory, or orchestration behavior required in ${scenarioTarget}.`;
      }

      return `${answerText} is the strongest answer because the scenario is testing agent control flow, and that option best reflects how the agent should behave.`;
    default:
      if (variant === 0) {
        return `${answerText} is correct because it matches the model, retrieval, hosting, or infrastructure concept required in ${scenarioTarget}.`;
      }

      if (variant === 1) {
        return `${answerText} is the best answer because it is the core model or infrastructure concept that resolves ${scenarioTarget}.`;
      }

      return `${answerText} fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind ${focusLead}.`;
  }
}

function buildWhyIncorrect(question) {
  if (question.rationaleIncorrect && !GENERATED_INCORRECT_VALUES.has(question.rationaleIncorrect)) {
    return question.rationaleIncorrect;
  }

  switch (getDomainBucket(question)) {
    case "prompt":
      return "The other options either pull the wrong prompt lever, switch to a different technique, or do not reliably enforce the requested behavior.";
    case "security":
      return "The other options miss the required safeguard, weaken the control, or address a different governance, privacy, or fairness risk.";
    case "data":
      return "The other options skip the relevant data-quality or evaluation step, or they move to a different part of the workflow.";
    case "development":
      return "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the delivery constraint in the prompt.";
    case "agentic":
      return "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, memory, or orchestration pattern being tested here.";
    default:
      return "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.";
  }
}

function formatQuestion(question, index) {
  const answerLine = question.correctAnswers
    .map((letter) => `🟩 ${getAnswerText(question, letter)}`)
    .join(" and ");

  return [
    `## Question ${index + 1} (Domain: ${getDisplayDomain(question)})`,
    question.text,
    "",
    ...question.options.map((option) => `* ${option.letter}. ${option.text}`),
    "",
    `Answer: ${answerLine}`,
    "",
    `* Why it is correct: ${buildWhyCorrect(question, index)}`,
    `* Why others are incorrect: ${buildWhyIncorrect(question)}`
  ].join("\n");
}

function loadSources() {
  return SOURCE_FILES.map((name) => ({
    name,
    text: readFileSync(name, "utf8")
  }));
}

export function normalizeQuestionsSource() {
  const questionBank = deduplicate(buildQuestionBankFromSources(loadSources()));
  const output = `${questionBank.map((question, index) => formatQuestion(question, index)).join("\n\n")}\n`;
  writeFileSync("questions-source.txt", output, "utf8");
  return questionBank.length;
}

const invokedPath = process.argv[1] ? new URL(`file://${process.argv[1].replace(/\\/g, "/")}`).pathname : "";
const currentPath = new URL(import.meta.url).pathname;

if (invokedPath === currentPath) {
  const count = normalizeQuestionsSource();
  console.log(`Normalized questions-source.txt with ${count} questions.`);
}
