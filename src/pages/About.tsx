import React from 'react';
import SpiritualImage from '../assets/images/Spiritual-And-Science.png';

const About: React.FC = () => {
    return (
        <div className="h-screen w-screen flex justify-between p-6">
            <div></div>
            <img
                src={SpiritualImage}
                alt="Spiritual and Science"
                className="w-[50vw] h-[50vw] object-contain"
            />
        </div>
    );
}

export default About;
