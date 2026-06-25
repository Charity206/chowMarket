// import { useContext, useState } from "react";
// import { CartContext } from "../context.jsx/CartContext";
// import { Link } from "react-router-dom";

// function Header() {
//   const { cart, setShowCart } = useContext(CartContext);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="sticky top-0 z-50 bg-white">
//       <nav className="flex items-center justify-between px-6 lg:px-16 py-5 border-b border-gray-100">

//         {/* LOGO */}
//         <h1 className="text-2xl font-black text-orange-500">
//           chowMarket
//         </h1>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
//           <Link to="/">
//             <li className="cursor-pointer hover:text-orange-500 transition">
//               Home
//             </li>
//           </Link>

//           <Link to="/Seller">
//             <li className="cursor-pointer hover:text-orange-500 transition">
//               Sell on chowMarket
//             </li>
//           </Link>
//         </ul>

//         {/* DESKTOP ACTIONS */}
//         <div className="hidden md:flex items-center gap-4">

//           <Link to="/login">
//             <button className="bg-orange-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-orange-600 transition">
//               Login as a Vendor
//             </button>
//           </Link>

//           <button
//             onClick={() => setShowCart(true)}
//             className="bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
//           >
//             Cart ({cart.length})
//           </button>

//         </div>

//         {/* MOBILE RIGHT SIDE */}
//         <div className="flex md:hidden items-center gap-3">

//           {/* CART */}
//           <button
//             onClick={() => setShowCart(true)}
//             className="bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold"
//           >
//             🛒 {cart.length}
//           </button>

//           {/* HAMBURGER */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-3xl font-bold"
//           >
//             ☰
//           </button>

//         </div>

//       </nav>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className=" md:hidden bg-white shadow-lg border-t border-gray-100">

//           <div className="flex flex-col p-4 gap-4">

//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//             >
//               <p className="font-medium hover:text-orange-500">
//                 Home
//               </p>
//             </Link>

//             <Link
//               to="/Seller"
//               onClick={() => setMenuOpen(false)}
//             >
//               <p className="font-medium hover:text-orange-500">
//                 Sell on chowMarket
//               </p>
//             </Link>

//             <Link
//               to="/login"
//               onClick={() => setMenuOpen(false)}
//             >
//               <p className="font-medium hover:text-orange-500">
//                 Login as a Vendor
//               </p>
//             </Link>

//             <button
//               onClick={() => {
//                 setShowCart(true);
//                 setMenuOpen(false);
//               }}
//               className="bg-orange-500 text-white py-3 rounded-xl font-semibold"
//             >
//               Cart ({cart.length})
//             </button>

//           </div>

//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;




import { useContext, useState } from "react";
import { CartContext } from "../context.jsx/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";

function Header() {
  const { cart, setShowCart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white overflow-hidden">
        <nav className="flex items-center justify-between px-6 lg:px-16 py-5 border-b border-gray-100">

          {/* LOGO */}
          <Link to="/">
          <h1 className="te
          xt-2xl md:text-3xl font-black text-orange-500">
            chowMarket
          </h1>

          </Link>
          
          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
            <Link to="/">
              <li className="cursor-pointer hover:text-orange-500 transition">
                Home
              </li>
            </Link>

            <Link to="/Seller">
              <li className="cursor-pointer hover:text-orange-500 transition">
                Sell on chowMarket
              </li>
            </Link>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4">

            <Link to="/login">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-orange-600 transition">
                Login as a Vendor
              </button>
            </Link>

            <button
              onClick={() => setShowCart(true)}
              className="cursor-pointer bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Cart ({cart.length})
            </button>

          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex md:hidden items-center gap-3">

            <button
              onClick={() => setShowCart(true)}
              className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold"
            >
               <ShoppingCart  size={18}/> {cart.length}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer text-3xl font-bold"
            >
             <Menu size={22} />
            </button>

          </div>

        </nav>
      </div>

      {/* BLUR OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-40
          "
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[70%]
          sm:w-[60%]
          bg-white
          z-50
          shadow-2xl
          transition-transform
          duration-300
          p-6

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        <div className="flex justify-end mb-8">

          <button
            onClick={() => setMenuOpen(false)}
            className=" hover:text-orange-500 cursor-pointer text-3xl font-bold"
            
          >
            ✕
          </button>

        </div>

        <div className="flex flex-col gap-6 text-lg font-medium">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/Seller"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition"
          >
            Sell on chowMarket
          </Link>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
          >
            <button className="cursor-pointer w-full hover:bg-orange-400 bg-orange-500 text-white py-3 rounded-xl font-semibold">
              Login as a Vendor
            </button>
          </Link>

          <button
            onClick={() => {
              setShowCart(true);
              setMenuOpen(false);
            }}
            className="cursor-pointer w-full hover:bg-orange-500 bg-black text-white py-3 rounded-xl font-semibold"
          >
            Cart ({cart.length})
          </button>

        </div>

      </div>
    </>
  );
}

export default Header;