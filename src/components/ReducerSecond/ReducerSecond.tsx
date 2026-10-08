import { useSearchParams } from "react-router-dom";
import useReducerSecond from "./useReducerSecond";
import StudentCard from "../StudentCard/StudentCard";
import "./ReducerSecond.css";

function ReducerSecond() {
  const {
    state,
    subjects,
    dispatch,
  } = useReducerSecond();

  const [searchParams, setSearchParams] = useSearchParams();
  const promoted = searchParams.get("promoted");
  const isPromotedParam = promoted === "true";

  const displayedStudents = isPromotedParam
    ? state.students.filter(student => student.promoted)
    : state.students;

  return (
    <>
      <h4>useReducerSecond()</h4>

      <h3>{state.mode === "ADD" ? "Add" : "Edit"} student{state.mode === "EDIT" && `: ${state.editStudent?.name}`}</h3>
      <div className="student-form">
        <p>Subject:
          <select value={state.newStudent?.subject} onChange={e => dispatch({ type: "editNewStudentSubject", value: e.target.value })}>
            {subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
          </select>
        </p>
        <p>Name: <input value={state.newStudent?.name} onChange={e => dispatch({ type: "editNewStudentName", value: e.target.value })} /></p>
        <p>Grade: <input type="number" min={0} max={10} value={state.newStudent?.grade} onChange={e => dispatch({ type: "editNewStudentGrade", value: e.target.value })} /></p>
        <label htmlFor="promoted">Promoted</label>
        <input id="promoted" type="checkbox" checked={state.newStudent?.promoted} onChange={e => dispatch({ type: "editNewStudentPromoted", value: e.target.checked })} />
        {state.mode === "ADD" && <p><button onClick={() => dispatch({ type: "add", value: state.newStudent })}>Add student</button></p>}
        {state.mode === "EDIT" && <p><button onClick={() => dispatch({ type: "save", value: state.newStudent })}>Save student</button></p>}
      </div>

      <h3>Results for the 2026 exams with the students ({ displayedStudents?.length })</h3>
      {!isPromotedParam && <button onClick={() => setSearchParams({ promoted: "true" })}>
        Show promoted
      </button>}
      {isPromotedParam && <button onClick={() => setSearchParams({})}>
        Show all
      </button>}
      {
        displayedStudents.length
          ? displayedStudents.map((student, index) => {
            return (
              <StudentCard
                key={index}
                index={index}
                student={student}
                state={state}
                dispatch={dispatch}
              />
            );
          })
          : <h5>⚠️ No students listed yet</h5>
      }
    </>
  );
}

export default ReducerSecond;
