import { Helmet } from "react-helmet-async";
import CoverBgImg from "../Shared/CoverBgImg/CoverBgImg";
import menuBg from '../../assets/menu/banner3.jpg'

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Royal Restaurant | Menu</title>
      </Helmet>
      
      <CoverBgImg bgImg={menuBg} title={'our menu'} subTitle={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dignissimos, ipsam odit odio pariatur reprehenderit laudantium nihil laborum consectetur debitis.'}/>
    </div>
  );
};

export default OurMenu;
