import SectionTitle from "../../Common/Section/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg' ;
import "./Featured.css";


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white">
            <SectionTitle
            subHeading="check it out" 
            heading="Fetured Item"
            >

            </SectionTitle>
            <div className="md:flex justify-center py-20 pt-1 bg-[#403b3b70] items-center px-36 pt-12">
            <div>
                <img src={featuredImg} className="w-[500px]" alt="" />
            </div>
            <div className="md:ml-10">
                <p>
                    Aug 8,2029
                </p>
                <p className="uppercase">
                WHERE CAN I GET SOME?

                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;