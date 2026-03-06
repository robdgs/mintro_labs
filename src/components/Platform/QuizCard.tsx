"use client";

import { IQuiz } from "@/types";
import { HiQuestionMarkCircle, HiSparkles } from "react-icons/hi2";

interface QuizCardProps {
  quiz: IQuiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800 border-red-800";
      default:
        return "bg-gray-100 text-gray-800 border-gray-800";
    }
  };

  return (
    <div className="group bg-[#fafaf5] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 p-6 cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
            {quiz.category}
          </span>
          <span
            className={`text-xs font-bold px-2 py-1 border ${getDifficultyColor(
              quiz.difficulty,
            )}`}
          >
            {quiz.difficulty}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
          {quiz.title}
        </h3>

        <p className="text-foreground/70 mb-4 flex-grow">{quiz.description}</p>

        <div className="flex items-center gap-4 text-sm text-foreground/60">
          <div className="flex items-center gap-1">
            <HiQuestionMarkCircle className="w-4 h-4" />
            <span>{quiz.questions} Questions</span>
          </div>
          <div className="flex items-center gap-1">
            <HiSparkles className="w-4 h-4" />
            <span>Quiz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
