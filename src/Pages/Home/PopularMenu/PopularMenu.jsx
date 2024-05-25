import { useEffect, useState } from "react";
import SectionTitle from "../../Common/Section/SectionTitle";
import MenuItem from "./MenuItem";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";

const PopularMenu = () => {

const[menu] = UseMenu();
const popular = menu.filter(item => item.category === 'popular');


    // const [ menuItem , setMenuItem] = useState([]);
    // useEffect(()=>{
    //    fetch('menu.json')
    //    .then(res => res.json())
    //    .then(data => {
    //     const popularItem = data.filter(item => item.category === "popular");
    //     setMenuItem(popularItem);
    // });
    // } ,[])
    return (
        <div >
            <SectionTitle
            heading="From Our Meru"
            subHeading="Popular Items"
            >

            </SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {
                popular.map(item =><MenuItem 
                    key={item._id} 
                    item={item}
                    >

                    </MenuItem>)
            }
           </div>
           
           <div  className="flex justify-center my-12">
           <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;