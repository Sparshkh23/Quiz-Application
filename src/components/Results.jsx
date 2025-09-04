import React, { useEffect, useState } from "react";

function Results({ questions, answers, onRestart, difficulty }) {
  const score = answers.reduce(
    (acc, ans, idx) => acc + (ans === questions[idx].answer ? 1 : 0),
    0
  );

  const [bestScore, setBestScore] = useState(null);
  const [isNewHigh, setIsNewHigh] = useState(false);

  useEffect(() => {
    const key = `highscore_${difficulty}`;
    const stored = localStorage.getItem(key);

    if (stored) {
      const prevBest = parseInt(stored, 10);
      setBestScore(prevBest);

      if (score > prevBest) {
        localStorage.setItem(key, score);
        setBestScore(score);
        setIsNewHigh(true);
      }
    } else {
      // first time playing this difficulty
      localStorage.setItem(key, score);
      setBestScore(score);
      setIsNewHigh(true);
    }
  }, [score, difficulty]);

  return (
    <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-xl text-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Results</h2>

      <p className="mb-2 text-lg font-medium text-gray-700">
        You scored{" "}
        <span className="text-indigo-600 font-bold">{score}</span> /{" "}
        {questions.length}
      </p>

      {bestScore !== null && (
        <p className="mb-6 text-md text-gray-600">
          Best Score ({difficulty}):{" "}
          <span className="font-semibold text-indigo-700">{bestScore}</span>
          {isNewHigh && (
            <span className="ml-2 text-green-600 font-semibold">
              🎉 New High Score!
            </span>
          )}
        </p>
      )}

      <ul className="mb-6 space-y-4">
        {questions.map((q, idx) => (
          <li
            key={idx}
            className="p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm"
          >
            <p className="font-medium text-gray-800">{q.text}</p>
            <p>
              Your Answer:{" "}
              <span
                className={
                  answers[idx] === q.answer
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {answers[idx] || "Not Answered"}
              </span>
            </p>
            <p className="text-gray-600">Correct: {q.answer}</p>
          </li>
        ))}
      </ul>

      <button
        onClick={onRestart}
        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
