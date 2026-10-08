export type Priority = "High" | "Medium" | "Low";

export interface UpdatedTask {
  id: number;
  title: string;
};

export interface TaskProps {
  title: string;
  priority: Priority;
  id?: number;
  completed?: boolean;
  description?: string;
  onComplete: (id: number) => void;
  onSave: (task: UpdatedTask) => void;
  onDelete: (id: number) => void;
};

export interface TaskItem {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
  description?: string;
};

export interface TaskFormProps {
  add: (task: TaskItem) => void;
};
