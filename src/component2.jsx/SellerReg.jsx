import { Store } from "lucide-react";
import {ArrowDownUp} from "lucide-react"
import{CirclePoundSterling } from "lucide-react"
function SellerReg() {
const steps = [
  {
    id: 1,
    title: "Create a vendor's account",
    description:
      "Register on chowmarket to reach more potential customers.",
  },
  {
    id: 2,
    title: "Upload Food",
    description:
      "Add your food images and prices.",
  },
  {
    id: 3,
    title: "Start Earning",
    description:
      "Receive orders and grow your business.",
  },
];

  return (

    <div className="min-h-screen bg-[#f8f8f8] overflow-hidden">
        <section id="learn-more">
         <h2 className="text-2xl
      sm:text-3xl
      lg:text-4xl
      font-black
      text-center
      px-4">
            Why Sell On ChowMarket?
          </h2>
          
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 lg:px-16">
            <div className="bg-white p-8 rounded-[30px] shadow-sm">
                <div className="w-15 h-15 rounded-full bg-orange-100 flex items-center justify-center">
                <Store className="w-6 h-6 text-orange-500 " />
                </div>
                <h3 className="text-2xl font-bold mb-4">Your storefront</h3>
                <p className="text-gray-500 leading-relaxed">A beautiful page for your menu, hours and ratings.</p>
            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-sm">
                <div className="w-15 h-15 rounded-full bg-orange-100 flex items-center justify-center">
                < ArrowDownUp className="w-6 h-6 text-orange-500 " />
                </div>
                <h3 className="text-2xl font-bold mb-4">More orders</h3>
                <p className="text-gray-500 leading-relaxed">Get discovered by hungry customers nearby.</p>
            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-sm">
                <div className="w-15 h-15 rounded-full bg-orange-100 flex items-center justify-center">
                < CirclePoundSterling className="w-6 h-6 text-orange-500 " />
                </div>
                <h3 className="text-2xl font-bold mb-4">Daily payouts</h3>
                <p className="text-gray-500 leading-relaxed">Earnings settled to your account every day.</p>
            </div>
            
         </div>
        </section>

        <section id="start-selling" className="py-12 md:py-16 lg:py-20">

  <h2
    className="
      text-2xl
      sm:text-3xl
      lg:text-4xl
      font-black
      text-center
      px-4
    "
  >
    Start selling in three steps:
  </h2>

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      lg:gap-8
      mt-10
      lg:mt-16
      px-4
      sm:px-6
      lg:px-16
    "
  >

    {steps.map((step) => (
      <div
        key={step.id}
        className="
          bg-white
          p-6
          sm:p-8
          rounded-[30px]
          shadow-sm
          hover:shadow-xl
          transition
          text-center
        "
      >

        <div
          className="
            w-12
            h-12
            sm:w-14
            sm:h-14
            rounded-full
            text-white
            bg-orange-500
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            text-xl
            sm:text-2xl
            font-bold
          "
        >
          {step.id}
        </div>

        <h3
          className="
            text-xl
            sm:text-2xl
            font-bold
            mb-4
          "
        >
          {step.title}
        </h3>

        <p className="text-gray-500 leading-relaxed">
          {step.description}
        </p>

      </div>
    ))}

  </div>

</section>


     <section className="px-6 lg:px-16 py-10">

        <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-10 shadow-sm">

          <h2 className="text-2xl
      sm:text-3xl
      lg:text-4xl font-black mb-10 text-center">
            Apply As A Vendor
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Business Name"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
            />

            <textarea
              placeholder="Tell us about your business"
              rows="5"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
            ></textarea>

            <button className=" cursor-pointer w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:scale-[1.01] transition">

              Submit Application

            </button>

          </form>

        </div>

      </section>


        

      
    </div>

  );
}

export default SellerReg;