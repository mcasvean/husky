import { useReducer } from "react";
import useTask from "../Task/useTask";
import { subjects, STORAGE_KEYS } from "../../constants";
import type { State, Action } from "./types";

function useReducerSecond() {
  const { generateId } = useTask();
  const defaultStudent = {
    name: "",
    subject: subjects[0],
    grade: "",
    promoted: false,
  };
  const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
  const initialState: State = {
    students: data ? JSON.parse(data) : [],
    newStudent: defaultStudent,
    editStudent: null,
    editStudentIndex: null,
    mode: "ADD",
  };

  const reducer = (state: State, action: Action): State => {
    const { type, value } = action;

    switch (type) {
      case "add":
        const newStateAdd: State = {
          ...state,
          students: [
            ...state.students,
            {
              ...value,
              id: generateId(),
            },
          ],
          newStudent: { ...defaultStudent },
        };
        localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(newStateAdd.students));

        return newStateAdd;
      case "edit":
        return {
          ...state,
          editStudent: value.student,
          editStudentIndex: value.index,
          newStudent: value.student,
          mode: "EDIT",
        };
      case "save":
        const newStateSave: State = {
          ...state,
          students: [
            ...state.students.map((student, idx) => {
              return idx === state.editStudentIndex ? value : student;
            }),
          ],
          editStudent: null,
          editStudentIndex: null,
          newStudent: defaultStudent,
          mode: "ADD",
        };
        localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(newStateSave.students));

        return newStateSave;
      case "cancel":
        return {
          ...state,
          editStudent: null,
          editStudentIndex: null,
          newStudent: defaultStudent,
          mode: "ADD",
        };
      case "delete":
        const newStateDelete = {
          ...state,
          students: state.students.filter((_, idx) => idx !== value?.index),
        };
        localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(newStateDelete.students));

        return newStateDelete;
      case "editNewStudentSubject":
        return {
          ...state,
          newStudent: {
            ...state.newStudent,
            subject: value,
          },
        };
      case "editNewStudentName":
        return {
          ...state,
          newStudent: {
            ...state.newStudent,
            name: value,
          },
        };
      case "editNewStudentGrade":
        return {
          ...state,
          newStudent: {
            ...state.newStudent,
            grade: value,
          },
        };
      case "editNewStudentPromoted":
        return {
          ...state,
          newStudent: {
            ...state.newStudent,
            promoted: value,
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    subjects,
    dispatch,
  };
}

export default useReducerSecond;
