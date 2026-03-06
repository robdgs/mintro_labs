"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/Platform/CourseCard";
import ArticleCard from "@/components/Platform/ArticleCard";
import QuizCard from "@/components/Platform/QuizCard";
import ArticleModal from "@/components/Platform/ArticleModal";
import QuizModal from "@/components/Platform/QuizModal";
import CourseModal from "@/components/Platform/CourseModal";
import { courses, articles, quizzes } from "@/data/platform";
import { IArticle, IQuiz, ICourse } from "@/types";
import { HiAcademicCap, HiDocumentText, HiSparkles } from "react-icons/hi2";

const PlatformPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "courses" | "articles" | "quizzes"
  >("courses");
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<IQuiz | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen pt-32 pb-20">
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
            onClick={() => setActiveTab("courses")}
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
            onClick={() => setActiveTab("articles")}
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
            onClick={() => setActiveTab("quizzes")}
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

        {/* Content Grid */}
        <div className="mb-12">
          {activeTab === "courses" && (
            <div>
              <SectionTitle>
                <h2 className="text-center mb-4">Explore Our Courses</h2>
              </SectionTitle>
              <p className="text-center text-foreground/70 mb-8">
                Choose from a variety of courses designed to help you master new
                skills
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleCourseClick(course)}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
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
                {articles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => handleArticleClick(article)}
                  >
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
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
                {quizzes.map((quiz) => (
                  <div key={quiz.id} onClick={() => handleQuizClick(quiz)}>
                    <QuizCard quiz={quiz} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] p-12 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands of learners and start your journey today.
          </p>
          <button className="bg-secondary text-white font-bold px-8 py-4 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            Get Started Now
          </button>
        </div>
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
