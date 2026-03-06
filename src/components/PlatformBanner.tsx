import Link from "next/link";
import { HiAcademicCap, HiArrowRight } from "react-icons/hi2";

const PlatformBanner: React.FC = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative bg-primary border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(46,46,46,1)] p-8 md:p-12">
          {/* Icon decoration */}
          <div className="absolute -top-6 -left-6 bg-accent border-4 border-foreground p-4 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] bg-white">
            <HiAcademicCap className="w-8 h-8 text-foreground" />
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Try Our Learning Platform
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Explore our courses, read insightful articles, and test your
              knowledge with interactive quizzes.
            </p>

            <Link href="/platform">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-foreground font-bold text-lg border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
                Explore Platform
                <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBanner;
