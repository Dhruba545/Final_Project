import MenuItem from "../../Home/PopularMenu/MenuItem";
import Cover from '../../Common/Cover/Cover.jsx';
const MenuCategory = ({items , title , img , des}) => {
    return (
        <div>
            { title && des ?   < Cover img={img} title={title} des={des} >
            </Cover> : ""}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {
                items.map(item =><MenuItem 
                    key={item._id} 
                    item={item}
                    >

                    </MenuItem>)
                
            }
           </div>
        </div>
    );
};

export default MenuCategory;