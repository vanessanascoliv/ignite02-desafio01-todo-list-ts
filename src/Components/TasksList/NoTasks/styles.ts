import styled from "styled-components";

export const Container = styled.div`
  width: 100;
  padding: 4rem 1.5rem;
  display: grid;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 3.5rem;
      height: 3.5rem;
      margin-bottom: 1rem;
    }
  }

  p {
    color: var(--gray300);
    font-size: 1rem;
    font-weight: 700;
  }
  span {
    color: var(--gray300);
    font-size: 1rem;
    text-align: center;
  }
`;
