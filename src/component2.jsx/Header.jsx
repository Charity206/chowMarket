import { useContext } from "react";
import { CartContext } from "../context.jsx/CartContext";
import { Link } from "react-router-dom";
function Header(){
    const{cart, setShowCart}=useContext(CartContext)
    return(
        <div className="sticky top-0 z-50">
            <nav className="flex items-center justify-between px-6 lg:px-16 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
                <h1 className="text-2xl font-black text-orange-500">chowMarket</h1>
                
                <ul className=" md:flex items-center gap-10 text-[15px] font-medium">
                    <Link to="/">
                    <li className="cursor-pointer hover:text-orange-500 pointer transition">Home</li>
                    </Link>
                    <Link to="/Seller">
                    <li className="cursor-pointer hover:text-orange-500 transition">Sell on chowMarket</li>
                    </Link>
                    
                

                </ul>
                <div className="flex items-center gap-4">

          <Link to="/login">
  <button className="hidden bg-orange-500 text-white md:block px-5 py-2 rounded-xl font-medium hover:bg-orange-600 transition">
    Login as a vendor
  </button>
</Link>

          <button 
  onClick={() => setShowCart(true)}
  className="bg-orange-500 text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
>
  Cart ({cart.length})
</button>
          
        </div>


            </nav>
        </div>
    )
}
export default Header