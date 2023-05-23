import AdBox from "../AdBox/AdBox";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <AdBox />
            <PopularMenu />
        </div>
    );
};

export default Home;