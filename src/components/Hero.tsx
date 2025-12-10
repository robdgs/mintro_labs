"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroDetails } from "@/data/hero";
import { 
  FiBookOpen, 
  FiUsers, 
  FiAward, 
  FiTrendingUp,
  FiZap,
  FiTarget
} from "react-icons/fi";
import { BiSolidMedal } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { dl } from "framer-motion/client";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] px-5 min-h-screen"
    >
      {/* Background grid */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Main Title Card - Spans full width on mobile, 8 cols on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200/50 relative overflow-hidden group"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
             {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-3 mb-6"
              >
                <Image
                  src={heroDetails.centerImageSrc}
                  width={60}
                  height={60}
                  quality={100}
                  priority={true}
                  unoptimized={true}
                  alt="Mintro Labs logo"
                  className="relative z-10"
                />
                <div className="h-12 w-1 bg-foreground rounded-full"></div>
                <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Education Reimagined</span>
              </motion.div> */}

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Blockchain <br /> Made Simple
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-accent mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                From dialogue to discovery
              </motion.h2>

              {/* CTA Buttons 
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#partners"
                  className="group/btn relative px-8 py-4 rounded-full bg-primary text-foreground font-semibold shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Partner with Us</span>
                  <div className="absolute inset-0 bg-primary-accent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                </a>
                <a
                  href="#pilot"
                  className="group/btn relative px-8 py-4 rounded-full bg-secondary text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Join the Pilot</span>
                  <div className="absolute inset-0 bg-secondary/80 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                </a>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Logo Card - 4 cols on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-4 bg-[#fafafb] rounded-3xl p-8 shadow-lg flex items-center justify-center relative overflow-hidden group"
          >

            <div className="absolute inset-0 "></div>
            <Image
              src={"./images/3dlogo.png"}
              width={250}
              height={250}
              quality={100}
              priority={true}
              unoptimized={true}
              alt="Mintro Labs arrow"
              className="relative z-10 group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          {/* Stats Cards - 3 cards in a row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 ">
                <BsBarChartFill size={32} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">1500+</h3>
            </div>
            <p className="text-foreground-accent leading-relaxed">
              High Schools willing to increase their STEM offerings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="flex items-center gap-4 mb-4">
              
              <div className="p-4 ">
                <BiSolidMedal size={32} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">1st</h3>
            </div>
            <p className="text-foreground-accent leading-relaxed">
              Scalable and trustful Italian Web3 education provider
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-4">
                <PiGlobeFill size={32} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">$9.39B</h3>
            </div>
            <p className="text-foreground-accent leading-relaxed">
              Web3 Education market potential by 2033
            </p>
          </motion.div>

          {/* Feature Cards 
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="md:col-span-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-6 shadow-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiBookOpen size={28} className="text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Gamified Learning</h4>
              <p className="text-sm text-foreground-accent flex-grow">
                Transform education into engaging journeys with challenges and rewards
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="md:col-span-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-6 shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiAward size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">On-Chain Certificates</h4>
              <p className="text-sm text-foreground-accent flex-grow">
                Earn verified blockchain credentials aligned with EU standards
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="md:col-span-3 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-3xl p-6 shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiUsers size={28} className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Community Driven</h4>
              <p className="text-sm text-foreground-accent flex-grow">
                Collaborate, compete, and grow with peers in a vibrant ecosystem
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="md:col-span-3 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-3xl p-6 shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiZap size={28} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Web3 Ready</h4>
              <p className="text-sm text-foreground-accent flex-grow">
                Learn blockchain, DeFi, and emerging tech hands-on
              </p>
            </div>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;