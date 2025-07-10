import { useEffect, useMemo, useState } from "react";
import type { Task } from "../../models/types/Task";

export default function useList() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [empty, setEmpty] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const uniqueId = self.crypto.randomUUID();

  const completed = useMemo(
    () => todos.filter((todo) => todo.done).length,
    [todos]
  );

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

  useEffect(() => {
    if (total === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [total]);

  function handleAddTodo() {
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
  function searchTask(input: string) {
    const listSearch = todos.filter((t) =>
      t.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(listSearch);
    return listSearch;
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
    searchTask,
    inputSearch,
    setInputSearch,
  };
}
