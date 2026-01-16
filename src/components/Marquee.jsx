import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    return (
        <div className="w-full py-26 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
            <div className="text border-t border-b border-zinc-400 flex gap-10 overflow-hidden whitespace-nowrap">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 5,
                    }}
                    className="text-[26vw] leading-55 tracking-tight font-grotesk font-semibold uppercase pb-10"
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 5,
                    }}
                    className="text-[26vw] leading-55 tracking-tight font-grotesk font-semibold uppercase pb-10"
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 5,
                    }}
                    className="text-[26vw] leading-55 tracking-tight font-grotesk font-semibold uppercase pb-10"
                >
                    We Are Ochi
                </motion.h1>
            </div>
        </div>
    );
};

export default Marquee;
