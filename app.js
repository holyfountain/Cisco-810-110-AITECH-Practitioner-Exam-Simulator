const QUESTION_BANK = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];

const EXAM_SIZE = 20;
const PASSING_SCORE = 100;
const BLUEPRINT_DOMAIN_TARGETS = [
  ["Domain 1: Generative AI Models", 4],
  ["Domain 2: Prompt Engineering", 3],
  ["Domain 3: Ethics and Security", 3],
  ["Domain 4: Data Research and Analysis", 2],
  ["Domain 5: Development and Workflow Automation", 4],
  ["Domain 6: Agentic AI", 4]
];

const elements = {
  bankCount: document.querySelector("#bankCount"),
  statusText: document.querySelector("#statusText"),
  startButton: document.querySelector("#startButton"),
  themeToggle: document.querySelector("#themeToggle"),
  introPanel: document.querySelector("#introPanel"),
  examPanel: document.querySelector("#examPanel"),
  resultsPanel: document.querySelector("#resultsPanel"),
  examForm: document.querySelector("#examForm"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  questionPosition: document.querySelector("#questionPosition"),
  submitButton: document.querySelector("#submitButton"),
  restartButton: document.querySelector("#restartButton"),
  answeredCount: document.querySelector("#answeredCount"),
  examTitle: document.querySelector("#examTitle"),
  progressSummaryText: document.querySelector("#progressSummaryText"),
  progressSummaryGrid: document.querySelector("#progressSummaryGrid"),
  resultsSummary: document.querySelector("#resultsSummary"),
  resultsReview: document.querySelector("#resultsReview")
};

const state = {
  questionBank: [],
  examQuestions: [],
  selections: new Map(),
  attemptCount: 0,
  currentQuestionIndex: 0
};

const THEME_STORAGE_KEY = "aitech-theme";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function setLoadMessage(message, isError = false) {
  elements.statusText.textContent = message;
  elements.statusText.classList.toggle("error", isError);
}

function applyTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", resolvedTheme);
  elements.themeToggle.textContent = resolvedTheme === "dark" ? "Light Mode" : "Dark Mode";
  elements.themeToggle.setAttribute("aria-pressed", String(resolvedTheme === "dark"));
}

function initializeTheme() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) || "light";
  applyTheme(savedTheme);
}

function handleThemeToggle() {
  const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
}

