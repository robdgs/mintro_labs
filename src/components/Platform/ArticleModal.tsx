"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark, HiClock, HiUser, HiCalendar } from "react-icons/hi2";
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
  if (!article) return null;

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
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-foreground/70">
                      Did you find this article helpful?
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2 font-bold text-foreground border-2 border-foreground bg-primary hover:bg-secondary hover:text-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    >
                      Close
                    </button>
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
