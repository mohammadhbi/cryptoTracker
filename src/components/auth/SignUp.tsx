
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required").min(3, "Minimum 3 characters"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters").max(12, "Maximum 12 characters"),
}).required();

function SignUp() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/signup", data);
      console.log(response.data.message);
      navigate("/coins");
    } catch (error) {
      console.error("🟥 Error:", error);
      console.error("📦 Response:", error.response);
      setError("submit", {
        type: "server",
        message: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
    <h1>hello</h1>
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/50">
        {/* Title with gradient */}
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Join Xchange
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="text"
              {...register("email")}
              placeholder="Email Address"
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Server Error */}
          {errors.submit && (
            <p className="text-center text-red-500 text-sm animate-fade-in">
              {errors.submit.message}
            </p>
          )}
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-gray-400">
          <span>Already have an account? </span>
          <a href="/login" className="text-cyan-400 hover:underline">Log In</a>
        </div>

        {/* Divider and Third-Party Options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-500">Or</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full py-2 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-all duration-300">
              <img src="https://bin.bb-os.com/accounts_nuxt/google.54b8222d.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full py-2 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-all duration-300">
              <img src="https://bin.bb-os.com/accounts_nuxt/apple.078e50f6.svg" alt="Apple" className="w-5 h-5 invert" />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;