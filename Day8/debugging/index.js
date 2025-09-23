// Original questions array
const originalQuestions = [
  { q: "What is 2+2?", opt: ["3", "4", "5", "22"], ans: "4" },
  { q: "Which is a fruit?", opt: ["Carrot", "Apple", "Potato", "Spinach"], ans: "Apple" },
  { q: "JS stands for?", opt: ["JavaSource", "JavaScript", "JustScript", "None"], ans: "JavaScript" }
];

let questions = [];
let currentQ = 0;
let score = 0;
let timer = 10;
let interval;

// Fisher-Yates shuffle to randomize array
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz() {
  questions = shuffleArray(originalQuestions);
  currentQ = 0;
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("feedback").innerText = "";
  document.getElementById("feedback").className = "";
  document.getElementById("quizBox").innerHTML = `
    <p id="questionText"></p>
    <ul id="options"></ul>
    <p>Time left: <span id="timer">10</span>s</p>
    <p id="feedback"></p>
  `;
  document.getElementById("startBtn").style.display = "inline-block";
  const restartBtn = document.getElementById("restartBtn");
  if (restartBtn) restartBtn.style.display = "none";
  nextQ();
}

function nextQ() {
  if (currentQ >= questions.length) {
    endQuiz();
    return;
  }
  document.getElementById("questionText").innerHTML = questions[currentQ].q;
  let opts = document.getElementById("options");
  opts.innerHTML = "";
  for (let i = 0; i < questions[currentQ].opt.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = questions[currentQ].opt[i];
    li.onclick = () => checkAnswer(questions[currentQ].opt[i]);
    li.classList.remove("disabled");
    opts.appendChild(li);
  }
  timer = 10;
  document.getElementById("timer").innerHTML = timer;
  document.getElementById("feedback").innerText = "";
  document.getElementById("feedback").className = "";
  clearInterval(interval);
  interval = setInterval(countdown, 1000);
}

function checkAnswer(choice) {
  clearInterval(interval);
  const options = document.getElementById("options").children;
  for (let li of options) {
    li.classList.add("disabled");
  }
  if (choice === questions[currentQ].ans) {
    score++;
    document.getElementById("feedback").innerText = "Correct!";
    document.getElementById("feedback").className = "correct";
  } else {
    document.getElementById("feedback").innerText = `Incorrect! The correct answer was ${questions[currentQ].ans}.`;
    document.getElementById("feedback").className = "incorrect";
  }
  document.getElementById("score").innerText = score;
  currentQ++;
  setTimeout(nextQ, 1000);
}

function countdown() {
  timer--;
  document.getElementById("timer").innerHTML = timer;
  if (timer <= 0) {
    clearInterval(interval);
    const options = document.getElementById("options").children;
    for (let li of options) {
      li.classList.add("disabled");
    }
    document.getElementById("feedback").innerText = `Time's up! The correct answer was ${questions[currentQ].ans}.`;
    document.getElementById("feedback").className = "incorrect";
    currentQ++;
    setTimeout(nextQ, 1000);
  }
}

function endQuiz() {
  clearInterval(interval);
  document.getElementById("quizBox").innerHTML = `Game Over! Your score: ${score}`;
  if (score > 2) {
    document.getElementById("quizBox").innerHTML += "<p>You Passed!</p>";
  } else {
    document.getElementById("quizBox").innerHTML += "<p>You Failed!</p>";
  }
  if (!document.getElementById("restartBtn")) {
    const restartBtn = document.createElement("button");
    restartBtn.id = "restartBtn";
    restartBtn.innerText = "Restart Quiz";
    restartBtn.addEventListener("click", startQuiz);
    document.getElementById("quizBox").appendChild(restartBtn);
  } else {
    document.getElementById("restartBtn").style.display = "inline-block";
  }
  document.getElementById("startBtn").style.display = "none";
}