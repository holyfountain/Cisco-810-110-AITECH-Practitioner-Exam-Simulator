const QUESTION_BANK = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];
const APP_VERSION = "1.3";
const APP_LAST_UPDATED = "2026-06-24-07-33";
const PRACTICE_AUTO_ADVANCE_DELAY_MS = 5000;
const PRACTICE_ADVANCE_OPTIONS = [
  { value: "auto", label: "Auto-advance" },
  { value: "manual", label: "Manual Next" }
];

const DEFAULT_EXAM_QUESTION_COUNT = 20;
const DEFAULT_PRACTICE_QUESTION_COUNT = String(DEFAULT_EXAM_QUESTION_COUNT);
const DEFAULT_PASSING_SCORE = 100;
const QUESTION_COUNT_OPTIONS = ["20", "30", "40", "60", "100", "ALL"];
const PASSING_SCORE_OPTIONS = [60, 70, 80, 90, 100];
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
  examModeButton: document.querySelector("#examModeButton"),
  practiceModeButton: document.querySelector("#practiceModeButton"),
  questionCountSelect: document.querySelector("#questionCountSelect"),
  passingScoreSelect: document.querySelector("#passingScoreSelect"),
  practiceAdvanceSelect: document.querySelector("#practiceAdvanceSelect"),
  savedSessionBanner: document.querySelector("#savedSessionBanner"),
  savedSessionText: document.querySelector("#savedSessionText"),
  resumePracticeButton: document.querySelector("#resumePracticeButton"),
  discardSavedPracticeButton: document.querySelector("#discardSavedPracticeButton"),
  aboutButton: document.querySelector("#aboutButton"),
  aboutModal: document.querySelector("#aboutModal"),
  aboutModalBackdrop: document.querySelector("#aboutModalBackdrop"),
  closeAboutButton: document.querySelector("#closeAboutButton"),
  aboutVersion: document.querySelector("#aboutVersion"),
  aboutLastUpdated: document.querySelector("#aboutLastUpdated"),
  themeToggle: document.querySelector("#themeToggle"),
  introPanel: document.querySelector("#introPanel"),
  examPanel: document.querySelector("#examPanel"),
  resultsPanel: document.querySelector("#resultsPanel"),
  examForm: document.querySelector("#examForm"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  questionPosition: document.querySelector("#questionPosition"),
  submitButton: document.querySelector("#submitButton"),
  quitPracticeButton: document.querySelector("#quitPracticeButton"),
  restartButton: document.querySelector("#restartButton"),
  retryWrongButton: document.querySelector("#retryWrongButton"),
  resultsActions: document.querySelector("#resultsActions"),
  progressScrollLeftButton: document.querySelector("#progressScrollLeftButton"),
  progressScrollRightButton: document.querySelector("#progressScrollRightButton"),
  answeredCount: document.querySelector("#answeredCount"),
  sessionRule: document.querySelector("#sessionRule"),
  examTitle: document.querySelector("#examTitle"),
  progressSummaryText: document.querySelector("#progressSummaryText"),
  progressSummaryGrid: document.querySelector("#progressSummaryGrid"),
  resultsSummary: document.querySelector("#resultsSummary"),
  resultsReview: document.querySelector("#resultsReview")
};

const state = {
  questionBank: [],
  examQuestions: [],
  optionOrderByQuestionId: new Map(),
  lastQuestionSignatureBySessionKey: new Map(),
  selections: new Map(),
  attemptCount: 0,
  currentQuestionIndex: 0,
  sessionMode: "exam",
  practiceRetryQuestionIds: null,
  practiceMissedQuestionIds: new Set(),
  autoAdvanceTimeoutId: null,
  pendingPracticeState: null,
  questionCountTouched: false,
  selectedQuestionCountOption: String(DEFAULT_EXAM_QUESTION_COUNT),
  activeQuestionCountOption: String(DEFAULT_EXAM_QUESTION_COUNT),
  passingScore: DEFAULT_PASSING_SCORE,
  practiceAutoAdvance: true
};

const THEME_STORAGE_KEY = "aitech-theme";
const PRACTICE_STATE_STORAGE_KEY = "aitech-practice-state";
const SESSION_MEMORY_STORAGE_KEY = "aitech-session-memory";

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

function createOptionOrderMap(questions, persistedOptionOrders = null) {
  const persistedMap = persistedOptionOrders instanceof Map ? persistedOptionOrders : new Map(persistedOptionOrders || []);

  return new Map(questions.map((question) => {
    const validLetters = new Set(question.options.map((option) => option.letter));
    const persistedOrder = persistedMap.get(question.id);
    const hasValidPersistedOrder = Array.isArray(persistedOrder)
      && persistedOrder.length === question.options.length
      && persistedOrder.every((letter) => validLetters.has(letter));

    return [
      question.id,
      hasValidPersistedOrder ? [...persistedOrder] : shuffle(question.options.map((option) => option.letter))
    ];
  }));
}

function getDisplayOptions(question) {
  const optionOrder = state.optionOrderByQuestionId.get(question.id);
  if (!Array.isArray(optionOrder) || optionOrder.length === 0) {
    const fallbackOrder = shuffle(question.options.map((option) => option.letter));
    state.optionOrderByQuestionId.set(question.id, fallbackOrder);
    return fallbackOrder
      .map((letter) => question.options.find((option) => option.letter === letter))
      .filter(Boolean);
  }

  return optionOrder
    .map((letter) => question.options.find((option) => option.letter === letter))
    .filter(Boolean);
}

