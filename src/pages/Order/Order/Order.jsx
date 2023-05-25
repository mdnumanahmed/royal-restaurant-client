import CoverBgImg from "../../Shared/CoverBgImg/CoverBgImg";
import orderBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salads', 'pizzas', 'desserts', 'soups', 'drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <CoverBgImg
        bgImg={orderBg}
        title={"Order Food"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus incidunt voluptatem quia quis. Perferendis officia quasi ea exercitationem vero."
        }
      />

      <section>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={'text-center py-5 bg-slate-100 space-x-4'}>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Desserts</Tab>
            <Tab>Soups</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
