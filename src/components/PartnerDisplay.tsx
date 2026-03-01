"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";

const PartnerDisplay: React.FC = () => {
  const partners = [
    {
      src: "/images/buidlguidllogo.svg",
      alt: "BuildGuild logo",
      width: 288,
      height: 288,
    },
    {
      src: "/images/thegraphlogo.svg",
      alt: "The Graph logo",
      width: 288,
      height: 288,
    },
    {
      src: "/images/ethRomeLogo.svg",
      alt: "Urbe logo",
      width: 158,
      height: 158,
    },
    {
      src: "/images/fileverse-logo.svg",
      alt: "Fileverse logo",
      width: 160,
      height: 160,
    },
    {
      src: "/images/42_Logo.svg.png",
      alt: "42 logo",
      width: 160,
      height: 160,
    },
  ];

  const xRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    const speed = 0.3;
    xRef.current -= speed;

    const singleSetWidth = (250 + 64) * partners.length;

    if (Math.abs(xRef.current) >= singleSetWidth) {
      xRef.current = xRef.current % singleSetWidth;
    }

    containerRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <section id="partners" className="relative py-[60px] md:py-[80px] px-5">
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
            We are proud to be supported by some of the most innovative Minds in
            the industry.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <div ref={containerRef} className="flex gap-16 will-change-transform">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[250px] shrink-0"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerDisplay;
