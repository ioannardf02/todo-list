import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const TopBar = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark");
      body.classList.remove("light");
      localStorage.theme = "dark";
      document.documentElement.classList.toggle("dark");
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      localStorage.theme = "light";
      document.documentElement.classList.toggle("light");
      document.querySelector("body")?.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex lg:flex-row lg:justify-between lg:py-2 md:flex-row md:justify-between py-1 items-center w-full flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8019/8019152.png"
          className="lg:h-10 md:h-8 h-6"
          alt="topBarLogo"
        />
        <h1 className="lg:text-2xl md:text-xl text-lg font-medium text-fuchsia-900 dark:text-slate-200">
          EASY PLAN
        </h1>
      </div>
      <div className="flex flex-row gap-2">
        <div className="relative inline-block w-11 h-5">
          <input
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            id="switch-component"
            type="checkbox"
            className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
          />
          <label
            htmlFor="switch-component"
            className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
          />
        </div>
        <label className="text-fuchsia-800 dark:text-slate-100">
          Dark Mode
        </label>
      </div>
      <NavLink
        to={"/"}
        className="lg:text-2xl md:text-xl text-base font-bold  text-fuchsia-800 dark:text-slate-200"
      >
        Home
      </NavLink>
    </div>
  );
};
export default TopBar;
