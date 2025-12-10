"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section pt-20 relative text-foreground">
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
            </div>

            <motion.div
                className="flex flex-wrap flex-col items-center justify-between gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                {/* Text Content */}
                <div
                    className={clsx("flex flex-wrap items-center w-full lg:w-1/2", { "lg:order-1": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left">
                        {/* Title Card */}
                        <motion.div
                            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-200/50 mb-6"
                            variants={childVariants}
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-1.5 h-12 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
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
                        </motion.div>

                        {/* Bullets */}
                        <div className="space-y-4">
                            {bullets.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md"
                                    variants={childVariants}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 border border-secondary/20">
                                            <div className="text-secondary">
                                                {item.icon}
                                            </div>
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

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className={clsx("mt-5 lg:mt-0 w-full lg:w-1/2 flex justify-center", { "lg:order-2": imageAtRight })}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Main image card */}
                        <div className="relative  rounded-3xl  overflow-hidden 0 p-6">
                            
                            
                            {/* Image with hover effect */}
                            <div className="relative  duration-500">
                                <Image 
                                    src={imageSrc} 
                                    alt={title} 
                                    width={300} 
                                    height={450} 
                                    quality={100}
                                    className="rounded-2xl"
                                />
                            </div>

                            
                        </div>

                        
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection