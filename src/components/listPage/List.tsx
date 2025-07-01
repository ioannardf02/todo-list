import AddTask from "./AddTask";
import InputTask from "./InputTask";

const List = () => {
  return (
    <div className="flex flex-col rounded-3xl bg-violet-100 shadow-2xl items-center p-10 gap-4">
      <AddTask />
      <InputTask />
    </div>
  );
};
export default List;
