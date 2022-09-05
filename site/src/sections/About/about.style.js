import styled from "styled-components";

export  const AboutStyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 184px;
    gap: 32px;
    position: relative;
    left: 0px;
    background: #FFFFFF;

    .heading{
        color: #3C494F;
        width: 1072px;
        height: 45px;
        font-family: 'Qanelas Soft';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }
    .green{
        color: #00B39F;
    }
    .Box{
        width: 1072px;
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
        height: 27px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 27px;
        text-align: justify;
        color: #3C494F;
    }
    .Box5{
        width: 1072px;
        height: 54px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-align: justify;
        color: #3C494F;
        flex: none;
        order: 5;
        flex-grow: 0;
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
        width: 974.42px;
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

    ul {list-style: none}
    li::before {content: "•"; color: #00B39F;
        display: inline-block; width: 1em;
        margin-left: -1em}; 
`;