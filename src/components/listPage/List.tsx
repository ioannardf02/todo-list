import Button from "../Button";
import InputTask from "./InputTask";
import InfoList from "./InfoList";
import { InfoContext } from "../../contexts/InfoContext";
import useList from "../../hooks/custom/useList";
import { useMemo, useState } from "react";
import useDebounce from "../../hooks/custom/useDebounce";
import { PaginationDemo } from "../Pagination";
import type { ListToDo } from "@/models/types/ListToDo";

const List = () => {
  const {
    completedClick,
    handleAddTodo,
    deleteTask,
    setInput,
    input,
    listtodo,
    totaldo,
    page,
  } = useList();

  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 800);

  const searchList = useMemo(() => {
    if (search !== "") {
      return listtodo.filter((t) =>
        t.todo.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return [];
    }
  }, [debouncedSearch, listtodo]);

  const completed = useMemo(
    () => listtodo.filter((todo) => todo.completed).length,
    [listtodo]
  );

  function checkList() {
    if (listtodo.length === 0) {
      return <p>You don't have Tasks!</p>;
    } else if (
      listtodo.length > 0 &&
      searchList.length === 0 &&
      debouncedSearch !== ""
    ) {
      return <p className="dark:text-black">You don't have Tasks!</p>;
    }
  }
  return (
    <div>
      <InfoContext.Provider value={{ completed, totaldo }}>
        <InfoList />
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-row gap-1">
            <input
              value={search}
              type="search"
              placeholder="Search Task..."
              className="flex rounded-lg lg:p-3 md:p-2 p-1 gap-2 lg:h-10 lg:w-xl md:h-8 md:w-md h-6 w-2xs border-fuchsia-800 border dark:placeholder:text-black dark:text-black focus:outline-hidden lg:text-lg md:text-base text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4">
            <input
              value={input}
              placeholder="Enter your task..."
              className="border-b-2 border-fuchsia-800 focus:outline-hidden lg:text-lg md:text-xl text-base dark:text-black dark:placeholder:text-black"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              onClick={handleAddTodo}
              text=""
              btnStyle={
                "rounded-lg lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8  bg-fuchsia-800 shadow-lg shadow-indigo-500/50 lg:text-3xl md:text-xl text-base font-semibold text-white"
              }
              imgSrc="/addTask.svg"
            />
          </div>
          {checkList()}
          <ul>
            {searchList.map((todo: ListToDo, key: number) => (
              <InputTask
                todo={todo}
                key={key}
                completedClick={completedClick}
                deleteTask={deleteTask}
              />
            ))}
            {listtodo.length > 0 &&
              searchList.length === 0 &&
              debouncedSearch === "" &&
              listtodo.map((todo: ListToDo) => (
                <InputTask
                  todo={todo}
                  key={todo.id}
                  completedClick={completedClick}
                  deleteTask={deleteTask}
                />
              ))}
          </ul>
        </div>
      </InfoContext.Provider>
      {PaginationDemo({ pages: page, totalItems: totaldo })}
    </div>
  );
};
export default List;
