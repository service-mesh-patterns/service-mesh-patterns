import styled from "styled-components";

const PatternsStyleWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 3rem;
  @media (max-width: 62rem) {
    padding-block: 2rem;
  }

  .overview-description {
    padding: 40px 0px;
    @media (max-width: 62rem) {
      padding: 20px 0px;
    }
  }
  
`;

export default PatternsStyleWrapper;
