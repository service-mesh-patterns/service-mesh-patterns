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
      z-index: 1;
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
      padding:20px;
      .community-button {
        padding: 1.5rem 2rem;
      }
    }
  }
  
`;

export default ChaptersStyleWrapper;
