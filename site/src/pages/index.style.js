import styled from "styled-components";

const SectionWrapper = styled.div`

    color: white; //${(props) => props.theme.white};
    height: 100%;
    background-color: ${(props) => props.theme.primaryColor};

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20%;
  }

  h1.under-construction, h3.under-construction {
    color: white; //${(props) => props.theme.textColor};
    margin: 4rem 0rem;
    
    a:hover {
        color: "#EBC017"; //${(props) => props.themesaffronColor};
    }
  }

`;

export default SectionWrapper;