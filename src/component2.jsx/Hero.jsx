import { Link } from "react-router-dom";
import Herofood from "../assets/herofood.jpg";
import CategoryPage from "../Pages.jsx/CategoryPage";

function Hero() {
  return (
    <section className="px-6 lg:px-16 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 overflow-hidden">
      
      {/* LEFT SIDE */}
      <div className="max-w-2xl text-center lg:text-left">

        <div className="bg-orange-100 text-orange-500 inline-flex px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Fastest Food Delivery
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
          Order Fresh <br />
          Food Anytime <br />
          Anywhere
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Discover delicious meals from trusted vendors around you.
          Fast delivery, secure payments, and fresh meals every day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
          
          <Link to={`/category/Foodcategory`}>
            <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Order from the Menu
            </button>
          </Link>

          <Link to="menu">
          <button className="w-full sm:w-auto bg-white border border-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition">
            Explore Menu
          </button>
          </Link>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[700px] lg:h-[700px] bg-orange-500 rounded-full blur-3xl opacity-20"></div>

        <img
          src={Herofood}
          alt="Delicious Food"
          className="relative z-10 w-full max-w-[600px] lg:max-w-[700px] rounded-3xl lg:rounded-[40px] shadow-2xl object-cover"
        />

      </div>

    </section>
  );
}

export default Hero;