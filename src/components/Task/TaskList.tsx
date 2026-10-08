import useTask from "./useTask";
import Task from "./Task";
import TaskForm from "./TaskForm/TaskForm";
import MultipleForm from "../MultipleForm/MultipleForm";

function TaskList() {
  const {
    tasks,
    statistics,
    congratsContent,
    handleAddTask,
    handleComplete,
    handleSave,
    handleDelete,
  } = useTask();

  return (
    <>
      <div className="multiform">
        <MultipleForm
          add={handleAddTask}
        />
      </div>
      {statistics}
      {congratsContent}
      {tasks.map(({ id, title, priority, completed, description }) => (
        <Task
          key={id}
          title={title}
          priority={priority}
          completed={completed}
          id={id}
          description={description}
          onComplete={handleComplete}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      ))}
      <TaskForm add={handleAddTask} />
    </>
  );
}

export default TaskList;
