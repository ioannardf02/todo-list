import { useEffect, useState } from "react";
import type { Task } from "../../models/types/Task";

export default function useList() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("listToDo", JSON.stringify(todos));
      setTotal(todos.length);
    }
  }, [todos]);

  useEffect(() => {
    const list = localStorage.getItem("listToDo");
    const parsedList = list ? JSON.parse(list) : [];
    if (parsedList.length > 0) {
      return setTodos(parsedList);
    }
  }, []);

  function handleAddTodo() {
    const uniqueId = self.crypto.randomUUID();
    if (input !== "") {
      setTotal(todos.length + 1);
      setInput("");
      setTodos([
        {
          name: input,
          id: uniqueId,
          done: false,
        },
        ...todos,
      ]);
    }
  }

  function deleteTask(taskDelete: string) {
    setTodos(todos.filter((t) => t.id !== taskDelete));
    setTotal(todos.length - 1);
    localStorage.removeItem("listToDo");
  }

  function completedClick(id: string) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  }

  return {
    completedClick,
    handleAddTodo,
    deleteTask,
    todos,
    total,
    input,
    setInput,
  };
}
