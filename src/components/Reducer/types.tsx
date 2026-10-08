export interface User {
  id?: number;
  name?: string;
  age?: number | string;
};

export interface State {
  count: number;
  name: string;
  users: User[];
  newUser?: User | null;
};

type ActionType = "add" | "increment" | "changeName";

export interface Action {
  type: ActionType;
  value?: any;
};
