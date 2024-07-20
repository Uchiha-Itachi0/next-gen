import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Bottom: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            <div className="flex justify-between items-center bg-transparent font-bold text-white py-4 px-4">
                <div></div>
                <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
                    <FaBars />
                </div>
                <div className="hidden md:flex gap-4 uppercase">
                    <Link to="/about" className="hover:text-button-hover-color">About</Link>
                    <Link to="/program" className="hover:text-button-hover-color">Program</Link>
                    <Link to="/blogs" className="hover:text-button-hover-color">Blogs</Link>
                    <Link to="/training" className="hover:text-button-hover-color">Training</Link>
                    <Link to="/login" className="hover:text-button-hover-color">Login/Signup</Link>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-primary-dark-gray overflow-x-hidden text-white text-[8vw] flex flex-col items-start justify-center gap-8 p-8 transition-transform transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } md:hidden`}
            >
                <div className="absolute top-4 right-4 text-[8vw] cursor-pointer" onClick={toggleMenu}>
                    <FaTimes />
                </div>
                <Link to="/about" className="hover:text-button-hover-color" onClick={toggleMenu}>About</Link>
                <Link to="/program" className="hover:text-button-hover-color" onClick={toggleMenu}>Program</Link>
                <Link to="/blogs" className="hover:text-button-hover-color" onClick={toggleMenu}>Blogs</Link>
                <Link to="/training" className="hover:text-button-hover-color" onClick={toggleMenu}>Training</Link>
                <Link to="/login" className="hover:text-button-hover-color" onClick={toggleMenu}>Login/Signup</Link>
            </div>
        </nav>
    );
};

export default Bottom;
