import Question from './main.js';

export default class Quiz {
  constructor({ rawQuestions = [], timePerQuestion = 15 } = {}) {
    this.timePerQuestion = timePerQuestion;
    this.questions = rawQuestions.map(
      (q, idx) =>
        new Question({
          id: q.id ?? idx,
          text: q.text,
          options: q.options,
          correctIndex: q.correctIndex,
        })
    );
    this.shuffleQuestions();

    this.currentIndex = 0;
    this.score = 0;
    this.userAnswers = new Map();

    this._timer = null;
    this._timeLeft = this.timePerQuestion;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  getCurrentQuestion() {
    const q = this.questions[this.currentIndex];
    const { options, correctIndex } = q.shuffled();
    return { id: q.id, text: q.text, options, correctIndex };
  }

  answerCurrent(selectedIndex, correctIndex) {
    const q = this.questions[this.currentIndex];
    const isCorrect = selectedIndex === correctIndex;
    this.userAnswers.set(q.id, { selectedIndex, correctIndex, isCorrect });
    if (isCorrect) this.score += 1;
    return isCorrect;
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) this.currentIndex++;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  startTimer(onTick = () => {}, onEnd = () => {}) {
    this._timeLeft = this.timePerQuestion;
    clearInterval(this._timer);
    this._timer = setInterval(() => {
      this._timeLeft--;
      onTick(this._timeLeft);
      if (this._timeLeft <= 0) {
        clearInterval(this._timer);
        onEnd();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  totalQuestions() {
    return this.questions.length;
  }

  currentNumber() {
    return this.currentIndex + 1;
  }

  percentage() {
    return Math.round((this.score / this.totalQuestions()) * 100);
  }
}
