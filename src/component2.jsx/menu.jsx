// 
// 

// function Menu() {
//   const categories = [
//     "rice",
//     "chicken",
//     "burger",
//     "beef",
//     "seafood",
//     "pasta",
//   ];

//   return (
//     <section className="px-6 lg:px-16">
//       <div className="flex gap-4 overflow-x-auto pb-4">

//         {categories.map((item) => (
//           <button
//             key={item}
//             onClick={() => (item)}
//             className="bg-white px-6 py-3 rounded-2xl shadow-sm whitespace-nowrap hover:bg-orange-500 hover:text-white transition"
//           >
//             {item}
//           </button>
//         ))}

//       </div>
//     </section>
//   );
// }

// export default Menu;


import { Link } from "react-router-dom";

function Menu() {
  const categories = [
    "Rice",
    "Soup",
    "Nuts",
    "Cakes",
    "Chicken",
    "Burger",
  ];

  return (
    <section className="px-6 py-6 lg:px-16">
      <div className="flex gap-4 overflow-x-auto pb-4">

        {categories.map((item) => (
          <Link
            key={item}
            to={`/category/${item.toLowerCase()}`}
          >
            <button
              className="bg-white px-6 py-3 rounded-2xl shadow-sm whitespace-nowrap hover:bg-orange-500 hover:text-white transition"
            >
              {item}
            </button>
          </Link>
        ))}

      </div>
    </section>
  );
}

export default Menu;