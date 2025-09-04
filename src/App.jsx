import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import questionsData from "./data/questions.json";

function App() {
  const [step, setStep] = useState("quiz");
  const [answers, setAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState("mixed"); // "easy" | "medium" | "hard" | "mixed"
  const [questions, setQuestions] = useState(() => getRandomQuestions("mixed"));

  const handleFinish = (userAnswers) => {
    setAnswers(userAnswers);
    setStep("results");
  };

  const restartQuiz = () => {
    setAnswers([]);
    setQuestions(getRandomQuestions(difficulty));
    setStep("quiz");
  };

  const handleChangeDifficulty = (e) => {
    const d = e.target.value;
    setDifficulty(d);
    setAnswers([]);
    setQuestions(getRandomQuestions(d));
    setStep("quiz");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl px-4">
      <h1 className="text-4xl font-bold text-indigo-800 mb-2 text-center">
        Quizzy
      </h1>
      <p className="text-slate-700 mb-6 text-center">
        Test your knowledge with 5 random questions 🚀
      </p>

      {/* Difficulty Picker */}
      <div className="mb-6">
        <label htmlFor="difficulty" className="mr-3 font-medium text-slate-800">
          Difficulty:
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleChangeDifficulty}
          className="rounded-lg border border-slate-300 px-3 py-2 bg-white"
          aria-label="Select difficulty"
        >
          <option value="mixed">Mixed</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="w-full">
        {step === "quiz" ? (
          <Quiz questions={questions} onFinish={handleFinish} />
        ) : (
          <Results
            questions={questions}
            answers={answers}
            onRestart={restartQuiz}
            difficulty={difficulty}
          />
        )}
      </div>
    </div>
  );
}

export default App;

/* ---------- Helpers ---------- */
function shuffleArray(arr) {
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function getRandomQuestions(level) {
  let pool =
    level === "mixed"
      ? questionsData
      : questionsData.filter((q) => q.difficulty === level);

  // If not enough in a level, fall back to mixed pool
  if (pool.length < 5) pool = questionsData;

  const picked = shuffleArray(pool).slice(0, 5);
  return picked.map((q) => ({ ...q, options: shuffleArray(q.options) }));
}
