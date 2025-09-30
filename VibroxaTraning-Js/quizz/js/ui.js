export default class UI {
  constructor(root) {
    this.root = root;
  }

  renderStart(onStart) {
    this.root.innerHTML = `
      <h2>Welcome to Quiz</h2>
      <input type="text" id="username" placeholder="Enter your name" />
      <button id="startBtn">Start Quiz</button>
    `;
    this.root.querySelector("#startBtn").onclick = () => {
      const name = this.root.querySelector("#username").value || "Guest";
      onStart(name);
    };
  }

  renderQuestion({ text, options }, current, total, timeLeft, onAnswer, onNext, onPrev) {
    this.root.innerHTML = `
      <h3>${text}</h3>
      <div>${options.map((opt, i) => `<button data-idx="${i}">${opt}</button>`).join("")}</div>
      <div class="progress">
        <div class="progress-bar" style="width:${(current/total)*100}%"></div>
      </div>
      <p>Question ${current} of ${total} | Time: ${timeLeft}s</p>
      <button id="prevBtn">Previous</button>
      <button id="nextBtn">Next</button>
    `;
    this.root.querySelectorAll("button[data-idx]").forEach(btn => {
      btn.onclick = () => onAnswer(parseInt(btn.dataset.idx));
    });
    this.root.querySelector("#nextBtn").onclick = onNext;
    this.root.querySelector("#prevBtn").onclick = onPrev;
  }

  renderResult(score, percentage, total, onRestart, reviewMode) {
    let msg = percentage >= 80 ? "Excellent 🎉" : percentage >= 50 ? "Good 🙂" : "Try Again 😢";
    this.root.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Score: ${score} / ${total}</p>
      <p>Percentage: ${percentage}%</p>
      <p>${msg}</p>
      <button id="restartBtn">Restart</button>
      <button id="reviewBtn">Review</button>
    `;
    this.root.querySelector("#restartBtn").onclick = onRestart;
    this.root.querySelector("#reviewBtn").onclick = reviewMode;
  }

  renderReview(questions, userAnswers, onRestart) {
    this.root.innerHTML = `
      <h2>Review Mode</h2>
      ${questions.map((q, idx) => {
        const ans = userAnswers.get(q.id);
        return `
          <div>
            <p><b>Q${idx+1}: ${q.text}</b></p>
            ${q.options.map((opt,i) => {
              let cls = "";
              if (i === ans.correctIndex) cls = "style='color:lime'";
              if (i === ans.selectedIndex && !ans.isCorrect) cls = "style='color:red'";
              return `<p ${cls}>${opt}</p>`;
            }).join("")}
          </div>
        `;
      }).join("")}
      <button id="restartBtn">Restart</button>
    `;
    this.root.querySelector("#restartBtn").onclick = onRestart;
  }
}
