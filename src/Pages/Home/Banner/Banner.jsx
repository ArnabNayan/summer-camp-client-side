import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <div
                        className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                        style={{
                            backgroundImage:
                                "url('https://static.vecteezy.com/system/resources/thumbnails/017/046/997/small/cheering-banner-football-vector.jpg')",
                        }}
                    >
                        <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">



                            <div className='lg:pt-40 pt-10'>
                                <h1 className='text-center text-xl lg:text-6xl lg:ms-8 text-white font-bold'>Welcome to Best Sports Academy </h1>
                                <h1 className='text-center text-lg lg:text-5xl lg:ms-8 lg:mt-10 text-blue-200 font-bold '>Get The Best Training From <br /> our summer camp </h1></div>
                            <div className='pt-8'>
                                <button className="btn  btn-secondary font-semibold text-xl">Get Started</button>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div
                        className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                        style={{
                            backgroundImage:
                                "url('https://cdn.vectorstock.com/i/preview-1x/14/76/banner-for-football-championship-with-soccer-ball-vector-37681476.jpg')",
                        }}
                    >
                        <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">



                            <div className='lg:pt-40 pt-10'>
                                <h1 className='text-center text-xl lg:text-6xl lg:ms-8 text-white font-bold'>Welcome to Best Sports Academy </h1>
                                <h1 className='text-center text-lg lg:text-5xl lg:ms-8 lg:mt-10 text-blue-200 font-bold '>Get The Best Training From <br /> our summer camp </h1></div>
                                <div className='pt-8'>
                                <button className="btn btn-secondary font-semibold text-xl">Get Started</button>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div>
                        <div
                            className="bg-cover backdrop-brightness-20 bg-center h-64 lg:h-screen w-full "
                            style={{
                                backgroundImage:
                                    "url('https://static.vecteezy.com/system/resources/thumbnails/014/762/729/small/of-world-cup-2022-fifa-world-cup-or-world-cup-qatar-background-of-world-cup-qatar-with-3d-ball-combine-with-grunge-background-free-vector.jpg')",
                            }}
                        >
                            <div className="w-full h-full items-center left-0  top-0 bg-gradient-to-r from-[black] to-[gray) 100%">



                                <div className='lg:pt-40 pt-10'>
                                    <h1 className='text-center text-xl lg:text-6xl lg:ms-8 text-white font-bold'>Welcome to Best Sports Academy </h1>
                                    <h1 className='text-center text-lg lg:text-5xl lg:ms-8 lg:mt-10 text-blue-200 font-bold '>Get The Best Training From <br />our summer camp </h1> </div>
                                    <div className='pt-8'>
                                <button className="btn  btn-secondary font-semibold text-xl">Get Started</button>
                            </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </div>
    );
};

export default Banner;