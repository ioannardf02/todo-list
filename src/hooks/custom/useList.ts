import { useEffect, useState } from "react";
import type { Task } from "../../models/types/Task";

export default function useList() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    localStorage.setItem("listToDo", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const list = localStorage.getItem("listToDo");
    if (list) {
      return setTodos(JSON.parse(list));
    }
  }, []);
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
  function deleteTask(taskDelete: number) {
    setTodos(todos.filter((t) => t.id !== taskDelete));
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
