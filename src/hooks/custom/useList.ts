import { useEffect, useState } from "react";
import type { Task } from "../../models/types/Task";
import {
  createToDo,
  deleteToDo,
  getLimitSkipToDo,
  updateToDo,
  type ListToDo,
} from "../../api/listToDos/todo";
import { toast } from "react-toastify";
import { redirect, useSearchParams } from "react-router";

const LIMIT = 10;

export default function useList() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [listtodo, setListtodo] = useState<ListToDo[]>([]);
  const [totaldo, setTotaldo] = useState<number>(0);
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");

  console.log(page);

  if (!page || parseInt(page) < 1) {
    redirect(`/mylist/?page=1`);
    page = "1";
  }
  console.log(!page);
  console.log(page);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("listToDo", JSON.stringify(todos));
      setTotal(todos.length);
    }
  }, [todos]);

  useEffect(() => {
    const skip = (parseInt(page) - 1) * LIMIT;
    const getLimit = async () => {
      const limit = await getLimitSkipToDo(skip, LIMIT);
      setListtodo(limit.todos);
      setTotaldo(limit.total);
    };
    getLimit();
  }, [page]);

  useEffect(() => {
    const list = localStorage.getItem("listToDo");
    const parsedList = list ? JSON.parse(list) : [];
    if (parsedList.length > 0) {
      return setTodos(parsedList);
    }
  }, []);

  async function handleAddTodo() {
    const uniqueId = self.crypto.randomUUID();
    if (input !== "") {
      try {
        const data: ListToDo = {
          todo: input,
          completed: false,
          userId: parseInt(uniqueId),
        };
        const res = await createToDo(data);
        listtodo.push(res);
        setListtodo([res, ...listtodo]);
        setTotaldo(totaldo + 1);
        toast.success("Succcess Add");
        console.log(totaldo);
        setInput("");
        setTodos([
          {
            name: input,
            id: uniqueId,
            done: false,
          },
          ...todos,
        ]);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  }

  async function deleteTask(taskDelete: number) {
    try {
      await deleteToDo(taskDelete);
      const index = listtodo.findIndex((t) => t.id === taskDelete);
      console.log(index);
      listtodo.splice(index, 1);
      setListtodo([...listtodo]);
      setTotaldo(totaldo - 1);
      toast.success("The task was deleted!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    //other way if you use local storage//
    // setTodos(todos.filter((t) => t.id !== taskDelete));
    // setTotal(todos.length - 1);
    // localStorage.removeItem("listToDo");
  }

  async function completedClick(id: number, completed: boolean) {
    try {
      const params = { id, todo: { completed } };
      await updateToDo(params);
      setListtodo(
        listtodo.map((t) => {
          if (t.id === id) {
            return { ...t, completed: !t.completed };
          }
          return t;
        })
      );
      //other way to do the  completed tasks//
      // const task = listtodo.find((t) => t.id === id);
      // if (task) task.completed = !task.completed;
      // setListtodo([...listtodo]);
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  }
  console.log(listtodo);

  return {
    completedClick,
    handleAddTodo,
    deleteTask,
    todos,
    total,
    input,
    setInput,
    setTodos,
    listtodo,
    totaldo,
    page,
  };
}
