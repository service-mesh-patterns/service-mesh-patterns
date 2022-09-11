import styled from "styled-components";


const AuthorStyleWrapper = styled.div`
    
    background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%)

    postion: fixed;
    
    .background-image {
        position: fixed;
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
        margin-left: 18%;

    }
    .aboutLee{
        display: flex;
        margin-left: 20%;
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
        width: 55%;
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
    .aboutNic{
        display: flex;
        margin-left: 30%;
        margin-top: 40px;
        
        
    }
    .hashi-corp-logo{
        font-family: Open Sans;
        font-size: 28px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: justified;
        color: #fff;
        position: absolute;
        margin-left: -10%;
    }
    .harshi-logo{
        margin-left: 80px;
        @media(max-width: 1550px) {
            margin-left: 120px;
        }
        @media(max-width: 1450px) {
            margin-left: 160px;
        }
     
     
    }
    .nic{
        font-family: Open Sans;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: justified;
        color: #FFFFFF;
        width: 53%;
        margin-top: 10px;
        margin-left: -18%;
    }
    .nicphoto{
        width: 460px;
        left: 0px;
        top: 0px;
        border-radius: 200px;
        margin-left: -250%;
        margin-bottom: 2.2rem;
        @media(max-width: 1550px) {
            margin-left: -230%;
        }
        @media(max-width: 1450px) {
            margin-left: -220%;
        }
        @media(max-width: 1196px) {
            margin-left: -190%;
        }
    }
    .descriptionnic{
        font-family: Open Sans;
        font-size: 36px;
        font-weight: 600;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;
        flex: none;
        flex-grow: 0;
        order:1;
        margin-left: -500%;
        margin-top: -40px;
        @media(max-width: 1550px) {
            margin-left: -450%;
        }
        @media(max-width: 1190px) {
            margin-left: -380%;
        }
     
    }
    .socials-nic{
        margin-left: -18%;
    }
   
 
    
 
  

`;

export default AuthorStyleWrapper;