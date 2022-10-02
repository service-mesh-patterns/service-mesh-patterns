import styled from "styled-components";


const AuthorStyleWrapper = styled.div`
    
    background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%);
    postion: fixed;
    
    .background-image {
        position: fixed;
        height: 2288px;
        right: 0px;
        height: 100%;
        background: radial-gradient(149.45% 344.41% at 102.05% -2.23%, #3C494F 0%, #00B39F 100%)
    }
    

    .author-content{
        position: absolute;
        margin-top: 6%;

    }
    .author-title{
        text-align: center;
        color: #ffffff;
    }
    .aboutLee{
        display: flex;
        margin-left: 20%;
        margin-top: 40px;
        @media(max-width:900px){
            flex-direction: column;
            margin-left: 5%;
            padding-top: 180px;
            width: 100%;
        }
    }
    
    .LeePhoto{
        width: 760px;
        left: 0px;
        top: 0px;
        border-radius: 200px;
        margin-top: 20px;
        @media(max-width: 900px){
            margin-left: 15%;
            width: 260px;
            left: 0px;
            margin-top: 60px;
            border-radius: 200px;
            position: absolute;
        }
    }

    .descriptionlee{
        font-size: 36px;
        font-weight: 600;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;
        margin-top: 10px;
    @media(max-width:900px){
        text-align:left;
        margin-left: 10%;
        width: 100%;
        margin-top: 70px;
    }
    }
    .layer5-logo{
        font-size: 28px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: justified;
        color: #fff;
        margin-left: 10%;
    }
    .lee{
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: justified;
        color: #FFFFFF;
        width: 55%;
        margin-left: 10%;
        @media(max-width: 900px){
            width: 80%;
        }
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
        @media(max-width:900px){
            flex-direction: column;
            margin-left: 30%;
            padding-top: 290px;
            width: 90%;
        }
    }
    .hashi-corp-logo{
        font-size: 28px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: justified;
        color: #fff;
        position: absolute;
        margin-left: -15%;
        @media(max-width: 900px)
        {
        margin-left: -18%;
        }
        }
    .harshi-logo{
        margin-left: 105px;
        @media(max-width: 1595px) {
            margin-left: 140px;
        }
        @media(max-width: 1450px) {
            margin-left: 160px;
        }
        @media(max-width: 900px){
            margin-left: 150px;
        }
     
    }
    .nic{
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: justified;
        color: #FFFFFF;
        width: 53%;
        margin-top: 10px;
        margin-left: -18%;
        @media(max-width: 900px){
            width: 80%;
        }
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
        @media(max-width: 900px){
            margin-left: -15%;
            width: 260px;
            left: 0px;
            top: 0px;
            border-radius: 200px;
            position: absolute;
        }
    }
    .descriptionnic{
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
    .author-twitter-nic{
        margin-left: 6px;
    }
    .author-github-nic{
        margin-left: 6px;
    }
   .technical-review-heading{
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 47px;
    line-height: 64px;
    text-align: center;
    color: #FFFFFF;
   }
  .technical-review-profiles{
    display:flex;
    margin-bottom: 40px;
   }
   .technical-review-para{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: justify;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-left: 2%;
    margin-top: 10px;
   }
   .socials-matt{
    margin-left: 30px;
    margin-top: 10px;
   }
   .author-twitter-matt{
    margin-left: 6px;
    }
   .author-github-matt{
    margin-left: 6px;
    }
   .Reviewer-1{
    margin-left: 40%;
   }
 
`;

export default AuthorStyleWrapper;