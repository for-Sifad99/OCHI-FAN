import React from 'react';

const Eyes = () => {
    return (
        <div className="eyes w-full h-screen mb-40 overflow-hidden">
            <div className="relative w-full h-full bg-[url('./eyes-bg.jpg')] object-cover bg-cover">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div className="lines absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div className="lines absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
