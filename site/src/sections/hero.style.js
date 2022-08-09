import styled from "styled-components";

const HeroStyleWrapper = styled.div`
    height: 53rem;
    width: 100%;
    background-color: #00B39F;
    color: #FFF;
    display: flex;
    postion: relative;
    overflow: hidden;
    
    .content {
        position: absolute;
        display: flex;
        justify-content: space-between;
        margin-inline: 10%;
        margin-top: 6%;
        @media(max-width: 950px) {
            flex-direction: column;
            align-items: center;
            margin-inline: 0;
            margin-top: 0%;
            gap: 1rem;
        }
    }

    .info {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 4.5rem;
        @media(max-width: 950px) {
            width: 90%;
        }

        
    }
    
    .title {
        color: #fff;
        font-size: 4.6rem;
        margin-bottom: .5rem;
        @media(max-width: 750px) {
            font-size: 2.5rem;
        }
    }

    .description {
        color: #fff;
        font-size: 1.9rem;
        @media(max-width: 950px) {
            font-size: 1.5rem;
        }
    }

    .credit {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.25em;
        
        
        h3 {
            color: #fff;
            @media(max-width: 950px) {
                font-size: 1rem;
            }
        }
        
    }
    
    .author {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .75em;
        width: 25%;
        margin-right: .75rem;

        .icon {
            min-width: 40%;
        }

        .name {
            font-size: 2rem;
            font-weight: 600;
            height: 100%; 
            line-height: 2.25rem;
            margin-top: 1rem;
            @media(max-width: 1350px) {
                font-size: 1.5rem;
                line-height: 1.5rem;
            } 
            @media(max-width: 1050px) {
                font-size: 1.2rem;
                line-height: 1.4rem;
            }
        }
    }

    .graphic {
        position: absolute;
        bottom: -150px;
        right: 0px;
        height: 100%;
        mix-blend-mode: soft-light;
    }

    .cover{
        width: 40%;
        left: 58%;
        top: 10%;
        @media(max-width: 950px) {
            width: 50%;
        }
        @media(max-width: 750px) {
            width: 80%;
        }
        
    }


`;

export default HeroStyleWrapper;