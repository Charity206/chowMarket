// LoginPage.jsx
// 



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // FAKE LOGIN LOGIC (replace later with backend)
    if (
      email === "vendor@chowmarket.com" &&
      password === "123456"
    ) {
      setMessage("Login Successful ✅");

      // optional redirect after 1 second
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } else {
      setMessage("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8] px-6">

      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Vendor Login
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your ChowMarket account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <label>vendor@chowmarket.com</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500"
          />

          {/* PASSWORD */}
          <label>use: 123456</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>

        </form>

        {/* MESSAGE */}
        {message && (
          <p
            className={`text-center mt-4 font-medium ${
              message.includes("Successful")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* SIGNUP LINK */}
        <p className="text-center mt-6 text-gray-500">
          New vendor?{" "}
          <Link
            to="/Seller"
            className="text-orange-500 font-semibold"
          >
            Sign up to become a seller
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;