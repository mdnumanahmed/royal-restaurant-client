const FoodCard = ({food}) => {
    const {name, image, price, recipe} = food
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={name} 
            className="rounded-xl"
          />
        </figure>
          <p className="bg-slate-900 text-white font-bold absolute top-0 right-0 mt-4 mr-4 px-4 py-2 rounded-lg"> ${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 border-orange-600 text-orange-700">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
