import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {!isOpen ? (
        <p>not open</p>
      ) : (
        <nav className="left-0 fixed bg-slate-500 h-full">
          <div className="flex px-10 pt-20 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            <ul>
              <li>Best Sellers</li>
              <li>Trending</li>
              <li>Literature</li>
              <li>Science</li>
              <li>History</li>
              <li>Technology</li>
              <li>Philosophy</li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default SideBar;
