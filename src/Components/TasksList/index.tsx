import { NoTasks } from "./NoTasks";
import { Container } from "./styles";
import { TaskItem } from "./TaskItem";

interface TasksProps {
  tasks: {
    id: string;
    taskCompleted: boolean;
    taskDescription: string;
  }[];

  onDeleteTask: (task: string) => void;
  onChecked: (task: string) => void;
}

export const TaskList = ({ tasks, onDeleteTask, onChecked }: TasksProps) => {
  const totalTasks = tasks.reduce((acum, atual) => {
    return acum + 1;
  }, 0);

  const completedTasks = tasks.filter((task) => task.taskCompleted).length;
 
  return (
    <>
      <Container>
        <header>
          <div>
            <p>Tarefas criadas</p>
            <span>{totalTasks}</span>
          </div>
          <div>
            <p className="tasks-completed">Concluídas</p>
            <span>{`${completedTasks} de ${totalTasks}`}</span>
          </div>
        </header>
      </Container>

      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              taskCompleted={task.taskCompleted}
              taskDescription={task.taskDescription}
              onDeleteTask={onDeleteTask}
              onChecked={onChecked}
            />
          );
        })
      ) : (
        <NoTasks />
      )}
    </>
  );
};
