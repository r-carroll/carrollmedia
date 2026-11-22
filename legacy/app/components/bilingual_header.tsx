"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface BilingualHeaderProps {
    en: string;
    ja: string;
    className?: string;
}

export default function BilingualHeader({ en, ja, className = "" }: BilingualHeaderProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative inline-block cursor-default ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={false}
                animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="block"
            >
                {en}
            </motion.div>
            <motion.div
                initial={false}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full text-[var(--accent-primary)]"
            >
                {ja}
            </motion.div>
        </div>
    );
}
