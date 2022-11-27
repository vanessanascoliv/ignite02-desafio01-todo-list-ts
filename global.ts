import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`
  :root {
    --gray100: #F2F2F2;
    --gray200: #D9D9D9;
    --gray300: #808080;
    --gray400: #333333;
    --gray500: #262626;
    --gray600: #1A1A1A;
    --gray700: #000000;

    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;
    --danger: #E25858;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  body {
    background: var(--gray600);
    color: var(--gray100);
    -webkit-font-smoothing: antialiased;
  }
  
  body, p, input, button {

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    html {
        font-size: 87.5% ;
    }
  }

  @media (max-width: 660px) {
    html {
        font-size: 75%;
    }
  }
  @media (max-width: 560px) {
    html {
        font-size: 65%;
       
  }
}
  @media (max-width: 497px) {
    html {
        font-size: 55%;
       
  }
}
  @media (max-width: 412px) {
    html {
        font-size: 50%;
       
  }
}
  @media (max-width: 380px) {
    html {
        font-size: 45%;
       
  }
}
`; 