function getDisplayOptionLabel(index) {
  return String.fromCharCode(65 + index);
}

function getDisplayLabelForOriginalLetter(question, originalLetter) {
  const displayOptions = getDisplayOptions(question);
  const optionIndex = displayOptions.findIndex((option) => option.letter === originalLetter);
  return optionIndex >= 0 ? getDisplayOptionLabel(optionIndex) : originalLetter;
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

function openAboutModal() {
  elements.aboutModal.classList.remove("hidden");
  elements.aboutModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeAboutModal() {
  elements.aboutModal.classList.add("hidden");
  elements.aboutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function handleGlobalKeydown(event) {
  if (event.key === "Escape" && !elements.aboutModal.classList.contains("hidden")) {
    closeAboutModal();
  }
}

function normalizeQuestionCountOption(value, fallback = String(DEFAULT_EXAM_QUESTION_COUNT)) {
  return QUESTION_COUNT_OPTIONS.includes(value) ? value : fallback;
}

function resolveQuestionCount(option, availableCount) {
  const normalizedOption = normalizeQuestionCountOption(option);
  if (normalizedOption === "ALL") {
    return availableCount;
  }

  const parsedCount = Number(normalizedOption);
  if (!Number.isFinite(parsedCount) || parsedCount <= 0) {
    return Math.min(DEFAULT_EXAM_QUESTION_COUNT, availableCount);
  }

  return Math.min(parsedCount, availableCount);
}

function getRequestedQuestionCountOption(mode) {
  if (state.questionCountTouched) {
    return normalizeQuestionCountOption(state.selectedQuestionCountOption);
  }

  return mode === "practice" ? DEFAULT_PRACTICE_QUESTION_COUNT : String(DEFAULT_EXAM_QUESTION_COUNT);
}

function getTargetQuestionCount(mode) {
  return resolveQuestionCount(getRequestedQuestionCountOption(mode), state.questionBank.length);
}

function getActivePassingScore() {
  return state.passingScore;
}

function clearPracticeStatePersistence() {
  window.localStorage.removeItem(PRACTICE_STATE_STORAGE_KEY);
}

function persistSessionMemory() {
  const serializedState = {
    lastQuestionSignatureBySessionKey: [...state.lastQuestionSignatureBySessionKey.entries()]
  };

  window.localStorage.setItem(SESSION_MEMORY_STORAGE_KEY, JSON.stringify(serializedState));
}

function loadPersistedSessionMemory() {
  const serializedState = window.localStorage.getItem(SESSION_MEMORY_STORAGE_KEY);
  if (!serializedState) {
    return null;
  }

  try {
    return JSON.parse(serializedState);
  } catch (error) {
    window.localStorage.removeItem(SESSION_MEMORY_STORAGE_KEY);
    return null;
  }
}

function restorePersistedSessionMemory() {
  const persistedState = loadPersistedSessionMemory();
  if (!persistedState || !Array.isArray(persistedState.lastQuestionSignatureBySessionKey)) {
    state.lastQuestionSignatureBySessionKey = new Map();
    return;
  }

  state.lastQuestionSignatureBySessionKey = new Map(
    persistedState.lastQuestionSignatureBySessionKey.filter((entry) => {
      return Array.isArray(entry)
        && entry.length === 2
        && typeof entry[0] === "string"
        && typeof entry[1] === "string";
    })
  );
}

function getPracticeAutoAdvanceLabel() {
  return state.practiceAutoAdvance ? "Auto-advance on correct" : "Press Next after feedback";
}

function getCurrentView() {
  if (!elements.resultsPanel.classList.contains("hidden")) {
    return "results";
  }

  if (!elements.examPanel.classList.contains("hidden")) {
    return "exam";
  }

  return "intro";
}

function persistPracticeState() {
  if (!isPracticeMode() || state.examQuestions.length === 0) {
    clearPracticeStatePersistence();
    return;
  }

  const serializedState = {
    sessionMode: state.sessionMode,
    attemptCount: state.attemptCount,
    currentQuestionIndex: state.currentQuestionIndex,
    examQuestionIds: state.examQuestions.map((question) => question.id),
    optionOrders: state.examQuestions.map((question) => [question.id, [...(state.optionOrderByQuestionId.get(question.id) || question.options.map((option) => option.letter))]]),
    selections: [...state.selections.entries()],
    practiceRetryQuestionIds: state.practiceRetryQuestionIds,
    practiceMissedQuestionIds: [...state.practiceMissedQuestionIds],
    questionCountOption: state.activeQuestionCountOption,
    questionCountTouched: state.questionCountTouched,
    passingScore: state.passingScore,
    practiceAutoAdvance: state.practiceAutoAdvance,
    view: getCurrentView()
  };

  window.localStorage.setItem(PRACTICE_STATE_STORAGE_KEY, JSON.stringify(serializedState));
}

function loadPersistedPracticeState() {
  const serializedState = window.localStorage.getItem(PRACTICE_STATE_STORAGE_KEY);
  if (!serializedState) {
    return null;
  }

  try {
    return JSON.parse(serializedState);
  } catch (error) {
    clearPracticeStatePersistence();
    return null;
  }
}

function hideSavedPracticeNotice() {
  elements.savedSessionBanner.classList.add("hidden");
  elements.savedSessionText.textContent = "A saved practice session is available.";
}

function showSavedPracticeNotice(persistedState) {
  const questionCount = Array.isArray(persistedState.examQuestionIds) ? persistedState.examQuestionIds.length : 0;
  const questionNumber = Math.min(
    Math.max(Number.isInteger(persistedState.currentQuestionIndex) ? persistedState.currentQuestionIndex + 1 : 1, 1),
    Math.max(questionCount, 1)
  );
  const sessionLabel = Array.isArray(persistedState.practiceRetryQuestionIds) && persistedState.practiceRetryQuestionIds.length > 0
    ? "retry queue"
    : "practice session";
  const progressLabel = persistedState.view === "results"
    ? `Summary ready for ${questionCount} questions.`
    : `Resume at question ${questionNumber} of ${questionCount}.`;

  elements.savedSessionText.textContent = `Saved ${sessionLabel} found. ${progressLabel}`;
  elements.savedSessionBanner.classList.remove("hidden");
}

function restorePersistedPracticeState(persistedState = loadPersistedPracticeState()) {
  if (!persistedState || persistedState.sessionMode !== "practice") {
    return false;
  }

  const questionMap = new Map(state.questionBank.map((question) => [question.id, question]));
  const restoredQuestions = Array.isArray(persistedState.examQuestionIds)
    ? persistedState.examQuestionIds.map((id) => questionMap.get(id)).filter(Boolean)
    : [];

  if (restoredQuestions.length === 0) {
    clearPracticeStatePersistence();
    return false;
  }

  state.sessionMode = "practice";
  state.attemptCount = Number.isInteger(persistedState.attemptCount) ? persistedState.attemptCount : state.attemptCount;
  state.examQuestions = restoredQuestions;
  state.optionOrderByQuestionId = createOptionOrderMap(restoredQuestions, persistedState.optionOrders);
  state.currentQuestionIndex = Math.min(
    Math.max(Number.isInteger(persistedState.currentQuestionIndex) ? persistedState.currentQuestionIndex : 0, 0),
    restoredQuestions.length - 1
  );
  state.practiceRetryQuestionIds = Array.isArray(persistedState.practiceRetryQuestionIds)
    ? persistedState.practiceRetryQuestionIds.filter((id) => questionMap.has(id))
    : null;
  state.practiceMissedQuestionIds = new Set(
    Array.isArray(persistedState.practiceMissedQuestionIds)
      ? persistedState.practiceMissedQuestionIds.filter((id) => questionMap.has(id))
      : []
  );
  state.selections = new Map(
    Array.isArray(persistedState.selections)
      ? persistedState.selections
        .filter((entry) => Array.isArray(entry) && typeof entry[0] === "string" && questionMap.has(entry[0]) && Array.isArray(entry[1]))
        .map(([questionId, answers]) => [questionId, answers])
      : []
  );
  state.questionCountTouched = Boolean(persistedState.questionCountTouched);
  state.selectedQuestionCountOption = normalizeQuestionCountOption(
    persistedState.questionCountOption,
    String(DEFAULT_EXAM_QUESTION_COUNT)
  );
  state.activeQuestionCountOption = normalizeQuestionCountOption(
    persistedState.questionCountOption,
    DEFAULT_PRACTICE_QUESTION_COUNT
  );
  state.passingScore = PASSING_SCORE_OPTIONS.includes(Number(persistedState.passingScore))
    ? Number(persistedState.passingScore)
    : DEFAULT_PASSING_SCORE;
  state.practiceAutoAdvance = persistedState.practiceAutoAdvance !== false;

  syncHomeSettingsUi();
  setExamChrome(true);

  if (persistedState.view === "results") {
    elements.introPanel.classList.add("hidden");
    syncSessionModeUi();
    renderResults(gradeExam());
    return true;
  }

  elements.introPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.examPanel.classList.remove("hidden");
  syncSessionModeUi();
  renderExam();
  return true;
}

function queueSavedPracticeNotice() {
  const persistedState = loadPersistedPracticeState();
  if (!persistedState || persistedState.sessionMode !== "practice") {
    state.pendingPracticeState = null;
    hideSavedPracticeNotice();
    return false;
  }

  const questionMap = new Map(state.questionBank.map((question) => [question.id, question]));
  const restoredQuestions = Array.isArray(persistedState.examQuestionIds)
    ? persistedState.examQuestionIds.filter((id) => questionMap.has(id))
    : [];

  if (restoredQuestions.length === 0) {
    state.pendingPracticeState = null;
    clearPracticeStatePersistence();
    hideSavedPracticeNotice();
    return false;
  }

  state.pendingPracticeState = persistedState;
  showSavedPracticeNotice(persistedState);
  return true;
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

function getScaledBlueprintTargets(targetQuestionCount) {
  const totalWeight = BLUEPRINT_DOMAIN_TARGETS.reduce((sum, [, count]) => sum + count, 0);
  const scaledTargets = BLUEPRINT_DOMAIN_TARGETS.map(([domainName, baseCount]) => {
    const rawTarget = (baseCount / totalWeight) * targetQuestionCount;
    return {
      domainName,
      floorTarget: Math.floor(rawTarget),
      remainder: rawTarget - Math.floor(rawTarget)
    };
  });

  let allocatedQuestions = scaledTargets.reduce((sum, entry) => sum + entry.floorTarget, 0);
  const sortedByRemainder = [...scaledTargets].sort((left, right) => right.remainder - left.remainder);

  let index = 0;
  while (allocatedQuestions < targetQuestionCount && sortedByRemainder.length > 0) {
    const entry = sortedByRemainder[index % sortedByRemainder.length];
    entry.floorTarget += 1;
    allocatedQuestions += 1;
    index += 1;
  }

  return scaledTargets.map((entry) => [entry.domainName, entry.floorTarget]);
}

function buildBlueprintExam(questionBank, requestedQuestionCount) {
  const targetQuestionCount = Math.min(requestedQuestionCount, questionBank.length);
  if (targetQuestionCount >= questionBank.length) {
    return shuffle(questionBank);
  }

  const selectedQuestions = [];
  const usedQuestionIds = new Set();
  const scaledTargets = getScaledBlueprintTargets(targetQuestionCount);

  for (const [domainName, targetCount] of scaledTargets) {
    if (targetCount === 0) {
      continue;
    }

    const domainQuestions = shuffle(questionBank.filter((question) => {
      return getOfficialDomainName(question) === domainName && !usedQuestionIds.has(question.id);
    }));

    domainQuestions.slice(0, targetCount).forEach((question) => {
      usedQuestionIds.add(question.id);
      selectedQuestions.push(question);
    });
  }

  if (selectedQuestions.length < targetQuestionCount) {
    const fallbackQuestions = shuffle(questionBank.filter((question) => !usedQuestionIds.has(question.id)));
    fallbackQuestions.slice(0, targetQuestionCount - selectedQuestions.length).forEach((question) => {
      usedQuestionIds.add(question.id);
      selectedQuestions.push(question);
    });
  }

  return shuffle(selectedQuestions).slice(0, targetQuestionCount);
}

function syncHomeSettingsUi() {
  elements.questionCountSelect.value = normalizeQuestionCountOption(state.selectedQuestionCountOption);
  elements.passingScoreSelect.value = String(state.passingScore);
  elements.practiceAdvanceSelect.value = state.practiceAutoAdvance ? "auto" : "manual";
}

function updateBankDetails() {
  elements.bankCount.textContent = `${state.questionBank.length} questions`;

  const examQuestionCount = getTargetQuestionCount("exam");
  const practiceQuestionCount = getTargetQuestionCount("practice");
  const examReady = state.questionBank.length >= examQuestionCount && examQuestionCount > 0;
  const practiceReady = state.questionBank.length >= practiceQuestionCount && practiceQuestionCount > 0;

  elements.examModeButton.disabled = !examReady;
  elements.practiceModeButton.disabled = !practiceReady;

  if (examReady && practiceReady) {
    setLoadMessage("Question database ready.");
    return;
  }

  if (!examReady && practiceReady) {
    setLoadMessage("Selected exam question count exceeds the available question bank.", true);
    return;
  }

  setLoadMessage("Question database could not be prepared for the selected settings.", true);
}

function isPracticeMode() {
  return state.sessionMode === "practice";
}

function clearAutoAdvanceTimer() {
  if (state.autoAdvanceTimeoutId !== null) {
    window.clearTimeout(state.autoAdvanceTimeoutId);
    state.autoAdvanceTimeoutId = null;
  }
}

function getSessionSize() {
  return state.examQuestions.length;
}

function getPracticeQuestions() {
  if (Array.isArray(state.practiceRetryQuestionIds) && state.practiceRetryQuestionIds.length > 0) {
    const retryIds = new Set(state.practiceRetryQuestionIds);
    return state.questionBank.filter((question) => retryIds.has(question.id));
  }

  const targetQuestionCount = resolveQuestionCount(state.activeQuestionCountOption, state.questionBank.length);
  const shuffledQuestions = shuffle(state.questionBank);
  return targetQuestionCount >= shuffledQuestions.length
    ? shuffledQuestions
    : shuffledQuestions.slice(0, targetQuestionCount);
}

function getQuestionSequenceSignature(questions) {
  return questions.map((question) => question.id).join("|");
}

function getSessionQuestionSignatureKey(mode) {
  const runType = mode === "practice" && Array.isArray(state.practiceRetryQuestionIds) && state.practiceRetryQuestionIds.length > 0
    ? "retry"
    : "fresh";
  return `${mode}:${state.activeQuestionCountOption}:${runType}`;
}

function buildSessionQuestions(mode) {
  const sessionKey = getSessionQuestionSignatureKey(mode);
  const previousSignature = state.lastQuestionSignatureBySessionKey.get(sessionKey);
  const retryPractice = mode === "practice" && Array.isArray(state.practiceRetryQuestionIds) && state.practiceRetryQuestionIds.length > 0;

  let questions = [];
  let signature = "";
  let attempts = 0;

  do {
    if (mode === "practice") {
      questions = getPracticeQuestions();
    } else {
      const targetQuestionCount = resolveQuestionCount(state.activeQuestionCountOption, state.questionBank.length);
      questions = buildBlueprintExam(state.questionBank, targetQuestionCount);
    }

    signature = getQuestionSequenceSignature(questions);
    attempts += 1;
  } while (!retryPractice && previousSignature && signature === previousSignature && attempts < 25);

  if (signature) {
    state.lastQuestionSignatureBySessionKey.set(sessionKey, signature);
    persistSessionMemory();
  }

  return questions;
}

function getHasWrongSelection(question, selectedAnswers) {
  if (selectedAnswers.length === 0) {
    return false;
  }

  const hasInvalidOption = selectedAnswers.some((answer) => !question.correctAnswers.includes(answer));
  const hasCompleteButWrongSelection = selectedAnswers.length >= question.correctAnswers.length
    && !areAnswersEqual(selectedAnswers, question.correctAnswers);

  return hasInvalidOption || hasCompleteButWrongSelection;
}

function startSession(mode) {
  clearAutoAdvanceTimer();
  state.sessionMode = mode;
  state.attemptCount += 1;
  state.selections = new Map();
  state.practiceMissedQuestionIds = new Set();
  state.activeQuestionCountOption = getRequestedQuestionCountOption(mode);
  state.currentQuestionIndex = 0;

  if (mode !== "practice") {
    state.practiceRetryQuestionIds = null;
  }

  state.examQuestions = buildSessionQuestions(mode);
  state.optionOrderByQuestionId = createOptionOrderMap(state.examQuestions);

  syncSessionModeUi();
  updateSessionTitle();
  elements.introPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.examPanel.classList.remove("hidden");
  setExamChrome(true);

  renderExam();
  persistPracticeState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startRetryWrongPractice() {
  updateSessionTitle();
  if (!Array.isArray(state.practiceRetryQuestionIds) || state.practiceRetryQuestionIds.length === 0) {
    return;
  }

  startSession("practice");
}

function startFreshPractice() {
  state.practiceRetryQuestionIds = null;
  startSession("practice");
}

function exitPracticeMode() {
  returnToHome();
}

function returnToHome() {
  clearAutoAdvanceTimer();
  const shouldClearPracticeSave = isPracticeMode() || getCurrentView() === "results";
  state.sessionMode = "exam";
  state.practiceRetryQuestionIds = null;
  state.practiceMissedQuestionIds = new Set();
  state.selections = new Map();
  state.examQuestions = [];
  state.optionOrderByQuestionId = new Map();
  state.currentQuestionIndex = 0;
  state.activeQuestionCountOption = getRequestedQuestionCountOption("exam");

  elements.examPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.introPanel.classList.remove("hidden");
  elements.examForm.innerHTML = "";
  elements.resultsSummary.innerHTML = "";
  elements.resultsReview.innerHTML = "";
  elements.resultsActions.classList.add("hidden");
  setExamChrome(false);
  if (shouldClearPracticeSave) {
    clearPracticeStatePersistence();
  }
  state.pendingPracticeState = null;
  hideSavedPracticeNotice();
  syncSessionModeUi();
  syncHomeSettingsUi();
  updateBankDetails();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateSessionTitle() {
  elements.examTitle.textContent = isPracticeMode()
    ? `${Array.isArray(state.practiceRetryQuestionIds) && state.practiceRetryQuestionIds.length > 0 ? "Retry Missed Questions" : "Practice Mode"} ${state.attemptCount}`
    : `Simulation Exam ${state.attemptCount}`;
}

function syncSessionModeUi() {
  const practiceMode = isPracticeMode();
  elements.submitButton.textContent = practiceMode ? "Finish Practice" : "Submit Exam";
  elements.sessionRule.textContent = practiceMode
    ? getPracticeAutoAdvanceLabel()
    : `${getActivePassingScore()}% to pass`;
  elements.quitPracticeButton.classList.toggle("hidden", !practiceMode || elements.examPanel.classList.contains("hidden"));
  elements.retryWrongButton.classList.add("hidden");
  elements.restartButton.textContent = "Home";
}

function getSelectedAnswers(questionId) {
  return state.selections.get(questionId) || [];
}

function formatAnswerList(answerLetters, question) {
  const mapped = answerLetters
    .map((letter) => question.options.find((option) => option.letter === letter))
    .filter(Boolean)
    .map((option) => `${getDisplayLabelForOriginalLetter(question, option.letter)}. ${option.text}`);

  return mapped.length > 0 ? mapped.join(" | ") : "No answer";
}

function formatRationaleText(rationale, question, answerLetters = question.correctAnswers) {
  if (typeof rationale !== "string" || rationale.length === 0) {
    return "";
  }

  const originalAnswerLead = answerLetters
    .map((letter) => question.options.find((option) => option.letter === letter))
    .filter(Boolean)
    .map((option) => `${option.letter}. ${option.text.replace(/[.!?]+$/, "")}`)
    .join(" and ");

  if (!originalAnswerLead || !rationale.startsWith(originalAnswerLead)) {
    return rationale;
  }

  const displayAnswerLead = answerLetters
    .map((letter) => question.options.find((option) => option.letter === letter))
    .filter(Boolean)
    .map((option) => `${getDisplayLabelForOriginalLetter(question, option.letter)}. ${option.text.replace(/[.!?]+$/, "")}`)
    .join(" and ");

  return `${displayAnswerLead}${rationale.slice(originalAnswerLead.length)}`;
}

function getQuestionResult(question) {
  const selectedAnswers = getSelectedAnswers(question.id);
  const hasAnswer = selectedAnswers.length > 0;

  return {
    question,
    selectedAnswers,
    hasAnswer,
    isCorrect: hasAnswer && areAnswersEqual(selectedAnswers, question.correctAnswers)
  };
}

function updateAnsweredCount() {
  const answered = state.examQuestions.filter((question) => getSelectedAnswers(question.id).length > 0).length;
  elements.answeredCount.textContent = `${answered} / ${getSessionSize()}`;
}

function setExamChrome(active) {
  document.body.classList.toggle("exam-session", active);
}

function updateQuestionNavigation() {
  const questionNumber = state.currentQuestionIndex + 1;
  elements.questionPosition.textContent = `Question ${questionNumber} of ${getSessionSize()}`;
  elements.previousButton.disabled = state.currentQuestionIndex === 0;
  elements.nextButton.disabled = state.currentQuestionIndex === getSessionSize() - 1;
}

function renderProgressSummary() {
  const unansweredNumbers = [];
  let correctCount = 0;
  let incorrectCount = 0;
  const practiceMode = isPracticeMode();

  elements.progressSummaryGrid.innerHTML = state.examQuestions.map((question, index) => {
    const questionNumber = index + 1;
    const result = getQuestionResult(question);
    const answered = result.hasAnswer;
    const active = index === state.currentQuestionIndex;
    let statusClass = answered ? "answered" : "unanswered";
    let statusLabel = answered ? "answered" : "unanswered";

    if (practiceMode && answered) {
      if (result.isCorrect) {
        statusClass = "correct";
        statusLabel = "correct";
        correctCount += 1;
      } else {
        statusClass = "incorrect";
        statusLabel = "incorrect";
        incorrectCount += 1;
      }
    }

    if (!answered) {
      unansweredNumbers.push(questionNumber);
    }

    return `
      <button
        class="progress-chip ${statusClass} ${active ? "active" : ""}"
        type="button"
        data-question-jump="${escapeHtml(question.id)}"
        aria-label="Jump to question ${questionNumber} (${statusLabel}${active ? ", current" : ""})"
      >
        ${questionNumber}
      </button>
    `;
  }).join("");

  const answeredCount = state.examQuestions.length - unansweredNumbers.length;
  const remainingCount = unansweredNumbers.length;

  if (practiceMode) {
    const unresolvedPreview = unansweredNumbers.length > 0
      ? ` Remaining: ${unansweredNumbers.slice(0, 8).join(", ")}${unansweredNumbers.length > 8 ? ", ..." : ""}.`
      : " All questions checked.";

    elements.progressSummaryText.textContent = `${correctCount} correct, ${incorrectCount} wrong, ${remainingCount} remaining.${unresolvedPreview}`;
    return;
  }

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

  const practiceMode = isPracticeMode();
  const inputType = question.multiSelect ? "checkbox" : "radio";
  const selectedAnswers = getSelectedAnswers(question.id);
  const practiceResult = practiceMode ? getQuestionResult(question) : null;
  const optionsMarkup = getDisplayOptions(question).map((option, index) => {
    const checked = selectedAnswers.includes(option.letter) ? "checked" : "";
    const optionClasses = [];
    const displayLabel = getDisplayOptionLabel(index);

    if (selectedAnswers.includes(option.letter)) {
      optionClasses.push("selected");
    }

    if (practiceResult?.hasAnswer) {
      if (question.correctAnswers.includes(option.letter)) {
        optionClasses.push("correct-answer");
      } else if (selectedAnswers.includes(option.letter)) {
        optionClasses.push("incorrect-answer");
      }
    }

    const inputName = question.multiSelect ? `${question.id}-${option.letter}` : question.id;

    return `
      <label class="option-label ${optionClasses.join(" ")}">
        <input
          type="${inputType}"
          name="${escapeHtml(inputName)}"
          value="${escapeHtml(option.letter)}"
          data-question-id="${escapeHtml(question.id)}"
          ${question.multiSelect ? "data-multi-select=\"true\"" : ""}
          ${checked}
        >
        <span><strong>${escapeHtml(displayLabel)}.</strong> ${escapeHtml(option.text)}</span>
      </label>
    `;
  }).join("");

  const practiceFeedbackMarkup = practiceMode && practiceResult?.hasAnswer
    ? `
      <section class="practice-feedback ${practiceResult.isCorrect ? "correct" : "incorrect"}" aria-live="polite">
        <p class="practice-feedback-title">${practiceResult.isCorrect ? "Correct" : "Wrong"}</p>
        <p class="practice-feedback-copy">
          Correct answer: ${escapeHtml(formatAnswerList(question.correctAnswers, question))}
        </p>
        ${question.rationaleCorrect ? `
          <p class="practice-feedback-copy">${escapeHtml(formatRationaleText(question.rationaleCorrect, question))}</p>
        ` : ""}
      </section>
    `
    : "";

  elements.examForm.innerHTML = `
    <article class="question-card ${practiceResult?.hasAnswer ? (practiceResult.isCorrect ? "practice-correct" : "practice-incorrect") : ""}" id="question-${escapeHtml(question.id)}">
      <p class="question-meta">Question ${state.currentQuestionIndex + 1} of ${getSessionSize()}${getOfficialDomainName(question) ? ` • ${escapeHtml(getOfficialDomainName(question))}` : ""}${question.multiSelect ? " • Select all that apply" : ""}</p>
      <h3>${escapeHtml(question.text)}</h3>
      <div class="options-list">${optionsMarkup}</div>
      ${practiceFeedbackMarkup}
    </article>
  `;

  updateAnsweredCount();
  updateQuestionNavigation();
  renderProgressSummary();
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
  return state.examQuestions.map((question) => getQuestionResult(question));
}

function getPracticeRetryQuestionIds(results) {
  return results
    .filter((result) => !result.isCorrect)
    .map((result) => result.question.id);
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
  const sessionSize = getSessionSize();
  const score = sessionSize > 0 ? Math.round((correctCount / sessionSize) * 100) : 0;
  const passed = score >= getActivePassingScore();
  const domainBreakdown = buildDomainBreakdown(results);
  const practiceMode = isPracticeMode();
  const practiceRetryQuestionIds = practiceMode ? getPracticeRetryQuestionIds(results) : [];
  const retryWrongCount = practiceRetryQuestionIds.length;

  elements.examPanel.classList.add("hidden");
  elements.resultsPanel.classList.remove("hidden");
  elements.quitPracticeButton.classList.add("hidden");

  elements.resultsSummary.innerHTML = `
    <section class="result-banner ${passed ? "pass" : "fail"}">
      <div class="result-banner-header">
        <div class="result-banner-copy">
          <p class="eyebrow">${practiceMode ? "Practice Summary" : "Result"}</p>
          <h2>${practiceMode ? "Session Complete" : (passed ? "Passed" : "Not Passed")}</h2>
          <p class="result-note">${practiceMode ? `Practice mode shows live feedback while you work through the session. Passing threshold for this run was ${getActivePassingScore()}%.` : `Passing score for this session was ${getActivePassingScore()}%.`}</p>
        </div>
        <div class="result-home-anchor" id="resultHomeAnchor"></div>
      </div>
      <div class="result-grid">
        <div class="result-stat">
          <span class="toolbar-label">Score</span>
          <strong>${score}%</strong>
        </div>
        <div class="result-stat">
          <span class="toolbar-label">Correct</span>
          <strong>${correctCount} / ${sessionSize}</strong>
        </div>
        <div class="result-stat">
          <span class="toolbar-label">${practiceMode ? "Retry Queue" : "Passing Score"}</span>
          <strong>${practiceMode ? `${retryWrongCount} questions` : `${getActivePassingScore()}%`}</strong>
        </div>
      </div>
      <div class="result-actions-anchor" id="resultsActionsAnchor"></div>
    </section>
    <section class="domain-summary">
      <div class="domain-summary-header">
        <h3>Performance by Domain</h3>
        <p class="result-note">Scores reflect only the ${sessionSize} questions included in this attempt.</p>
      </div>
      <div class="domain-grid">
        ${domainBreakdown.map((entry) => `
          <article class="domain-card">
            <div class="domain-card-copy">
              <p class="toolbar-label">Domain:</p>
              <p class="domain-card-title">${escapeHtml(entry.domain)}</p>
            </div>
            <div class="domain-card-score">
              <strong>${entry.correct} / ${entry.total}</strong>
              <p class="review-meta">${entry.percentage}% correct</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  const homeAnchor = elements.resultsSummary.querySelector("#resultHomeAnchor");
  if (homeAnchor) {
    homeAnchor.appendChild(elements.restartButton);
  }

  const actionsAnchor = elements.resultsSummary.querySelector("#resultsActionsAnchor");
  if (actionsAnchor) {
    actionsAnchor.appendChild(elements.retryWrongButton);
  }

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
          <p class="review-rationale-copy">${escapeHtml(formatRationaleText(result.question.rationaleCorrect, result.question))}</p>
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

  if (practiceMode) {
    state.practiceRetryQuestionIds = practiceRetryQuestionIds;
    elements.retryWrongButton.textContent = "Retry Missed Questions";
    elements.retryWrongButton.classList.toggle("hidden", state.practiceRetryQuestionIds.length === 0);
  } else {
    state.practiceRetryQuestionIds = null;
    elements.retryWrongButton.textContent = "Retry Wrong Answers";
    elements.retryWrongButton.classList.add("hidden");
  }
  persistPracticeState();

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

  if (isPracticeMode()) {
    clearAutoAdvanceTimer();
    const currentQuestion = state.examQuestions[state.currentQuestionIndex];
    const selectedAnswers = getSelectedAnswers(questionId);

    if (currentQuestion) {
      if (getHasWrongSelection(currentQuestion, selectedAnswers)) {
        state.practiceMissedQuestionIds.add(questionId);
      } else {
        state.practiceMissedQuestionIds.delete(questionId);
      }
    }

    renderExam();
    persistPracticeState();

    if (state.practiceAutoAdvance && currentQuestion && areAnswersEqual(selectedAnswers, currentQuestion.correctAnswers)) {
      clearAutoAdvanceTimer();
      state.autoAdvanceTimeoutId = window.setTimeout(() => {
        state.autoAdvanceTimeoutId = null;

        if (state.currentQuestionIndex >= state.examQuestions.length - 1) {
          renderResults(gradeExam());
          return;
        }

        state.currentQuestionIndex += 1;
        renderExam();
        persistPracticeState();
        elements.examPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, PRACTICE_AUTO_ADVANCE_DELAY_MS);
    }

    return;
  }

  syncOptionSelectionStyles(questionId);
  updateAnsweredCount();
  renderProgressSummary();
}

function handleQuestionCountChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) {
    return;
  }

  state.questionCountTouched = true;
  state.selectedQuestionCountOption = normalizeQuestionCountOption(target.value);
  updateBankDetails();
}

function handlePassingScoreChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) {
    return;
  }

  const nextPassingScore = Number(target.value);
  state.passingScore = PASSING_SCORE_OPTIONS.includes(nextPassingScore) ? nextPassingScore : DEFAULT_PASSING_SCORE;
}

function handlePracticeAdvanceChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) {
    return;
  }

  state.practiceAutoAdvance = target.value !== "manual";
  if (isPracticeMode()) {
    clearAutoAdvanceTimer();
    syncSessionModeUi();
    persistPracticeState();
  }
}

function handleResumeSavedPractice() {
  if (!restorePersistedPracticeState(state.pendingPracticeState)) {
    state.pendingPracticeState = null;
    hideSavedPracticeNotice();
    updateBankDetails();
    return;
  }

  hideSavedPracticeNotice();
  state.pendingPracticeState = null;
  setLoadMessage("Resumed saved practice session.");
}

function handleDiscardSavedPractice() {
  clearPracticeStatePersistence();
  state.pendingPracticeState = null;
  hideSavedPracticeNotice();
  setLoadMessage("Saved practice session discarded.");
  updateBankDetails();
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

  clearAutoAdvanceTimer();
  state.currentQuestionIndex = nextQuestionIndex;
  renderExam();
  persistPracticeState();
  elements.examPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollProgressCarousel(direction) {
  const container = elements.progressSummaryGrid;
  if (!container) {
    return;
  }

  const scrollAmount = Math.max(container.clientWidth * 0.7, 180) * direction;
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function handleQuestionNavigation(step) {
  const nextIndex = state.currentQuestionIndex + step;
  if (nextIndex < 0 || nextIndex >= state.examQuestions.length) {
    return;
  }

  clearAutoAdvanceTimer();
  state.currentQuestionIndex = nextIndex;
  renderExam();
  persistPracticeState();
  elements.examPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSubmit() {
  clearAutoAdvanceTimer();
  const unanswered = state.examQuestions.filter((question) => getSelectedAnswers(question.id).length === 0).length;
  if (unanswered > 0) {
    const proceed = window.confirm(`There are ${unanswered} unanswered questions. Submit anyway?`);
    if (!proceed) {
      return;
    }
  }

  renderResults(gradeExam());
}

function handleRestart() {
  returnToHome();
}

function initializeSettingsControls() {
  elements.questionCountSelect.innerHTML = QUESTION_COUNT_OPTIONS.map((option) => {
    return `<option value="${option}">${option}</option>`;
  }).join("");

  elements.passingScoreSelect.innerHTML = PASSING_SCORE_OPTIONS.map((option) => {
    return `<option value="${option}">${option}%</option>`;
  }).join("");

  elements.practiceAdvanceSelect.innerHTML = PRACTICE_ADVANCE_OPTIONS.map((option) => {
    return `<option value="${option.value}">${option.label}</option>`;
  }).join("");

  syncHomeSettingsUi();
}

function initializeAboutContent() {
  elements.aboutVersion.textContent = APP_VERSION;
  elements.aboutLastUpdated.textContent = APP_LAST_UPDATED;
}

function initializeQuestionBank() {
  setLoadMessage("Loading built-in question database.");
  restorePersistedSessionMemory();

  try {
    if (!Array.isArray(window.QUESTION_BANK)) {
      throw new Error("Question bank script did not initialize.");
    }

    state.questionBank = loadDeduplicatedBank(QUESTION_BANK);
    updateBankDetails();
    if (queueSavedPracticeNotice()) {
      setLoadMessage("Saved practice session available.");
      return;
    }
    setLoadMessage("Question database ready.");
  } catch (error) {
    state.questionBank = [];
    updateBankDetails();
    setLoadMessage("Question database could not be loaded.", true);
  }
}

elements.examModeButton.addEventListener("click", () => startSession("exam"));
elements.practiceModeButton.addEventListener("click", () => startSession("practice"));
elements.questionCountSelect.addEventListener("change", handleQuestionCountChange);
elements.passingScoreSelect.addEventListener("change", handlePassingScoreChange);
elements.practiceAdvanceSelect.addEventListener("change", handlePracticeAdvanceChange);
elements.previousButton.addEventListener("click", () => handleQuestionNavigation(-1));
elements.nextButton.addEventListener("click", () => handleQuestionNavigation(1));
elements.submitButton.addEventListener("click", handleSubmit);
elements.resumePracticeButton.addEventListener("click", handleResumeSavedPractice);
elements.discardSavedPracticeButton.addEventListener("click", handleDiscardSavedPractice);
elements.aboutButton.addEventListener("click", openAboutModal);
elements.closeAboutButton.addEventListener("click", closeAboutModal);
elements.aboutModalBackdrop.addEventListener("click", closeAboutModal);
elements.quitPracticeButton.addEventListener("click", exitPracticeMode);
elements.restartButton.addEventListener("click", handleRestart);
elements.retryWrongButton.addEventListener("click", startRetryWrongPractice);
elements.progressScrollLeftButton.addEventListener("click", () => scrollProgressCarousel(-1));
elements.progressScrollRightButton.addEventListener("click", () => scrollProgressCarousel(1));
elements.themeToggle.addEventListener("click", handleThemeToggle);
elements.examForm.addEventListener("change", handleSelectionChange);
elements.progressSummaryGrid.addEventListener("click", handleProgressJump);
document.addEventListener("keydown", handleGlobalKeydown);

initializeTheme();
initializeAboutContent();
initializeSettingsControls();
syncSessionModeUi();
initializeQuestionBank();
