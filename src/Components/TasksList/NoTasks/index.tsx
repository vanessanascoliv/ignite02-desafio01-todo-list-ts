import clipboardImg from "../../../assets/Clipboard.svg";
import { Container } from "./styles";
export const NoTasks = () => {
  return(
    <Container>
        <div>
        <img src={clipboardImg}/>
        </div>
        
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
    
    </Container>
  );  
}