import React from 'react';

const Featured = () => {
    return (
        <div className="w-full px-16 py-26">
            <div className="w-full border-b border-zinc-800 pb-8">
                <h1 className="text-[4vw] font-neue font-medium">
                    Featured projects
                </h1>
            </div>

            <div>
                <div className="cards w-full flex gap-6 mt-14">
                    <div className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className="absolute left-full top-1/2 -translate-x-[50%] -translate-y-[50%] z-10 text-[#CDEA68] font-grotesk font-semibold text-8xl leading-0 whitespace-nowrap uppercase">
                            {'Salience Labs'.split('').map((item, i) => (
                                <span key={i} className="">
                                    {item}
                                </span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-2xl overflow-hidden">
                            <img
                                className="w-full h-full bg-cover"
                                src="./salience-labs-img.png"
                                alt="Featured salience image"
                            />
                        </div>
                    </div>
                    <div className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className="absolute right-full top-1/2 translate-x-[50%] -translate-y-[50%] z-10 text-[#CDEA68] font-grotesk font-semibold text-8xl leading-0 whitespace-nowrap uppercase">
                            {'Medallia Experience'.split('').map((item, i) => (
                                <span key={i} className="">
                                    {item}
                                </span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-2xl  overflow-hidden">
                            <img
                                className="w-full h-full bg-cover"
                                src="./medallia-experience-img.png"
                                alt="Featured medallia image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Featured;
