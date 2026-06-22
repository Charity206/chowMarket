function Footer() {

  return (

    <footer className="bg-white text-black px-6 lg:px-16 py-20 mt-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO */}

        <div>

          <h1 className="text-3xl font-black text-orange-500">
            chowMarket
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed">

            Connecting food vendors with hungry customers
            across Nigeria.

          </p>

        </div>

        {/* COMPANY */}

        <div>

          <h2 className="text-xl font-bold mb-6">
            Company
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              Vendors
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              Careers
            </li>

          </ul>

        </div>

        {/* SUPPORT */}

        <div>

          <h2 className="text-xl font-bold mb-6">
            Support
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer transition">
              Help Center
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              FAQs
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              Contact Us
            </li>

          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h2 className="text-xl font-bold mb-6">
            Contact
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>Lagos, Nigeria</li>

            <li>support@chowmarket.com</li>

            <li>+234 800 000 0000</li>

          </ul>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-gray-200 mt-16 pt-8 flex  md:flex-row items-center justify-between gap-4">

        <p className="text-gray-500 text-sm">
          © 2026 chowMarket. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-gray-400">

          <p className="hover:text-orange-500 cursor-pointer transition">
            Instagram
          </p>

          <p className="hover:text-orange-500 cursor-pointer transition">
            Twitter
          </p>

          <p className="hover:text-orange-500 cursor-pointer transition">
            Facebook
          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;