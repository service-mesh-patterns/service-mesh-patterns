import styled from "styled-components";

export const Footerdiv = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: black;
  align-items: center;
  padding-top: 3rem;
  gap: 2.5rem;
`;

export const Wrapperdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  gap: 7rem;
  @media (max-width: 550px) {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 551px) and (max-width: 767px) {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1350px) {
    flex-wrap: wrap;
    row-gap: 1.5rem;
  }
`;

export const Patternsdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 100%;
  p {
    color: #cccccc;
    font-style: italic;
    font-weight: 200;
    font-style: italic;
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    padding-top: 3rem;
    flex-direction: column;
    width: 90%;
    text-align: center;
    img {
      width: 15rem;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
    padding-top: 1.5rem;
    p {
      font-size: 1.2rem;
    }
    img {
      width: 22rem;
    }
  }
`;

export const Resourcesdiv = styled.div`
  height: 100%;
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: #cccccc;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    h3 {
      font-size: 1.8rem;
    }
  }
`;

export const Resourceslink = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  a {
    color: #cccccc;
    font-size: 1rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    a {
      font-size: 1.1rem;
    }
  }
`;

export const Maildiv = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #cccccc;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    padding-top: 2rem;
  }
`;

export const Copyrightdiv = styled.div`
  display: flex;
  width: 65%;
  border-top: 2px solid white;
  justify-content: space-between;
  padding-top: 0.4rem;
  p {
    color: rgb(204, 204, 204);
    font-size: 0.85rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    width: 88%;
    text-align: center;
    p {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 2rem;
    flex-direction: column;
    width: 88%;
    text-align: center;
    p {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1350px) {
    font-size: 0.9rem;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 4rem;
  }
`;

export const Icondiv = styled.div`
  display: flex;
  gap: 0.5rem;
  img {
    padding: 0.1rem;
    height: 30px;
    width: 32px;
  }
  a {
    padding-right: 15px;
    filter: grayscale(1) invert(0.25);
  }
  a:hover {
    filter: grayscale(0) invert(0);
  }
  @media (max-width: 480px) {
    position: absolute;
    margin-top: -45rem;
    img {
      height: 60px;
      justify-content: center;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
  }
`;

export const Inputdiv = styled.div`
  display: flex;
  gap: 1rem;
  .inputrow {
    padding: 1rem;
    width: 100%;
    background: #f5f7fa;
    border: 1px solid white;
    border-radius: 7px;
  }
  .subscribe-email {
    padding: 1rem;
    margin-right: 0.25rem;
    width: 20rem;
    height: 3.5rem;
    color: rgba(255, 255, 255, 0.75);
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    border-radius: 0.25rem;
    @media (max-width: 469px) {
      width: 12rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
      width: 50vw;
    }
  }
`;
