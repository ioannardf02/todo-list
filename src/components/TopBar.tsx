import { NavLink } from "react-router";

const TopBar = () => {
  return (
    <div className="flex flex-row justify-between lg:p-2 p-1 items-center w-full">
      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8019/8019152.png"
          className="lg:h-10 md:h-8 h-6"
        />
        <h1 className="lg:text-2xl md:text-xl text-lg font-medium text-fuchsia-900">
          EASY PLAN
        </h1>
      </div>
      <NavLink
        to={"/"}
        className="lg:text-2xl md:text-xl text-base font-bold  text-fuchsia-800"
      >
        Home
      </NavLink>
    </div>
  );
};
export default TopBar;
