export type ListToDo = {
  id?: number;
  todo: string;
  completed: boolean;
  userId: number;
  isDeleted?: boolean;
  deletedOn?: Date;
};
