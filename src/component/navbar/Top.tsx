import {useEffect, useState} from "react";
import formatDate from "../../utils/DateTimeFormat";

const TopNav: React.FC = () => {

    const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <nav className="flex justify-between items-center bg-transparent text-[3.5vw] sm:text-[1.5vw] md:text-[1.3vw] lg:text-[2vw] xl:text-[1vw] font-bold text-white py-2">
            <h1>Welcome to NextGen</h1>
            <h1 className="text-right">{formatDate(currentDateTime)}</h1>
        </nav>
    )
}

export default TopNav;