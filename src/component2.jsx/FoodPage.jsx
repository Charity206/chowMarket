import { useEffect, useState } from "react";
import { useContext } from "react";

import { CartContext } from "../context.jsx/CartContext"

function FoodPage() {
    const { addToCart } = useContext(CartContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
     <section className="px-6 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{foods.map((food) => (
        <div className="bg-white rounded-[30px] p-4 shadow-sm hover:shadow-2xl transition duration-300"
         key={food.idMeal}>
          <img
            src={food.strMealThumb}
            alt={food.strMeal}
           className="w-full h-[220px] object-cover rounded-[24px]"
          />
         <div className="mt-5">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold"> {food.strMeal} </h3>

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
  );
}
export default FoodPage