import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({food}) => {
    const {name, image, price, recipe, _id} = food
    const {user} = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (food) => {
      console.log(food);
      if(user && user.email){
        const cartItem = {foodId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added food item in the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Are you sure to order? Login first',
          text: "You won't be able to order without login!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to Login Page'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
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
            <button onClick={()=>handleAddToCart(food)} className="btn btn-outline border-0 border-b-4 border-orange-600 text-orange-700">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
