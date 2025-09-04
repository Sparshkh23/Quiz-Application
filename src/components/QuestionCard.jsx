import React from "react";
import { motion } from "framer-motion";

function QuestionCard({ question, selected, onSelect }) {
  return (
    <motion.div
      key={question.text} // ensures re-animation when question changes
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xl font-semibold mb-6 text-gray-800">
        {question.text}
      </p>
      <div className="grid gap-3">
        {question.options.map((opt, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelect(opt)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 py-3 rounded-lg border shadow-sm transition ${
              selected === opt
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionCard;
