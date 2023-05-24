import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../../components/Button";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className="py-20 bg-gray-50">
            <SectionTitle subHeading={'Popular Items'} heading={'From Our Menu'} />
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mt-8">
                <Button>View Full Menu</Button>
            </div>
        </section>
    );
};

export default PopularMenu;