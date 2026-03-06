"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HiOutlineXMark,
  HiChevronLeft,
  HiChevronRight,
  HiClock,
  HiAcademicCap,
  HiUsers,
  HiCheckCircle,
} from "react-icons/hi2";
import { ICourse } from "@/types";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: ICourse | null;
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  course,
}) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [showOverview, setShowOverview] = useState(true);

  if (!course) return null;

  const handleClose = () => {
    setCurrentModule(0);
    setShowOverview(true);
    onClose();
  };

  const handleModuleClick = (index: number) => {
    setCurrentModule(index);
    setShowOverview(false);
  };

  const handleNext = () => {
    if (course.modules && currentModule < course.modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const handlePrevious = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    } else {
      setShowOverview(true);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-800";
      default:
        return "bg-gray-100 text-gray-800 border-gray-800";
    }
  };

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
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden bg-[#fafaf5] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] transition-all">
                {/* Header */}
                <div className="relative border-b-4 border-foreground bg-primary p-6">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 border-2 border-foreground bg-[#fafaf5] hover:bg-secondary hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
                  >
                    <HiOutlineXMark className="h-6 w-6" />
                  </button>

                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-1 border ${getLevelColor(
                        course.level,
                      )}`}
                    >
                      {course.level}
                    </span>
                  </div>

                  <Dialog.Title className="text-3xl md:text-4xl font-bold text-foreground mb-4 pr-12">
                    {course.title}
                  </Dialog.Title>

                  <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    {course.instructor && (
                      <div className="flex items-center gap-1">
                        <HiAcademicCap className="w-4 h-4" />
                        <span>{course.instructor}</span>
                      </div>
                    )}
                    {course.students && (
                      <div className="flex items-center gap-1">
                        <HiUsers className="w-4 h-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    )}
                    {course.modules && (
                      <div className="flex items-center gap-1">
                        <HiCheckCircle className="w-4 h-4" />
                        <span>{course.modules.length} modules</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Sidebar - Module List */}
                  <div className="w-full md:w-64 border-b-4 md:border-b-0 md:border-r-4 border-foreground bg-primary/20 p-4 max-h-96 md:max-h-[60vh] overflow-y-auto">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Course Content
                    </h3>
                    <button
                      onClick={() => setShowOverview(true)}
                      className={`w-full text-left p-3 mb-2 border-2 border-foreground transition-all duration-200 ${
                        showOverview
                          ? "bg-secondary text-white shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                          : "bg-[#fafaf5] hover:bg-primary shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
                      }`}
                    >
                      <div className="font-semibold">Overview</div>
                      <div className="text-xs mt-1 opacity-80">
                        Course introduction
                      </div>
                    </button>
                    {course.modules?.map((module, index) => (
                      <button
                        key={module.id}
                        onClick={() => handleModuleClick(index)}
                        className={`w-full text-left p-3 mb-2 border-2 border-foreground transition-all duration-200 ${
                          !showOverview && currentModule === index
                            ? "bg-secondary text-white shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                            : "bg-[#fafaf5] hover:bg-primary shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
                        }`}
                      >
                        <div className="font-semibold">
                          {index + 1}. {module.title}
                        </div>
                        <div className="text-xs mt-1 opacity-80">
                          {module.duration}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6 md:p-8 max-h-96 md:max-h-[60vh] overflow-y-auto">
                    {showOverview ? (
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                          Course Overview
                        </h2>
                        <p className="text-foreground leading-relaxed mb-6">
                          {course.description}
                        </p>

                        {course.modules && course.modules.length > 0 && (
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                              What You'll Learn
                            </h3>
                            <div className="space-y-3">
                              {course.modules.map((module, index) => (
                                <div
                                  key={module.id}
                                  className="flex items-start gap-3 p-4 bg-primary/30 border-2 border-foreground"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white border-2 border-foreground flex items-center justify-center font-bold">
                                    {index + 1}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-foreground mb-1">
                                      {module.title}
                                    </h4>
                                    <p className="text-sm text-foreground/70">
                                      {module.description}
                                    </p>
                                    <p className="text-xs text-foreground/60 mt-1">
                                      {module.duration}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-8">
                          <button
                            onClick={() => {
                              if (course.modules && course.modules.length > 0) {
                                handleModuleClick(0);
                              }
                            }}
                            disabled={
                              !course.modules || course.modules.length === 0
                            }
                            className="w-full md:w-auto px-8 py-3 font-bold text-white border-2 border-foreground bg-secondary hover:bg-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                          >
                            Start Course
                          </button>
                        </div>
                      </div>
                    ) : (
                      course.modules && (
                        <div>
                          <div className="mb-6">
                            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                              <span>
                                Module {currentModule + 1} of{" "}
                                {course.modules.length}
                              </span>
                              <span>•</span>
                              <span>
                                {course.modules[currentModule].duration}
                              </span>
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-3">
                              {course.modules[currentModule].title}
                            </h2>
                            <p className="text-foreground/70">
                              {course.modules[currentModule].description}
                            </p>
                          </div>

                          <div className="prose prose-lg max-w-none">
                            <div
                              className="text-foreground leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: course.modules[currentModule].content,
                              }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Footer Navigation */}
                <div className="border-t-4 border-foreground bg-primary/30 p-6">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      disabled={showOverview && currentModule === 0}
                      className="flex items-center gap-2 px-6 py-2 font-bold text-foreground border-2 border-foreground bg-[#fafaf5] hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    >
                      <HiChevronLeft className="w-5 h-5" />
                      Previous
                    </button>

                    <div className="text-sm text-foreground/70">
                      {showOverview
                        ? "Overview"
                        : `${currentModule + 1} / ${course.modules?.length || 0}`}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={
                        !course.modules ||
                        currentModule >= course.modules.length - 1
                      }
                      className="flex items-center gap-2 px-6 py-2 font-bold text-white border-2 border-foreground bg-secondary hover:bg-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    >
                      Next
                      <HiChevronRight className="w-5 h-5" />
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

export default CourseModal;
