import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../constants";
import type { Student, StudentsState } from "./types";

const initialState: StudentsState = {
  students: JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDENTS) ?? "") ?? [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action: PayloadAction<number>) => {
      state.students = state.students.filter(({ id }) => id !== action.payload);
    },
    togglePromoted: (state, action: PayloadAction<number>) => {
      const student = state.students.find(({ id }) => id === action.payload);

      if (student) {
        student.promoted = !student.promoted;
      }
    },
  },
});

export const {
  addStudent,
  removeStudent,
  togglePromoted,
} = studentsSlice.actions;

export default studentsSlice.reducer;
