import { useContext } from "react";
import { CartContext } from "../context.jsx/CartContext";
function Cart() {
  const { cart, removeItem, total, setShowCart } = useContext(CartContext);


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
        cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mb-5 border-b pb-4"
          >

            <img
              src={item.image}
              alt="image"
              className="w-20 h-20 object-cover rounded-xl"
            />

            <div>

              <h2 className="font-bold">
                {item.name}
              </h2>

              <p className="text-orange-500">
                ₦{item.price}
              </p>

               <button
              onClick={() => removeItem(item.id)}
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
              Total={total}</p>
    </div>
  );
}

export default Cart;