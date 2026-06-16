import { readFileSync, writeFileSync } from "node:fs";
import { buildQuestionBankFromSources, SOURCE_FILES } from "./question-bank.js";
import { normalizeQuestionsSource } from "./normalize-questions-source.mjs";

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

normalizeQuestionsSource();

const sources = SOURCE_FILES.map((name) => ({
  name,
  text: readFileSync(name, "utf8")
}));

const questionBank = deduplicate(buildQuestionBankFromSources(sources));
const output = `window.QUESTION_BANK = ${JSON.stringify(questionBank, null, 2)};\n`;

writeFileSync("questions-db.js", output, "utf8");

console.log(`Regenerated questions-db.js with ${questionBank.length} questions.`);