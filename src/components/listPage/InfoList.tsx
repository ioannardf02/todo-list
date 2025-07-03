import SearchBar from "../SearchBar";

const InfoList = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between justify-start md:items-center md:justify-between md:flex-row lg:items-center font-medium">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-fuchsia-900 font-light">
        Your ToDo List
      </h1>
      <div className="flex lg:flex-row md:flex-row flex-col gap-4">
        <SearchBar />
        <div className="flex flex-row justify-between lg:gap-2 md:gap-2">
          <div className="flex rounded-2xl bg-violet-200 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-sm lg:text-lg md:text-base text-center">
            Total Tasks: 0
          </div>
          <div className="flex rounded-2xl bg-teal-100 shadow-xl lg:px-5 lg:py-3 md:py-3 md:px-2 py-2 px-1 text-center text-sm lg:text-lg md:text-base">
            Completed Tasks: 0
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoList;
