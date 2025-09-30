import Quiz from "./models/quiz.js";
import UI from "./ui.js";

const appRoot = document.getElementById("app");
const ui = new UI(appRoot);

const rawQuestions = [
  { text: "What is 2+2?", options: ["3","4","5","6"], correctIndex: 1 },
  { text: "Capital of Pakistan?", options: ["Karachi","Islamabad","Lahore","Peshawar"], correctIndex: 1 },
  { text: "Which keyword defines a constant in JS?", options: ["let","var","const","define"], correctIndex: 2 },
];

let quiz;
let username = "";

function startQuiz(name) {
  username = name;
  quiz = new Quiz({ rawQuestions, timePerQuestion: 15 });
  showQuestion();
}

function showQuestion() {
  const q = quiz.getCurrentQuestion();
  quiz.startTimer(
    (timeLeft) => {
      ui.renderQuestion(q, quiz.currentNumber(), quiz.totalQuestions(), timeLeft, handleAnswer, nextQuestion, prevQuestion);
    },
    () => {
      nextQuestion();
    }
  );
}

function handleAnswer(selectedIndex) {
  quiz.answerCurrent(selectedIndex, quiz.getCurrentQuestion().correctIndex);
}

function nextQuestion() {
  quiz.stopTimer();
  if (quiz.currentIndex < quiz.totalQuestions() - 1) {
    quiz.next();
    showQuestion();
  } else {
    endQuiz();
  }
}

function prevQuestion() {
  quiz.stopTimer();
  quiz.prev();
  showQuestion();
}

function endQuiz() {
  quiz.stopTimer();
  ui.renderResult(quiz.score, quiz.percentage(), quiz.totalQuestions(), () => ui.renderStart(startQuiz), () => ui.renderReview(quiz.questions, quiz.userAnswers, () => ui.renderStart(startQuiz)));
}

ui.renderStart(startQuiz);
