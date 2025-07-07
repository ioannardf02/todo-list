import type { MouseEventHandler } from "react";
import Button from "../Button";
import type { Task } from "../../models/types/Task";

const InputTask = ({
  todo,
  deleteTask,
  completedClick,
}: {
  todo: Task;
  deleteTask(nameDelete: string): void;
  completedClick: MouseEventHandler;
}) => {
  return (
    <div>
      <ul className="w-full">
        <li className="flex justify-between p-2 hover:border  hover:border-fuchsia-700 hover:rounded-xl text-left items-center">
          <span className="flex gap-3 pr-15 has-checked:line-through has-checked:decoration-black peer lg:text-xl md:text-lg text-base ">
            <input
              type="checkbox"
              className="accent-pink-500"
              onClick={completedClick}
            />
            {todo.name}
          </span>
          <Button
            onClick={() => deleteTask(todo.name)}
            text=""
            btnStyle="text-xl font-semibold peer-has-checked:hidden lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4"
            imgSrc="recycle-bin.svg"
          />
        </li>
      </ul>
    </div>
  );
};
export default InputTask;
