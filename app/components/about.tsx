"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-charcoal text-warm-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5"
                    >
                        <p className="text-sm tracking-[0.3em] uppercase text-terracotta-light mb-6">
                            The Throughline
                        </p>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8">
                            I {`don't`} just design buildings. I design how people live.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <p className="text-warm-200 text-base lg:text-lg leading-relaxed">
                            My work spans architecture, interior design, furniture, education,
                            speaking, and community-building. On the surface, these might look
                            like different paths. {`They're`} not.
                        </p>
                        <p className="text-warm-200 text-base lg:text-lg leading-relaxed">
                            Every project starts with the same question:{" "}
                            <span className="text-warm-50 italic">
                                How do we create environments — physical, intellectual,
                                spiritual — where people can become fully alive?
                            </span>
                        </p>
                        <p className="text-warm-200 text-base lg:text-lg leading-relaxed">
                            That question led me to found Studio COKA, to design furniture that
                            carries African stories, to build platforms that equip the next
                            generation of architects, to expand access to education, and to
                            walk with young people toward freedom and purpose.
                        </p>
                        <p className="text-warm-200 text-base lg:text-lg leading-relaxed">
                            The medium changes. The mission {`doesn't`}.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}