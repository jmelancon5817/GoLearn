const SideBar = () => {
  const sidebarData = [
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
    {
      title: "Genre",
      link: "/api",
    },
  ];

  return (
    <div
      className={`top-0 left-0 w-[15vw] mt-20 relative h-[100vw]  bg-slate-500 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-200 
      `}
    >
      <h3 className="flex justify-center mt-10 text-2xl font-semibold  text-gray-200">
        <ul className="space-y-4 pr-8 hover:cursor-pointer ">
          <li>Trending</li>
          {sidebarData.map((val, key) => {
            return (
              <li key={key} className="hover:text-gray-400">
                {val.title}
              </li>
            );
          })}
        </ul>
      </h3>
    </div>
  );
};

export default SideBar;
