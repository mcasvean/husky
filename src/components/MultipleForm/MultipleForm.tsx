import { useState, useRef } from "react";
import { PRIORITIES } from "../../constants";
import useTask from "../Task/useTask";
import type { Priority, TaskFormProps } from "../Task/types";
import "./MultipleForm.css";

function MultipleForm({ add }: TaskFormProps) {
  const defaultForm = {
    title: "",
    description: "",
    priority: PRIORITIES[0],
  };

  const [form, setForm] = useState(defaultForm);
  const titleRef = useRef<HTMLInputElement>(null);
  const { generateId } = useTask();

  function handleChangePriority(event: React.ChangeEvent<HTMLSelectElement>) {
    setForm({...form, priority: event.target.value as Priority});
  }

  const resetForm = () => {
    setForm(defaultForm);
    titleRef.current?.focus();
  }

  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    // Fields validation
    if (!form.title.trim()) {
      alert("Title is required");
      return;
    } else if(form.title.length < 3) {
      alert("Title required minimum 3 characters length");
      return;
    }

    const newTask = {
      id: generateId(),
      title: form.title,
      description: form.description.trim() || "No description provided",
      priority: form.priority,
      completed: false,
    };

    add(newTask);
    resetForm();
  }

  return(
    <div className="multiple-form-container">
      <h5>Multiple form</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            ref={titleRef}
            value={form.title}
            onChange={event => setForm({...form, title: event.target.value})}
            placeholder="Insert title here"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={form.description}
            onChange={event => setForm({...form, description: event.target.value})}
            placeholder="Insert description here"
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <select onChange={handleChangePriority} value={form.priority}>
            {PRIORITIES.map(item => (
              <option
                value={item}
                key={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleForm;
