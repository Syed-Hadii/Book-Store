import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="flex justify-center flex-wrap mt-10">
        <h2 className="font-bold text-2xl mb-6 text-center">
          We're delighted to have you{" "}
          <span className="text-pink-700 "> new everyday!!!</span>
        </h2>
        <p className="text-sm text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          earum ipsam ab ex eius, perspiciatis necessitatibus at quam tempora
          voluptatibus quibusdam nam ratione, non omnis molestiae quidem aperiam
          voluptatum, blanditiis magni. Maiores consectetur, aperiam aspernatur
          facilis totam ab tempore facere ipsa, eum quibusdam libero nostrum.
        </p>

        <button
          onClick={handleClick}
          className="w-14 h-7 pb-0.5 rounded-md text-sm mt-8 font-semibold bg-pink-600 text-white"
        >
          Back
        </button>
      </div>
      <div className="flex gap-10 flex-wrap  ml-12 md:ml-0 mt-14">
        {book.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.img}
              desc={item.desc}
              category={item.category}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Course;
