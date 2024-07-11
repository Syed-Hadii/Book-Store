import React from "react";

const Item = (props) => {
  return (
    <div className="">
      <div className="card w-64 bg-base-100 shadow-xl hover:scale-105 hover:transition-all cursor-pointer">
        <figure>
          <img src={props.img} alt="" />
        </figure>
        <div className="card-body ">
          <div className="flex items-center gap-2">
            <h2 className="card-title">{props.name}</h2>
            <div className="badge badge-secondary font-semibold pb-0.5 mt-1 text-xs">
              {props.category}
            </div>
          </div>
          <p className="text-sm  text-gray-800">{props.desc}</p>
          <div className="card-actions flex justify-between">
            <div className=" badge badge-outline mt-2 text-xs font-semibold">
              ${props.price}
            </div>
            <div className=" badge badge-outline pb-0.5 mt-2 text-xs font-semibold">Buy now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
