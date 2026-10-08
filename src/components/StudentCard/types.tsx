import type { Student, State } from "../ReducerSecond/types";

export interface StudentCardProps {
  index: number;
  student: Student;
  state: State;
  dispatch: any;
};
