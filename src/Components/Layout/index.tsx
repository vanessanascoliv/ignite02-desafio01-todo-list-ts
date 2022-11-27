import { useState } from "react";
import { NewTask } from "../NewTask";
import { TaskList } from "../TasksList";
import { Tasks } from "../TasksList/TaskItem/tasks";
import { Container } from "./styles";

export const Layout = () => {
  const [tasksList, setTasksList] = useState(Tasks);

  const addNewTask = (taskDescriptionNew: string) => {
    setTasksList((prev) => {
      return [
        ...prev,
        {
          id: Math.random().toString(),
          taskDescription: taskDescriptionNew,
          taskCompleted: false,
        },
      ];
    });
  };

  const deleteTask = (taskId: string) => {
    const tasksWithoutTheDeletedOnes = tasksList.filter((task) => {
      return task.id !== taskId;
    });

    console.log(tasksWithoutTheDeletedOnes);
    setTasksList(tasksWithoutTheDeletedOnes);
  };

  const handleCheckedTask = (taskId: string) => {
    const taskChecked = tasksList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          taskCompleted: !task.taskCompleted,
        };
      }
      return task;
    });
    console.log(taskChecked)
    setTasksList(taskChecked);
  };

  return (
    <Container>
      <NewTask onAddTask={addNewTask} />
      <TaskList tasks={tasksList} onDeleteTask={deleteTask} onChecked={handleCheckedTask} />
    </Container>
  );
};
