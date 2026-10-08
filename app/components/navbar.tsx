"use client";

import { motion } from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Speaking", href: "#speaking" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-warm-50/90 backdrop-blur-md border-b border-warm-200"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
                <a
                    href="#"
                    className="font-display text-lg lg:text-xl tracking-tight text-charcoal hover:text-terracotta transition-colors"
                >
                    {/* Crystal Kizor */}
                    <Image src="/Crystal_Kizor_Logo_Collection.png" alt="Crystal Kizor" width={100} height={40} className="ml-" />
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-stone hover:text-charcoal transition-colors duration-300 tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="text-sm px-5 py-2.5 bg-charcoal text-warm-50 rounded-full hover:bg-terracotta transition-colors duration-300"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-charcoal"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-warm-50 border-b border-warm-200"
                >
                    <div className="px-6 py-6 flex flex-col gap-5">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base text-charcoal hover:text-terracotta transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-sm px-5 py-3 bg-charcoal text-warm-50 rounded-full text-center hover:bg-terracotta transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}