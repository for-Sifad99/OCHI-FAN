import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';

const App = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white">
                <Navbar />
                <Landing />
                <Marquee />
                <About />
            </div>
        </>
    );
};

export default App;
