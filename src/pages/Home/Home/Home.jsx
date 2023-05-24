import AdBox from "../AdBox/AdBox";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import HomeCTA from "../HomeCTA/HomeCTA";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <AdBox />
            <PopularMenu />
            <HomeCTA />
            <ChefRecommend />
            <Featured />
        </div>
    );
};

export default Home;