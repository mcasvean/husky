import { useState, useEffect } from "react";
import { tasks as taskList } from "../../constants";
import type { TaskItem, UpdatedTask } from "./types";

function useTask() {
  const [tasks, setTasks] = useState(taskList);
  const completedTasks = tasks.filter(({ completed }) => completed).length;
  const remainingTasks = tasks.length - completedTasks;

  const handleAddTask = (task: TaskItem) => {
    setTasks([...tasks, task]);
  };

  const handleComplete = (id: number) => {
    setTasks(
      tasks.map(task => ({
        ...task,
        completed: task.id === id ? !task.completed : task.completed,
       }))
    );
  };

  const handleSave = (taskUpdated: UpdatedTask) => {
    const { id, title } = taskUpdated;

    setTasks(
      tasks.map(task => {
        return ({
          ...task,
          title: task.id === id ? title : task.title,
        });
      })
    );
  }

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const congratsContent = (
    tasks.length > 0 && tasks.length === completedTasks
      ? <h3>Congrats! 🥳 You've completed all tasks!</h3>
      : null
  );

  const statistics = <h4>TOTAL: {tasks.length} | Completed: {completedTasks} | Remaining: {remainingTasks}</h4>;

  const generateId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  useEffect(() => {
    document.title = `Tasks: ${tasks.length}`;
  }, [tasks]);

  return {
    tasks,
    handleAddTask,
    handleComplete,
    handleSave,
    handleDelete,
    generateId,
    statistics,
    congratsContent,
  };
}

export default useTask;
