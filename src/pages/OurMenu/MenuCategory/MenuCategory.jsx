import CoverBgImg from "../../Shared/CoverBgImg/CoverBgImg";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
  return (
    <div className="mt-5">
      {title && (
        <CoverBgImg bgImg={coverImg} title={title} subTitle={subTitle} />
      )}
      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