function loadDeduplicatedBank(questionBank) {
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

function getOfficialDomainName(question) {
  return question.officialDomain || question.domain || "Uncategorized";
}

function buildBlueprintExam(questionBank) {
  const selectedQuestions = [];
  const usedQuestionIds = new Set();

  for (const [domainName, targetCount] of BLUEPRINT_DOMAIN_TARGETS) {
    const domainQuestions = shuffle(questionBank.filter((question) => {
      return getOfficialDomainName(question) === domainName && !usedQuestionIds.has(question.id);
    }));

    const chosenQuestions = domainQuestions.slice(0, targetCount);
    chosenQuestions.forEach((question) => {
      usedQuestionIds.add(question.id);
      selectedQuestions.push(question);
    });
  }

  if (selectedQuestions.length < EXAM_SIZE) {
    const fallbackQuestions = shuffle(questionBank.filter((question) => !usedQuestionIds.has(question.id)));
    fallbackQuestions.slice(0, EXAM_SIZE - selectedQuestions.length).forEach((question) => {
      usedQuestionIds.add(question.id);
      selectedQuestions.push(question);
    });
  }

  return shuffle(selectedQuestions).slice(0, EXAM_SIZE);
}

function updateBankDetails() {
  elements.bankCount.textContent = `${state.questionBank.length} questions`;
  elements.statusText.textContent = state.questionBank.length >= EXAM_SIZE
    ? "Ready"
    : "More questions required";
  elements.startButton.disabled = state.questionBank.length < EXAM_SIZE;
}

function getSelectedAnswers(questionId) {
  return state.selections.get(questionId) || [];
}

function formatAnswerList(answerLetters, question) {
  const mapped = answerLetters
    .map((letter) => question.options.find((option) => option.letter === letter))
    .filter(Boolean)
    .map((option) => `${option.letter}. ${option.text}`);

  return mapped.length > 0 ? mapped.join(" | ") : "No answer";
}

function updateAnsweredCount() {
  const answered = state.examQuestions.filter((question) => getSelectedAnswers(question.id).length > 0).length;
  elements.answeredCount.textContent = `${answered} / ${EXAM_SIZE}`;
}

function setExamChrome(active) {
  document.body.classList.toggle("exam-session", active);
}

function updateQuestionNavigation() {
  const questionNumber = state.currentQuestionIndex + 1;
  elements.questionPosition.textContent = `Question ${questionNumber} of ${EXAM_SIZE}`;
  elements.previousButton.disabled = state.currentQuestionIndex === 0;
  elements.nextButton.disabled = state.currentQuestionIndex === EXAM_SIZE - 1;
}

function renderProgressSummary() {
  const unansweredNumbers = [];

  elements.progressSummaryGrid.innerHTML = state.examQuestions.map((question, index) => {
    const questionNumber = index + 1;
    const answered = getSelectedAnswers(question.id).length > 0;
    const active = index === state.currentQuestionIndex;

    if (!answered) {
      unansweredNumbers.push(questionNumber);
    }

    return `
      <button
        class="progress-chip ${answered ? "answered" : "unanswered"} ${active ? "active" : ""}"
        type="button"
        data-question-jump="${escapeHtml(question.id)}"
        aria-label="Jump to question ${questionNumber} (${answered ? "answered" : "unanswered"}${active ? ", current" : ""})"
      >
        ${questionNumber}
      </button>
    `;
  }).join("");

  const answeredCount = state.examQuestions.length - unansweredNumbers.length;
  const remainingCount = unansweredNumbers.length;
  const unresolvedPreview = unansweredNumbers.length > 0
    ? ` Unanswered: ${unansweredNumbers.slice(0, 8).join(", ")}${unansweredNumbers.length > 8 ? ", ..." : ""}.`
    : " All questions answered.";

  elements.progressSummaryText.textContent = `${answeredCount} answered, ${remainingCount} remaining.${unresolvedPreview}`;
}

function syncOptionSelectionStyles(questionId) {
  const inputs = elements.examForm.querySelectorAll(`input[data-question-id="${questionId}"]`);

  inputs.forEach((input) => {
    const optionLabel = input.closest(".option-label");
    if (!optionLabel) {
      return;
    }

    optionLabel.classList.toggle("selected", input.checked);
  });
}

function renderExam() {
  const question = state.examQuestions[state.currentQuestionIndex];
  if (!question) {
    elements.examForm.innerHTML = "";
    return;
  }

  const inputType = question.multiSelect ? "checkbox" : "radio";
  const selectedAnswers = getSelectedAnswers(question.id);
  const optionsMarkup = question.options.map((option) => {
    const checked = selectedAnswers.includes(option.letter) ? "checked" : "";
    const selectedClass = selectedAnswers.includes(option.letter) ? "selected" : "";
    const inputName = question.multiSelect ? `${question.id}-${option.letter}` : question.id;

    return `
      <label class="option-label ${selectedClass}">
        <input
          type="${inputType}"
          name="${escapeHtml(inputName)}"
          value="${escapeHtml(option.letter)}"
          data-question-id="${escapeHtml(question.id)}"
          ${question.multiSelect ? "data-multi-select=\"true\"" : ""}
          ${checked}
        >
        <span><strong>${escapeHtml(option.letter)}.</strong> ${escapeHtml(option.text)}</span>
      </label>
    `;
  }).join("");

  elements.examForm.innerHTML = `
    <article class="question-card" id="question-${escapeHtml(question.id)}">
      <p class="question-meta">Question ${state.currentQuestionIndex + 1} of ${EXAM_SIZE}${getOfficialDomainName(question) ? ` • ${escapeHtml(getOfficialDomainName(question))}` : ""}${question.multiSelect ? " • Select all that apply" : ""}</p>
      <h3>${escapeHtml(question.text)}</h3>
      <div class="options-list">${optionsMarkup}</div>
    </article>
  `;

  updateAnsweredCount();
  updateQuestionNavigation();
  renderProgressSummary();
}

function startExam() {
  state.attemptCount += 1;
  state.selections = new Map();
  state.examQuestions = buildBlueprintExam(state.questionBank);
  state.currentQuestionIndex = 0;

  elements.examTitle.textContent = `Simulation Exam ${state.attemptCount}`;
  elements.introPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.examPanel.classList.remove("hidden");
  setExamChrome(true);

  renderExam();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function areAnswersEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  const leftSorted = [...left].sort();
  const rightSorted = [...right].sort();
  return leftSorted.every((value, index) => value === rightSorted[index]);
}

function gradeExam() {
  return state.examQuestions.map((question) => {
    const selectedAnswers = getSelectedAnswers(question.id);
    const isCorrect = areAnswersEqual(selectedAnswers, question.correctAnswers);

    return {
      question,
      selectedAnswers,
      isCorrect
    };
  });
}

function buildDomainBreakdown(results) {
  const domainMap = new Map();

  results.forEach((result) => {
    const domainName = getOfficialDomainName(result.question);
    const current = domainMap.get(domainName) || {
      domain: domainName,
      total: 0,
      correct: 0
    };

    current.total += 1;
    if (result.isCorrect) {
      current.correct += 1;
    }

    domainMap.set(domainName, current);
  });

  return [...domainMap.values()]
    .map((entry) => ({
      ...entry,
      percentage: Math.round((entry.correct / entry.total) * 100)
    }))
    .sort((left, right) => left.domain.localeCompare(right.domain));
}

function renderResults(results) {
  const correctCount = results.filter((result) => result.isCorrect).length;
  const score = Math.round((correctCount / EXAM_SIZE) * 100);
  const passed = score === PASSING_SCORE;
  const domainBreakdown = buildDomainBreakdown(results);

  elements.examPanel.classList.add("hidden");
  elements.resultsPanel.classList.remove("hidden");

  elements.resultsSummary.innerHTML = `
    <section class="result-banner ${passed ? "pass" : "fail"}">
      <p class="eyebrow">Result</p>
      <h2>${passed ? "Passed" : "Not Passed"}</h2>
      <p class="result-note">Passing requires a perfect score. This simulator only marks a pass at 20 correct answers.</p>
      <div class="result-grid">
        <div class="result-stat">
          <span class="toolbar-label">Score</span>
          <strong>${score}%</strong>
        </div>
        <div class="result-stat">
          <span class="toolbar-label">Correct</span>
          <strong>${correctCount} / ${EXAM_SIZE}</strong>
        </div>
        <div class="result-stat">
          <span class="toolbar-label">Needed</span>
          <strong>20 / 20</strong>
        </div>
      </div>
    </section>
    <section class="domain-summary">
      <div class="domain-summary-header">
        <h3>Performance by Domain</h3>
        <p class="result-note">Scores reflect only the 20 questions included in this attempt.</p>
      </div>
      <div class="domain-grid">
        ${domainBreakdown.map((entry) => `
          <article class="domain-card">
            <p class="toolbar-label">${escapeHtml(entry.domain)}</p>
            <strong>${entry.correct} / ${entry.total}</strong>
            <p class="review-meta">${entry.percentage}% correct</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  elements.resultsReview.innerHTML = results.map((result, index) => `
    <article class="review-card ${result.isCorrect ? "correct" : "incorrect"}">
      <p class="review-meta">Question ${index + 1}${getOfficialDomainName(result.question) ? ` • ${escapeHtml(getOfficialDomainName(result.question))}` : ""}</p>
      <h3>${escapeHtml(result.question.text)}</h3>
      <p class="review-answer ${result.isCorrect ? "correct-text" : "incorrect-text"}">
        Your answer: ${escapeHtml(formatAnswerList(result.selectedAnswers, result.question))}
      </p>
      <p class="review-answer correct-text">
        Correct answer: ${escapeHtml(formatAnswerList(result.question.correctAnswers, result.question))}
      </p>
      ${result.question.rationaleCorrect ? `
        <section class="review-rationale">
          <p class="review-rationale-label">Why it is correct</p>
          <p class="review-rationale-copy">${escapeHtml(result.question.rationaleCorrect)}</p>
        </section>
      ` : ""}
      ${result.question.rationaleIncorrect ? `
        <section class="review-rationale">
          <p class="review-rationale-label">Why others are incorrect</p>
          <p class="review-rationale-copy">${escapeHtml(result.question.rationaleIncorrect)}</p>
        </section>
      ` : ""}
    </article>
  `).join("");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleSelectionChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.dataset.questionId) {
    return;
  }

  const questionId = target.dataset.questionId;
  const isMultiSelect = target.dataset.multiSelect === "true";

  if (isMultiSelect) {
    const existing = new Set(getSelectedAnswers(questionId));
    if (target.checked) {
      existing.add(target.value);
    } else {
      existing.delete(target.value);
    }
    state.selections.set(questionId, [...existing]);
  } else {
    state.selections.set(questionId, [target.value]);
  }

  syncOptionSelectionStyles(questionId);
  updateAnsweredCount();
  renderProgressSummary();
}

