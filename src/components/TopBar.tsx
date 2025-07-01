import { NavLink } from "react-router";

const TopBar = () => {
  return (
    <div className="flex flex-row justify-between p-6 items-center">
      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8019/8019152.png"
          className="h-10"
        />
        <h1 className="text-2xl font-medium text-fuchsia-900">EASY LIST</h1>
      </div>
      <NavLink to={"/"} className="text-2xl font-bold  text-fuchsia-800">
        Home
      </NavLink>
    </div>
  );
};
export default TopBar;
