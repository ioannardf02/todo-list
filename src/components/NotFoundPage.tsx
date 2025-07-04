import { Link } from "react-router";
import Button from "./Button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-12">
      <h1 className="lg:text-9xl md:text-8xl text-6xl font-extrabold font-stretch-expanded text-shadow-lg/30">
        Oops!
      </h1>
      <h1 className="lg:text-3xl md:text-2xl text-lg">404 Page Not Found</h1>
      <Link to={"/"}>
        <Button
          text={"Go Back"}
          btnStyle={
            "flex rounded-full bg-red-600 text-white lg:p-3 md:p-2 p-1 hover:opacity-85"
          }
        />
      </Link>
    </div>
  );
};
export default NotFoundPage;
