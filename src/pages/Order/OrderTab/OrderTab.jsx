import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-7">
      {items.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
};

export default OrderTab;
