"use client";

import React, { Fragment, useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Dialog, Transition } from "@headlessui/react";
import {
  HiOutlineXMark,
  HiClock,
  HiUser,
  HiCalendar,
  HiCheckCircle,
} from "react-icons/hi2";
import { IArticle } from "@/types";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: IArticle | null;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  article,
}) => {
  const { user, authenticated } = usePrivy();
  const [isMarkedAsRead, setIsMarkedAsRead] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if article is already read when modal opens
  useEffect(() => {
    const checkReadStatus = async () => {
      if (!article || !authenticated || !user) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setIsMarkedAsRead(false); // Reset state when article changes

      try {
        const response = await fetch(
          `/api/user/progress/check?userId=${user.id}&contentType=article&contentId=${article.id}`,
        );
        if (response.ok) {
          const data = await response.json();
          setIsMarkedAsRead(data.completed || false);
        }
      } catch (error) {
        console.error("Error checking read status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      checkReadStatus();
    }
  }, [isOpen, article, authenticated, user]);

  if (!article) return null;

  const markAsRead = async () => {
    if (!authenticated || !user) return;

    try {
      const response = await fetch("/api/user/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          contentType: "article",
          contentId: article.id,
          completed: true,
        }),
      });

      if (response.ok) {
        setIsMarkedAsRead(true);
      }
    } catch (error) {
      console.error("Error marking article as read:", error);
    }
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
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden bg-[#fafaf5] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] transition-all">
                {/* Header */}
                <div className="relative border-b-4 border-foreground bg-primary p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 border-2 border-foreground bg-[#fafaf5] hover:bg-secondary hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
                  >
                    <HiOutlineXMark className="h-6 w-6" />
                  </button>

                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <Dialog.Title className="text-3xl md:text-4xl font-bold text-foreground mt-2 pr-12">
                    {article.title}
                  </Dialog.Title>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    {article.author && (
                      <div className="flex items-center gap-1">
                        <HiUser className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    )}
                    {article.date && (
                      <div className="flex items-center gap-1">
                        <HiCalendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                  <div className="prose prose-lg max-w-none">
                    <div
                      className="text-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: article.content || article.description,
                      }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t-4 border-foreground bg-primary/30 p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-foreground/70">
                      Did you find this article helpful?
                    </p>
                    <div className="flex gap-3">
                      {authenticated && !isMarkedAsRead && (
                        <button
                          onClick={markAsRead}
                          className="px-6 py-2 font-bold text-white border-2 border-foreground bg-secondary hover:bg-foreground transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                        >
                          <HiCheckCircle className="inline w-5 h-5 mr-2" />
                          Mark as Read
                        </button>
                      )}
                      {isMarkedAsRead && (
                        <span className="px-6 py-2 font-bold text-foreground border-2 border-foreground bg-primary flex items-center gap-2">
                          <HiCheckCircle className="w-5 h-5 text-green-600" />
                          Completed!
                        </span>
                      )}
                      <button
                        onClick={onClose}
                        className="px-6 py-2 font-bold text-foreground border-2 border-foreground bg-primary hover:bg-secondary hover:text-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ArticleModal;
