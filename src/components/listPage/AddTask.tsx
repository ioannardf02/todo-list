import { useState } from "react";
import Button from "../Button";

const AddTask = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{ id: 0, input: "gggg" }]);

  function handleAddTodo() {
    setInput("");
    setTodos([
      {
        id: todos.length,
        input: input,
      },
      ...todos,
    ]);
  }

  console.log(todos);

  return (
    <>
      <div className="flex flex-row gap-4">
        <input
          value={input}
          placeholder="Enter your task..."
          className="border-b-2 border-fuchsia-800 focus:outline-hidden lg:text-lg md:text-xl text-base"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          addTask={handleAddTodo}
          text=""
          btnStyle={
            "rounded-lg lg:py-2 lg:px-3 md:py-2 md:px-3 px-2 py-1 bg-fuchsia-800 shadow-lg shadow-indigo-500/50 lg:text-3xl md:text-xl text-base font-semibold text-white"
          }
          imgSrc="plus.png"
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between p-2 hover:border  hover:border-fuchsia-700 hover:rounded-xl text-left items-center"
          >
            <span className="flex gap-3 pr-15 has-checked:line-through has-checked:decoration-black peer lg:text-xl md:text-lg text-base ">
              <input type="checkbox" className="accent-pink-500" />
              {todo.input}
            </span>
            <Button
              text=""
              btnStyle="text-xl font-semibold peer-has-checked:hidden lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4"
              imgSrc="recycle-bin.png"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default AddTask;
