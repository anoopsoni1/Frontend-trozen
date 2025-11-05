import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, SkipForward, CheckCircle } from "lucide-react";

// Career Questions
const careerQuestions = [
  { id: 1, question: "Do you enjoy solving technical problems?", field: "Engineering" },
  { id: 2, question: "Do you like working with computers or machines?", field: "Engineering" },
  { id: 3, question: "Do you enjoy designing structures or systems?", field: "Engineering" },
  { id: 4, question: "Are you interested in biology and the human body?", field: "Medical" },
  { id: 5, question: "Do you want to help people with healthcare?", field: "Medical" },
  { id: 6, question: "Do you enjoy studying chemistry for medical purposes?", field: "Medical" },
  { id: 7, question: "Do you enjoy drawing, painting, or creative arts?", field: "Arts" },
  { id: 8, question: "Do you like performing arts like music, dance, or theater?", field: "Arts" },
  { id: 9, question: "Do you enjoy literature and writing?", field: "Arts" },
  { id: 10, question: "Do you enjoy working with numbers or accounts?", field: "Commerce" },
  { id: 11, question: "Are you interested in business and finance?", field: "Commerce" },
  { id: 12, question: "Do you like analyzing markets or trends?", field: "Commerce" },
];

export default function CareerQuiz({ homeState = "Delhi" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(careerQuestions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    const updated = [...answers];
    updated[currentIndex] = selected;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < careerQuestions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSkip = () => {
    if (currentIndex < careerQuestions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = () => setFinished(true);

  if (finished) {
    const fieldMarks = {};
    answers.forEach((ans, i) => {
      if (ans === "Yes") {
        const field = careerQuestions[i].field;
        fieldMarks[field] = (fieldMarks[field] || 0) + 1;
      }
    });

    const recommendedField = Object.keys(fieldMarks).reduce(
      (a, b) => (fieldMarks[a] > fieldMarks[b] ? a : b),
      Object.keys(fieldMarks)[0]
    );

    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-700">🎯 Your Career Roadmap</h2>
          <p className="text-lg mb-2 font-semibold">Recommended Field: {recommendedField}</p>
          <div className="text-left mb-6">
            <h3 className="text-xl font-semibold mb-2">Marks per Field</h3>
            {Object.entries(fieldMarks).map(([field, mark]) => (
              <p key={field}>
                ✅ <b>{field}</b>: {mark}
              </p>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
            onClick={() => {
              setAnswers(Array(careerQuestions.length).fill(null));
              setCurrentIndex(0);
              setFinished(false);
            }}
          >
            Restart Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = careerQuestions[currentIndex];

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 relative p-6">
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold mb-6">{currentQuestion.question}</h2>
        <div className="flex gap-6 mb-6">
          <button
            onClick={() => handleAnswer("Yes")}
            className={`bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow ${
              answers[currentIndex] === "Yes" ? "ring-4 ring-green-300" : ""
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("No")}
            className={`bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow ${
              answers[currentIndex] === "No" ? "ring-4 ring-red-300" : ""
            }`}
          >
            No
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between w-full max-w-md mt-auto mb-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 text-gray-600 disabled:opacity-40"
          >
            <ArrowLeft size={20} /> Prev
          </button>

          {currentIndex < careerQuestions.length - 1 ? (
            <div className="flex gap-4">
              <button
                onClick={handleSkip}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <SkipForward size={20} /> Skip
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentIndex]}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                Next <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentIndex]}
              className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-800"
            >
              <CheckCircle size={20} /> Submit
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-2 w-full max-w-3xl h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / careerQuestions.length) * 100}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
