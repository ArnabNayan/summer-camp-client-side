import Instructors from "../../Components/Instructors/Instructors";
import PopularClass from "../../Components/PopularClass/PopularClass";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;