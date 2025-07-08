import { useContext } from "react";
import SearchBar from "../SearchBar";
import { InfoContext } from "../../contexts/InfoContext";

const InfoList = () => {
  const { total, completed } = useContext(InfoContext);

  return (
    <div className="flex gap-2 lg:flex-row flex-col lg:justify-between md:items-center md:justify-between md:flex-row lg:items-center font-medium">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-fuchsia-900 font-light">
        Your ToDo List
      </h1>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-3 gap-2">
        <SearchBar />
        <div className="flex flex-row justify-between lg:gap-2 md:gap-2 gap-1">
          <div className="flex rounded-2xl bg-pink-100 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-sm lg:text-lg md:text-base text-center">
            Total Tasks: {total}
          </div>
          <div className="flex rounded-2xl bg-violet-200 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-sm lg:text-lg md:text-base text-center">
            Pending Tasks:{total - completed}
          </div>
          <div className="flex rounded-2xl bg-teal-100 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-center text-sm lg:text-lg md:text-base">
            Completed Tasks: {completed}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoList;
