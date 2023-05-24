import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="py-20 bg-gray-50">
            <SectionTitle subHeading={'Popular Items'} heading={'From Our Menu'} />
            <div className="grid md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mt-8">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;