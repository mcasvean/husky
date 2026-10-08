import { useReducer, useState } from "react";
import useTask from "../Task/useTask";
import type { State, Action, User } from "./types";

function useReducerCustom() {
  const { generateId } = useTask();

  const initialState: State = {
    count: 0,
    name: "",
    users: [],
  };

  const reducer = (state: State, action: Action) => {
    console.log('action: ', action);

    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };
      case "changeName":
        return {
          ...state,
          name: action.value,
        };
      case "add":
        return {
          ...state,
          users: [...state.users, action.value],
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newUser, setNewUser] = useState<User | null>(null);

  const addUser = () => {
    if (!newUser?.name?.trim() || newUser?.age === "" || newUser?.age === undefined) {
      alert('Please complete the data');
      return;
    }

    const user = {
      id: generateId(),
      name: newUser?.name,
      age: Number(newUser?.age),
    };

    dispatch({ type: "add", value: user });
    setNewUser(null);
  };

  return {
    state,
    newUser,
    setNewUser,
    dispatch,
    addUser,
  };
}

export default useReducerCustom;
