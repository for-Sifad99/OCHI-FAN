import React from 'react';
import { animate, motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';

const Landing = () => {
    return (
        <div data-scroll datatype-scroll-section data-scroll-speed='-.3'  className="w-full h-screen bg-zinc-900 pt-1">
            {/* Top part */}
            <div className="textstructure mt-40 px-16">
                {['We Create', 'Eye-Opening', 'Presentations'].map(
                    (item, i) => {
                        return (
                            <div key={i} className="masker">
                                <div className="w-fit flex items-end overflow-hidden">
                                    {i === 1 && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '8vw' }}
                                            transition={{
                                                ease: [0.76, 0, 0.24, 1],
                                                duration: 1,
                                            }}
                                            className="relative mr-[0.9vw] w-[8vw] h-[5vw] -top-[0.15vw]"
                                        >
                                            <img
                                                className="w-full h-full bg-cover rounded-md"
                                                src="./landing-img.jpg"
                                                alt=""
                                            />
                                        </motion.div>
                                    )}
                                    <h1 className="uppercase text-[8vw] leading-[6vw] tracking-tight font-grotesk font-medium">
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>

            {/* Bottom part */}
            <div className="font-neue flex items-center justify-between border-t border-zinc-800 mt-30 py-5 px-16">
                {[
                    'Presentation and storytelling agency',
                    'For innovation teams and global brands',
                ].map((item, i) => (
                    <p
                        key={i}
                        className="text-md font-light tracking-tight leading-none"
                    >
                        {item}
                    </p>
                ))}

                <div className="start text-zinc-200 flex items-center gap-2">
                    <div className="uppercase px-3 py-1 border border-zinc-400 text-md font-light rounded-full">
                        Start The Project
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center border border-zinc-400 rounded-full">
                        <span className="rotate-45">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
