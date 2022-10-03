import styled from "styled-components";

const AboutL5ioStyleWrapper = styled.div`
  //  background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%)

  //  postion: fixed;

  .background-image {
    position: fixed;
    height: 2288px;
    right: 0px;
    height: 100%;
    mix-blend-mode: soft-light;
    // background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%)
  }

  .about-title {
    width: 110px;
    height: 49px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;

    padding-top: 1px;

    color: #3c494f;
    display: inline-block;
  }

  .outer-box {
    background-color: white;
    width: 1072px;
    height: 556px;
    border-radius: 8px;
    margin: 0 auto;
  }
  .div-box {
    background-color: white;
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
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: justify;

    color: #3c494f;
  }
    .join-comm-btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 20px 32px;
      gap: 12px;
  
      width: 366.43px;
      height: 56px;
      border: none;
  
      background: #00B39F;
      border-radius: 4px;
  
    }
  .join-comm-btn-img{
    display: inline-block;
    border: none;
  }
  .join-l5-community-div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 32px;
    gap: 12px;
  }
  .join-comm-para{
    height:27px;
    margin-bottom: 0em;
    font-family : 'Open Sans';
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    color: #3C494F;
  }
`;

export default AboutL5ioStyleWrapper;
