// src/components/TestimonialCard.tsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
    image: string;
    text: string;
    name: string;
    occupation: string;
    rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, text, name, occupation, rating }) => {
    return (
        <div className="max-w-lg bg-dark-blue text-white rounded-lg shadow-md p-6 border-[1px] border-b-gray-400 m-4">
            <div className="flex mb-4">
                <img
                    src={image}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mr-4 mt-10"
                />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-500" />
                        ))}
                    </div>
                    <p className="text-md text-gray-400 font-normal mb-4">
                        {text}
                    </p>
                    <p className="font-bold">
                        {name}, {occupation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
