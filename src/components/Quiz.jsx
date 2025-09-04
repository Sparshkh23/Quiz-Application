import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QuestionCard from "./QuestionCard";

function Quiz({ questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft <= 0) {
      nextQuestion();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    const updated = [...userAnswers];
    updated[currentIndex] = answer;
    setUserAnswers(updated);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(30);
    } else {
      onFinish(userAnswers);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <motion.div
      key={currentIndex} // ensures fade on each new question
      className="bg-white shadow-md rounded-2xl p-8 w-full max-w-xl text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-indigo-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Question {currentIndex + 1} of {questions.length}
        </p>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={questions[currentIndex]}
        selected={userAnswers[currentIndex]}
        onSelect={handleAnswer}
      />

      {/* Bottom Controls */}
      <div className="flex justify-between items-center mt-6">
        <span className="font-medium text-gray-700">⏳ {timeLeft}s</span>
        <motion.button
          onClick={nextQuestion}
          disabled={userAnswers[currentIndex] === undefined}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition disabled:opacity-50"
        >
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Quiz;
