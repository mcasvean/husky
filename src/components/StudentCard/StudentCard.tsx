import { Link } from "react-router-dom";
import type { StudentCardProps } from "./types";
import "./StudentCard.css";

function StudentCard({ index, student, state, dispatch }: StudentCardProps) {
  if (!student) {
    return;
  }

  const initialButtons = (
    <>
      <button
        className="btn-edit"
        disabled={state.mode === "EDIT"}
        onClick={() => dispatch({ type: "edit", value: { index, student }})}
      >
        Edit
      </button>
      <button
        className="btn-delete"
        onClick={() => dispatch({ type: "delete", value: { index }})}
      >
        Delete
      </button>
    </>
  );

  const editButtons = (
    <button
      className="btn-cancel"
      onClick={() => dispatch({ type: "cancel" })}
    >
      Cancel
    </button>
  );

  const isStudentEditing = state.editStudent?.id === student.id;

  return (
    <div className={`student-card ${isStudentEditing ? 'edit' : ''}`}>
      <h5>{index + 1} - {student.name}</h5>
      <div>Subject: {student.subject}</div>
      <div>Grade: {student.grade}</div>
      <div>
        <p>Promoted: {student.promoted ? "✅" : "❌"}</p>
      </div>
      {state.mode === "EDIT" && isStudentEditing ? editButtons : initialButtons}
      <Link to={`/reducer-second/${student.id}`}>Student Details</Link>
    </div>
  );
}

export default StudentCard;
