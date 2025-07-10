import Button from "../Button";
import type { Task } from "../../models/types/Task";
import InputTask from "./InputTask";
import InfoList from "./InfoList";
import { InfoContext } from "../../contexts/InfoContext";
import useList from "../../hooks/custom/useList";

const List = () => {
  const {
    completedClick,
    handleAddTodo,
    deleteTask,
    todos,
    total,
    completed,
    input,
    setInput,
    inputSearch,
    setInputSearch,
    searchTask,
  } = useList();

  return (
    <>
      <InfoContext.Provider value={{ total, completed }}>
        <InfoList />
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-row gap-1">
            <input
              value={inputSearch}
              type="search"
              placeholder="Search Task..."
              className="flex rounded-lg lg:p-3 md:p-2 p-1 gap-2 lg:h-10 lg:w-xl md:h-8 md:w-md h-6 w-2xs border-fuchsia-800 border focus:outline-hidden lg:text-lg md:text-base text-sm"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Button
              text={""}
              btnStyle={
                "rounded-lg lg:h-10 lg:w-10 md:h-8 md:w-8 h-6 w-6  bg-fuchsia-800 shadow-lg shadow-indigo-500/50 lg:text-3xl md:text-xl text-base font-semibold text-white"
              }
              imgSrc={"search.svg"}
              onClick={() => searchTask(inputSearch)}
            />
          </div>

          <div className="flex flex-row gap-4">
            <input
              value={input}
              placeholder="Enter your task..."
              className="border-b-2 border-fuchsia-800 focus:outline-hidden lg:text-lg md:text-xl text-base"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              onClick={handleAddTodo}
              text=""
              btnStyle={
                "rounded-lg lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8  bg-fuchsia-800 shadow-lg shadow-indigo-500/50 lg:text-3xl md:text-xl text-base font-semibold text-white"
              }
              imgSrc="addTask.svg"
            />
          </div>
          {todos.length === 0 ? (
            <p>You don't have Tasks!</p>
          ) : (
            <ul>
              {todos.map((todo: Task, key: number) => {
                return (
                  <InputTask
                    todo={todo}
                    key={key}
                    deleteTask={deleteTask}
                    completedClick={completedClick}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </InfoContext.Provider>
    </>
  );
};
export default List;
