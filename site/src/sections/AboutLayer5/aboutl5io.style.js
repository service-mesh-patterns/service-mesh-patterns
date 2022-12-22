import styled from "styled-components";

const AboutL5ioStyleWrapper = styled.div`
  margin: 0.5rem auto 3rem;
  .outer-box {
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 8px;
    margin: 0 auto;

  }
  .about-title {
    display: inline-block;
    color: #3c494f;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    padding-right: 12px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
  }
  .layer5-img {
    width: 171.5px;
    height: 28px;
    top: 10.5px;
    left: 471.25px;
  }

  .layer5-info-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 32px;
    gap: 32px;
  }

  .layer5-info-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 16px;
    gap: 32px;
  }

  .layer5-info-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 16px;
    gap: 32px;
  }
  .para {
    text-align: justify;

    color: #3c494f;
  }
  .join-comm-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;

    width: 18em;

    height: auto;
    border: none;
    background: #00b39f;
    border-radius: 4px;
  }

  .join-l5-community-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 32px;
    gap: 12px;
  }
  .join-comm-para {
    height: 27px;
    margin-bottom: 0em;
    font-weight: 600;
    line-height: 27px;
    color: #3c494f;
  }

  @media only screen and (max-width: 768px) {
    .outer-box {
      margin: 2rem auto;
    }

    .join-l5-community-div {
      flex-direction: column;
    }
  }
`;

export default AboutL5ioStyleWrapper;
