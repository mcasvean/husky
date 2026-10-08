import { NavLink, useParams } from "react-router-dom";
import { STORAGE_KEYS } from "../../../constants";
import type { Student } from "../types";
import { useStudent } from "../../../context/studentContext";
import "./ReducerSecondDetails.css";

function ReducerSecondDetails() {
  const { id } = useParams();
  const localData = localStorage.getItem(STORAGE_KEYS.STUDENTS);
  const students = localData ? JSON.parse(localData) : [];
  const student = students?.find((item: Student) => item.id === Number(id));
  const { name, subject, grade, promoted } = student ?? {};
  const { speciality, city, year, addData, removeData } = useStudent();

  return (
    <>
      <h3>Student details are here for promotion: {speciality}/{city}/{year}</h3>
      <p>User ID: { id }</p>
      <p>The student <b>{name}</b> took <b>{grade}</b> to <b>{subject}</b> and {promoted ? 'promoted! 😃' : 'failed! 😟'}</p>
      <NavLink className="btn-back" to="/reducer-second">⬅️Back</NavLink>

      <button onClick={addData}>Add</button>
      <button onClick={removeData}>Remove</button>
    </>
  );
}

export default ReducerSecondDetails;
