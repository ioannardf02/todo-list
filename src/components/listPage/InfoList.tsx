import SearchBar from "../SearchBar";

const InfoList = () => {
  return (
    <div className="flex flex-row justify-between items-center font-medium p-4">
      <h1 className="text-3xl font-semibold text-fuchsia-950 ">
        Your ToDo List
      </h1>
      <SearchBar />
      <div className="flex flex-row gap-4">
        <div className="flex rounded-4xl bg-fuchsia-100 shadow-xl p-6">
          Total Tasks: 0
        </div>
        <div className="flex rounded-4xl bg-teal-100 shadow-xl p-6">
          Completed Tasks: 0
        </div>
      </div>
    </div>
  );
};
export default InfoList;
