"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiUser, HiEnvelope, HiWallet, HiArrowLeft } from "react-icons/hi2";
import ProgressModal from "@/components/Profile/ProgressModal";

interface UserProgress {
  coursesCompleted: number;
  articlesRead: number;
  quizzesPassed: number;
}

export default function ProfilePage() {
  const { authenticated, user, logout, ready } = usePrivy();
  const router = useRouter();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "articles" | "courses" | "quizzes"
  >("articles");

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/platform");
    }
  }, [authenticated, ready, router]);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!authenticated || !user) return;

      try {
        const response = await fetch(`/api/user/progress?userId=${user.id}`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.progress) {
            setProgress(data.progress);
          }
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      } finally {
        setLoading(false);
      }
    };

    if (ready && authenticated) {
      fetchProgress();
    }
  }, [authenticated, user, ready]);

  if (!ready || !authenticated || !user) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-foreground border-t-transparent"></div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    router.push("/platform");
  };

  const openModal = (type: "articles" | "courses" | "quizzes") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="px-5 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
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
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 bg-primary border-2 border-foreground rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                <HiUser className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Your Profile
                </h1>
                <p className="text-foreground/70">
                  Manage your personal information
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-6">
              {/* Email */}
              {user.email && (
                <div className="flex items-start gap-4 p-4 bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                  <HiEnvelope className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground mb-1">Email</p>
                    <p className="text-foreground/70">{user.email.address}</p>
                  </div>
                </div>
              )}

              {/* Wallet */}
              {user.wallet && (
                <div className="flex items-start gap-4 p-4 bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                  <HiWallet className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-foreground mb-1">Wallet</p>
                    <p className="text-foreground/70 break-all font-mono text-sm">
                      {user.wallet.address}
                    </p>
                    <p className="text-xs text-foreground/50 mt-1">
                      Chain: {user.wallet.chainType}
                    </p>
                  </div>
                </div>
              )}

              {/* Created At */}
              <div className="flex items-start gap-4 p-4 bg-white border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]">
                <div className="flex-1">
                  <p className="font-bold text-foreground mb-1">Member since</p>
                  <p className="text-foreground/70">
                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleLogout}
              className="bg-secondary text-white font-bold px-8 py-4 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Logout
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-12 bg-primary border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Your Progress
            </h2>
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-foreground border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                  onClick={() => openModal("courses")}
                  className="bg-white border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer"
                >
                  <p className="text-4xl font-bold text-secondary mb-2">
                    {progress?.coursesCompleted ?? 0}
                  </p>
                  <p className="text-foreground/70">Courses Completed</p>
                </button>
                <button
                  onClick={() => openModal("articles")}
                  className="bg-white border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer"
                >
                  <p className="text-4xl font-bold text-secondary mb-2">
                    {progress?.articlesRead ?? 0}
                  </p>
                  <p className="text-foreground/70">Articles Read</p>
                </button>
                <button
                  onClick={() => openModal("quizzes")}
                  className="bg-white border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer"
                >
                  <p className="text-4xl font-bold text-secondary mb-2">
                    {progress?.quizzesPassed ?? 0}
                  </p>
                  <p className="text-foreground/70">Quizzes Passed</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Modal */}
      {user && (
        <ProgressModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={modalType}
          userId={user.id}
        />
      )}
    </div>
  );
}
