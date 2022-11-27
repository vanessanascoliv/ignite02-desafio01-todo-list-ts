import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 46rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        color: var(--blue);
        font-size: 0.875rem;
        font-weight: 700;
      }

      p.tasks-completed {
        color: var(
          --purple
        ); //demer, rafael , Aliandro, usuário de rede, vic di
      }

      span {
        background: var(--gray400);
        color: var(--gray-200);
        border-radius: 999px;
        padding: 4px 8px;
        font-size: 0.75rem;
        font-weight: 700;
      }
    }
  }
`;
