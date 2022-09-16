import React from "react";

const Thumbnail = (props) => {
  return (
    <div className=" border border-solid border-black-200 m-0 max-w-sm shadow-md rounded bg-gray-100 overflow-hidden mx-2 my-4">
      <img
        className="mx-auto h-2/3 rounded-t-lg w-2/3 mb-2 justify-center"
        src={props.image}
        alt=""
      />
      <div className="items-center">
        <p className="font-bold text-l mb-2">{props.title}</p>
        <p className="tracking-tight">by {props.author}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
