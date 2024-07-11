import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmitSignup = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success('Signup successful');
        login(res.data.user);
        navigate(from); // Redirect to previous page after signup
      }
    } catch (err) {
      toast.error("Error: " + err.response.data.message);
    }
  };

  const onSubmitLogin = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success('Login successful');
        login(res.data.user);
        navigate(from); // Redirect to previous page after login
      }
    } catch (err) {
      toast.error("Error: " + err.response.data.message);
    }
  };

  return (
    <div className="login-signup flex justify-center mt-20">
      {!showSignup ? (
        <div className="login w-96 h-auto border flex flex-col items-center gap-5 bg-pink-700 rounded-md text-white">
          <h1 className="text-center font-semibold text-white text-xl mt-3">Login</h1>
          <form onSubmit={handleSubmit(onSubmitLogin)} className="signup-fields flex flex-col gap-8 mt-5 items-center">
            <input
              type="email"
              placeholder="Email address"
              className="border rounded-sm text-sm outline-none px-2 text-black pb-0.5 w-64 h-8"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-200 -mt-8 text-xs -ml-36">* This field is required</span>
            )}
            <input
              type="password"
              placeholder="Password"
              className="border rounded-sm text-sm outline-none text-black px-2 pb-0.5 w-64 h-8"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-200 -mt-8 text-xs -ml-36">* This field is required</span>
            )}
            <button type="submit" className="w-24 h-10 rounded-md bg-pink-600 text-white font-semibold pb-0.5">
              Continue
            </button>
          </form>
          <p className="login-link text-white mb-5 text-sm">
            Haven't account?{" "}
            <span onClick={() => setShowSignup(true)} className="underline font-semibold cursor-pointer">
              Sign-Up here
            </span>
          </p>
        </div>
      ) : (
        <div className="signup w-96 h-auto border flex flex-col items-center gap-2 bg-pink-700 rounded-md">
          <h1 className="text-center font-semibold text-white text-xl mt-3">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmitSignup)} className="signup-fields flex flex-col gap-5 mt-5 items-center">
            <input
              type="text"
              placeholder="Full name"
              className="border rounded-sm text-sm outline-none text-black px-2 pb-0.5 w-64 h-8"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-200 -mt-5 text-xs -ml-36">* This field is required</span>
            )}
            <input
              type="email"
              placeholder="Email address"
              className="border rounded-sm text-sm outline-none text-black px-2 pb-0.5 w-64 h-8"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-200 -mt-5 text-xs -ml-36">* This field is required</span>
            )}
            <input
              type="password"
              placeholder="Password"
              className="border rounded-sm text-sm outline-none text-black px-2 pb-0.5 w-64 h-8"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-200 -mt-5 text-xs -ml-36">* This field is required</span>
            )}
            <button type="submit" className="w-24 h-10 rounded-md bg-pink-600 text-white font-semibold pb-0.5">
              Continue
            </button>
          </form>
          <p className="login-link text-white mb-5 text-sm">
            Already have an account?{" "}
            <span onClick={() => setShowSignup(false)} className="underline font-semibold cursor-pointer">
              Login here
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
