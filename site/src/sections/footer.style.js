import styled from "styled-components";

export const Footerdiv = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
  background-color: black;
  align-items: center;
  @media (max-width: 480px) {
    height: 55rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    height: 50rem;
  }
`;

export const Wrapperdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  gap: 7rem;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
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
  }
  @media (max-width: 480px) {
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
  p {
    color: rgb(204, 204, 204);
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    margin-top: 2rem;
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
      font-size: 0.9rem;
    }
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
    img {
      height: 50px;
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

  /* @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    }  */
`;
