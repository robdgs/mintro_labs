"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import { ICourse, IArticle, IQuiz } from "@/types";
import {
  HiPlus,
  HiPencil,
  HiTrash,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import CourseFormModal from "@/components/Admin/CourseFormModal";
import ArticleFormModal from "@/components/Admin/ArticleFormModal";
import QuizFormModal from "@/components/Admin/QuizFormModal";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "courses" | "articles" | "quizzes"
  >("courses");

  const [courses, setCourses] = useState<ICourse[]>([]);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const [editingCourse, setEditingCourse] = useState<ICourse | null>(null);
  const [editingArticle, setEditingArticle] = useState<IArticle | null>(null);
  const [editingQuiz, setEditingQuiz] = useState<IQuiz | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authenticated) {
      loadCourses();
      loadArticles();
      loadQuizzes();
    }
  }, [authenticated]);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/verify");
      const data = await response.json();

      if (data.authenticated) {
        setAuthenticated(true);
      } else {
        router.push("/admin/login");
      }
    } catch (err) {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const loadCourses = async () => {
    try {
      const response = await fetch("/api/admin/courses");
      const data = await response.json();
      if (data.success) {
        setCourses(data.courses);
      }
    } catch (err) {
      console.error("Failed to load courses:", err);
    }
  };

  const loadArticles = async () => {
    try {
      const response = await fetch("/api/admin/articles");
      const data = await response.json();
      if (data.success) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.error("Failed to load articles:", err);
    }
  };

  const loadQuizzes = async () => {
    try {
      const response = await fetch("/api/admin/quizzes");
      const data = await response.json();
      if (data.success) {
        setQuizzes(data.quizzes);
      }
    } catch (err) {
      console.error("Failed to load quizzes:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleAddCourse = () => {
    setEditingCourse(null);
    setIsCourseModalOpen(true);
  };

  const handleEditCourse = (course: ICourse) => {
    setEditingCourse(course);
    setIsCourseModalOpen(true);
  };

  const handleAddArticle = () => {
    setEditingArticle(null);
    setIsArticleModalOpen(true);
  };

  const handleEditArticle = (article: IArticle) => {
    setEditingArticle(article);
    setIsArticleModalOpen(true);
  };

  const handleAddQuiz = () => {
    setEditingQuiz(null);
    setIsQuizModalOpen(true);
  };

  const handleEditQuiz = (quiz: IQuiz) => {
    setEditingQuiz(quiz);
    setIsQuizModalOpen(true);
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (!confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      const response = await fetch("/api/admin/courses", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: courseId }),
      });

      const data = await response.json();

      if (data.success) {
        await loadCourses();
      } else {
        alert(data.message || "Failed to delete course");
      }
    } catch (err) {
      alert("An error occurred while deleting the course");
    }
  };

  const handleDeleteArticle = async (articleId: string) => {
    if (!confirm("Are you sure you want to delete this article?")) {
      return;
    }

    try {
      const response = await fetch("/api/admin/articles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: articleId }),
      });

      const data = await response.json();

      if (data.success) {
        await loadArticles();
      } else {
        alert(data.message || "Failed to delete article");
      }
    } catch (err) {
      alert("An error occurred while deleting the article");
    }
  };

  const handleDeleteQuiz = async (quizId: string) => {
    if (!confirm("Are you sure you want to delete this quiz?")) {
      return;
    }

    try {
      const response = await fetch("/api/admin/quizzes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: quizId }),
      });

      const data = await response.json();

      if (data.success) {
        await loadQuizzes();
      } else {
        alert(data.message || "Failed to delete quiz");
      }
    } catch (err) {
      alert("An error occurred while deleting the quiz");
    }
  };

  const handleCourseFormSuccess = async () => {
    setIsCourseModalOpen(false);
    setEditingCourse(null);
    await loadCourses();
  };

  const handleArticleFormSuccess = async () => {
    setIsArticleModalOpen(false);
    setEditingArticle(null);
    await loadArticles();
  };

  const handleQuizFormSuccess = async () => {
    setIsQuizModalOpen(false);
    setEditingQuiz(null);
    await loadQuizzes();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-primary/10">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-foreground/70">Manage courses and content</p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 font-bold text-foreground bg-white border-2 border-foreground hover:bg-red-100 transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
          >
            <HiArrowRightOnRectangle className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <div className="text-4xl font-bold text-secondary mb-2">
              {courses?.length || 0}
            </div>
            <div className="text-foreground/70 font-semibold">
              Total Courses
            </div>
          </div>

          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <div className="text-4xl font-bold text-secondary mb-2">
              {articles?.length || 0}
            </div>
            <div className="text-foreground/70 font-semibold">
              Total Articles
            </div>
          </div>

          <div className="bg-white border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <div className="text-4xl font-bold text-secondary mb-2">
              {quizzes?.length || 0}
            </div>
            <div className="text-foreground/70 font-semibold">
              Total Quizzes
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b-4 border-foreground">
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-6 py-3 font-bold transition-colors ${
              activeTab === "courses"
                ? "bg-secondary text-white border-2 border-foreground border-b-0 -mb-1"
                : "bg-white text-foreground border-2 border-foreground border-b-0 -mb-1 hover:bg-primary"
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-6 py-3 font-bold transition-colors ${
              activeTab === "articles"
                ? "bg-secondary text-white border-2 border-foreground border-b-0 -mb-1"
                : "bg-white text-foreground border-2 border-foreground border-b-0 -mb-1 hover:bg-primary"
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab("quizzes")}
            className={`px-6 py-3 font-bold transition-colors ${
              activeTab === "quizzes"
                ? "bg-secondary text-white border-2 border-foreground border-b-0 -mb-1"
                : "bg-white text-foreground border-2 border-foreground border-b-0 -mb-1 hover:bg-primary"
            }`}
          >
            Quizzes
          </button>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          {activeTab === "courses" && (
            <button
              onClick={handleAddCourse}
              className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-secondary border-2 border-foreground hover:bg-foreground transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <HiPlus className="w-5 h-5" />
              Add New Course
            </button>
          )}
          {activeTab === "articles" && (
            <button
              onClick={handleAddArticle}
              className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-secondary border-2 border-foreground hover:bg-foreground transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <HiPlus className="w-5 h-5" />
              Add New Article
            </button>
          )}
          {activeTab === "quizzes" && (
            <button
              onClick={handleAddQuiz}
              className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-secondary border-2 border-foreground hover:bg-foreground transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <HiPlus className="w-5 h-5" />
              Add New Quiz
            </button>
          )}
        </div>

        {/* Courses Table */}
        {activeTab === "courses" && (
          <div className="bg-white border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary border-b-4 border-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Level
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Modules
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Students
                    </th>
                    <th className="px-6 py-4 text-right font-bold text-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses?.map((course, index) => (
                    <tr
                      key={course.id}
                      className={`border-b-2 border-foreground ${
                        index % 2 === 0 ? "bg-white" : "bg-primary/20"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-foreground">
                          {course.title}
                        </div>
                        <div className="text-sm text-foreground/60">
                          {course.instructor}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-secondary/20 border-2 border-foreground">
                          {course.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {course.duration}
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {course.modules?.length || 0}
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {course.students || 0}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditCourse(course)}
                            className="p-2 bg-primary border-2 border-foreground hover:bg-secondary hover:text-white transition-colors"
                          >
                            <HiPencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteCourse(course.id)}
                            className="p-2 bg-red-100 border-2 border-foreground hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <HiTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {(!courses || courses.length === 0) && (
                <div className="text-center py-12 text-foreground/50">
                  No courses found. Click "Add New Course" to create one.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Articles Table */}
        {activeTab === "articles" && (
          <div className="bg-white border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary border-b-4 border-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Read Time
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Author
                    </th>
                    <th className="px-6 py-4 text-right font-bold text-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {articles?.map((article, index) => (
                    <tr
                      key={article.id}
                      className={`border-b-2 border-foreground ${
                        index % 2 === 0 ? "bg-white" : "bg-primary/20"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-foreground">
                          {article.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-secondary/20 border-2 border-foreground">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {article.readTime}
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {article.author || "-"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditArticle(article)}
                            className="p-2 bg-primary border-2 border-foreground hover:bg-secondary hover:text-white transition-colors"
                          >
                            <HiPencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteArticle(article.id)}
                            className="p-2 bg-red-100 border-2 border-foreground hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <HiTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {(!articles || articles.length === 0) && (
                <div className="text-center py-12 text-foreground/50">
                  No articles found. Click "Add New Article" to create one.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quizzes Table */}
        {activeTab === "quizzes" && (
          <div className="bg-white border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary border-b-4 border-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Difficulty
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">
                      Questions
                    </th>
                    <th className="px-6 py-4 text-right font-bold text-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quizzes?.map((quiz, index) => (
                    <tr
                      key={quiz.id}
                      className={`border-b-2 border-foreground ${
                        index % 2 === 0 ? "bg-white" : "bg-primary/20"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-foreground">
                          {quiz.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-secondary/20 border-2 border-foreground">
                          {quiz.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold border-2 border-foreground ${
                            quiz.difficulty === "Easy"
                              ? "bg-green-100"
                              : quiz.difficulty === "Medium"
                                ? "bg-yellow-100"
                                : "bg-red-100"
                          }`}
                        >
                          {quiz.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {quiz.quizQuestions?.length || 0}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditQuiz(quiz)}
                            className="p-2 bg-primary border-2 border-foreground hover:bg-secondary hover:text-white transition-colors"
                          >
                            <HiPencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteQuiz(quiz.id)}
                            className="p-2 bg-red-100 border-2 border-foreground hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <HiTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {(!quizzes || quizzes.length === 0) && (
                <div className="text-center py-12 text-foreground/50">
                  No quizzes found. Click "Add New Quiz" to create one.
                </div>
              )}
            </div>
          </div>
        )}
      </Container>

      <CourseFormModal
        isOpen={isCourseModalOpen}
        onClose={() => {
          setIsCourseModalOpen(false);
          setEditingCourse(null);
        }}
        course={editingCourse}
        onSuccess={handleCourseFormSuccess}
      />

      <ArticleFormModal
        isOpen={isArticleModalOpen}
        onClose={() => {
          setIsArticleModalOpen(false);
          setEditingArticle(null);
        }}
        article={editingArticle}
        onSuccess={handleArticleFormSuccess}
      />

      <QuizFormModal
        isOpen={isQuizModalOpen}
        onClose={() => {
          setIsQuizModalOpen(false);
          setEditingQuiz(null);
        }}
        quiz={editingQuiz}
        onSuccess={handleQuizFormSuccess}
      />
    </div>
  );
}
