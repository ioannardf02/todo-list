import { Link } from "react-router";
import Button from "../Button";

const DownSideHome = () => {
  return (
    <div className="flex flex-col rounded-3xl bg-violet-100 text-left gap-5 p-10">
      <div className="flex flex-col gap-4 w-1/2 items-left">
        <p className=" lg:text-xl  text-sm font-light">
          Stay organized and boost your productivity with ease. Add your tasks,
          check them off as you go, and keep track of everything in one simple
          place. Whether it's work, study, or daily chores — we’ve got your
          back. Let’s get things done, one task at a time!
        </p>
        <Link to={"/mylist"}>
          <Button
            text={"Start to plan"}
            btnStyle={
              "rounded-full p-3 bg-black text-white hover:bg-pink-500 hover:text-black transition ease-in-out hover:-translate-y-1"
            }
          />
        </Link>
      </div>
    </div>
  );
};
export default DownSideHome;
