import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context.jsx/CartContext";
import { Link } from "react-router-dom";

function Foodgrid() {
  const { addToCart } = useContext(CartContext);

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    )
      .then((res) => res.json())
      .then((data) => {
        const prices = [
          2200,
          2500,
          2700,
          3000,
          3200,
          3500,
          3700,
          4000,
          4200,
          4500,
        ];

        const foodsWithPrice = data.meals.map((meal) => ({
          ...meal,
          price:
            prices[
              Number(meal.idMeal) % prices.length
            ],
        }));

        setFoods(foodsWithPrice);
      });
  }, []);

  const randomFoods = foods.slice(0, 8);

  return (
    <section className="px-6 lg:px-16 py-14">

      <div className="flex items-center justify-between mb-10">

        <h2 className="text-2xl md:text-3xl font-bold">
          Popular Foods
        </h2>

        <Link to="/menu">
          <button className="text-orange-500 font-semibold hover:text-orange-600">
            View All
          </button>
        </Link>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {randomFoods.map((food) => (
          <div
            key={food.idMeal}
            className="
              bg-white
              rounded-[30px]
              p-4
              shadow-sm
              hover:shadow-2xl
              transition
              duration-300
            "
          >

            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              className="
                w-full
                h-[220px]
                object-cover
                rounded-[24px]
              "
            />

            <div className="mt-5">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold">
                  {food.strMeal}
                </h3>

                <p className="text-orange-500 font-bold">
                  ₦{food.price.toLocaleString()}
                </p>

              </div>

              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Delicious freshly prepared meals delivered quickly.
              </p>

              <button
                onClick={() =>
                  addToCart({
                    id: food.idMeal,
                    name: food.strMeal,
                    image: food.strMealThumb,
                    price: food.price,
                  })
                }
                className="
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-2xl
                  mt-6
                  font-semibold
                  hover:bg-orange-500
                  transition
                "
              >
                Add To Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Foodgrid;