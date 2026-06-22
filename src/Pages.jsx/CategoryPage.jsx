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
        setFoods(data.meals || []);
      });
  }, [categoryName]);

  return (
    <div className="flex min-h-screen">

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
          border-r
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

      <main className="flex-1 px-6 lg:px-12 py-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold capitalize">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {foods.map((food) => (

              <div
                key={food.idMeal}
                className="
                  bg-white
                  rounded-[30px]
                  p-4
                  shadow-sm
                  hover:shadow-xl
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
                    ₦{`${3500}`}
                  </p>

                </div>

                  <p className="text-gray-500 text-sm mt-2">
                    Freshly prepared <span className="text-xl font-bold"> {food.strMeal}</span>
                  </p>

                  <button onClick={() =>
  addToCart({
    id: food.idMeal,
    name: food.strMeal,
    image: food.strMealThumb,
    price: 3500,
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