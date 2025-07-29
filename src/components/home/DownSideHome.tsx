import type { MouseEventHandler } from "react";
import Button from "../Button";
const DownSideHome = ({ loadingFun }: { loadingFun: MouseEventHandler }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-violet-100 text-left gap-5 p-10 dark:bg-purple-200">
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2  w-full items-left">
        <p className=" lg:text-xl  text-sm font-light dark:text-black">
          Stay organized and boost your productivity with ease. Add your tasks,
          check them off as you go, and keep track of everything in one simple
          place. Whether it's work, study, or daily chores — we’ve got your
          back. Let’s get things done, one task at a time!
        </p>
        <Button
          text={"Start planning"}
          btnStyle={
            "rounded-full p-3 bg-black text-white hover:bg-pink-500 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white transition ease-in-out hover:-translate-y-1"
          }
          onClick={loadingFun}
        />
      </div>
    </div>
  );
};
export default DownSideHome;
