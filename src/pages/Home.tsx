import Navbar from "../component/navbar/Navbar";
import Slider from "../component/Slider/Slider";
import About from "./About";
import SpiritualImage from '../assets/images/Spiritual-And-Science.png';
import TestimonialCard from "../component/TestimonialCard";
import {TESTIMONIALS} from "../utils/Text";


const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-primary-dark-blue font-sans">
                <Slider />
                 <div className="h-screen w-screen flex justify-between items-center gap-4 p-6">
                     <div className="text-[2.5vw] text-white w-1/2">
                         <h1>Forget Fairy Tales, Become a Real Champion!
                             The Nextgen Champions Training Program Offers a Holistic Blend of Ancient Spiritual Science With Cutting-Edge Science, Working Wonders to Help You Become a True Champion…</h1>
                     </div>
                     <img
                         src={SpiritualImage}
                         alt="Spiritual and Science"
                         className="w-[50vw] h-[50vw] object-contain"
                     />
                 </div>
                <div className="min-h-screen bg-primary-light-blue font-bold text-white pt-20">
                    <div className="flex justify-center text-center"><h1 className="text-[3vw]">Listen to real people, real results</h1></div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {
                            TESTIMONIALS.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    image={testimonial.image}
                                    text={testimonial.text}
                                name={testimonial.name}
                                occupation={testimonial.occupation}
                                rating={testimonial.rating}/>
                            ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;