import { useState } from "react";
import "./App.css"; // 👈 CSS import

// Questions Array
const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Styling Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "High Tech Modern Language",
    ],
    answer: "Hyper Text Markup Language",
  },
];

function App() {
  const [currentQ, setCurrentQ] = useState(0); // current question index
  const [score, setScore] = useState(0);       // track score
  const [answers, setAnswers] = useState([]);  // store user answers
  const [showResult, setShowResult] = useState(false); // show result page

  // Handle user answer
  const handleAnswer = (selected) => {
    const isCorrect = selected === questions[currentQ].answer;

    // Save user answer
    setAnswers([
      ...answers,
      { question: questions[currentQ].question, selected, isCorrect },
    ]);

    // Update score
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question or show result
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  // Restart Quiz
  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>

      {!showResult ? (
        <div>
          <h2>
            Q{currentQ + 1}: {questions[currentQ].question}
          </h2>
          <div>
            {questions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className="option-btn"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>

          <h3>Review:</h3>
          <ul>
            {answers.map((ans, index) => (
              <li key={index}>
                {ans.question} <br />
                Your Answer:{" "}
                <span style={{ color: ans.isCorrect ? "lightgreen" : "red" }}>
                  {ans.selected}
                </span>
              </li>
            ))}
          </ul>

          <button onClick={restartQuiz} className="restart-btn">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
