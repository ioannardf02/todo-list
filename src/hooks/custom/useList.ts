import { useEffect, useState } from "react";
import {
  createToDo,
  deleteToDo,
  getLimitSkipToDo,
  updateToDo,
} from "../../api/listToDos/todo";
import { toast } from "react-toastify";
import { redirect, useSearchParams } from "react-router";
import type { ListToDo } from "@/models/types/ListToDo";

const LIMIT = 10;

export default function useList() {
  const [input, setInput] = useState<string>("");
  const [listtodo, setListtodo] = useState<ListToDo[]>([]);
  const [totaldo, setTotaldo] = useState<number>(0);
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page");

  if (!page || parseInt(page) < 1) {
    redirect(`/mylist/?page=1`);
    page = "1";
  }

  useEffect(() => {
    const skip = (parseInt(page) - 1) * LIMIT;
    const getLimit = async () => {
      const limit = await getLimitSkipToDo(skip, LIMIT);
      setListtodo(limit.todos);
      setTotaldo(limit.total);
    };
    getLimit();
  }, [page]);

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
        setListtodo([...listtodo]);
        setTotaldo(totaldo + 1);
        toast.success("Succcess Add");
        setInput("");
      } catch (error) {
        console.log(error);
        toast.error("Try again!");
      }
    }
  }
  async function deleteTask(taskDelete: number) {
    try {
      await deleteToDo(taskDelete);
      const index = listtodo.findIndex((t) => t.id === taskDelete);
      listtodo.splice(index, 1);
      setListtodo([...listtodo]);
      setTotaldo(totaldo - 1);
      toast.success("The task was deleted!");
    } catch (error) {
      console.log(error);
      toast.error("The API is dummy, so the delete function doesn’t work!");
    }
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
    } catch (error) {
      console.log(error);
      toast.error("The API is dummy, so the completed function does not work.");
    }
  }
  return {
    completedClick,
    handleAddTodo,
    deleteTask,
    setInput,
    input,
    listtodo,
    totaldo,
    page,
  };
}
