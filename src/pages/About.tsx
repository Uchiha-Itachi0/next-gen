import React from 'react';
import SpiritualImage from '../assets/images/Spiritual-And-Science.png';
import {VISION_TEXT} from "../utils/Text";

const About: React.FC = () => {
    return (
        <>
            <div className="bg-primary-dark-blue flex flex-col gap-8">
                <h1 className="text-[2vw] text-white font-bold">About</h1>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[2vw] text-white font-bold">Vision</h1>
                    <p className="text-[1.5vw] text-white">
                        {VISION_TEXT}
                    </p>

                </div>
            </div>

        </>
        // <div className="h-screen w-screen flex justify-between p-6">
        //     <div></div>
        //     <img
        //         src={SpiritualImage}
        //         alt="Spiritual and Science"
        //         className="w-[50vw] h-[50vw] object-contain"
        //     />
        // </div>
    );
}

export default About;
