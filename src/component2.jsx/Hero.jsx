import { Link } from "react-router-dom"
import Herofood from "../assets/herofood.jpg"


function Hero(){

   

    return(
        <div>
            
{/* Hero */}
<section className="px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-16">
     <div className="max-w-2xl">

          <div className="bg-orange-100 text-orange-500 inline-flex px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Fastest Food Delivery
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">

            Order Fresh <br />
            Food Anytime <br />
            Anywhere

          </h1>

          <p className="text-white-500 text-lg mt-6 leading-relaxed max-w-xl">

            Discover delicious meals from trusted vendors around you.
            Fast delivery, secure payments, and fresh meals every day.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to={"/Foodgrid"}>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Order from the menu 
            </button>
            </Link>

            

            <button className="bg-white border border-gray-300 px-8 py-4 rounded-2xl font-semibold">
              Explore Menu
            </button>

          </div>

        </div>
        {/* right */}
        <div className="relative">

          <div className="absolute w-[700px] h-[700px] bg-orange-500 rounded-full blur-3xl opacity-20"></div>

          <img
            src={Herofood}
            alt=""
            className="relative z-10 w-[700px] lg:w-[700px] rounded-[40px] shadow-2xl object-cover"
          />

        </div>
</section>

   

      

      


        </div>
    )
}
export default Hero