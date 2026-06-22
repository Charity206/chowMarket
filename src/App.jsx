// import Header from "./component2.jsx/Header";
// import Footer from "./component2.jsx/Footer";
// import Chowmarket from "./Pages.jsx/ChowmarketPage";
// import SellerPage from "./Pages.jsx/SellerPage";

// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="bg-[#f8f8f8] min-h-screen text-black">

//       <Header />

//       <Routes>
//         <Route path="/" element={<Chowmarket />} />
//         <Route path="/Seller" element={<SellerPage />} />
//       </Routes>

//       <Footer />

//     </div>
//   );
// }

// export default App;




import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component2.jsx/Header";
import Footer from "./component2.jsx/Footer";
import Cart from "./component2.jsx/Cart";

import Chowmarket from "./Pages.jsx/ChowmarketPage";
import SellerPage from "./Pages.jsx/SellerPage";
import CategoryPage from "./Pages.jsx/CategoryPage";
import LoginPage from "./Pages.jsx/LoginPage";

import { CartContext } from "./context.jsx/CartContext";

function App() {
  const { showCart, setShowCart } = useContext(CartContext);

  return (
    <div className="bg-[#f8f8f8] min-h-screen text-black">

      <Header />

      {/* OVERLAY */}

      {showCart && (
        <div
          onClick={() => setShowCart(false)}
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-40
          "
        />
      )}

      {/* CART SIDEBAR */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[350px]
          bg-gray
          shadow-2xl
          z-50
          transition-transform
          duration-300

          ${showCart ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Cart />
      </div>

      <Routes>
        <Route path="/" element={<Chowmarket />} />
        <Route path="/Seller" element={<SellerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;















// import Header from "./component2.jsx/Header";
// import Footer from "./component2.jsx/Footer";
// import Chowmarket from "./Pages.jsx/ChowmarketPage"
// import SellerPage from "./Pages.jsx/SellerPage";
// import { useState } from "react"
//  import Cart from "./component2.jsx/Cart";
// import { Routes, Route } from "react-router-dom"


// function App() {
//   const[cart, setCart]= useState([]);
//     const addToCart = (food) => {
//   setCart([...cart, food]);
// };
// const [showCart, setShowCart] = useState(false);

// const removeItem = (id) => {
//   setCart(cart.filter((item) => item.id !== id));
// };
// const total = cart.reduce(
//   (acc, item) => acc + item.price,
//   0
// );


//   return (
//     <div>
//     <div className="bg-[#f8f8f8] min-h-screen text-black">
//       <Header
//   cart={cart}
//   showCart={showCart}
//   setShowCart={setShowCart}
// />

// {/* OVERLAY */}

// {showCart && (

//   <div
//     onClick={() => setShowCart(false)}
//     className="
//       fixed
//       inset-0
//       bg-black/40
//       backdrop-blur-sm
//       z-40
//     "
//   />

// )}

// {/* CART SIDEBAR */}

// <div
//   className={`
//     fixed
//     top-0
//     right-0
//     h-screen
//     w-[350px]
//     bg-white
//     shadow-2xl
//     z-50
//     transition-transform
//     duration-300

//     ${showCart ? "translate-x-0" : "translate-x-full"}
//   `}
// >

//   <Cart
//     cart={cart}
//     removeItem={removeItem}
//     total={total}
//     setShowCart={setShowCart}
//   />

// </div>
     
//     <Routes>
    
//       {/* <LandingPage/> */}
//       <Route path="/" element={<Chowmarket addToCart={addToCart}/>}/>
//       <Route path="/Seller" element={<SellerPage/>}/>

   
//     </Routes>
//     <Footer/>
   
//      </div>
      
//      </div>
//   )
// }

// export default App