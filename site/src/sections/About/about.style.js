import styled from "styled-components";

export  const AboutStyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    position: relative;
    left: 0px;
    background: #FFFFFF;
    width: auto;
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
        @media only screen and (max-width: 377px){
            height: auto;
        }
        @media only screen and (max-width: 932px){
            align-self: center;
        }
    }
    .green{
        color: #00B39F;
    }
    .Box{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-align: justify;
        color: #3C494F;
    }
    li{
        position: relative;
        right: 30px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 27px;
        color: #3C494F;
    }
    .subhead{
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

    .openv{
        position: relative;
        top: 10px;
        right: 5px;
        width: 24.75px;
        height: 19.37px;
    }

    .closev{
        position: relative;
        top: 170px;
        width: 24.83px;
        height: 19.59px;
        @media only screen and (max-width: 673px){
            top: 237px;
        }
        @media only screen and (max-width: 602px){
            top: 288px;
        }
        @media only screen and (max-width: 536px){
            top: 325px;
        }
        @media only screen and (max-width: 484px){
            top: 349px;
        }
        @media only screen and (max-width: 450px){
            top: 416px;
        }
        @media only screen and (max-width: 375px){
        top: 460px;
        }
    }

    .flexrow{
        display: flex;
        flex-direction: row;
        margin: 10px auto;
    }
`;