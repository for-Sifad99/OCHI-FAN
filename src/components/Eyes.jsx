import React, { useEffect, useState } from 'react';

const Eyes = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    // Eye move logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rectX = window.innerWidth / 2;
            const rectY = window.innerHeight / 2;

            const deltaX = e.clientX - rectX;
            const deltaY = e.clientY - rectY;

            const angle = Math.atan2(deltaY, deltaX);

            const radius = 52; // pupil move limit

            setPos({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div className="relative w-full h-screen bg-[url('./eyes-bg.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <h1 className="absolute font-neue font-semibold text-lg top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                PLAY
                            </h1>
                            <div
                                style={{
                                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                                }}
                                className="lines absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-zinc-100 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <h1 className="absolute font-neue font-semibold text-lg top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                PLAY
                            </h1>
                            <div
                                style={{
                                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                                }}
                                className="lines absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-zinc-100 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
