function Seller() {

  return (

    <div className="min-h-screen bg-[#f8f8f8]">

      {/* HERO */}

      <section className="px-6 lg:px-16 md:py-12 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="max-w-2xl text-center lg:text-left">

            <p className="text-orange-500 font-semibold mb-4">
              Become A Vendor
            </p>

            <h1 className="text-3xl lg:text-7xl font-black leading-tight">

              Grow Your <br />
              Food Business <br />
              With ChowMarket

            </h1>

            <p className="text-gray-500 text-base leading-relaxed mt-6 max-w-xl">

              Reach more customers, receive orders online,
              and grow your food business faster with ChowMarket.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a href="#start-selling">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">

                Start Selling

              </button>

              </a>
              <a href="#learn-more">
                <button className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">

                Learn More

              </button>
                

              </a>
              

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute w-[350px] h-[350px] bg-orange-500 rounded-full blur-3xl opacity-20"></div>

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt=""
              className="relative z-10 rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>
      <div className="border-t border-gray-200 mb-10"></div>


      

  

    </div>

  );
}

export default Seller;