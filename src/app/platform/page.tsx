"use client";

import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/Platform/CourseCard";
import ArticleCard from "@/components/Platform/ArticleCard";
import QuizCard from "@/components/Platform/QuizCard";
import ArticleModal from "@/components/Platform/ArticleModal";
import QuizModal from "@/components/Platform/QuizModal";
import CourseModal from "@/components/Platform/CourseModal";
import { IArticle, IQuiz, ICourse } from "@/types";
import {
  HiAcademicCap,
  HiDocumentText,
  HiSparkles,
  HiArrowLeft,
  HiMagnifyingGlass,
} from "react-icons/hi2";

const PlatformPage: React.FC = () => {
  const { login, authenticated, user } = usePrivy();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "courses" | "articles" | "quizzes"
  >("courses");
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<IQuiz | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  // Stato per i dati dal database
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [loading, setLoading] = useState(true);

  // Carica i dati dal database
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [coursesRes, articlesRes, quizzesRes] = await Promise.all([
          fetch("/api/admin/courses"),
          fetch("/api/admin/articles"),
          fetch("/api/admin/quizzes"),
        ]);

        const [coursesData, articlesData, quizzesData] = await Promise.all([
          coursesRes.json(),
          articlesRes.json(),
          quizzesRes.json(),
        ]);

        if (coursesData.success) setCourses(coursesData.courses || []);
        if (articlesData.success) setArticles(articlesData.articles || []);
        if (quizzesData.success) setQuizzes(quizzesData.quizzes || []);
      } catch (error) {
        console.error("Error loading platform data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleArticleClick = (article: IArticle) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
  };

  const handleQuizClick = (quiz: IQuiz) => {
    setSelectedQuiz(quiz);
    setIsQuizModalOpen(true);
  };

  const handleCourseClick = (course: ICourse) => {
    setSelectedCourse(course);
    setIsCourseModalOpen(true);
  };

  // Reset filtri quando si cambia tab
  const handleTabChange = (tab: "courses" | "articles" | "quizzes") => {
    setActiveTab(tab);
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevel("all");
  };

  // Funzione per filtrare i contenuti in base alla ricerca
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || quiz.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || quiz.difficulty === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Estrai categorie uniche
  const allCategories = Array.from(
    new Set([
      ...courses.map((c) => c.category),
      ...articles.map((a) => a.category),
      ...quizzes.map((q) => q.category),
    ]),
  ).sort();

  // Livelli in base alla tab attiva
  const getLevels = () => {
    if (activeTab === "courses") {
      return ["Beginner", "Intermediate", "Advanced"];
    } else if (activeTab === "quizzes") {
      return ["Easy", "Medium", "Hard"];
    }
    return [];
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Fixed Back Button */}
      <div className="fixed top-[100px] left-4 md:top-[164px] md:left-20 z-40">
        <Link
          href="/"
          className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 font-bold text-foreground border-2 border-foreground bg-primary shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          aria-label="Torna alla Home"
        >
          <HiArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </div>

      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to Our Learning Platform
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Discover courses, read articles, and test your knowledge with our
            comprehensive learning resources.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabChange("courses")}
            className={`flex items-center gap-2 px-6 py-3 font-bold border-2 border-foreground transition-all duration-200 ${
              activeTab === "courses"
                ? "bg-primary text-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                : "bg-[#fafaf5] text-foreground/60 hover:bg-primary/50 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
            }`}
          >
            <HiAcademicCap className="w-5 h-5" />
            <span>Courses ({courses.length})</span>
          </button>
          <button
            onClick={() => handleTabChange("articles")}
            className={`flex items-center gap-2 px-6 py-3 font-bold border-2 border-foreground transition-all duration-200 ${
              activeTab === "articles"
                ? "bg-primary text-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                : "bg-[#fafaf5] text-foreground/60 hover:bg-primary/50 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
            }`}
          >
            <HiDocumentText className="w-5 h-5" />
            <span>Articles ({articles.length})</span>
          </button>
          <button
            onClick={() => handleTabChange("quizzes")}
            className={`flex items-center gap-2 px-6 py-3 font-bold border-2 border-foreground transition-all duration-200 ${
              activeTab === "quizzes"
                ? "bg-primary text-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                : "bg-[#fafaf5] text-foreground/60 hover:bg-primary/50 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
            }`}
          >
            <HiSparkles className="w-5 h-5" />
            <span>Quizzes ({quizzes.length})</span>
          </button>
        </div>

        {/* Search Bar and Filters */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="text"
                placeholder={`Search ${
                  activeTab === "courses"
                    ? "courses"
                    : activeTab === "articles"
                      ? "articles"
                      : "quizzes"
                }...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-foreground bg-white shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-medium"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-2 border-foreground bg-white shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-medium cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3cpath%20d%3D%22M7%207l3%203%203-3%22%20stroke%3D%22%232e2e2e%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat"
              >
                <option value="all">All Categories</option>
                {allCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter (only for courses and quizzes) */}
            {activeTab !== "articles" && (
              <div className="md:w-48">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-foreground bg-white shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-medium cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3cpath%20d%3D%22M7%207l3%203%203-3%22%20stroke%3D%22%232e2e2e%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat"
                >
                  <option value="all">
                    {activeTab === "courses"
                      ? "All Levels"
                      : "All Difficulties"}
                  </option>
                  {getLevels().map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-foreground border-t-transparent"></div>
            <p className="mt-4 text-foreground/70">Loading...</p>
          </div>
        ) : (
          <>
            {/* Content Grid */}
            <div className="mb-12">
              {activeTab === "courses" && (
                <div>
                  <SectionTitle>
                    <h2 className="text-center mb-4">Explore Our Courses</h2>
                  </SectionTitle>
                  <p className="text-center text-foreground/70 mb-8">
                    Choose from a variety of courses designed to help you master
                    new skills
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {filteredCourses.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => handleCourseClick(course)}
                      >
                        <CourseCard course={course} />
                      </div>
                    ))}
                  </div>
                  {filteredCourses.length === 0 && (
                    <p className="text-center text-foreground/50 py-10">
                      {searchQuery ||
                      selectedCategory !== "all" ||
                      selectedLevel !== "all"
                        ? "No courses found with these filters."
                        : "No courses available yet."}
                    </p>
                  )}
                </div>
              )}

              {activeTab === "articles" && (
                <div>
                  <SectionTitle>
                    <h2 className="text-center mb-4">Read Our Articles</h2>
                  </SectionTitle>
                  <p className="text-center text-foreground/70 mb-8">
                    Stay updated with insights, tips, and industry trends
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => handleArticleClick(article)}
                      >
                        <ArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                  {filteredArticles.length === 0 && (
                    <p className="text-center text-foreground/50 py-10">
                      {searchQuery || selectedCategory !== "all"
                        ? "No articles found with these filters."
                        : "No articles available yet."}
                    </p>
                  )}
                </div>
              )}

              {activeTab === "quizzes" && (
                <div>
                  <SectionTitle>
                    <h2 className="text-center mb-4">Test Your Knowledge</h2>
                  </SectionTitle>
                  <p className="text-center text-foreground/70 mb-8">
                    Challenge yourself with quizzes to reinforce your learning
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {filteredQuizzes.map((quiz) => (
                      <div key={quiz.id} onClick={() => handleQuizClick(quiz)}>
                        <QuizCard quiz={quiz} />
                      </div>
                    ))}
                  </div>
                  {filteredQuizzes.length === 0 && (
                    <p className="text-center text-foreground/50 py-10">
                      {searchQuery ||
                      selectedCategory !== "all" ||
                      selectedLevel !== "all"
                        ? "No quizzes found with these filters."
                        : "No quizzes available yet."}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] p-12 mt-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <HiAcademicCap className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Start Learning
                </h2>
              </div>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                Join thousands of learners and start your journey today
              </p>
            </div>
          </>
        )}
      </Container>

      {/* Modals */}
      <ArticleModal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
        article={selectedArticle}
      />
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        quiz={selectedQuiz}
      />
      <CourseModal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
        course={selectedCourse}
      />
    </div>
  );
};

export default PlatformPage;
