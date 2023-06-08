import Aboutus from "../../Components/Aboutus/Aboutus";
import Instructorss from "../../Components/Instructors/Instructorss";
import PopularClass from "../../Components/PopularClass/PopularClass";
import Banner from "./Banner/Banner";
import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Sports Academy | Home</title>
           </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructorss></Instructorss>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;