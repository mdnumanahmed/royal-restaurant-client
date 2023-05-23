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
        <section className="py-20">
            <SectionTitle subHeading={'Popular Items'} heading={'From Our Menu'} />
            <div className="grid md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;