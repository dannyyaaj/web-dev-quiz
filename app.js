import { questionData } from './questions.js';

const startButton = document.querySelector(".start-button");
const nextButton = document.querySelector(".next-button");
const restartButton = document.querySelector(".restart-button");
const quizContainer = document.querySelector(".quiz-container");
const questionContainer = document.querySelector(".question-container");
const optionsContainer = document.querySelector(".options-container");
const scoreContainer = document.querySelector(".score");
const shuffledQuestions = questionData.sort(() => Math.random() - 0.5);

const store = {
  questions: shuffledQuestions,
  hasQuizStarted: false,
  questionNumber: 0,
  score: 0
};

function createInput(option, index) {
  const input = document.createElement("input");
  input.classList.add("option");
  input.name = "option";
  input.id = `option-${index}`;
  input.type = "radio";
  input.value = option.correct;
  if (option.correct) input.dataset.correct = option.correct;
  input.addEventListener("click", handleSelectOption);
  return input;
}

function createLabel(option, index) {
  const label = document.createElement("label");
  label.htmlFor = `option-${index}`;
  label.textContent = option.text;
  label.classList.add("label");
  return label;
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function toggleVisibility(elements, action) {
  elements.map(element => {
    element.classList[action]("hide");
  });
}

function setNextQuestion() {
  clearForm();
  showQuestion(store.questions[store.questionNumber]);
  toggleState([nextButton, restartButton], 'disable');
}

function showQuestion(questionData) {
  if (!questionData) return calculateScore();

  toggleVisibility([questionContainer, optionsContainer], 'remove');
  questionContainer.innerText = questionData.question;

  questionData.options.forEach((option, index) => {
    const input = createInput(option, index);
    const label = createLabel(option, index);
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('option-container');
    optionContainer.appendChild(input);
    optionContainer.appendChild(label);
    optionsContainer.appendChild(optionContainer);
  });
}

function handleSelectOption(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  toggleActiveOption(selectedButton);
  toggleState([nextButton, restartButton], 'enable');
  if (isCorrect) store.score++;
}

function toggleActiveOption(selectedOption) {
  document.querySelectorAll(".option").forEach(option => option.classList.remove("active"));
  selectedOption.classList.add("active");
}

function clearForm() {
  clearContainer(optionsContainer);
  clearContainer(questionContainer);
}

function handleShowButton() {
  if (!store.hasQuizStarted && store.questionNumber === 0) {
    toggleVisibility([startButton], 'remove');
    toggleVisibility([nextButton, restartButton], 'add');
  } else if (store.questionNumber < store.questions.length - 1) {
    toggleVisibility([nextButton, restartButton], 'remove');
    toggleVisibility([startButton], 'add');
  } else {
    toggleVisibility([restartButton], 'remove');
    toggleVisibility([nextButton, startButton], 'add');
  }
}

function calculateScore() {
  handleShowButton();
  toggleVisibility([questionContainer, optionsContainer], 'add');
  toggleVisibility([scoreContainer], 'remove');
  scoreContainer.innerText = `Your score was: ${store.score} / ${store.questions.length}`;
  toggleState([restartButton], 'enable');
}

function toggleState(elements, action) {
  elements.forEach(element => {
    element.disabled = action === 'disable';
  });
}

startButton.addEventListener('click', () => {
  store.hasQuizStarted = true;
  store.questionNumber = 0;
  toggleVisibility([scoreContainer], 'add');
  toggleVisibility([quizContainer], 'remove');

  setNextQuestion();
  handleShowButton();
});

nextButton.addEventListener('click', () => {
  if (store.questionNumber < store.questions.length - 1) {
    store.questionNumber++;
    setNextQuestion();
  } else {
    calculateScore();
    clearForm();
  }
});

restartButton.addEventListener('click', () => {
  store.questionNumber = 0;
  store.score = 0;
  store.hasQuizStarted = false;
  clearForm();
  handleShowButton();
  toggleVisibility([quizContainer], 'add');
});
