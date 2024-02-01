export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
  isSelected?: boolean;
};

export type Todos = Todo[];
