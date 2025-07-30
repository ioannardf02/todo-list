import type { ListToDo } from "@/models/types/ListToDo";
import Button from "../Button";

const InputTask = ({
  todo,
  completedClick,
  deleteTask,
}: {
  todo: ListToDo;
  deleteTask(idDel?: number): void;
  completedClick(id?: number, completed?: boolean): void;
}) => {
  return (
    <div>
      <ul className="w-full">
        <li className="flex justify-between p-2 hover:border  hover:border-fuchsia-700 dark:hover:border-slate-100 hover:rounded-xl text-left items-center">
          <span className="flex gap-3 pr-15 has-checked:line-through has-checked:decoration-black peer lg:text-xl md:text-lg text-base dark:text-black">
            <input
              type="checkbox"
              checked={todo.completed}
              className="accent-pink-500 dark:accent-black"
              onChange={() => completedClick(todo?.id, !todo.completed)}
            />
            {todo.todo}
          </span>
          <Button
            onClick={() => deleteTask(todo?.id)}
            text=""
            btnStyle="text-xl font-semibold peer-has-checked:hidden lg:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4"
            imgSrc="/recycle-bin.svg"
          />
        </li>
      </ul>
    </div>
  );
};
export default InputTask;
