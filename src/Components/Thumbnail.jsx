import React from "react";

const Thumbnail = (props) => {
  return (
    <div className=" border border-solid border-black-200 m-0 max-w-sm shadow-md rounded bg-zinc-50 overflow-hidden mx-2 my-4 h-80 w-52">
      <img
        className="mx-auto h-4/6 rounded-t-lg w-10/12 mb-2 justify-center border"
        src={props.image}
        alt=""
      />
      <div className="items-center ml-4">
        <p className="font-semibold text-l mb-1">{props.title}</p>
        <p className="tracking-tight">by {props.author[0]}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
