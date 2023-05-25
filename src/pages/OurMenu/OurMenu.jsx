import { Helmet } from "react-helmet-async";
import CoverBgImg from "../Shared/CoverBgImg/CoverBgImg";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Royal Restaurant | Menu</title>
      </Helmet>

      {/* Main Cover */}
      <CoverBgImg
        bgImg={menuBg}
        title={"our menu"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dignissimos, ipsam odit odio pariatur reprehenderit laudantium nihil laborum consectetur debitis."
        }
      />

      {/* Offered */}
      <section className="py-20">
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
        <MenuCategory items={offered} />
      </section>

      {/* Desserts  */}
      <section className="py-20">
        <MenuCategory
          items={dessert}
          coverImg={dessertBg}
          title={"desserts"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dignissimos, ipsam odit odio pariatur reprehenderit laudantium nihil laborum consectetur debitis."
          }
        />        
      </section>

      {/* Pizzas */}
      <section className="py-20">
        <MenuCategory
          items={pizza}
          coverImg={pizzaBg}
          title={"pizzas"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dignissimos, ipsam odit odio pariatur reprehenderit laudantium nihil laborum consectetur debitis."
          }
        />
      </section>

      {/* Salad */}
      <section className="py-20">
        <MenuCategory
          items={salad}
          coverImg={saladBg}
          title={"salads"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dignissimos, ipsam odit odio pariatur reprehenderit laudantium nihil laborum consectetur debitis."
          }
        />
      </section>

      {/* Salad */}
      <section className="py-20">
        <MenuCategory
          items={soup}
          coverImg={soupBg}
          title={"soups"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dignissimos, ipsam odit odio pariatur reprehenderit laudantium nihil laborum consectetur debitis."
          }
        />
      </section>
    </div>
  );
};

export default OurMenu;
