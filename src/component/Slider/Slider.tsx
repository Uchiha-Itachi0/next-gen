import React, { useState } from 'react';
import { SLIDER_STEPS } from "../../utils/Text";
import { FaArrowRight } from "react-icons/fa";

const steps = SLIDER_STEPS;

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
        <div className="min-h-screen bg-primary-light-blue p-4 flex flex-col justify-center items-center text-white">
            <div className="w-full h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
                <div className="absolute z-10 sm:relative sm:w-1/2 px-4 mb-4">
                    <h2 className="text-[7vw] sm:text-[3vw] md:text-[4.5vw] xl:text-[4vw] font-semibold leading-[10vw] sm:leading-[4.5vw] md:leading-[4.8vw] xl:leading-[4.3vw] text-center sm:text-left">{steps[currentStep].title}</h2>
                </div>
                <div className="relative w-full sm:w-[40vw] flex justify-center items-center">
                    <div className="block sm:hidden absolute inset-0 bg-black opacity-40"></div>
                    <img
                        src={steps[currentStep].image}
                        alt="Spiritual and Science"
                        className="object-cover"
                    />
                </div>
                <div className="absolute z-20 top-1/2 left-0 transform -translate-y-1/2 lg:translate-x-0 lg:-translate-y-1/2">
                    <button
                        onClick={handlePrev}
                        className="px-4 py-2 bg-primary-light-gray text-white rounded-md hover:bg-primary-dark-blue"
                    >
                        <FaArrowRight className="transform rotate-180" />
                    </button>
                </div>
                <div className="absolute z-20 top-1/2 right-0 transform -translate-y-1/2 lg:translate-x-0 lg:-translate-y-1/2">
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-primary-light-gray text-white rounded-md hover:bg-primary-dark-blue"
                    >
                        <FaArrowRight />
                    </button>
                </div>
                <div className="absolute z-[100] bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
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
