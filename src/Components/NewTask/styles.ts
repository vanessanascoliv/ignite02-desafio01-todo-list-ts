import styled from "styled-components";

export const Form = styled.form`
 width: 46rem;
 display: flex;
 justify-content: center;
 gap: 0.5rem;
    
 

 input {
    background: var(--gray500);
    color: var(--gray300);
    padding: 1rem;
    width: 39.875rem;
    border: 0;
    border-radius: 0.5rem;

    :focus{
      color: var(--gray100);
      outline: 1px solid var(--purple-dark);
    }
    :-webkit-autofill{
      box-shadow: 0 0 0 30px var(--gray500) inset;
      -webkit-text-fill-color: var(--gray100) !important;
      outline: 1px solid var(--purple-dark);
    }
    
 }

 button {
    background: var(--blue-dark);
    color: var(--gray100);
    font-size: 0.875rem;
    font-weight: 700;
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    :hover {
      background: var(--blue);
    }

    svg {
      color: var(--gray100);
      width: 1.2rem;
      height: 1.2rem;
    }
    
 }
 
`;