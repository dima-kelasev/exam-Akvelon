export type StateType = {
  [key: string]: Todo[];
};

export type Todo = {
  id: string;
  description?: string;
  value?: string;
};

export type DataType = {
  name: string;
  otherArray?: string;
  value?: string;
  id?: string;
  list?: Todo[];
  description?: string;
  idx?: number;
  taskId?: string;
  toListName?: string;
  fromListName?: string;
};

export type AddTodoList = {
  type: string;
  data: DataType;
};
