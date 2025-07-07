import { useEffect, useState } from "react";
import type { Task } from "../../models/types/Task";

export default function useList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [total, setTotal] = useState(0);
  const [empty, setEmpty] = useState(true);

  const completed = todos.filter((todo) => todo.done).length;

  useEffect(() => {
    if (total === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [total]);

  function handleAddTodo() {
    if (input !== "") {
      setTotal(total + 1);
      setInput("");
      setTodos([
        {
          name: input,
          id: todos.length,
          done: false,
        },
        ...todos,
      ]);
    }
  }
  function deleteTask(nameDelete: string) {
    setTodos(todos.filter((t) => t.name !== nameDelete));
    setTotal(total - 1);
  }
  function completedClick(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  }
  console.log(todos);
  return {
    completedClick,
    handleAddTodo,
    deleteTask,
    todos,
    total,
    completed,
    input,
    setInput,
    empty,
  };
}
