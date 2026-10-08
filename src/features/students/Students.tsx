import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, removeStudent, togglePromoted } from "./studentsSlice";
import { subjects } from "../../constants";
import type { RootState } from "../../app/store";
import type { Student } from "./types";
import type { Subject } from "../../components/ReducerSecond/types";
import "./Students.css";

function Students() {
  const students = useSelector((state: RootState) => state.students.students);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState(subjects[0]);

  const mockStudent = {
    id: Date.now(),
    name,
    subject,
    promoted: false,
    grade: "9",
  };

  const handleAddStudent = () => {
    dispatch(addStudent(mockStudent));
    resetState();
  };

  const resetState = () => {
    setName("");
    setGrade("");
    setSubject(subjects[0]);
  };

  return (
    <div>
     <h2>Students</h2>

      <button onClick={handleAddStudent}>
        Add new student
      </button>

      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter student name" />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <select id="subject" value={subject} onChange={e => setSubject(e.target.value as Subject)}>
          {subjects.map(subject => {
            return <option key={subject}>{subject}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input id="grade" value={grade} onChange={e => setGrade(e.target.value)} />
      </div>

      <br/>
      <br/>

      {students.map((student: Student) => (
        <div className="student" key={student.id}>
          {student.name} - {student.subject}
          <span className="btn-remove" onClick={() => dispatch(removeStudent(Number(student.id)))}> X</span>
          <p>{student.promoted ? "Promoted 😃" : "Failed 😟"}</p>
          <button onClick={() => dispatch(togglePromoted(Number(student.id)))}>Toggle promoted</button>
        </div>
      ))}
    </div>
  );
}

export default Students;
