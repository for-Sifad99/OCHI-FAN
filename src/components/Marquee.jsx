import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    return (
        <div data-scroll datatype-scroll-section data-scroll-speed='.1' className="w-full py-26 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
            <div className="text border-t border-b border-[#4d837c] flex overflow-hidden whitespace-nowrap">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 7,
                    }}
                    className="text-[26vw] leading-[16vw] tracking-tight font-grotesk font-semibold uppercase pb-[2.6vw] pr-[2vw]"
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 7,
                    }}
                    className="text-[26vw] leading-[16vw] tracking-tight font-grotesk font-semibold uppercase pb-[2.6vw] pr-[2vw]"
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 7,
                    }}
                    className="text-[26vw] leading-[16vw] tracking-tight font-grotesk font-semibold uppercase pb-[2.6vw] pr-[2vw]"
                >
                    We Are Ochi
                </motion.h1>
            </div>
        </div>
    );
};

export default Marquee;
