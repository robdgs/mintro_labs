"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ICourse, ICourseModule } from "@/types";
import { HiXMark, HiPlus, HiTrash } from "react-icons/hi2";

interface CourseFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: ICourse | null;
  onSuccess: () => void;
}

export default function CourseFormModal({
  isOpen,
  onClose,
  course,
  onSuccess,
}: CourseFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    level: "Beginner" as "Beginner" | "Intermediate" | "Advanced",
    instructor: "",
    students: 0,
  });
  const [modules, setModules] = useState<ICourseModule[]>([]);

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        description: course.description,
        duration: course.duration,
        level: course.level,
        instructor: course.instructor || "",
        students: course.students || 0,
      });
      setModules(course.modules || []);
    } else {
      resetForm();
    }
  }, [course, isOpen]);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      duration: "",
      level: "Beginner",
      instructor: "",
      students: 0,
    });
    setModules([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const courseData: Partial<ICourse> = {
        ...formData,
        modules,
      };

      if (course) {
        courseData.id = course.id;
      }

      const method = course ? "PUT" : "POST";
      const response = await fetch("/api/admin/courses", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });

      const data = await response.json();

      if (data.success) {
        onSuccess();
        resetForm();
      } else {
        alert(data.message || "Failed to save course");
      }
    } catch (err) {
      alert("An error occurred while saving the course");
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
      [name]: name === "students" ? parseInt(value) || 0 : value,
    });
  };

  const addModule = () => {
    setModules([
      ...modules,
      {
        id: `module-${Date.now()}`,
        title: "",
        description: "",
        content: "",
        duration: "",
        order: modules.length + 1,
      },
    ]);
  };

  const removeModule = (index: number) => {
    setModules(modules.filter((_, i) => i !== index));
  };

  const updateModule = (
    index: number,
    field: keyof ICourseModule,
    value: string,
  ) => {
    const newModules = [...modules];
    newModules[index] = {
      ...newModules[index],
      [field]: value,
    };
    setModules(newModules);
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
                    {course ? "Edit Course" : "Add New Course"}
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
                    {/* Course Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Course Title *
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Enter course title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Instructor *
                        </label>
                        <input
                          type="text"
                          name="instructor"
                          value={formData.instructor}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Instructor name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Duration *
                        </label>
                        <input
                          type="text"
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="e.g., 6 weeks"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Level *
                        </label>
                        <select
                          name="level"
                          value={formData.level}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Students
                        </label>
                        <input
                          type="number"
                          name="students"
                          value={formData.students}
                          onChange={handleChange}
                          min="0"
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Number of students"
                        />
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
                        placeholder="Course description"
                      />
                    </div>

                    {/* Modules */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-foreground">
                          Modules
                        </h3>
                        <button
                          type="button"
                          onClick={addModule}
                          className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-secondary border-2 border-foreground hover:bg-foreground transition-colors shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
                        >
                          <HiPlus className="w-4 h-4" />
                          Add Module
                        </button>
                      </div>

                      {modules.length === 0 && (
                        <div className="text-center py-8 border-2 border-dashed border-foreground/30 text-foreground/50">
                          No modules yet. Click "Add Module" to create one.
                        </div>
                      )}

                      <div className="space-y-4">
                        {modules.map((module, index) => (
                          <div
                            key={module.id}
                            className="bg-white border-2 border-foreground p-4"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-foreground">
                                Module {index + 1}
                              </h4>
                              <button
                                type="button"
                                onClick={() => removeModule(index)}
                                className="p-2 text-red-600 hover:bg-red-100 border-2 border-foreground transition-colors"
                              >
                                <HiTrash className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Module Title *
                                </label>
                                <input
                                  type="text"
                                  value={module.title}
                                  onChange={(e) =>
                                    updateModule(index, "title", e.target.value)
                                  }
                                  required
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                  placeholder="Module title"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Description *
                                </label>
                                <textarea
                                  value={module.description}
                                  onChange={(e) =>
                                    updateModule(
                                      index,
                                      "description",
                                      e.target.value,
                                    )
                                  }
                                  required
                                  rows={2}
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                  placeholder="Brief description of the module"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Duration *
                                </label>
                                <input
                                  type="text"
                                  value={module.duration}
                                  onChange={(e) =>
                                    updateModule(
                                      index,
                                      "duration",
                                      e.target.value,
                                    )
                                  }
                                  required
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                  placeholder="e.g., 30 min"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-bold text-foreground mb-2">
                                  Content (HTML) *
                                </label>
                                <textarea
                                  value={module.content}
                                  onChange={(e) =>
                                    updateModule(
                                      index,
                                      "content",
                                      e.target.value,
                                    )
                                  }
                                  required
                                  rows={6}
                                  className="w-full px-3 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary font-mono text-sm"
                                  placeholder="<div>Module content in HTML...</div>"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
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
                        : course
                          ? "Update Course"
                          : "Create Course"}
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
