import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 w-full">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-5 w-[80%] md:w-[60vw] mx-auto"
        >
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border mt-2 mb-3 px-2 py-1 pb-1.5 outline-none"
            {...register("name", { required: true })}
          />
            <br />
            {errors.name && <span className="text-red-500 text-xs -mt-8">* This field is required</span>}

          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border mt-2 mb-3 px-2 py-1 pb-1.5 outline-none"
            {...register("email", { required: true })}
            />
              <br />
              {errors.email && <span className="text-red-500 text-xs -mt-8">* This field is required</span>}
  

          <label htmlFor="message" className="font-semibold ">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message"
            cols="30"
            rows="4"
            className="border mt-2 px-2 py-1 outline-none"
             ></textarea>
            

          <button className="border bg-blue-700 text-white w-24 h-9 font-semibold rounded-md mt-5 pb-0.5 self-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
