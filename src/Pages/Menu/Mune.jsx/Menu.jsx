import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from '../../Common/Cover/Cover.jsx' ;
import banner from '../../../assets/menu/banner3.jpg';
import UseMenu from "../../../Hooks/UseMenu/UseMenu.jsx";
import SectionTitle from "../../Common/Section/SectionTitle.jsx";
import MenuCategory from "../MenuCategory/MenuCategory.jsx";
import desertImg  from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg  from '../../../assets/menu/pizza-bg.jpg'
import soupImg  from '../../../assets/menu/soup-bg.jpg'
import saladImg  from '../../../assets/menu/salad-bg.jpg'


const Menu = () => {

    const[menu] = UseMenu();
const dessert = menu.filter(item => item.category === 'dessert');
const soup = menu.filter(item => item.category === 'soup');
const salad = menu.filter(item => item.category === 'salad');
const pizza = menu.filter(item => item.category === 'pizza');
const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>
                        Bistro | Menu
                    </title>
                </Helmet>
            </HelmetProvider>
            <Cover img={banner} title="Our Menu" des="Would You Like To Try Dish" >
            </Cover>
            <SectionTitle
            heading="Don't Miss"
            subHeading="Our Offer"
            >

            </SectionTitle>
            <MenuCategory  items={offered} >  
            </MenuCategory> 
            
            <MenuCategory 
             items={dessert} 
            img={desertImg}
            title="Desserts"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >   </MenuCategory> 


            <MenuCategory 
             items={salad} 
            img={saladImg}
            title="Salad"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, wheke a type specimen book."
            >   </MenuCategory> 


            <MenuCategory 
             items={soup} 
            img={soupImg}
            title="Soup"
            des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a "
            >   </MenuCategory> 



            <MenuCategory 
             items={pizza} 
            img={pizzaImg}
            title="Pizza"
            des=" since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >   </MenuCategory> 

        </div>
    );
};

export default Menu;