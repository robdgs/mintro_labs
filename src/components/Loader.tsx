"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#fafaf5] flex items-center justify-center loader-fade-out">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-foreground rounded-full animate-spin-slow border-t-transparent"></div>
          <div className="absolute inset-2 border-4 border-green-600 rounded-full animate-spin-reverse border-b-transparent"></div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">Loading</span>
          <div className="flex gap-1">
            <span
              className="w-2 h-2 bg-foreground rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="w-2 h-2 bg-foreground rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="w-2 h-2 bg-foreground rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
