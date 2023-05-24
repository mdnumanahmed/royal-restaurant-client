import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommend = () => {
    const [recommendedFoods, setRecommendedFoods] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const recommendedItems = data.filter(item => item.category === 'offered')
            setRecommendedFoods(recommendedItems)
        })
    },[])
    return (
        <section className="py-20">
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recommendedFoods.map(food => <FoodCard key={food._id} food={food} />)
                }
            </div>
            
        </section>
    );
};

export default ChefRecommend;