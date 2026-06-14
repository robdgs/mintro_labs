"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HiUser, HiEnvelope, HiWallet, HiArrowLeft, HiCamera } from "react-icons/hi2";
import Image from "next/image";

interface UserProfile {
  privy_user_id: string;
  email: string;
  wallet_address: string;
  profile_picture_url: string;
  created_at: string;
}

interface CompletedContent {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  category?: string;
  author?: string;
  read_time?: string;
  completed_at: string;
  duration?: string;
  level?: string;
  instructor?: string;
  difficulty?: string;
  total_questions?: number;
}

interface ProfileData {
  user: UserProfile;
  completedCourses: CompletedContent[];
  completedArticles: CompletedContent[];
  completedQuizzes: CompletedContent[];
  stats: {
    coursesCompleted: number;
    articlesRead: number;
    quizzesPassed: number;
  };
}

export default function ProfilePage() {
  const { authenticated, user, logout, ready } = usePrivy();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"courses" | "articles" | "quizzes">("courses");

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/platform");
    }
  }, [authenticated, ready, router]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!authenticated || !user) return;

      try {
        const response = await fetch(`/api/user/profile?userId=${user.id}`);
        if (response.ok) {
          const data: ProfileData = await response.json();
          setProfileData(data);
          setProfilePicture(data.user.profile_picture_url || "");
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (ready && authenticated) {
      fetchProfile();
    }
  }, [authenticated, user, ready]);

  const handleProfilePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploadError("");
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", user.id);

      const response = await fetch("/api/user/profile/picture", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setProfilePicture(data.pictureUrl);
      } else {
        setUploadError(data.error || "Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      setUploadError("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (!ready || !authenticated || !user || loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-foreground border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="px-5 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.push("/platform")}
            className="flex items-center gap-2 mb-8 text-foreground/70 hover:text-foreground transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Platform</span>
          </button>

          {/* Profile Card */}
          <div className="bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-24 h-24 bg-primary border-2 border-foreground rounded-full flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <HiUser className="w-12 h-12 text-foreground" />
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full border-2 border-foreground hover:bg-foreground disabled:opacity-50 transition-all"
                >
                  <HiCamera className="w-5 h-5" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="hidden"
                />
                {uploadError && (
                  <p className="text-red-600 text-xs mt-2 font-semibold">{uploadError}</p>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Your Profile
                </h1>
                <p className="text-foreground/70">
                  Manage your personal information and view your learning progress
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-4">
              {profileData?.user.email && (
                <div className="flex items-start gap-4 p-4 bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                  <HiEnvelope className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground mb-1">Email</p>
                    <p className="text-foreground/70">{profileData.user.email}</p>
                  </div>
                </div>
              )}

              {profileData?.user.wallet_address && (
                <div className="flex items-start gap-4 p-4 bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                  <HiWallet className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground mb-1">Wallet</p>
                    <p className="text-foreground/70 break-all font-mono text-sm">
                      {profileData.user.wallet_address}
                    </p>
                  </div>
                </div>
              )}

              {profileData?.user.created_at && (
                <div className="flex items-start gap-4 p-4 bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                  <div className="flex-1">
                    <p className="font-bold text-foreground mb-1">Member since</p>
                    <p className="text-foreground/70">
                      {new Date(profileData.user.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={async () => {
              await logout();
              router.push("/platform");
            }}
            className="bg-secondary text-white font-bold px-8 py-4 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] mb-8"
          >
            Logout
          </button>

          {/* Stats Section */}
          <div className="bg-primary border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Your Learning Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                <p className="text-4xl font-bold text-secondary mb-2">
                  {profileData?.stats.coursesCompleted ?? 0}
                </p>
                <p className="text-foreground/70 font-bold">Courses Completed</p>
              </div>
              <div className="bg-white border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                <p className="text-4xl font-bold text-secondary mb-2">
                  {profileData?.stats.articlesRead ?? 0}
                </p>
                <p className="text-foreground/70 font-bold">Articles Read</p>
              </div>
              <div className="bg-white border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                <p className="text-4xl font-bold text-secondary mb-2">
                  {profileData?.stats.quizzesPassed ?? 0}
                </p>
                <p className="text-foreground/70 font-bold">Quizzes Passed</p>
              </div>
            </div>
          </div>

          {/* Completed Content Section */}
          {(profileData?.completedCourses.length || profileData?.completedArticles.length || profileData?.completedQuizzes.length) ? (
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Your Completed Content
              </h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 border-b-2 border-foreground">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`px-6 py-3 font-bold border-b-4 transition-all ${
                    activeTab === "courses"
                      ? "border-secondary text-secondary"
                      : "border-transparent text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Courses ({profileData?.completedCourses.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab("articles")}
                  className={`px-6 py-3 font-bold border-b-4 transition-all ${
                    activeTab === "articles"
                      ? "border-secondary text-secondary"
                      : "border-transparent text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Articles ({profileData?.completedArticles.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab("quizzes")}
                  className={`px-6 py-3 font-bold border-b-4 transition-all ${
                    activeTab === "quizzes"
                      ? "border-secondary text-secondary"
                      : "border-transparent text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Quizzes ({profileData?.completedQuizzes.length || 0})
                </button>
              </div>

              {/* Courses Tab */}
              {activeTab === "courses" && (
                <div className="space-y-4">
                  {profileData?.completedCourses.length ? (
                    profileData.completedCourses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                      >
                        <div className="flex items-start gap-4">
                          {course.thumbnail && (
                            <div className="w-20 h-20 bg-gray-200 border border-foreground flex-shrink-0 overflow-hidden">
                              <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1">{course.title}</h3>
                            <p className="text-sm text-foreground/70 mb-2">{course.description}</p>
                            <div className="flex flex-wrap gap-3 text-xs">
                              {course.category && (
                                <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                  {course.category}
                                </span>
                              )}
                              {course.level && (
                                <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                  {course.level}
                                </span>
                              )}
                              {course.duration && (
                                <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                  {course.duration}
                                </span>
                              )}
                              <span className="bg-secondary text-white px-2 py-1 font-semibold">
                                ✓ Completed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-foreground/70 py-8">No courses completed yet</p>
                  )}
                </div>
              )}

              {/* Articles Tab */}
              {activeTab === "articles" && (
                <div className="space-y-4">
                  {profileData?.completedArticles.length ? (
                    profileData.completedArticles.map((article) => (
                      <div
                        key={article.id}
                        className="bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                      >
                        <div className="flex items-start gap-4">
                          {article.thumbnail && (
                            <div className="w-20 h-20 bg-gray-200 border border-foreground flex-shrink-0 overflow-hidden">
                              <img
                                src={article.thumbnail}
                                alt={article.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1">{article.title}</h3>
                            <p className="text-sm text-foreground/70 mb-2">{article.description}</p>
                            <div className="flex flex-wrap gap-3 text-xs">
                              {article.author && (
                                <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                  By {article.author}
                                </span>
                              )}
                              {article.read_time && (
                                <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                  {article.read_time}
                                </span>
                              )}
                              {article.category && (
                                <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                  {article.category}
                                </span>
                              )}
                              <span className="bg-secondary text-white px-2 py-1 font-semibold">
                                ✓ Read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-foreground/70 py-8">No articles read yet</p>
                  )}
                </div>
              )}

              {/* Quizzes Tab */}
              {activeTab === "quizzes" && (
                <div className="space-y-4">
                  {profileData?.completedQuizzes.length ? (
                    profileData.completedQuizzes.map((quiz) => (
                      <div
                        key={quiz.id}
                        className="bg-white border-2 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                      >
                        <div>
                          <h3 className="font-bold text-foreground mb-2">{quiz.title}</h3>
                          <p className="text-sm text-foreground/70 mb-3">{quiz.description}</p>
                          <div className="flex flex-wrap gap-3 text-xs">
                            {quiz.category && (
                              <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                {quiz.category}
                              </span>
                            )}
                            {quiz.difficulty && (
                              <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                {quiz.difficulty}
                              </span>
                            )}
                            {quiz.total_questions && (
                              <span className="bg-primary px-2 py-1 border border-foreground font-semibold">
                                {quiz.total_questions} Questions
                              </span>
                            )}
                            <span className="bg-secondary text-white px-2 py-1 font-semibold">
                              ✓ Passed
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-foreground/70 py-8">No quizzes passed yet</p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8 text-center">
              <p className="text-foreground/70 text-lg">
                No completed content yet. Start learning to see your progress here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
