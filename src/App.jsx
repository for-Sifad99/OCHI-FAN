import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';

const App = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white">
                <Navbar />
                <Landing />
                <Marquee />
                <About />
                <Eyes />
            </div>
        </>
    );
};

export default App;
