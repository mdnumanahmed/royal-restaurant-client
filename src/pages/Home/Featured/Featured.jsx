import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="bg-fixed"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="py-20  bg-black opacity-80">
        <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
        <div className="md:flex md:pb-12 md:px-36 items-center  text-white">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="space-y-2 ml-6">
            <p>March 20, 2023</p>
            <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
