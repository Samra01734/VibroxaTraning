import UI from './ui.js';
import question from './question.js'; // ensure question.js exports default []

const app = document.getElementById('app');
const ui = new UI(app);

let username = 'Guest';
let currentIndex = 0;
let score = 0;
let userAnswers = Array(question.length).fill(null); // ✅ fixed
let answered = Array(question.length).fill(false);   // ✅ fixed
const TIME_PER_QUESTION = 15;
let timerId = null;
let timeLeft = TIME_PER_QUESTION;

ui.showStart(startQuiz);

function startQuiz(name) {
  username = name || 'Guest';
  currentIndex = 0;
  score = 0;
  userAnswers = Array(question.length).fill(null); // ✅ fixed
  answered = Array(question.length).fill(false);   // ✅ fixed
  showQuestion();
}

function showQuestion() {
  clearInterval(timerId);
  timeLeft = TIME_PER_QUESTION;

  const q = question[currentIndex];
  const progress = `${currentIndex + 1} of ${question.length}`;
  ui.showQuestion(q, handleOptionClick, progress, timeLeft, onNext, onPrev, userAnswers[currentIndex]);

  // agar already answered hai toh visuals show karo
  if (userAnswers[currentIndex] !== null && userAnswers[currentIndex] !== undefined) {
    markAnswerVisuals(q, userAnswers[currentIndex]);
  }

  // timer start
  timerId = setInterval(() => {
    timeLeft--;
    const timeSpan = document.getElementById('time');
    const progressBar = document.querySelector('.progress');
    if (timeSpan) timeSpan.innerText = timeLeft;
    if (progressBar) progressBar.style.width = `${(timeLeft / TIME_PER_QUESTION) * 100}%`;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      if (currentIndex < question.length - 1) {
        currentIndex++;
        showQuestion();
      } else {
        finishQuiz();
      }
    }
  }, 1000);
}

function handleOptionClick(chosenIndex) {
  const q = question[currentIndex];

  // already answered toh ignore
  if (answered[currentIndex]) return;

  answered[currentIndex] = true;
  userAnswers[currentIndex] = chosenIndex;

  if (chosenIndex === q.answer) score++;

  markAnswerVisuals(q, chosenIndex);

  clearInterval(timerId);
}

function markAnswerVisuals(question, chosenIndex) {
  const optionBtns = Array.from(document.querySelectorAll('.option'));
  optionBtns.forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.add('locked');
    btn.classList.remove('correct', 'incorrect', 'selected');
  });

  const correctBtn = optionBtns[question.answer];
  if (correctBtn) {
    correctBtn.classList.add('correct');
  }

  const chosenBtn = optionBtns[chosenIndex];
  if (chosenBtn) {
    chosenBtn.classList.add('selected');
    if (chosenIndex !== question.answer) chosenBtn.classList.add('incorrect');
  }
}

function onNext() {
  clearInterval(timerId);
  if (currentIndex < question.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    finishQuiz();
  }
}

function onPrev() {
  clearInterval(timerId);
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function finishQuiz() {
  clearInterval(timerId);
  ui.showResult(
    score,
    question.length,
    username,
    () => ui.showReview(question, userAnswers),
    () => startQuiz(username)
  );
}
