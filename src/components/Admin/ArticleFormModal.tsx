"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IArticle } from "@/types";
import { HiXMark } from "react-icons/hi2";

interface ArticleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: IArticle | null;
  onSuccess: () => void;
}

export default function ArticleFormModal({
  isOpen,
  onClose,
  article,
  onSuccess,
}: ArticleFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    readTime: "",
    category: "",
    thumbnail: "",
    author: "",
    date: "",
    content: "",
  });

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title,
        description: article.description,
        readTime: article.readTime,
        category: article.category,
        thumbnail: article.thumbnail,
        author: article.author || "",
        date: article.date || "",
        content: article.content || "",
      });
    } else {
      resetForm();
    }
  }, [article, isOpen]);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      readTime: "",
      category: "",
      thumbnail: "",
      author: "",
      date: "",
      content: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const articleData: Partial<IArticle> = {
        ...formData,
      };

      if (article) {
        articleData.id = article.id;
      }

      const method = article ? "PUT" : "POST";
      const response = await fetch("/api/admin/articles", {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(articleData),
      });

      const data = await response.json();

      if (data.success) {
        onSuccess();
        resetForm();
      } else {
        alert(data.message || "Failed to save article");
      }
    } catch (err) {
      alert("An error occurred while saving the article");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
                    {article ? "Edit Article" : "Add New Article"}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Title *
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Category *
                        </label>
                        <input
                          type="text"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Read Time *
                        </label>
                        <input
                          type="text"
                          name="readTime"
                          value={formData.readTime}
                          onChange={handleChange}
                          required
                          placeholder="e.g., 5 min read"
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Author
                        </label>
                        <input
                          type="text"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Thumbnail URL
                        </label>
                        <input
                          type="text"
                          name="thumbnail"
                          value={formData.thumbnail}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Date
                        </label>
                        <input
                          type="text"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="e.g., March 6, 2026"
                          className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
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
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Content (HTML) *
                      </label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        rows={12}
                        className="w-full px-4 py-2 border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-secondary font-mono text-sm"
                        placeholder="<div>Article content in HTML...</div>"
                      />
                    </div>
                  </div>

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
                        : article
                          ? "Update Article"
                          : "Create Article"}
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
