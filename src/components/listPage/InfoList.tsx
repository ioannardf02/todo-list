import { useContext } from "react";
import { InfoContext } from "../../contexts/InfoContext";

const InfoList = () => {
  const { completed, totaldo } = useContext(InfoContext);

  return (
    <div className="flex lg:flex-row lg:justify-between flex-col md:flex-row md:justify-between items-center gap-2 pb-4">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-fuchsia-900 dark:font-medium dark:text-black font-light">
        Your ToDo List
      </h1>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-3 gap-2 justify-between">
        <div className="flex flex-row justify-between lg:gap-2 md:gap-2 gap-1">
          <div className="flex rounded-2xl bg-pink-100 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-sm dark:text-black lg:text-lg md:text-base text-center">
            Total Tasks: {totaldo}
          </div>
          <div className="flex rounded-2xl bg-violet-200 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-sm lg:text-lg md:text-base dark:text-black text-center">
            Pending Tasks:{totaldo - completed}
          </div>
          <div className="flex rounded-2xl bg-teal-100 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-center text-sm lg:text-lg dark:text-black md:text-base">
            Completed Tasks: {completed}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoList;
