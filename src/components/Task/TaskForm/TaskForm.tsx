import React, { useState } from "react";
import { PRIORITIES } from "../../../constants";
import type { Priority, TaskFormProps } from "../types";

function TaskForm({ add }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(PRIORITIES[0]);

  function handleChangePriority(event: React.ChangeEvent<HTMLSelectElement>) {
    setPriority(event.target.value as Priority);
  }

  function clearForm() {
    setTitle("");
    setPriority(PRIORITIES[0]);
  }

  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, title, priority, completed: false };
    add(newTask);
    clearForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Insert title here"
        />
        <select onChange={handleChangePriority} value={priority}>
          {PRIORITIES.map(item => (
            <option
              value={item}
              key={item}
            >
              {item}
            </option>
          ))}
        </select>
        <button type="submit">Add task</button>
      </form>
      Title: {title} | Priority: {priority}
    </>
  );
}

export default TaskForm;
