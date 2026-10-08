import { useState } from "react";
import type { TaskProps } from "./types";
import "./Task.css";

function Task({ title, priority, completed, id, description, onComplete, onSave, onDelete }: TaskProps) {
  const [likes, setLikes] = useState(0);
  const [itemTitle, setItemTitle] = useState(title);
  const [isEditMode, setIsEditMode] = useState(false);
  const className = `task-container ${completed ? 'completed' : ''}`;
  const completedLabel = completed ? "Yes" : "No";
  const completeBtnLabel = completed ? "Open" : "Complete";

  const handleLikes = () => setLikes(prev => prev + 1);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemTitle(e.target.value);
  };

  const titleContent = (
    isEditMode
      ? <input
          value={itemTitle}
          onChange={onChangeTitle}
        />
      : <h2>{title}</h2>
  );

  const completeBtn = (
    <button onClick={() => onComplete(id!)}>
      {completeBtnLabel}
    </button>
  );

  const deleteBtn = !completed
    ? <button
        className="delete-btn"
        disabled={isEditMode}
        onClick={() => onDelete(id!)}
      >
        Delete
      </button>
    : null;

  const editBtn = (
    <button
      className={`edit-btn ${completed ? "right" : ''}`}
      onClick={() => setIsEditMode(true)}
    >
      Edit
    </button>
  );

  const handleCancel = () => {
    setItemTitle(title);
    setIsEditMode(false);
  };

  const handleSave = () => {
    if (!id) {
      alert('Item has no id to be identified');
      return;
    }
    const updatedItem = { id, title: itemTitle };
    onSave(updatedItem);
    setIsEditMode(false);
  };

  const updateBtn = (
    <>
      <button className={`cancel-btn ${completed ? "right" : ""}`} onClick={handleCancel}>Cancel</button>
      <button className={`save-btn ${completed ? "right" : ""}`} onClick={handleSave}>Save</button>
    </>
  );

  const likesBtn = (
    <h4>Likes: {likes}
      <button
        className="like-btn"
        onClick={handleLikes}
      >
        +
      </button>
    </h4>
  );

  const actions = (
    <>
      {likesBtn}
      {completeBtn}
      {isEditMode ? updateBtn : editBtn}
      {deleteBtn}
    </>
  );

  return(
    <div className={className}>
      {titleContent}
      <h3>Description: {description || '-'}</h3>
      <h3>Priority: {priority} | Completed: {completedLabel}</h3>
      {actions}
    </div>
  );
}

export default Task;
