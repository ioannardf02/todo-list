import AddTask from "./AddTask";
import InputTask from "./InputTask";

const List = () => {
  return (
    <div className="flex flex-col rounded-3xl bg-violet-50 shadow-2xl items-center p-10 gap-7 lg:w-1/2 md:w-1/2 w-full text-center">
      <AddTask />
      <InputTask />
    </div>
  );
};
export default List;
