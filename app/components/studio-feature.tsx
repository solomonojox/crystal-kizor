"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Building2,
} from "lucide-react";
import Image from "next/image";

export default function StudioFeature() {
    return (
        <section id="work" className="py-24 lg:py-32 bg-warm-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 lg:mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-terracotta mb-6">
                        Flagship Practice
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-charcoal max-w-3xl">
                        Studio COKA
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative aspect-4/5 rounded-sm overflow-hidden bg-warm-200"
                    >
                        <Image alt="hey" src="/assets/crystal/Architectural Studio Portrait.png" fill className="object-cover"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <Building2
                                    size={48}
                                    className="mx-auto text-warm-400 mb-4"
                                    strokeWidth={1}
                                />
                                <p className="text-sm text-stone tracking-wide">
                                    [Studio COKA project imagery]
                                </p>
                                <p className="text-xs text-warm-400 mt-2">
                                    {`Nigeria's`} first fully off-grid hospital, Nsukka
                                </p>
                            </div>
                        </div>
                        {/* Subtle overlay pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 1px 1px, #1a1816 1px, transparent 0)",
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-3">
                                Architecture · Interiors · Construction
                            </p>
                            <p className="text-lg lg:text-xl text-charcoal leading-relaxed font-light">
                                Climate-responsive design that starts with the land, the light,
                                and the lives it will hold.
                            </p>
                        </div>

                        <div className="space-y-4 text-stone leading-relaxed">
                            <p>
                                Studio COKA is my architectural practice — a space where
                                sustainability {`isn't`} a trend but a founding principle. We design
                                with orientation, shading, natural ventilation, and indigenous
                                materials. The goal is simple: spaces that cost less to live in,
                                feel more like home, and tell the story of the people who use
                                them.
                            </p>
                            <p>
                                Our work includes residential and commercial projects, with a
                                portfolio highlight being {`Nigeria's`} first fully off-grid,
                                solar-powered hospital — a project that proves thoughtful design
                                can serve both people and planet.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="border-l-2 border-terracotta pl-4">
                                <p className="font-display text-3xl lg:text-4xl text-charcoal">
                                    Off-grid
                                </p>
                                <p className="text-sm text-stone mt-1">
                                    Fully solar-powered hospital design
                                </p>
                            </div>
                            <div className="border-l-2 border-terracotta pl-4">
                                <p className="font-display text-3xl lg:text-4xl text-charcoal">
                                    Indigenous
                                </p>
                                <p className="text-sm text-stone mt-1">
                                    Materials & knowledge systems
                                </p>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="group inline-flex items-center gap-2 text-charcoal text-sm tracking-wide hover:text-terracotta transition-colors duration-300 pt-4"
                        >
                            Visit Studio COKA
                            <ArrowUpRight
                                size={16}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}