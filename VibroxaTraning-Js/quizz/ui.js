export default class UI {
  constructor(app) {
    this.app = app;
  }

  /* Start screen */
  showStart(onStart) {
    this.app.innerHTML = `
      <div class="container start-screen">
        <h2>Welcome — Enter Your Name</h2>
        <input id="username" placeholder="Your name (optional)" />
        <button id="startBtn" class="nav">Start Quiz</button>
      </div>
    `;
    const btn = this.app.querySelector('#startBtn');
    btn.onclick = () => {
      const name = (this.app.querySelector('#username').value || 'Guest').trim();
      onStart(name);
    };
  }

  /**
   * Render question.
   * - question: { text, options:[], answer }   (answer = index)
   * - onOptionClick(chosenIndex)  -> called when user clicks (main handles score)
   * - progress: string like "3 of 10"
   * - timeLeft: number seconds
   * - onNext, onPrev: callbacks
   * - userAnswer: null | number (if already answered)
   */
  showQuestion(question, onOptionClick, progress, timeLeft, onNext, onPrev, userAnswer) {
    // default time-per-question is assumed 15 for progress width, but main controls actual timeLeft
    const percent = Math.max(0, Math.min(100, (timeLeft / 15) * 100));

    // build options markup
    const optionsHtml = question.options
      .map((opt, i) => {
        // if previously answered, we will mark classes via DOM after render
        return `<button class="option" data-index="${i}">${opt}</button>`;
      })
      .join('');

    this.app.innerHTML = `
      <div class="container question-card">
        <div>
          <div class="question-text">${question.text}</div>
          <div class="options" id="options-area">${optionsHtml}</div>
          <div class="progress-bar"><div class="progress" style="width:${percent}%"></div></div>
          <div class="meta">${progress} | Time Left: <span id="time">${timeLeft}</span>s</div>
        </div>
        <div style="margin-top:12px;" class="nav-btns">
          <button id="prevBtn" class="nav">⬅ Previous</button>
          <button id="nextBtn" class="nav">Next ➡</button>
        </div>
      </div>
    `;

    const optionBtns = Array.from(this.app.querySelectorAll('.option'));

    // if user had already answered this question, mark chosen + correct/incorrect classes if provided by main
    if (typeof userAnswer === 'number') {
      optionBtns.forEach((b) => {
        b.disabled = true;
        b.classList.add('locked');
      });
      const chosenBtn = optionBtns[userAnswer];
      if (chosenBtn) chosenBtn.classList.add('selected');
      // main.js will also add .correct/.incorrect if needed when it calls renderQuestion again
    } else {
      // attach click handlers
      optionBtns.forEach((btn) => {
        btn.onclick = () => {
          const idx = Number(btn.dataset.index);
          // disable all and visually lock
          optionBtns.forEach((b) => {
            b.disabled = true;
            b.classList.add('locked');
          });
          // mark selected
          btn.classList.add('selected');
          // callback to main (main will add correct/incorrect classes and update score)
          onOptionClick(idx);
        };
      });
    }

    // nav buttons
    this.app.querySelector('#nextBtn').onclick = onNext;
    this.app.querySelector('#prevBtn').onclick = onPrev;
  }

  /* Result screen */
  showResult(score, total, username, onReview, onRestart) {
    const percent = Math.round((score / total) * 100);
    let feedback = 'Keep Practicing!';
    if (percent >= 80) feedback = 'Excellent ';
    else if (percent >= 50) feedback = 'Nice — can  be improved';

    // set conic gradient percent via inline CSS variable
    this.app.innerHTML = `
      <div class="container result-card">
        <div class="score-circle" style="background: conic-gradient(var(--accent, #4caf50) ${percent}%, #e6f4ea ${percent}%);">${percent}%</div>
        <h3>Good job, ${username}!</h3>
        <p>Score: ${score} / ${total}</p>
        <p>${feedback}</p>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:14px">
          <button id="reviewBtn" class="nav">Review Answers</button>
          <button id="restartBtn" class="nav">Restart</button>
        </div>
      </div>
    `;
    this.app.querySelector('#reviewBtn').onclick = onReview;
    this.app.querySelector('#restartBtn').onclick = onRestart;
  }

  /* Review Mode */
  showReview(questions, userAnswers) {
    // questions: array of {text, options:[], answer}
    // userAnswers: array of chosen index | null/undefined
    const listHtml = questions
      .map((q, idx) => {
        const optionsHtml = q.options
          .map((opt, i) => {
            // choose classes
            let cls = 'review-option';
            if (i === q.answer) cls += ' correct';
            if (typeof userAnswers[idx] === 'number' && i === userAnswers[idx]) cls += ' chosen';
            if (typeof userAnswers[idx] === 'number' && userAnswers[idx] !== q.answer && i === userAnswers[idx]) cls += ' incorrect';
            return `<div class="${cls}">${opt}</div>`;
          })
          .join('');
        return `
          <div class="review-question">
            <h4>Q${idx + 1}: ${q.text}</h4>
            <div class="review-options">${optionsHtml}</div>
          </div>
        `;
      })
      .join('');

    this.app.innerHTML = `
      <div class="container review-container">
        <h3 class="review-title">Review</h3>
        ${listHtml}
        <div style="text-align:center;margin-top:12px;">
          <button id="restartBtn" class="nav">Restart Quiz</button>
        </div>
      </div>
    `;
    this.app.querySelector('#restartBtn').onclick = () => location.reload();
  }
}
