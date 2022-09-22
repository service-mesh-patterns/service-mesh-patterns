import styled from "styled-components";

const ChaptersStyleWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 3rem;

  p {
    margin: 0;
    padding: 0;
  }

  .accordion-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 75%;
    padding-block: 2rem;

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

      .topic {
        outline: 1px solid #00B39F;
        background-color: #FFF;

        p:nth-of-type(2) {
          text-align: right;
        }
      }

      
    }

    @media (max-width: 600px) {
      width: 90%;
    }
  }

  .callToAction {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    

    .community-button {
      gap: 1rem;
      align-items: center;
      justify-content: center;
      color: #FFF;
      background-color: #00B39F;
      padding: 2rem 4rem;
      transition: 100ms ease-in-out;

      &:hover{
        outline: 2px solid #00B39F;
      }
 
    }
    @media (max-width: 1000px) {
      flex-direction: column; 
      .community-button {
        padding: 1.5rem 2rem;
      }
    }
  }
  
  .callout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #3C494F;
    padding: 1rem .5rem;
    border-radius: 5px; 
    margin-block: 2rem;
    text-align: center;
    transition: 100ms ease-in-out;

    .row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
    }

    p {
      color: white;
    }

    &:hover{
      outline: 3px solid #00B39F;
    }
  }

`;

export default ChaptersStyleWrapper;
