"use client";
import Image from "next/image";
import clsx from "clsx";

import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="benefit-section pt-20 relative text-foreground">
      <div className="flex flex-wrap flex-col items-center justify-between gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24 fade-in-view">
        {/* Text Content */}
        <div
          className={clsx("flex flex-wrap items-center w-full lg:w-1/2", {
            "lg:order-1": !imageAtRight,
          })}
        >
          <div className="w-full text-center lg:text-left">
            {/* Title Card */}
            <div className="bg-[#fafaf5] border-2 border-foreground p-6 lg:p-8 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] mb-6 fade-in-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-12 bg-foreground"></div>
                <div className="flex-1">
                  <SectionTitle>
                    <h3 className="lg:max-w-2xl !text-2xl lg:!text-3xl">
                      {title}
                    </h3>
                  </SectionTitle>
                  <p className="mt-3 leading-normal text-foreground-accent text-base">
                    {description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line.trim()}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-4">
              {bullets.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-[#fafaf5] border-2 border-foreground p-4 hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] transition-all duration-200 fade-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-[#fafaf5] border-2 border-foreground group-hover:shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] transition-all duration-200">
                      <div className="text-secondary">{item.icon}</div>
                    </div>

                    <div className="flex-1 text-left">
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-base text-foreground-accent">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className={clsx("mt-5 lg:mt-0 w-full lg:w-1/2 flex justify-center", {
            "lg:order-2": imageAtRight,
          })}
        >
          <div className="relative group fade-in-scale">
            {/* Main image card */}
            <div className="relative bg-[#fafaf5] border-2 border-foreground overflow-hidden p-6 shadow-[6px_6px_0px_0px_rgba(46,46,46,1)]">
              {/* Image with hover effect */}
              <div className="relative duration-500">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={300}
                  height={450}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
