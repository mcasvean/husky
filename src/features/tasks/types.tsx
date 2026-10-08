export interface Task {
  id: number;
  task: string;
  completed: boolean;
  isEditing?: boolean;
};

export interface TasksState {
  tasks: Task[];
  editingTask: Task | null;
};
