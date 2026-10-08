import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TasksState } from "./types";

const initialState: TasksState = {
  tasks: [
    { id: 1, task: "Go to gym", completed: true, isEditing: false },
    { id: 2, task: "Drink water", completed: false, isEditing: false },
    { id: 3, task: "Make groceries", completed: false, isEditing: false },
    { id: 4, task: "Bring suit", completed: false, isEditing: false },
  ],
  editingTask: null,
};

const findTask = (list: Task[], payloadId: string | number) => {
  return list.find(({ id }) => Number(id) === Number(payloadId));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    completeTask: (state, action: PayloadAction<number>) => {
      const task = findTask(state.tasks, action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== action.payload);
    },
    editTask: (state, action: PayloadAction<number>) => {
      const task = findTask(state.tasks, action.payload);

      if(task) {
        task.isEditing = true;
        state.editingTask = task;
      }
    },
    changeEditingTask: (state, action: PayloadAction<{ id: number; task: string }>) => {
      const task = findTask(state.tasks, action.payload.id);

      if(task) {
        task.task = action.payload.task;
      }
    },
    saveChanges: (state, action: PayloadAction<number>) => {
      const task = findTask(state.tasks, action.payload);

      if(task) {
        task.isEditing = false;
        state.editingTask = null;
      }
    },
    cancelEdit: (state, action: PayloadAction<number>) => {
      const task = findTask(state.tasks, action.payload);

      if(task) {
        task.isEditing = false;
        task.task = state.editingTask?.task ?? task.task;
        state.editingTask = null;
      }
    },
  },
});

export const {
  addTask,
  removeTask,
  completeTask,
  editTask,
  changeEditingTask,
  saveChanges,
  cancelEdit,
} = tasksSlice.actions;

export default tasksSlice.reducer;
