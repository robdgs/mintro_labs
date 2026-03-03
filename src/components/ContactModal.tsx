"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineXMark } from "react-icons/hi2";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula invio form - sostituire con la logica reale
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form dopo 2 secondi
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitStatus("idle");
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden bg-[#fafaf5] border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] transition-all">
                {/* Header */}
                <div className="relative border-b-2 border-foreground bg-primary p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-foreground"
                  >
                    Contact Us
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-foreground/80 font-semibold">
                    Let's discuss how we can help transform education together
                  </p>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-foreground/10 transition-colors border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                  >
                    <HiOutlineXMark className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-foreground mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-foreground bg-white text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] focus:shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-foreground bg-white text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] focus:shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-foreground mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-foreground bg-white text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] focus:shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-foreground bg-white text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all resize-none shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] focus:shadow-[3px_3px_0px_0px_rgba(46,46,46,1)]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-secondary/10 border-2 border-secondary text-secondary font-bold">
                      ✓ Message sent successfully!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border-2 border-red-500 text-red-700 font-bold">
                      ✗ Error sending message. Please try again.
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-secondary text-white font-bold border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] hover:shadow-[5px_5px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 bg-white text-foreground font-bold border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(46,46,46,1)] hover:shadow-[5px_5px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                      Cancel
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
};

export default ContactModal;
