import styled from "styled-components";


const AuthorStyleWrapper = styled.div`
    height: 100rem;
    width: 100%;
    background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%)
    display: flex;
    postion: relative;
    overflow: hidden;

    .background-image {
        position: absolute;
        height: 2288px;
        right: 0px;
        height: 100%;
        mix-blend-mode: soft-light;
        background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%)
    }
    .author-content{
        position: absolute;
        margin-top: 6%;

    }
    .author-title{
        font-family: 'open-sans';
        font-size: 50px;
        font-weight: 700;
        line-height: 71px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;
        width: 1072px;
        font-style: normal;
        font-weight: 700;
        margin-left: 20%;

    }
    .aboutLee{
        display: flex;
        margin-left: 30%;
        margin-top: 40px;
    }
    
    .LeePhoto{
        width: 760px;
        left: 0px;
        top: 0px;
        border-radius: 200px;
        margin-top: 20px;
    }

    .descriptionlee{
        font-family: Open Sans;
        font-size: 36px;
        font-weight: 600;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;
        margin-top: 10px;

    }

    .layer5-logo{
        font-family: Open Sans;
        font-size: 28px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: justified;
        color: #fff;
        margin-left: 10%;
    }

    .lee{
        font-family: Open Sans;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: justified;
        color: #FFFFFF;
        width: 42%;
        margin-left: 10%;
    }
    .socials{
        margin-left: 9%;
    }
    .author-twitter{
        margin-left: 6px;
    }
    .author-github{
        margin-left: 6px;
    }

   

`;

export default AuthorStyleWrapper;