"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const PartnerDisplay: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative py-[60px] md:py-[80px] px-5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Supporters
          </h2>
          <p className="text-l text-foreground-accent max-w-2xl mx-auto">
           We are proud to be supported by some of the most innovative Minds in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
         

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="md:col-span-6 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[180px]">
              <div className="text-center">
               
               <Image
                    src="/images/buidlguidllogo.svg"
                    alt="BuildGuild logo"
                    width={288}
                    height={288}
                    className="object-contain"
                  /> 
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="md:col-span-6 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[180px]">
              <div className="text-center">
                 <Image
                    src="/images/thegraphlogo.svg"
                    alt="The Graph logo"
                    width={288}
                    height={288}
                    className="object-contain"
                  />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[180px]">
              <div className="text-center">
                 <Image
                    src="/images/ethRomeLogo.svg"
                    alt="Urbe logo"
                    width={158}
                    height={158}
                    className="object-contain"
                  />
              </div>
            </div>
          </motion.div>
                    <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[180px]">
              <div className="text-center">
               <Image
                    src="/images/fileverse-logo.svg"
                    alt="Fileverse logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[180px]">
              <div className="text-center">
 <Image
                    src="/images/42_Logo.svg.png"
                    alt="42 logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
              </div>
            </div>
          </motion.div>
          



        </div>
      </div>
    </section>
  );
};

export default PartnerDisplay;
