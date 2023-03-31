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

  section {
    padding-bottom: 20px;
    @media (max-width: 62rem) {
      padding-bottom: 0;
    }
  }

  .overview {
    .overview-description {
      padding: 40px 0px;
      @media (max-width: 62rem) {
        padding: 20px 0px;
      }
    }
  }

  .how-it-works {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      text-align: center;
      font-weight: bold;
      span {
        display: block;
        font-size: 20px;
      }
    }
    .how-it-works-video {
      padding: 40px 0;
      width: 95%;
      margin: 0 auto;
      @media (max-width: 62rem) {
        padding: 20px 0px;
      }
    }
  }
  
`;

export default PatternsStyleWrapper;
