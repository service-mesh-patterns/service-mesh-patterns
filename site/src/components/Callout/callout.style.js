import styled from "styled-components";

const CallOutWrapper = styled.div`
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
  
`;

export default CallOutWrapper;