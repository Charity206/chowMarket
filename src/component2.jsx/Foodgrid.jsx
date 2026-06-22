
import { useContext } from "react";
import foods from "../component2.jsx/FoodData"
import { CartContext } from "../context.jsx/CartContext"
function Foodgrid(){
  const { addToCart } = useContext(CartContext);
    return(
        <section className="px-6 lg:px-16 py-14">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl font-bold">
            Popular Foods
          </h2>

          <button className="text-orange-500 font-semibold">
            View All
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-[30px] p-4 shadow-sm hover:shadow-2xl transition duration-300"
            >

              <img
                src={food.image}
                alt=""
                className="w-full h-[220px] object-cover rounded-[24px]"
              />

              <div className="mt-5">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold">
                    {food.name}
                  </h3>

                  <p className="text-orange-500 font-bold">
                    ₦{food.price}
                  </p>

                </div>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  Delicious freshly prepared meals delivered quickly.
                </p>

                <button onClick={() => addToCart(food)}
                className="w-full bg-black text-white py-4 rounded-2xl mt-6 font-semibold hover:bg-orange-500 transition">

                  Add To Cart

                </button>

              </div>

            </div>
          ))}

        </div>

      </section>
    )
}
export default Foodgrid