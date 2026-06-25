import { useState,useContext } from "react";
import { CartContext } from "../context.jsx/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, total, setShowCart } = useContext(CartContext);
const [payment, setPayment] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-[350px] h-screen bg-white shadow-2xl p-5 overflow-y-auto">
        <div className="flex bg-black-500 justify-between gap-8 px-3">

      <h1 className="text-2xl font-bold mb-6">
        Cart
      </h1>

      <button
    onClick={() => setShowCart(false)}
    className="mb-6 text-black  px-5
    py-2
    rounded-xl  border border-amber-200  hover:bg-orange-300 hover:text-white scale-105 transition"
  >
    X
  </button>
  </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((food) => (
          <div
            key={food.id}
            className="flex items-center gap-4 mb-5 border-b pb-4"
          >

            <img
              src={food.image}
              alt="image"
              className="w-20 h-20 object-cover rounded-xl"
            />

            <div>

              <h2 className="font-bold">
                {food.name}
              </h2>

              <p className="text-orange-500">
                ₦{food.price.toLocaleString()}
              </p>

               <button
              onClick={() => removeItem(food.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              X
            </button>


            </div>
            

          </div>
        ))
      )}
        <p className="w-full bg-black text-white py-4 rounded-2xl mt-6 pl-6 font-semibold
         hover:bg-orange-500 transition">
              Total= {total.toLocaleString()}</p>

              <div className="mt-6">

  {cart.length === 0 ? (

    <Link to ="/">
    <div
      className="
        bg-red-50
        border
        border-red-300
        hover:bg-red-200
        rounded-2xl
        p-4
        text-center
      "
    >
      <button onClick={"/"} className="cursor-pointer  text-red-600 font-semibold">
        Add items to cart first
      </button>
    </div>
    </Link>

  ) : !payment ? (

    <>
      <button
        onClick={() => setPayment(true)}
        className="
          w-full
          bg-orange-500
          text-white
          py-4
          rounded-2xl
          font-semibold
          hover:bg-orange-600
          transition
        "
      >
        Proceed To Payment
      </button>

      <p className="text-center text-gray-500 text-sm mt-3">
        Secure payment powered by ChowMarket
      </p>
    </>

  ) : (

    <div
      className="
        bg-green-50
        border
        border-green-300
        rounded-2xl
        p-5
        text-center
      "
    >
      <div
        className="
          w-14
          h-14
          bg-green-500
          text-white
          rounded-full
          flex
          items-center
          justify-center
          mx-auto
          mb-4
          text-2xl
          font-bold
        "
      >
        ✓
      </div>

      <h3 className="text-lg font-bold text-green-700">
        Payment Successful
      </h3>

      <p className="text-gray-600 mt-2">
        Your order has been placed successfully.
      </p>
  
  <button
        onClick={() => setPayment(false)}
        className="
          mt-4
          px-6
          py-2
          bg-black
          text-white
          rounded-xl
          hover:bg-orange-500
          transition
        "
      >
        Continue Shopping
      </button>
 
      
    </div>

  )}

</div>
              
    </div>
  );
}

export default Cart;