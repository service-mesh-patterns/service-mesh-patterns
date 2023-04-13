import styled from "styled-components";

const HeroStyleWrapper = styled.section`
    width: 100%;
    background-color: #00B39F;
    color: #FFF;
    display: flex;
    position: relative;
    margin: 0 auto 2rem;
    
    .content {
        display: flex;
        justify-content: space-between;
        margin-inline: 10%;
    }

    .info {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 4.5rem;
        align-self: center;
        @media(max-width: 1200px) {
            width: 90%;
        }
    }
    
    .title {
        color: #fff;
        font-size: 3.5rem;
        margin-bottom: .5rem;
        @media(max-width: 750px) {
            font-size: 2.5rem;
        }
    }

    .description {
        color: rgba(255, 255, 255, 0.85);
        font-style: italic;
        font-size: 1.5rem;
        font-weight: 200;
    }

    .credit {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .junction {
            margin: 0 1rem;
            color: rgba(255, 255, 255, 0.85);
            font-style: italic;
            font-weight: 400;
        }

        .by-junction {
            margin-right: 1rem;
            color: rgba(255, 255, 255, 0.85);
            font-style: italic;
            font-weight: 400;
        }
    }
    
    .author {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .75em;

        @media(max-width: 500px) {
            width: auto;
        }

        .icon {
            min-width: 40%;
        }

        .name {
            margin-top: 1rem;
            font-weight: bold;
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
        position: relative;
        right: -5rem;
        top: 2.5rem;
        z-index: 2;
        width: 38%;
        box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
    }

    @media(max-width: 1200px) {
        margin: 0 auto 6rem;

        .content {
            flex-direction: column;
            align-items: center;
        }

        .cover {
            top: 3rem;
            width: 70%;
            right: 0;
        }
    }
`;

export default HeroStyleWrapper;