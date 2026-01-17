import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];

    // Initialize letters position
    useEffect(() => {
        cards.forEach((card) => card.set({ y: 80 }));
    }, []);

    const handleHover = (i) => cards[i].start({ y: 0 });
    const handleHoverEnd = (i) => cards[i].start({ y: 80 });

    return (
        <div className="w-full px-16 py-26">
            <div className="w-full border-b border-zinc-800 pb-8">
                <h1 className="text-[4vw] font-neue font-medium">
                    Featured projects
                </h1>
            </div>

            <div className="cards w-full flex gap-2 mt-14">
                {/* LEFT CARD */}
                <motion.div
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="relative w-[56%] h-[75vh] perspective-1000 cursor-pointer"
                >
                    {/* Text letters */}
                    <h1 className="absolute flex left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[#CDEA68] font-grotesk font-semibold text-8xl uppercase whitespace-nowrap">
                        {'Salience Labs'.split('').map((char, i) => (
                            <span
                                key={i}
                                className="overflow-hidden inline-block"
                            >
                                <motion.span
                                    animate={cards[0]}
                                    transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut',
                                        delay: i * 0.015,
                                    }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        className="w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                        whileHover={{
                            width: '96%',
                            height: '96%',
                        }}
                        whileTap={{
                            width: '100%',
                            height: '100%',
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                    >
                        <motion.img
                            src="./salience-labs-img.png"
                            alt="Salience Labs"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.div>

                {/* RIGHT CARD */}
                <motion.div
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className="relative w-1/2 h-[75vh] perspective-1000 cursor-pointer"
                >
                    <h1 className="absolute flex right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-[#CDEA68] font-grotesk font-semibold text-8xl uppercase whitespace-nowrap">
                        {'Medallia Experience'.split('').map((char, i) => (
                            <span
                                key={i}
                                className="overflow-hidden inline-block"
                            >
                                <motion.span
                                    animate={cards[1]}
                                    transition={{
                                        duration: 0.2,
                                        ease: 'easeInOut',
                                        delay: i * 0.015,
                                    }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        className="w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                        whileHover={{
                            width: '96%',
                            height: '96%',
                        }}
                        whileTap={{
                            width: '100%',
                            height: '100%',
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                    >
                        <motion.img
                            src="./medallia-experience-img.png"
                            alt="Medallia Experience"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Featured;
