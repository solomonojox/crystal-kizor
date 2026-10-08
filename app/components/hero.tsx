"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const yNegative = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-30"
        >
            {/* Background texture */}
            <div className="absolute inset-0 bg-linear-to-b from-warm-100 via-warm-50 to-warm-50" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1816' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Decorative shapes */}
            <motion.div
                style={{ y }}
                className="absolute top-20 right-10 lg:right-32 w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-terracotta/5 blur-3xl"
            />
            <motion.div
                style={{ y: yNegative }}
                className="absolute bottom-20 left-10 lg:left-32 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-warm-400/10 blur-3xl"
            />

            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-sm lg:text-sm tracking-[0.3em] uppercase text-terracotta mb-6 lg:mb-8"
                >
                    Architect · Designer · Entrepreneur · Speaker
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-charcoal mb-8 lg:mb-10"
                >
                    Building spaces,
                    <br />
                    products &{" "}
                    <span className="text-terracotta italic">possibilities.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-base lg:text-md text-stone max-w-2xl mx-auto leading-relaxed mb-6 lg:mb-4"
                >
                    I design at the intersection of architecture, culture, and human
                    experience — creating environments, objects, and opportunities that
                    help people live, work, and thrive.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#work"
                        className="group flex items-center gap-2 px-7 py-3.5 bg-charcoal text-warm-50 rounded-full text-sm tracking-wide hover:bg-terracotta transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        Explore My Work
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </a>
                    <a
                        href="#ecosystem"
                        className="group flex items-center gap-2 px-7 py-3.5 border border-charcoal/20 text-charcoal rounded-full text-sm tracking-wide hover:border-terracotta hover:text-terracotta transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        The Ecosystem
                        <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                        />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border border-charcoal/20 flex items-start justify-center p-1.5"
                >
                    <div className="w-1 h-1.5 rounded-full bg-charcoal/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}