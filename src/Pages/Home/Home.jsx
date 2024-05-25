import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoos/BistroBoss";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Swiper from "./Swiper/Swiper";
import Testimoniasl from "./Testimonials/Testimoniasl";


const Home = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Bistro | Home
                    </title>
                </Helmet>
            </HelmetProvider>
             <Banner></Banner>
             <Swiper></Swiper>
             <BistroBoss></BistroBoss>
             <PopularMenu></PopularMenu>
             <div className="w-full bg-black rounded-lg text-white font-semibold my-8 flex justify-center items-center h-32">
                  <span className="text-2xl  md:text-5xl">
                  Call Us  +88 0192345678910
                  </span>
             </div>
             <Featured></Featured>
             <Testimoniasl></Testimoniasl>
             
        </div>
    );
};

export default Home;