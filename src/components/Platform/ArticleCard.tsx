"use client";

import { IArticle } from "@/types";
import { HiClock, HiDocumentText } from "react-icons/hi2";

interface ArticleCardProps {
  article: IArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group bg-[#fafaf5] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 p-6 cursor-pointer h-[280px]">
      <div className="flex flex-col h-full">
        <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
          {article.category}
        </span>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-foreground/70 mb-4 flex-grow line-clamp-3">
          {article.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-foreground/60">
          <div className="flex items-center gap-1">
            <HiClock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiDocumentText className="w-4 h-4" />
            <span>Article</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
