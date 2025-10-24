export default class Question {
  constructor({ id, text, options = [], correctIndex = 0 }) {
    this.id = id;
    this.text = text;
    this.options = [...options]; // spread operator
    this.correctIndex = correctIndex;
  }

  shuffled() {
    const arr = this.options.map((opt, i) => ({ opt, i }));

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // destructuring
    }

    const options = arr.map(a => a.opt);
    const correctIndex = arr.findIndex(a => a.i === this.correctIndex);

    return { options, correctIndex };
  }
}
