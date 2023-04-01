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

  .patterns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 62rem) {
      padding-top: 36px;
    }
    .pattern-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        margin: 0 10px;
        width: 125px;
      }
      .btn {
        margin: 0 10px;
        padding: 10px;
        z-index: 0;
      }
    }
    .tagline {
      font-style: italic;
      text-align: center;
      font-weight: 300;
      padding: 10px 0;
    }
  }

  .try-meshmap {
    padding-bottom: 80px;
    @media (max-width: 62rem) {
      padding-bottom: 40px;
    }
    .meshmap {
      display: flex;
      justify-content: space-between;
      padding: 50px;
      border-radius: 10px;
      background: linear-gradient(108.15deg, rgba(0, 0, 0, 0.58) 13.46%, rgba(0, 0, 0, 0.46) 32.08%, rgba(0, 0, 0, 0.81) 41.96%, #000000 92.13%);
      color: white;
      @media (max-width: 62rem) {
        padding: 20px 0 40px 0;
        flex-direction: column;
        justify-content: center;
      }
      .logo {
        width: 210px;
        @media (max-width: 62rem) {
          margin: 0 auto 20px auto;
        }
      }
      .meshery-detail {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        @media (max-width: 62rem) {
          width: 100%;
          align-items: center;
        }
        .title p {
          font-size: 34px;
          font-weight: 600;
          @media (max-width: 62rem) {
            font-size: 28px;
            text-align: center;
            margin-bottom: 0;
          }
        }
        .btn {
          margin-top: 50px;
          background: #EBC017;
          padding: 10px 60px;
          z-index: 0;
          font-size: 20px;
          font-weight: 600;
          @media (max-width: 62rem) {
            margin-top: 40px;
          }
        }
      }
    }
  }

  .pattern-card {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (max-width: 62rem) {
      padding: 20px 0 30px 0;
    }
    .card {
      background: #F7F7F7;
      box-shadow: 0px 0px 8.44601px #00D3A9;
      border-radius: 12.0657px;
      padding: 0 0 20px 0;
      width: 100%;
      margin-left: 0;
      margin-bottom: 30px;
      @media (min-width: 36rem) {
        width: calc(50% - 25px);
        margin-left: 25px;
      }
      @media (min-width: 62rem) {
        width: calc(33% - 25px);
        margin-left: 25px;
      }
      @media (min-width: 75rem) {
        margin-left: 25px;
        margin-bottom: 50px;
        width: calc(25% - 25px);
      }
      .label {
        font-weight: 400;
        font-size: 12px;
        color: #F7F7F7;
        background: #00D3A9;
        border-radius: 0px 11px 0px 0px;
        width: fit-content;
        margin-left: auto;
        padding: 0 20px;
      }
      .diagram {
        display: flex;
        width: 180px;
        margin: 0 auto;
        padding: 20px 0;
      }
      .title {
        font-weight: 600;
        font-size: 20px;
        display: flex;
        width: 100%;
        justify-content: center;
        color: #000000;
        text-align: center;
      }
    }
  }

  
`;

export default PatternsStyleWrapper;
