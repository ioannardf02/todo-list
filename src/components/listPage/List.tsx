import { useState } from "react";
import Button from "../Button";
import type { Task } from "../../models/types/Task";
import InputTask from "./InputTask";
import InfoList from "./InfoList";
import { InfoContext } from "../InfoContext";

const List = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  // const [flag, setFlag] = useState(false);

  function handleAddTodo() {
    if (input !== "") {
      setTotal(total + 1);
      setInput("");
      setTodos([
        {
          name: input,
          id: todos.length,
        },
        ...todos,
      ]);
    }
  }
  function deleteTask(nameDelete: string) {
    setTodos(todos.filter((t) => t.name !== nameDelete));
  }

  // useEffect(() => {
  //   if (flag) {
  //     setFlag(false);
  //   } else {
  //     setFlag(true);
  //   }
  // });

  function completedClick() {
    setCompleted(completed + 1);
    // setFlag(true);
  }
  console.log(todos);

  return (
    <>
      <InfoContext.Provider value={{ total, completed }}>
        <InfoList />

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
              "rounded-lg lg:py-2 lg:px-3 md:py-2 md:px-3 px-2 py-1 bg-fuchsia-800 shadow-lg shadow-indigo-500/50 lg:text-3xl md:text-xl text-base font-semibold text-white"
            }
            imgSrc="plus.png"
          />
        </div>
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
      </InfoContext.Provider>
    </>
  );
};
export default List;
