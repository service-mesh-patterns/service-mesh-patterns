import styled from "styled-components";

const AccordionStyleWrapper = styled.div`
    .accordion-title, 
    .topic {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      border-radius: 5px; 
      gap: 1rem;

      @media (max-width: 600px) {
        padding: 1rem;
      }
    }

    .accordion-title {
      color: white;
      text-align: center;
      background-color: #00B39F;
      transition: 100ms ease-in-out;
      cursor: pointer;
      
      button {
        border: none;
        background: none;
        cursor: pointer;
      }

      &:hover {
        outline: 1px solid #00B39F;
      }
    }

    .accordion-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      color: #00B39F;
      margin-top: 1rem;

      .topic {
        outline: 1px solid #00B39F;
        background-color: #FFF;

        p:nth-of-type(2) {
          text-align: right;
        }
      }
    }

`;
export default AccordionStyleWrapper;