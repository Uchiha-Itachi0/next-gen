import React, { useState, useEffect } from 'react';
import TopNav from './Top';
import Bottom from './Bottom';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] text-[3.5vw] sm:text-[2vw] md:text-[1.8vw] xl:text-[1.3vw]  px-4  shadow-lg transition-colors duration-300 ${isScrolled ? 'bg-primary-dark-blue' : 'bg-primary-light-gray'}`}>
            <TopNav />
            <Bottom />
        </nav>
    );
};

export default Navbar;
