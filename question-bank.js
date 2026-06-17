export const SOURCE_FILES = [
  "questions-source.txt"
];

function normalizeText(rawText) {
  return rawText
    .replace(/\r\n/g, "\n")
    .replace(/##\s*Comprehensive Answer Key/gi, "\n## Comprehensive Answer Key")
    .replace(/##\s*Domain/gi, "\n## Domain")
    .replace(/##\s*Question/gi, "\n## Question")
    .replace(/------------------------------/g, "\n------------------------------\n")
    .replace(/\n{3,}/g, "\n\n");
}

function compactWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

function classifyOfficialDomain(domain, questionText, optionText = "") {
  const normalizedDomain = compactWhitespace(domain || "");
  const normalizedQuestion = compactWhitespace(questionText || "").toLowerCase();
  const normalizedOptions = compactWhitespace(optionText || "").toLowerCase();
  const isOfficialDomainLabel = /^Domain\s+\d+\s*:/i.test(normalizedDomain);
  const officialDomainNames = {
    models: "Domain 1: Generative AI Models",
    prompt: "Domain 2: Prompt Engineering",
    security: "Domain 3: Ethics and Security",
    data: "Domain 4: Data Research and Analysis",
    development: "Domain 5: Development and Workflow Automation",
    agentic: "Domain 6: Agentic AI"
  };
  const legacyMappings = [
    ["Generative AI Models", officialDomainNames.models],
    ["Prompt Engineering", officialDomainNames.prompt],
    ["Ethics and Security", officialDomainNames.security],
    ["Data Research and Analysis", officialDomainNames.data],
    ["Development and Workflow Automation", officialDomainNames.development],
    ["Agentic AI", officialDomainNames.agentic],
    ["Generative AI Models & Architecture", officialDomainNames.models],
    ["AI Infrastructure & Systems Integration", officialDomainNames.models],
    ["Evaluation Metrics & Model Validation", officialDomainNames.models],
    ["AI Infrastructure & Performance Optimization", officialDomainNames.models],
    ["Prompt Engineering & Operations", officialDomainNames.prompt],
    ["AI Governance, Security, & Ethics", officialDomainNames.security],
    ["Software Development Automation", officialDomainNames.development],
    ["Advanced Software Development Automation", officialDomainNames.development],
    ["Systems Integration & Enterprise Workflows", officialDomainNames.development],
    ["Production Orchestration & Frameworks", officialDomainNames.development],
    ["Agentic Workflows & Multi-Agent Systems", officialDomainNames.agentic],
    ["Advanced Agentic Architectures", officialDomainNames.agentic]
  ];

  if (!isOfficialDomainLabel) {
    const legacyMatch = legacyMappings.find(([label]) => normalizedDomain.includes(label));
    if (legacyMatch) {
      return legacyMatch[1];
    }
  }

  if (/(data preparation|missing values|inconsistent formats|exploratory data analysis|\beda\b|normalize identifiers|standardize timestamps|evaluation rubric|validation set|test set|trend report|retrieval metadata|stale documents)/.test(normalizedQuestion)) {
    return officialDomainNames.data;
  }

  if (/(same input prompt multiple times|few-shot|few shot|chain-of-thought|output formatted strictly as valid json|prompt technique|prompt methodology|under-specified|iterative prompting|one-shot prompting|json without any markdown|system instructions to mandate json)/.test(normalizedQuestion)) {
    return officialDomainNames.prompt;
  }

  if (/(deployment strategy|data sovereignty|on-premises deployment|locally hosted|managed cloud llm api|context window|vector database|embeddings?|attention mechanism|transformer|diffusion models?|vram|required just to load the model weights|quantization|kv \(key-value\) caching|model hub|retrieval-augmented generation|semantic embeddings)/.test(normalizedQuestion)) {
    return officialDomainNames.models;
  }

  if (/(protected health information|\bphi\b|hipaa|privacy mandates|security engineer|vulnerability|bias|fairness|governance|responsible ai|audit|accountability|human-in-the-loop|\bhitl\b|prompt leaking|data poisoning|adversarial|loan approvals|employee performances|algorithmic)/.test(normalizedQuestion)) {
    return officialDomainNames.security;
  }

  if (/(ci\/cd|pull requests?|code copilot|unit tests?|architectural documentation|legacy repository|terraform|devsecops|documentation pipeline|refactor an asynchronous microservice|compiler and iterates on error logs|infrastructure configuration file|code comments|software reference documentation)/.test(normalizedQuestion)) {
    return officialDomainNames.development;
  }

  if (/(multi-agent|agentic|tool-calling|orchestration pipeline|state management|react \(reasoning and acting\)|supervisor agent|worker agents?|router within an orchestration pipeline|shared history|specialized worker agents)/.test(normalizedQuestion)) {
    return officialDomainNames.agentic;
  }

  const scores = {
    models: 0,
    prompt: 0,
    security: 0,
    data: 0,
    development: 0,
    agentic: 0
  };

  function scoreMatches(bucket, text, patterns, weight) {
    patterns.forEach((pattern) => {
      if (pattern.test(text)) {
        scores[bucket] += weight;
      }
    });
  }

  const questionPatterns = {
    models: [
      /\b(llm|large language model|diffusion|context window|token limit|rag|retrieval-augmented generation|embedding|vector database|multimodal|model hub|model selection|cloud-hosted|locally hosted|on-premises|data sovereignty|vram|gpu|quantization|inference|attention mechanism|transformer|kv caching|foundational model)\b/,
      /\b(hosting|deployment strategy|semantic similarity|retrieval stage)\b/
    ],
    prompt: [
      /\b(prompt engineering|few-shot|zero-shot|chain-of-thought|temperature|system instructions|json-mode|structured outputs|prompt injection|jailbreak|under-specified|chained prompting|iterative prompting|output format)\b/,
      /\b(prompt technique|prompt methodology|prompt pattern)\b/
    ],
    security: [
      /\b(security|governance|ethics|responsible ai|bias|fairness|privacy|compliance|misinformation|explainability|xai|accountability|human-in-the-loop|hitl|prompt leaking|data poisoning|protected health information|phi|hipaa|safeguard|vulnerability|audit|regulators?)\b/,
      /\b(data privacy|protected health information|medical id numbers|algorithmic fairness|human approval|approval step|data exfiltration|privacy mandates)\b/,
      /\b(risk|control|masking|pseudonymization)\b/
    ],
    data: [
      /\b(data research and analysis|exploratory data analysis|eda|data preparation|data quality|cleaning|missing values|standardizing|timestamps|dataset|research|trend report|evaluation rubric|test set|validation set|retrieval metadata|stale documents)\b/,
      /\b(chunking outcome|normalize identifiers|analysis begins)\b/
    ],
    development: [
      /\b(software development lifecycle|ci\/cd|pull requests?|code generation|prototyping|unit tests?|testing|documentation|refactor|code quality|workflow monitoring|infrastructure configuration|terraform|devsecops|legacy repository|dna center|compiler|debugging|architectural documentation)\b/,
      /\b(internal portals|technical software reference documentation|workflow automation)\b/
    ],
    agentic: [
      /\b(agentic ai|agentic|multi-agent|orchestration|react|supervisor agent|worker agent|tool-calling|tool execution|state management|stateful|least-privilege|router|retriever|reranker|mcp|model context protocol|tool flow|orchestration pipeline|self-correction)\b/,
      /\b(shared history|external tools?|sub-tasks?)\b/
    ]
  };

  Object.entries(questionPatterns).forEach(([bucket, patterns]) => {
    scoreMatches(bucket, normalizedQuestion, patterns, 3);
    scoreMatches(bucket, normalizedOptions, patterns, 1);
  });

  if (isOfficialDomainLabel) {
    if (/Domain\s+1:/i.test(normalizedDomain)) scores.models += 1;
    if (/Domain\s+2:/i.test(normalizedDomain)) scores.prompt += 1;
    if (/Domain\s+3:/i.test(normalizedDomain)) scores.security += 1;
    if (/Domain\s+4:/i.test(normalizedDomain)) scores.data += 1;
    if (/Domain\s+5:/i.test(normalizedDomain)) scores.development += 1;
    if (/Domain\s+6:/i.test(normalizedDomain)) scores.agentic += 1;
  }

  const bestBucket = Object.entries(scores)
    .sort((left, right) => right[1] - left[1])[0];

  if (bestBucket && bestBucket[1] > 0) {
    return officialDomainNames[bestBucket[0]];
  }

  return domain || "Uncategorized";
}

function extractAnswerLetters(answerText) {
  const markedMatches = [...answerText.matchAll(/(?:^|[^A-Z0-9])([A-D])(?=\s*[\.)])/gi)]
    .map((match) => match[1].toUpperCase());

  if (markedMatches.length > 0) {
    return [...new Set(markedMatches)];
  }

  const plainMatches = [...answerText.matchAll(/\b([A-D])\b/gi)].map((match) => match[1].toUpperCase());
  return [...new Set(plainMatches)];
}

function parseQuestionHeader(line) {
  const headingMatch = line.match(/^##\s*Question\s+(\d+)(?:\s*\(([^)]+)\))?\s*(.*)$/i)
    || line.match(/^Question\s+(\d+)(?:\s*\(([^)]+)\))?\s*(.*)$/i);

  if (headingMatch) {
    return {
      number: Number(headingMatch[1]),
      domain: headingMatch[2] ? compactWhitespace(headingMatch[2]).replace(/^Domain\s*:\s*/i, "") : "",
      remainder: compactWhitespace(headingMatch[3] || "")
    };
  }

  const numberedMatch = line.match(/^(\d{1,2})\.\s+(.*)$/);
  if (numberedMatch) {
    return {
      number: Number(numberedMatch[1]),
      domain: "",
      remainder: compactWhitespace(numberedMatch[2])
    };
  }

  return null;
}

function buildAnswerLookup(lines) {
  const answers = new Map();
  let currentNumber = null;
  let answerKeyMode = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (/^Solutions:/i.test(line)) {
      answerKeyMode = "plain";
      currentNumber = null;
      continue;
    }

    if (/Comprehensive Answer Key/i.test(line)) {
      answerKeyMode = "comprehensive";
      currentNumber = null;
      continue;
    }

    const directQuestionMatch = line.match(/^Question:\s*(\d+)/i);
    if (directQuestionMatch) {
      currentNumber = Number(directQuestionMatch[1]);
      continue;
    }

    const keyedQuestionMatch = answerKeyMode === "comprehensive"
      ? line.match(/^##\s*Question\s+(\d+)/i)
      : null;
    if (keyedQuestionMatch) {
      currentNumber = Number(keyedQuestionMatch[1]);
      continue;
    }

    const answerMatch = line.match(/^\*?\s*Answer:\s*(.+)$/i);
    if (answerMatch && currentNumber !== null) {
      const answerLetters = extractAnswerLetters(answerMatch[1]);
      if (answerLetters.length > 0) {
        answers.set(currentNumber, answerLetters);
      }
    }
  }

  return answers;
}

function finalizeQuestion(collection, currentQuestion, answerLookup, sourceName, occurrence) {
  if (!currentQuestion) {
    return;
  }

  const optionEntries = Object.entries(currentQuestion.options)
    .filter(([, text]) => text)
    .map(([letter, text]) => ({ letter, text: compactWhitespace(text) }));

  const optionText = optionEntries.map((option) => option.text).join(" ");

  if (optionEntries.length < 2) {
    return;
  }

  const correctAnswers = currentQuestion.inlineAnswers.length > 0
    ? currentQuestion.inlineAnswers
    : (answerLookup.get(currentQuestion.number) || []);

  if (correctAnswers.length === 0) {
    return;
  }

  collection.push({
    id: `${sourceName}-${occurrence}`,
    number: currentQuestion.number,
    sourceName,
    domain: currentQuestion.domain,
    officialDomain: classifyOfficialDomain(currentQuestion.domain, currentQuestion.text, optionText),
    text: compactWhitespace(currentQuestion.text),
    options: optionEntries,
    correctAnswers,
    rationaleCorrect: compactWhitespace(currentQuestion.rationaleCorrect || ""),
    rationaleIncorrect: compactWhitespace(currentQuestion.rationaleIncorrect || ""),
    multiSelect: correctAnswers.length > 1
  });
}

function parseSource(sourceName, rawText) {
  const normalized = normalizeText(rawText);
  const lines = normalized.split("\n");
  const answerLookup = buildAnswerLookup(lines);
  const questions = [];

  let currentQuestion = null;
  let currentOption = null;
  let currentRationaleTarget = null;
  let inAnswerKey = false;
  let occurrence = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (/^-{5,}$/.test(line)) {
      continue;
    }

    if (/^Solutions:/i.test(line) || /Comprehensive Answer Key/i.test(line)) {
      finalizeQuestion(questions, currentQuestion, answerLookup, sourceName, occurrence);
      currentQuestion = null;
      currentOption = null;
      inAnswerKey = true;
      continue;
    }

    if (inAnswerKey) {
      continue;
    }

    const header = parseQuestionHeader(line);
    if (header && !/^Question:\s*\d+/i.test(line)) {
      if (currentQuestion) {
        finalizeQuestion(questions, currentQuestion, answerLookup, sourceName, occurrence);
      }

      occurrence += 1;
      currentQuestion = {
        number: header.number,
        domain: header.domain,
        text: header.remainder,
        options: {},
        inlineAnswers: [],
        rationaleCorrect: "",
        rationaleIncorrect: ""
      };
      currentOption = null;
      currentRationaleTarget = null;
      continue;
    }

    if (!currentQuestion || !line) {
      continue;
    }

    const optionMatch = line.match(/^\*?\s*([A-Da-d])[\.)]\s+(.*)$/);
    if (optionMatch) {
      currentOption = optionMatch[1].toUpperCase();
      currentQuestion.options[currentOption] = compactWhitespace(optionMatch[2]);
      currentRationaleTarget = null;
      continue;
    }

    const inlineAnswerMatch = line.match(/^\*?\s*Answer:\s*(.+)$/i);
    if (inlineAnswerMatch) {
      currentQuestion.inlineAnswers = extractAnswerLetters(inlineAnswerMatch[1]);
      currentOption = null;
      currentRationaleTarget = null;
      continue;
    }

    const rationaleCorrectMatch = line.match(/^\*?\s*Why it is correct:\s*(.*)$/i);
    if (rationaleCorrectMatch) {
      currentOption = null;
      currentRationaleTarget = "rationaleCorrect";
      currentQuestion.rationaleCorrect = compactWhitespace(`${currentQuestion.rationaleCorrect} ${rationaleCorrectMatch[1] || ""}`);
      continue;
    }

    const rationaleIncorrectMatch = line.match(/^\*?\s*Why others are incorrect:\s*(.*)$/i);
    if (rationaleIncorrectMatch) {
      currentOption = null;
      currentRationaleTarget = "rationaleIncorrect";
      currentQuestion.rationaleIncorrect = compactWhitespace(`${currentQuestion.rationaleIncorrect} ${rationaleIncorrectMatch[1] || ""}`);
      continue;
    }

    if (currentOption) {
      currentQuestion.options[currentOption] = compactWhitespace(`${currentQuestion.options[currentOption]} ${line}`);
      continue;
    }

    if (currentRationaleTarget) {
      currentQuestion[currentRationaleTarget] = compactWhitespace(`${currentQuestion[currentRationaleTarget]} ${line}`);
      continue;
    }

    currentQuestion.text = compactWhitespace(`${currentQuestion.text} ${line}`);
  }

  finalizeQuestion(questions, currentQuestion, answerLookup, sourceName, occurrence);

  return questions.filter((question) => question.text && question.correctAnswers.length > 0);
}

export function buildQuestionBankFromSources(sources) {
  return sources.flatMap(({ name, text }) => parseSource(name, text));
}

export function getRequiredFileSet() {
  return new Set(SOURCE_FILES);
}