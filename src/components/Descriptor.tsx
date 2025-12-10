"use client";
import React from "react";
import { motion } from "framer-motion";
import { heroDetails } from "@/data/hero";

const Descriptor: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 px-5 overflow-hidden">


      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative quote mark */}
          <div className="absolute -left-4 md:-left-8 top-0 text-8xl md:text-9xl text-primary/20 font-serif leading-none select-none">
            "
          </div>

          {/* Main content card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200/50">
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-secondary rounded-tr-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-primary rounded-bl-3xl opacity-30"></div>

            {/* Text content */}
            <div className="relative z-10">
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light text-center">
                {heroDetails.subheading.split(". ").map((sentence, index, array) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="inline-block"
                  >
                    {sentence}
                    {index < array.length - 1 && ". "}
                  </motion.span>
                ))}
              </p>

              {/* Decorative bottom element */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
              ></motion.div>
            </div>
          </div>

          {/* Decorative closing quote mark */}
          <div className="absolute -right-4 md:-right-8 bottom-0 text-8xl md:text-9xl text-secondary/20 font-serif leading-none select-none">
            "
          </div>
        </motion.div>

       
      </div>
    </section>
  );
};

export default Descriptor;