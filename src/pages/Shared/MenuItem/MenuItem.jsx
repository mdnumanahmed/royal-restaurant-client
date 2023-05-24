const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(image);
  return (
    <div className="flex space-x-4 rounded-md shadow-md p-5">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt={name}
      />
      <div>
        <h4 className="uppercase">{name}---------</h4>
        <p>{recipe}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
