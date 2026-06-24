// 
import { useContext } from "react";
import { CartContext } from "../context.jsx/CartContext";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();
   const { addToCart } = useContext(CartContext);

  const [foods, setFoods] = useState([]);



  const categories = [
    "rice",
    "soup",
    "nuts",
    "cakes",
    "chicken",
    "burger",
  ];

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`
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
  }, [categoryName]);

        
    

  return (
    <div className="flex min-h-screen ">

      {/* LEFT SIDEBAR */}

      <aside
        className="
          hidden
          md:block
          w-64
          sticky
          top-0
          h-screen
          bg-white
          border-r border-orange-400
          p-6
        "
      >
        <h2 className="text-2xl font-bold mb-8">
          Categories
        </h2>

        <div className="flex flex-col gap-3">

          {categories.map((item) => (
            <NavLink
              key={item}
              to={`/category/${item}`}
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-500 text-white px-4 py-3 rounded-xl font-medium"
                  : "px-4 py-3 rounded-xl hover:bg-orange-100 transition"
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}

        </div>
      </aside>

      {/* RIGHT CONTENT */}

     <main className="flex-1 min-w-0 px-4 md:px-6 lg:px-12 py-10">

  <div
    
  className="
    md:hidden
    sticky
    top-[72px]
    z-30
    bg-white
    border-b
    border-orange-500
    py-3
    mb-6
    overflow-x-auto
    
    
  "
>
  
    <div className="flex gap-3">

      {categories.map((item) => (
        <NavLink
          key={item}
          to={`/category/${item}`}
          className={({ isActive }) =>
            isActive
              ? "bg-orange-500 text-white px-4 py-2 rounded-full whitespace-nowrap"
              : "bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap"
          }
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </NavLink>
      ))}

    </div> 
  </div>

        <div className="mb-10">

          <h1 className="text-2xl font-bold capitalize">
            {categoryName}
          </h1>

          <p className="text-gray-500 mt-2">
            Browse available {categoryName} meals.
          </p>

        </div>

        {foods.length === 0 ? (

          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No meals found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another category.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">

            {foods.map((food) => (

              <div
                key={food.idMeal}
                className="
                  bg-white
                  rounded-[30px]
                  p-4
                  shadow-sm
                  hover:shadow-2xl
                  transition
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

                  <h3 className="text-xl font-bold"> {food.strMeal} </h3>

                  <p className="text-orange-500 font-bold">
                    ₦{food.price.toLocaleString()}
                  </p>

                </div>

                  <p className="text-gray-500 text-sm mt-2">
                    Freshly prepared <span className="text-sm font-bold"> {food.strMeal}</span>
                  </p>

                  <button onClick={() =>
  addToCart({
    id: food.idMeal,
    name: food.strMeal,
    image: food.strMealThumb,
    price: food.price,
  })
}
                    className="
                     w-full bg-black text-white 
                     py-4 rounded-2xl mt-6 font-semibold
                      hover:bg-orange-500 transition"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default CategoryPage;