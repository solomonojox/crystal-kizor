"use client";

import { motion} from "framer-motion";
import {
    ArrowRight,
    Building2,
    Mic,
    Globe,
} from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-charcoal text-warm-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm tracking-[0.3em] uppercase text-terracotta-light mb-6">
                            Next Steps
                        </p>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight mb-8">
                            {`Whatever brought you here, let's build on it.`}
                        </h2>
                        <p className="text-warm-200/80 text-base lg:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                            Whether {`you're`} looking for an architect, a collaborator, a
                            speaker, or a place to belong — {`there's`} a door for you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-16"
                    >
                        {[
                            {
                                label: "Architecture & Design",
                                sub: "Studio COKA",
                                icon: Building2,
                            },
                            {
                                label: "Speaking & Media",
                                sub: "Bookings & Press",
                                icon: Mic,
                            },
                            {
                                label: "Community & Partnership",
                                sub: "AKO · Alive and Free",
                                icon: Globe,
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={i}
                                    href="#"
                                    className="group p-6 lg:p-8 border border-warm-50/10 rounded-sm hover:border-terracotta-light/40 hover:bg-warm-50/5 transition-all duration-500 text-left"
                                >
                                    <Icon
                                        size={20}
                                        className="text-terracotta-light mb-4"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-sm text-warm-50 tracking-wide mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-xs text-warm-200/50">{item.sub}</p>
                                </a>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="mailto:hello@crystalkizor.com"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-warm-50 text-charcoal rounded-full text-sm tracking-wide hover:bg-terracotta hover:text-warm-50 transition-all duration-300"
                        >
                            {`Start a conversation`}
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}