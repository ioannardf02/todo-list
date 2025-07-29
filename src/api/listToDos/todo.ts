import { axiosInstance } from "..";

export type ListToDo = {
  id?: number;
  todo: string;
  completed: boolean;
  userId: number;
  isDeleted?: boolean;
  deletedOn?: Date;
};

export const getAllTodos = async () => {
  const res = await axiosInstance.get(`/todos`);
  return res.data;
};

export const getToDoById = async (id: string): Promise<ListToDo> => {
  const res = await axiosInstance.get(`/todos/${id}`);
  return res.data;
};

export const getRandomToDo = async () => {
  const res = await axiosInstance.get(`/todos/random`);
  return res.data;
};

export const getLimitSkipToDo = async (
  skip: number,
  limit: number
): Promise<{
  todos: ListToDo[];
  total: number;
  skip: number;
  limit: number;
}> => {
  const res = await axiosInstance.get(`/todos`, {
    params: {
      skip: skip,
      limit: limit,
    },
  });
  return res.data;
};

export const getToDoByUserId = async (userId: number): Promise<ListToDo> => {
  const res = await axiosInstance.get(`/todos/user/${userId}`);
  return res.data;
};

export const deleteToDo = async (
  id: number
): Promise<{ isDeleted: boolean; deletedOn: string }> => {
  const res = await axiosInstance.delete(`/todos/${id}`);
  return res.data;
};

export const updateToDo = async (params: {
  id: number;
  todo: Partial<ListToDo>;
}): Promise<ListToDo> => {
  const res = await axiosInstance.patch(`/todos/${params.id}`, {
    ...params.todo,
  });
  return res.data;
};

export const createToDo = async (data: ListToDo): Promise<ListToDo> => {
  const res = await axiosInstance.post(`todos/add`, {
    ...data,
  });

  return res.data;
};
