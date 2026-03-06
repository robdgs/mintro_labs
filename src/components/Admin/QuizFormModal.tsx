"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IQuiz, IQuizQuestion } from "@/types";
import { HiXMark, HiPlus, HiTrash } from "react-icons/hi2";

interface QuizFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  quiz: IQuiz | null;
  onSuccess: () => void;
}

export default function QuizFormModal({
  isOpen,
  onClose,
  quiz,
  onSuccess,
}: QuizFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "Easy" as "Easy" | "Medium" | "Hard",
  });
  const [questions, setQuestions] = useState<IQuizQuestion[]>([]);

  useEffect(() => {
    if (quiz) {
      setFormData({
        title: quiz.title,
        description: quiz.description,
        category: quiz.category,
        difficulty: quiz.difficulty,
      });
      setQuestions(quiz.quizQuestions || []);
    } else {
      resetForm();
    }
  }, [quiz, isOpen]);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      difficulty: "Easy",
    });
    setQuestions([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const quizData: Partial<IQuiz> = {
        ...formData,
        questions: questions.length,
        quizQuestions: questions,
      };

      if (quiz) {
        quizData.id = quiz.id;
      }

      const method = quiz ? "PUT" : "POST";
      const response = await fetch("/api/admin/quizzes", {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(quizData),
      });

      const data = await response.json();

      if (data.success) {
        onSuccess();
        resetForm();
      } else {
        alert(data.message || "Failed to save quiz");
      }
    } catch (err) {
      alert("An error occurred while saving the quiz");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: `q-${Date.now()}`,
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
        explanation: "",
      },
    ]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const updateQuestion = (index: number, field: string, value: any) => {
    const newQuestions = [...questions];
    newQuestions[index] = {
      ...newQuestions[index],
      [field]: value,
    };
    setQuestions(newQuestions);
  };

  const updateOption = (qIndex: number, oIndex: number, value: string) => {
    const newQuestions = [...questions];
    const newOptions = [...newQuestions[qIndex].options];
    newOptions[oIndex] = value;
    newQuestions[qIndex].options = newOptions;
    setQuestions(newQuestions);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
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
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden bg-[#fafaf5] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(46,46,46,1)] transition-all">
                <div className="flex items-center justify-between border-b-4 border-foreground bg-primary p-6">
                  <Dialog.Title className="text-2xl font-bold text-foreground">
                    {quiz ? "Edit Quiz" : "Add New Quiz"}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-foreground/10 transition-colors"
                  >
                    <HiXMark className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Title *
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Category *
                        </label>
                        <input
                          type="text"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Difficulty *
                        </label>
                        <select
                          name="difficulty"
                          value={formData.difficulty}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    {/* Questions */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-foreground">
                          Questions
                        </h3>
                        <button
                          type="button"
                          onClick={addQuestion}
                          className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-secondary border-2 border-foreground hover:bg-foreground transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                        >
                          <HiPlus className="w-4 h-4" />
                          Add Question
                        </button>
                      </div>

                      {questions.length === 0 && (
                        <div className="text-center py-8 border-2 border-dashed border-foreground/30 text-foreground/50">
                          No questions yet. Click "Add Question" to create one.
                        </div>
                      )}

                      <div className="space-y-4">
                        {questions.map((question, qIndex) => (
                          <div
                            key={question.id}
                            className="bg-white border-2 border-foreground p-4"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-foreground">
                                Question {qIndex + 1}
                              </h4>
                              <button
                                type="button"
                                onClick={() => removeQuestion(qIndex)}
                                className="p-2 text-red-600 hover:bg-red-100 border-2 border-foreground transition-colors"
                              >
                                <HiTrash className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Question Text *
                                </label>
                                <input
                                  type="text"
                                  value={question.question}
                                  onChange={(e) =>
                                    updateQuestion(
                                      qIndex,
                                      "question",
                                      e.target.value,
                                    )
                                  }
                                  required
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Options *
                                </label>
                                {question.options.map((option, oIndex) => (
                                  <div
                                    key={oIndex}
                                    className="flex items-center gap-2 mb-2"
                                  >
                                    <span className="font-semibold text-foreground min-w-[20px]">
                                      {String.fromCharCode(65 + oIndex)}.
                                    </span>
                                    <input
                                      type="text"
                                      value={option}
                                      onChange={(e) =>
                                        updateOption(
                                          qIndex,
                                          oIndex,
                                          e.target.value,
                                        )
                                      }
                                      required
                                      className="flex-1 px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                      placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                                    />
                                  </div>
                                ))}
                              </div>

                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Correct Answer *
                                </label>
                                <select
                                  value={question.correctAnswer}
                                  onChange={(e) =>
                                    updateQuestion(
                                      qIndex,
                                      "correctAnswer",
                                      parseInt(e.target.value),
                                    )
                                  }
                                  required
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                  {question.options.map((_, oIndex) => (
                                    <option key={oIndex} value={oIndex}>
                                      {String.fromCharCode(65 + oIndex)} -{" "}
                                      {question.options[oIndex] ||
                                        `Option ${oIndex + 1}`}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Explanation (optional)
                                </label>
                                <textarea
                                  value={question.explanation || ""}
                                  onChange={(e) =>
                                    updateQuestion(
                                      qIndex,
                                      "explanation",
                                      e.target.value,
                                    )
                                  }
                                  rows={2}
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                  placeholder="Explain why this is the correct answer..."
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-6 pt-6 border-t-2 border-foreground">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 font-bold text-foreground bg-white border-2 border-foreground hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 font-bold text-white bg-secondary border-2 border-foreground hover:bg-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    >
                      {loading
                        ? "Saving..."
                        : quiz
                          ? "Update Quiz"
                          : "Create Quiz"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
