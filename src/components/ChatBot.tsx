"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiXMark, HiPaperAirplane } from "react-icons/hi2";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  embedded?: boolean;
}

export default function ChatBot({ embedded = false }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(embedded ? true : false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.map((msg) => ({
            type: msg.type,
            content: msg.content,
          })).concat({
            type: "user",
            content: inputValue,
          }),
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: data.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: "Sorry, I encountered an error. Please try again.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Embedded mode - full width chat
  if (embedded) {
    return (
      <div className="bg-[#fafaf5] border-2 border-foreground rounded-lg shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] flex flex-col overflow-hidden h-[600px]">
        {/* Header */}
        <div className="bg-secondary text-white p-4 border-b-2 border-foreground">
          <h3 className="font-bold text-lg">Learning Assistant</h3>
          <p className="text-sm opacity-90">Ask me anything</p>
        </div>

        {/* Messages Container */}
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 border-2 border-foreground rounded ${
                  message.type === "user"
                    ? "bg-secondary text-white"
                    : "bg-white text-foreground"
                }`}
              >
                {message.type === "user" ? (
                  <p className="text-sm">{message.content}</p>
                ) : (
                  <div className="prose prose-sm max-w-none text-sm">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-foreground max-w-xs px-4 py-2 border-2 border-foreground rounded">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-foreground rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-foreground rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t-2 border-foreground bg-white p-4">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e as any);
                }
              }}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 border-2 border-foreground bg-white focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] transition-all text-sm"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={(e) => handleSendMessage(e as any)}
              disabled={isLoading || !inputValue.trim()}
              className="px-3 py-2 bg-secondary text-white border-2 border-foreground font-bold hover:bg-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
            >
              <HiPaperAirplane className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Floating mode - bottom right
  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-secondary text-white border-2 border-foreground rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 font-bold text-xl"
      >
        {isOpen ? <HiXMark className="w-6 h-6" /> : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-[#fafaf5] border-2 border-foreground rounded-lg shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-secondary text-white p-4 border-b-2 border-foreground">
            <h3 className="font-bold text-lg">Learning Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything</p>
          </div>

          {/* Messages Container */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 border-2 border-foreground rounded ${
                    message.type === "user"
                      ? "bg-secondary text-white"
                      : "bg-white text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-foreground max-w-xs px-4 py-2 border-2 border-foreground rounded">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-foreground bg-white p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border-2 border-foreground bg-white focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] transition-all text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-3 py-2 bg-secondary text-white border-2 border-foreground font-bold hover:bg-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[2px_2px_0px_0px_rgba(46,46,46,1)]"
              >
                <HiPaperAirplane className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
