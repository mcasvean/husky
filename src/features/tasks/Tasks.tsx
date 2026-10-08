import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  removeTask,
  completeTask,
  editTask,
  changeEditingTask,
  saveChanges,
  cancelEdit,
} from "./tasksSlice";
import useTask from "../../components/Task/useTask";
import type { RootState } from "../../app/store";
import type { Task } from "./types";
import "./Tasks.css";

function Tasks() {
  const { generateId } = useTask();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddNewTask = () => {
    const task: Task = {
      id: Number(generateId()),
      task: newTask,
      completed: false,
    };

    dispatch(addTask(task));
    setNewTask("");
  };

  return (
    <>
      <h2>Tasks ({ tasks.length })</h2>

      <button onClick={handleAddNewTask}>Add task</button>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
      {tasks.every(({ completed }) => completed) && tasks.length > 0 && <span> Yeeeyyy. All tasks are completed! 🥳</span>}
      <br/>
      <br/>

      {tasks.map((task, index) => (
        <div key={index} className={`task ${task.completed ? "completed" : ""}`}>
          <h4>
            {!task.isEditing &&
              <>{index + 1}: {task.task} (taskId: {task.id})</>
            }
            {task.isEditing && 
              <input value={task.task} onChange={e => dispatch(changeEditingTask({ id: task.id, task: e.target.value }))} />
            }
          </h4>
          {!task.completed && <button
            className="btn btn-remove"
            onClick={() => dispatch(removeTask(task.id))}
          >
            Remove task
          </button>}
          <button
            className="btn btn-complete"
            onClick={() => dispatch(completeTask(task.id))}
          >
            {task.completed ? "Open" : "Complete"} task
          </button>
          {!task.isEditing && <button disabled={task.isEditing} onClick={() => dispatch(editTask(task.id))}>Edit</button>}
          {task.isEditing &&
            <>
              <button onClick={() => dispatch(saveChanges(task.id))}>Save</button>
              <button onClick={() => dispatch(cancelEdit(task.id))}>Cancel</button>
            </>
          }
        </div>
      ))}
    </>
  );
}

export default Tasks;
