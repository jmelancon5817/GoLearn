import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import SearchBar from "./SearchBar";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "my books",
    },
    {
      id: 3,
      link: "to read",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 z-10 text-gray-800 bg-gray-200 fixed">
      <div>
        <h1 className="text-xl font-signature ml-2 border-b-2 border-cyan-500">
          GoLEARN
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-800 hover:scale-105 duration-200 hover:text-cyan-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <SearchBar />
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-300 to-gray-500 text-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
