import type { Subject } from "./components/ReducerSecond/types";

type Priority = "High" | "Medium" | "Low";

interface Task {
  title: string;
  priority: Priority;
  id?: number;
  completed?: boolean;
  description?: string;
}

export const tasks: Task[] = [
  { id: 1, title: "Build project", priority: "Low", completed: false },
  { id: 2, title: "Learn React", priority: "High", completed: false },
  { id: 3, title: "Learn TypeScript", priority: "Medium", completed: true },
];

export const subjects: Subject[] = [
  "Select a subject",
  "Math",
  "Literature",
  "Biology",
  "English",
  "Chemistry",
  "Geography",
  "Music", 
];

export const PRIORITIES: Priority[] = [
  "High",
  "Medium",
  "Low",
];

export const STORAGE_KEYS = {
  STUDENTS: "students",
  IS_AUTH: "isAuthenticated",
};
