"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex place-content-evenly flex-col md:flex-row pt-[140px] pb-[120px] md:pt-[200px] md:pb-[140px] px-5"
    >
      {/* Background grid */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex"
      >
        <Image
          src={heroDetails.centerImageSrc}
          width={184}
          height={140}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="Mintro Labs arrow"
          className="relative mx-auto z-10"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-left"
      >
        <motion.h1
          className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Mintro Labs
        </motion.h1>

        <motion.h4
          className="text-3xl md:text-3xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-1xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        >
          From Dialogue to Discovery.
        </motion.h4>

        <motion.p
          className="mt-6 text-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          {heroDetails.subheading}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row sm:items-center items-start sm:gap-4 gap-3 w-full max-w-lg"
        >
          <a
            href="#partners"
            className="px-8 py-3 rounded-full bg-primary text-foreground font-semibold shadow-md hover:bg-primary-accent transition-colors duration-200"
          >
            Partner with Us
          </a>
          <a
            href="#pilot"
            className="px-8 py-3 rounded-full bg-primary text-foreground font-semibold shadow-md hover:bg-primary-accent transition-colors duration-200"
          >
           Join the Pilot
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
