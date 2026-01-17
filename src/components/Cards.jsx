import { div } from 'framer-motion/client';
import React from 'react';

const Cards = () => {
    return (
        <div className="w-full h-screen px-16 flex items-center gap-4 bg-zinc-100">
            <div className="cardcontainer w-1/2 h-[54vh]">
                <div className="card relative w-full h-full flex items-center justify-center bg-[#004D43] rounded-xl">
                    <img
                        className="w-36"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                        alt=""
                    />
                    <button className="absolute bottom-6 left-6 px-3 py-1 border border-[#CDEA68] rounded-full font-neue text-sm text-[#CDEA68]">
                        &copy;2019-2025
                    </button>
                </div>
            </div>
            <div className="cardcontainer flex gap-4 w-1/2 h-[54vh]">
                <div className="card relative w-1/2 h-full flex items-center justify-center bg-[#212121] rounded-xl">
                    <img
                        className="w-36"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                        alt=""
                    />
                    <button className="absolute bottom-6 left-6 px-3 py-1 border border-zinc-300 rounded-full font-neue text-xs tracking-tight font-semibold uppercase text-zinc-300">
                        Rating 5.0 on clutch
                    </button>
                </div>
                <div className="card relative w-1/2 h-full flex items-center justify-center bg-[#212121] rounded-xl">
                    <img
                        className="w-36"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                        alt=""
                    />
                    <button className="absolute bottom-6 left-6 px-3 py-1 border border-zinc-300 rounded-full font-neue text-xs tracking-tight font-semibold uppercase text-zinc-300">
                        Business bootcamp alumni
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
