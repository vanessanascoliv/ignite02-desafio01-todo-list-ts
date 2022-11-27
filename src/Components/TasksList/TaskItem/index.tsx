import { Trash } from "phosphor-react";
import { Container } from "./styles";

interface TaskProps {
  id: string;
  taskCompleted: boolean;
  taskDescription: string;

  onDeleteTask: (task: string) => void;

  onChecked: (task: string) => void;
}
export const TaskItem = ({id,taskDescription,taskCompleted,onDeleteTask,onChecked,}: TaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <Container>
      <div className="custom-checkbox">
        <input
          type="checkbox"
          id={id}
          checked={taskCompleted}
          onChange={() => onChecked(id)}
        />
        <label htmlFor={id}></label>
      </div>
      <div className="description">
        {!taskCompleted ? (
          <p>{taskDescription}</p>
        ) : (
          <s>
            <p>{taskDescription}</p>
          </s>
        )}
      </div>
      <button name="excluir tarefa" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </Container>
  );
};
