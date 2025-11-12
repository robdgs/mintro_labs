"use client";
//import { ctaDetails } from "@/data/cta"
import { motion } from "framer-motion";
import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
  return (
    <section id="why-now" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-16 sm:py-24">
        <div className="h-full w-full">
          {/* Background grid and glow */}
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          {/* Content */}
          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <motion.h2
        
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-6 max-w-3xl text-primary"
            >
              WHY NOW
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-secondary"
            >
              Web3 Needs New Minds. Education Needs New Tools.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-primary leading-relaxed"
            >
              The blockchain revolution won’t succeed with yesterday’s education models.{" "}
              <br/>
              <span className="text-primary font-medium">
                Mintro Labs bridges the gap between technological innovation and human learning
              </span>{" "}
            by empowering digital-native generations to build the decentralized future.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA