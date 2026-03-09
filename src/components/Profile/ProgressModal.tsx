"use client";

import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { IArticle, ICourse, IQuiz } from "@/types";

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "articles" | "courses" | "quizzes";
  userId: string;
}

export default function ProgressModal({
  isOpen,
  onClose,
  type,
  userId,
}: ProgressModalProps) {
  const [items, setItems] = useState<(IArticle | ICourse | IQuiz)[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!isOpen) return;

      setLoading(true);
      try {
        const response = await fetch(
          `/api/user/progress/details?userId=${userId}&type=${type}`,
        );
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setItems(data.items || []);
          }
        }
      } catch (error) {
        console.error("Error loading progress details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOpen, userId, type]);

  if (!isOpen) return null;

  const getTitle = () => {
    switch (type) {
      case "articles":
        return "Articles Read";
      case "courses":
        return "Courses Completed";
      case "quizzes":
        return "Quizzes Passed";
    }
  };

  const renderItem = (item: IArticle | ICourse | IQuiz) => {
    if (type === "articles") {
      const article = item as IArticle;
      return (
        <div
          key={article.id}
          className="bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-foreground/70 mb-2">
                {article.description}
              </p>
              <div className="flex gap-3 text-xs text-foreground/60">
                <span className="bg-primary px-2 py-1 border border-foreground">
                  {article.category}
                </span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === "courses") {
      const course = item as ICourse;
      return (
        <div
          key={course.id}
          className="bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-foreground/70 mb-2">
                {course.description}
              </p>
              <div className="flex gap-3 text-xs text-foreground/60">
                <span className="bg-primary px-2 py-1 border border-foreground">
                  {course.category}
                </span>
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === "quizzes") {
      const quiz = item as IQuiz;
      return (
        <div
          key={quiz.id}
          className="bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-2">{quiz.title}</h3>
              <p className="text-sm text-foreground/70 mb-2">
                {quiz.description}
              </p>
              <div className="flex gap-3 text-xs text-foreground/60">
                <span className="bg-primary px-2 py-1 border border-foreground">
                  {quiz.category}
                </span>
                <span>{quiz.difficulty}</span>
                <span>{quiz.questions} questions</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] w-full max-w-3xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b-2 border-foreground flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{getTitle()}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-foreground/10 transition-colors"
          >
            <HiX className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-foreground border-t-transparent"></div>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-foreground/70">
                No {type} completed yet. Start learning!
              </p>
            </div>
          ) : (
            <div className="space-y-4">{items.map(renderItem)}</div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t-2 border-foreground">
          <button
            onClick={onClose}
            className="w-full bg-secondary text-white font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
