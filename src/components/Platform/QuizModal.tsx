"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark, HiCheckCircle, HiXCircle } from "react-icons/hi2";
import { IQuiz } from "@/types";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  quiz: IQuiz | null;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) return null;

  const hasQuestions = quiz.quizQuestions && quiz.quizQuestions.length > 0;

  const handleClose = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
    onClose();
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < (quiz.quizQuestions?.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      quiz.quizQuestions?.forEach((q, index) => {
        const userAnswer = selectedAnswers[index];
        const correctAnswer = q.correctAnswer;
        const isCorrect = userAnswer === correctAnswer;

        console.log(
          `Q${index + 1}: User: ${userAnswer} (${typeof userAnswer}), Correct: ${correctAnswer} (${typeof correctAnswer}), Match: ${isCorrect}`,
        );

        if (isCorrect) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const currentQ = hasQuestions ? quiz.quizQuestions![currentQuestion] : null;
  const progress = hasQuestions
    ? ((currentQuestion + 1) / quiz.quizQuestions!.length) * 100
    : 0;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden bg-[#fafaf5] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] transition-all">
                {/* Header */}
                <div className="relative border-b-4 border-foreground bg-primary p-6">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 border-2 border-foreground bg-[#fafaf5] hover:bg-secondary hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
                  >
                    <HiOutlineXMark className="h-6 w-6" />
                  </button>

                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {quiz.category} • {quiz.difficulty}
                  </span>
                  <Dialog.Title className="text-2xl md:text-3xl font-bold text-foreground mt-2 pr-12">
                    {quiz.title}
                  </Dialog.Title>
                </div>

                {!hasQuestions ? (
                  <div className="p-12 text-center">
                    <p className="text-foreground/70 text-lg mb-4">
                      This quiz doesn't have any questions yet.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-secondary text-white font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                    >
                      Close
                    </button>
                  </div>
                ) : !showResults ? (
                  <>
                    {/* Progress Bar */}
                    <div className="px-6 pt-6">
                      <div className="flex justify-between text-sm text-foreground/70 mb-2">
                        <span>
                          Question {currentQuestion + 1} of{" "}
                          {quiz.quizQuestions!.length}
                        </span>
                        <span>{Math.round(progress)}% Complete</span>
                      </div>
                      <div className="w-full h-3 bg-foreground/10 border-2 border-foreground">
                        <div
                          className="h-full bg-secondary transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Question */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-6">
                        {currentQ!.question}
                      </h3>

                      <div className="space-y-3">
                        {currentQ!.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full text-left p-4 border-2 border-foreground transition-all duration-200 ${
                              selectedAnswers[currentQuestion] === index
                                ? "bg-secondary text-white shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                                : "bg-[#fafaf5] hover:bg-primary shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                            }`}
                          >
                            <span className="font-semibold mr-3">
                              {String.fromCharCode(65 + index)}.
                            </span>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="border-t-4 border-foreground bg-primary/30 p-6">
                      <div className="flex justify-between">
                        <button
                          onClick={handlePrevious}
                          disabled={currentQuestion === 0}
                          className="px-6 py-2 font-bold text-foreground border-2 border-foreground bg-[#fafaf5] hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                        >
                          Previous
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={
                            selectedAnswers[currentQuestion] === undefined
                          }
                          className="px-6 py-2 font-bold text-white border-2 border-foreground bg-secondary hover:bg-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                        >
                          {currentQuestion === quiz.quizQuestions!.length - 1
                            ? "Finish"
                            : "Next"}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Results */}
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                          Quiz Completed! 🎉
                        </h3>
                        <div className="inline-block bg-primary border-4 border-foreground p-6 shadow-[6px_6px_0px_0px_rgba(46,46,46,1)]">
                          <p className="text-5xl font-bold text-foreground mb-2">
                            {score}/{quiz.quizQuestions!.length}
                          </p>
                          <p className="text-lg text-foreground/70">
                            {Math.round(
                              (score / quiz.quizQuestions!.length) * 100,
                            )}
                            % Correct
                          </p>
                        </div>
                      </div>

                      {/* Answer Review */}
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {quiz.quizQuestions!.map((q, index) => {
                          const isCorrect =
                            selectedAnswers[index] === q.correctAnswer;
                          return (
                            <div
                              key={q.id}
                              className={`p-4 border-2 border-foreground ${
                                isCorrect ? "bg-green-50" : "bg-red-50"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                {isCorrect ? (
                                  <HiCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                ) : (
                                  <HiXCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                )}
                                <div className="flex-1">
                                  <p className="font-bold text-foreground mb-2">
                                    {index + 1}. {q.question}
                                  </p>
                                  <p className="text-sm text-foreground/70">
                                    Your answer:{" "}
                                    <span
                                      className={
                                        isCorrect
                                          ? "text-green-700 font-semibold"
                                          : "text-red-700 font-semibold"
                                      }
                                    >
                                      {q.options[selectedAnswers[index]]}
                                    </span>
                                  </p>
                                  {!isCorrect && (
                                    <p className="text-sm text-green-700 font-semibold mt-1">
                                      Correct answer:{" "}
                                      {q.options[q.correctAnswer]}
                                    </p>
                                  )}
                                  {q.explanation && (
                                    <p className="text-sm text-foreground/60 mt-2 italic">
                                      {q.explanation}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Results Footer */}
                    <div className="border-t-4 border-foreground bg-primary/30 p-6">
                      <div className="flex justify-between gap-4">
                        <button
                          onClick={restartQuiz}
                          className="px-6 py-2 font-bold text-foreground border-2 border-foreground bg-[#fafaf5] hover:bg-primary transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                        >
                          Try Again
                        </button>
                        <button
                          onClick={handleClose}
                          className="px-6 py-2 font-bold text-white border-2 border-foreground bg-secondary hover:bg-foreground transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuizModal;
