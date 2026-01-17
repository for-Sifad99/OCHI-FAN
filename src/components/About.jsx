import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const revealRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            revealRef.current,
            {
                height: '0%',
            },
            {
                height: '100%',
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: revealRef.current,
                    start: 'top 90%',
                    end: 'top 20%',
                    scrub: 1.5,
                },
            }
        );
    }, []);

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.15"
            className="w-full py-28 px-16 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-[#212121]"
        >
            <h1 className="font-neue text-[4vw] leading-[4vw] tracking-tight">
                We craft category-defining presentations, brand identities, and
                digital experiences that
                <span className="underline">drive funding</span>,
                <span className="underline">sales</span>, and
                <span className="underline">market leadership</span>.
            </h1>

            <div className="w-full flex justify-between pt-4 mt-20 border-t border-[#A1B563]">
                <div
                    data-scroll
                    data-scroll-speed=".05"
                    className="w-1/2 font-neue tracking-tight"
                >
                    <h1 className="text-[4vw] leading-[4vw] ">Our Approach:</h1>
                    <button className="flex items-center gap-7 px-8 py-4.5 mt-6 bg-zinc-900 rounded-full text-white uppercase">
                        Read More
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>

                <div
                    data-scroll
                    data-scroll-speed="-.01"
                    className="aboutimg w-1/2 h-[70vh] rounded-3xl"
                >
                    <div ref={revealRef} className="w-full h-full">
                        <img
                            className="w-full h-full object-cover rounded-3xl"
                            src="./about-img.jpg"
                            alt="About section image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
