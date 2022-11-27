import { Container } from './styles';
import logoImg from '/src/assets/logo.svg';
export const Header = () => {
  return(
    <Container>
        <img src={logoImg} alt="todo" />
    </Container>
  );  
}