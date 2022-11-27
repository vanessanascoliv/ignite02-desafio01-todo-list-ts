import styled from "styled-components";



export const Container = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  max-width: 46rem;
  background: var(--gray500);

  padding: 1rem;
  border: 1px solid var(--gray400);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  .custom-checkbox input {
    display: none;
  }
  .custom-checkbox input + label:before {
    content: "";
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    background: none;
    border: 1px solid;
    display: inline-block;
    vertical-align: middle;
    //margin-bottom: 1rem;
    border: 3px solid var(--blue);
    position: relative;
  }
  .custom-checkbox input:checked + label:before {
    background: var(--purple-dark);
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 1 12 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    border: 3px solid var(--purple-dark);
    
  
  }

  .description {
    width: 40rem;
    overflow: hidden;
    word-wrap: break-word;
  
    s > p, s{
      color: var(--gray300);
      
    }

    p {
      color: var(--gray100);
      font-size: 0.875rem;
      line-height: 1.4;
    }
  }

  button {
    background: transparent;
    border: 0;
    color: var(--gray300);
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    border-radius: 4px;

    display: flex;
    align-items: center;

    :hover {
      color: var(--danger);
      background: var(--gray400);
    }
  }
`;

/*export const Container = styled.div`
 width: 46rem;
 height: 3.32rem;
 background: var(--gray500);
 margin-top: 24px;
 display: flex;
 justify-content: space-between;
 

 padding: 16px;
 border: 0;
 border-radius: 8px;
 gap: 12px;
   

  div:first-child{
    display: flex;
    align-items: flex-start;
    gap: 12px; 
   
     input {
      cursor: pointer;
      appearance: none;
      width: 20px;
      height:20px;
      border-radius: 50%;
      background: none;
      outline: none;
      border: 3px solid var(--blue);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      

       :before{
        content: '';
        position: absolute;
        opacity: 0;
       
        //transition: all 600ms ease-in-out;
       
      }
      :after{
        content: '';
        position: relative;
        opacity: 0;
        
       
        //transition: all 600ms ease-in-out;
       
      }
      :checked:after {
        border: 0;
        border-radius: 0;
        width: 20px;
        height:20px;
        border-radius: 50%;
        background: var(--purple-dark);
        opacity: 1;
        //transition: all 600ms ease-in-out;
       
  
      }
      :checked:before:after {
        border: 0;
        border-radius: 0;
        width: 3px;
        height: 6px;
        opacity: 1;
        border-right: 2px solid var(--gray100);
        border-bottom: 2px solid var(--gray100) ;
        transform: rotate(45deg);
        top: 1px;
        
      }

    

    

    }  


    
    p {
       font-size: 0.875rem;
       line-height: 22px;
       word-break: break-all;
       padding: 0 12px;
       
 
  }  
  }
`;

*/
