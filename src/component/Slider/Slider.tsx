import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import IASImage from '../../assets/images/1-IAS.png';
import IPSImage from '../../assets/images/2-IPS.png';
import MilitaryImage from '../../assets/images/3-MILITARY.png';
import DoctorImage from '../../assets/images/4-DOCTOR.png';
import EngineerImage from '../../assets/images/5-ENGINEER.png';
import ScientistImage from '../../assets/images/6-SCIENTIST.png';
import DataScientistImage from '../../assets/images/7-DATA_SCIENTIST.png';

const steps = [
    { id: 1, imageUrl: IASImage },
    { id: 2, imageUrl: IPSImage },
    { id: 3, imageUrl: MilitaryImage },
    { id: 4, imageUrl: DoctorImage },
    { id: 5, imageUrl: EngineerImage },
    { id: 6, imageUrl: ScientistImage },
    { id: 7, imageUrl: DataScientistImage },
];

const Slider: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
    };

    const handleIndicatorClick = (index: number) => {
        setCurrentStep(index);
    };

    return (
        <div className="relative w-full h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${steps[currentStep].imageUrl})` }}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
                <div className="flex justify-between items-center w-full px-8">
                    <button
                        onClick={handlePrev}
                        className="absolute top-0 bottom-0 left-0 px-6 py-2 bg-primary-light-gray text-white rounded-md hover:bg-primary-dark-blue"
                    >
                        <FaArrowRight className="transform rotate-180" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-0 bottom-0 right-0 px-6 py-2 bg-primary-light-gray text-white rounded-md hover:bg-primary-dark-blue"
                    >
                        <FaArrowRight />
                    </button>
                </div>
                <div className="absolute bottom-6 flex justify-center space-x-2">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            onClick={() => handleIndicatorClick(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                index === currentStep ? 'bg-button-hover-color' : 'bg-gray-300'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
