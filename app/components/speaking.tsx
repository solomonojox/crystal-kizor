"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mic,
} from "lucide-react";

const speakingTopics = [
    "Climate-Responsive Design",
    "African Cities & Urbanism",
    "Design Entrepreneurship",
    "Indigenous Materials",
    "The Built Environment",
    "Youth & Purpose",
];

export default function Speaking() {
    return (
        <section id="speaking" className="py-24 lg:py-32 bg-warm-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5"
                    >
                        <p className="text-sm tracking-[0.3em] uppercase text-terracotta mb-6">
                            Speaking & Engagement
                        </p>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-charcoal mb-8">
                            Conversations that move the built environment forward.
                        </h2>
                        <p className="text-stone leading-relaxed mb-10">
                            I speak on architecture, climate-responsive design, African
                            cities, design entrepreneurship, and the intersection of faith,
                            purpose, and creative work. Whether {`it's`} a keynote, a panel, or a
                            workshop, the goal is always the same: to make complex ideas
                            useful.
                        </p>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 text-charcoal text-sm tracking-wide hover:text-terracotta transition-colors duration-300"
                        >
                            Book me for your event
                            <ArrowUpRight
                                size={16}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {speakingTopics.map((topic, i) => (
                                <motion.div
                                    key={topic}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="group flex items-center gap-4 p-5 bg-warm-100 rounded-sm border border-warm-200 hover:border-terracotta/30 transition-all duration-300"
                                >
                                    <Mic
                                        size={16}
                                        className="text-terracotta shrink-0"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-sm text-charcoal tracking-wide">
                                        {topic}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-8 p-6 bg-charcoal text-warm-50 rounded-sm"
                        >
                            <p className="text-sm text-warm-200/80 leading-relaxed italic font-light">
                                {`"The future of architecture will be about connecting humanity
                back to how we were originally meant to live: in harmony with
                the earth and nature."`}
                            </p>
                            <p className="text-xs text-terracotta-light mt-4 tracking-wide">
                                - Crystal Kizor
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}