import React from 'react';
import Logo from '../shared/Logo';

function Navbar() {
    const links = [
        'Services',
        'Our work',
        'About us',
        'Insights',
        'Contact us',
    ];

    return (
        <div className="fixed z-999 w-full px-16 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="logo">
                <Logo />
            </div>
            {/* Nav links */}
            <div className="links text-white font-[Neue Montreal] flex gap-7">
                {links.map((item, i) => (
                    <a
                        key={i}
                        className={`text-md font-light capitalize ${i === links.length - 1 && 'ml-32'}`}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
