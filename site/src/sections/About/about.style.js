import styled from "styled-components";

export  const AboutStyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 184px;
    gap: 32px;
    position: relative;
    left: 0px;
    background: #FFFFFF;
    width: auto;
    @media only screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px 20px;
        gap: 32px;
        z-index: 0.5;
        left: 0px;
        font-size: 12px;
        
    }
    .heading{
        color: #3C494F;
        height: 45px;
        font-family: 'Qanelas Soft';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        justify-content: center;
        flex-grow: 0;
    }
    .green{
        color: #00B39F;
    }
    .Box{
        height: 81px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-align: justify;
        color: #3C494F;
    }
    li{
        width: 950px;
        justify-content: center;
        height: 27px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 27px;
        text-align: justify;
        color: #3C494F;
    }
    .subhead{
        width: 1072px;
        height: 35px;
        align-self: stretch;
        font-family: 'Qanelas Soft';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 35px;
        color: #3C494F;
    }
    .bbox{
        height: 54px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;
        text-align: justify;
        color: #3C494F;
        align-self: stretch;
    }
    section{
        margin: 10px 0;
    }

    ul {list-style: none}
    li::before {content: "•"; color: #00B39F;
        display: inline-block; width: 1em;
        margin-left: -1em}; 
`;