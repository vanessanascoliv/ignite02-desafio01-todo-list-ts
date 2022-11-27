import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "./styles";

interface taskProps {
  onAddTask: (descriptionTask: string) => void;
}
export const NewTask = ({ onAddTask }: taskProps) => {
  const [enteredTaskDescription, setEnteredTaskDescription] = useState("");

  const handlerTaskDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredTaskDescription(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    if (enteredTaskDescription.trim().length === 0) {
      return;
    }
    console.log(enteredTaskDescription);
    onAddTask(enteredTaskDescription);

    setEnteredTaskDescription("");
  };

  return (
    <>
      <Form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          name="task"
          value={enteredTaskDescription}
          onChange={handlerTaskDescriptionChange}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </Form>
    </>
  );
};
