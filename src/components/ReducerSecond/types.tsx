type ActionType =
  "add"
  | "edit"
  | "save"
  | "cancel"
  | "delete"
  | "editNewStudentSubject"
  | "editNewStudentName"
  | "editNewStudentGrade"
  | "editNewStudentPromoted";

type Mode = "ADD" | "EDIT";

export type Subject =
  "Select a subject"
  | "Math"
  | "Literature"
  | "Biology"
  | "English"
  | "Chemistry"
  | "Geography"
  | "Music";

export interface Student {
  name: string;
  subject: Subject;
  grade: string;
  promoted: boolean;
  id?: number;
};

export interface State {
  students: Student[];
  newStudent: Student;
  editStudent: Student | null;
  editStudentIndex: number | null;
  mode: Mode;
};

export interface Action {
  type: ActionType;
  value?: any;
};
