import Navbar from "../component/navbar/Navbar";
import Slider from "../component/Slider/Slider";
import About from "./About";

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-primary-dark-blue">
                <Slider />
                <About />
            </div>
        </>
    )
}

export default Home;