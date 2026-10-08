"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Building2,
    BookOpen,
    Users,
    Heart,
    Sparkles,
    Layers,
} from "lucide-react";

const initiatives = [
    {
        id: "studio-coka",
        name: "Studio COKA",
        tagline: "Architecture, Interior Design & Construction",
        description:
            "Thoughtful, climate-responsive design rooted in indigenous materials and context-driven innovation. The studio behind Nigeria's first fully off-grid, solar-powered hospital.",
        href: "#",
        icon: Building2,
        accent: "from-amber-50 to-orange-50",
    },
    {
        id: "elevated",
        name: "ELEvated",
        tagline: "Furniture & Product Design",
        description:
            "Contemporary furniture and product design rooted in African context, materials, and ideas. Functional objects that carry cultural memory.",
        href: "#",
        icon: Layers,
        accent: "from-stone-50 to-warm-100",
    },
    {
        id: "tea",
        name: "The Effective Architect",
        tagline: "Architecture Education & Media",
        description:
            "Helping architects and built-environment professionals learn, grow, and build better careers through education, media, and community.",
        href: "#",
        icon: BookOpen,
        accent: "from-blue-50 to-slate-50",
    },
    {
        id: "ako",
        name: "AKO Alliance",
        tagline: "Education Access & Opportunity",
        description:
            "Expanding access to education and creating opportunities for children and young people across Nigeria and beyond.",
        href: "#",
        icon: Users,
        accent: "from-emerald-50 to-teal-50",
    },
    {
        id: "alive-free",
        name: "Alive and Free",
        tagline: "Christian Youth Movement",
        description:
            "Helping young people walk in truth, healing, freedom, identity, purpose, and life in Christ.",
        href: "#",
        icon: Heart,
        accent: "from-rose-50 to-pink-50",
    },
];

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="py-24 lg:py-32 bg-warm-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 lg:mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-terracotta mb-6">
                        The Ecosystem
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-charcoal max-w-3xl mb-6">
                        One vision. Many expressions.
                    </h2>
                    <p className="text-stone text-base lg:text-lg max-w-2xl leading-relaxed">
                        Each initiative is a different answer to the same question: how do
                        we create conditions for people to flourish?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {initiatives.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={item.id}
                                href={item.href}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-warm-50 rounded-sm p-8 lg:p-10 border border-warm-200 hover:border-terracotta/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(184,99,74,0.15)]"
                            >
                                <div
                                    className={`w-12 h-12 rounded-full bg-linear-to-br ${item.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <Icon
                                        size={20}
                                        className="text-charcoal"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <p className="text-xs tracking-[0.2em] uppercase text-terracotta mb-2">
                                    {item.tagline}
                                </p>

                                <h3 className="font-display text-xl lg:text-2xl text-charcoal mb-4 tracking-tight">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-stone leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="mt-6 flex items-center gap-1.5 text-sm text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Learn more
                                    <ArrowUpRight size={14} />
                                </div>
                            </motion.a>
                        );
                    })}

                    {/* Personal brand card - spans as the 6th item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-charcoal text-warm-50 rounded-sm p-8 lg:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-full bg-warm-50/10 flex items-center justify-center mb-6">
                                <Sparkles size={20} className="text-terracotta-light" strokeWidth={1.5} />
                            </div>
                            <p className="text-xs tracking-[0.2em] uppercase text-terracotta-light mb-2">
                                Research · Writing · Media
                            </p>
                            <h3 className="font-display text-xl lg:text-2xl tracking-tight mb-4">
                                Crystal Kizor
                            </h3>
                            <p className="text-sm text-warm-200/80 leading-relaxed">
                                Ideas, research, and commentary on architecture, African cities,
                                design, and the built environment - the connective tissue across
                                everything I do.
                            </p>
                        </div>
                        <a
                            href="#speaking"
                            className="group mt-8 inline-flex items-center gap-2 text-sm text-warm-50 hover:text-terracotta-light transition-colors duration-300"
                        >
                            Explore
                            <ArrowUpRight
                                size={14}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}