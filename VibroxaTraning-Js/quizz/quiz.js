export default class Quiz {
  constructor(questions, username) {
    this.questions = questions;
    this.username = username;
    this.score = 0;
    this.currentIndex = 0;
    this.timeLeft = 15;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  checkAnswer(chosenIndex) {
    const currentQ = this.getCurrentQuestion();
    if (chosenIndex === currentQ.answer) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.timeLeft = 15;
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.timeLeft = 15;
    }
  }

  isEnded() {
    return this.currentIndex >= this.questions.length - 1;
  }
}