function handleProgressJump(event) {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement) || !target.dataset.questionJump) {
    return;
  }

  const nextQuestionIndex = state.examQuestions.findIndex((question) => question.id === target.dataset.questionJump);
  if (nextQuestionIndex === -1) {
    return;
  }

  state.currentQuestionIndex = nextQuestionIndex;
  renderExam();
  elements.examPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleQuestionNavigation(step) {
  const nextIndex = state.currentQuestionIndex + step;
  if (nextIndex < 0 || nextIndex >= state.examQuestions.length) {
    return;
  }

  state.currentQuestionIndex = nextIndex;
  renderExam();
  elements.examPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSubmit() {
  const unanswered = state.examQuestions.filter((question) => getSelectedAnswers(question.id).length === 0).length;
  if (unanswered > 0) {
    const proceed = window.confirm(`There are ${unanswered} unanswered questions. Submit anyway?`);
    if (!proceed) {
      return;
    }
  }

  renderResults(gradeExam());
}

function initializeQuestionBank() {
  setLoadMessage("Loading built-in question database.");

  try {
    if (!Array.isArray(window.QUESTION_BANK)) {
      throw new Error("Question bank script did not initialize.");
    }

    state.questionBank = loadDeduplicatedBank(QUESTION_BANK);
    updateBankDetails();
    setLoadMessage("Question database ready. New exams now draw from the bundled local bank.");
  } catch (error) {
    state.questionBank = [];
    updateBankDetails();
    setLoadMessage("Question database could not be loaded.", true);
  }
}

elements.startButton.addEventListener("click", startExam);
elements.previousButton.addEventListener("click", () => handleQuestionNavigation(-1));
elements.nextButton.addEventListener("click", () => handleQuestionNavigation(1));
elements.submitButton.addEventListener("click", handleSubmit);
elements.restartButton.addEventListener("click", startExam);
elements.themeToggle.addEventListener("click", handleThemeToggle);
elements.examForm.addEventListener("change", handleSelectionChange);
elements.progressSummaryGrid.addEventListener("click", handleProgressJump);

initializeTheme();
initializeQuestionBank();