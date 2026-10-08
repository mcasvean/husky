type Subject =
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

export interface StudentsState {
  students: Student[];
};
