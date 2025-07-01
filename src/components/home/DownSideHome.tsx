import { Link } from "react-router";
import Button from "../Button";

const DownSideHome = () => {
  return (
    <div className="flex items-center h-1/2">
      <div className="flex flex-col rounded-3xl bg-violet-100 text-left items-center gap-5 p-10">
        <p className=" text-xl font-light">
          Stay organized and boost your productivity with ease. Add your tasks,
          check them off as you go, and keep track of everything in one simple
          place. Whether it's work, study, or daily chores — we’ve got your
          back. Let’s get things done, one task at a time!
        </p>
        <Link to={"/mylist"}>
          <Button
            text={"Start to plan"}
            btnStyle={
              "rounded-full p-4 bg-fuchsia-800 text-white hover:opacity-80"
            }
          />
        </Link>
      </div>
    </div>
  );
};
export default DownSideHome;
