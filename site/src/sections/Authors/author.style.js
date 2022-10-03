import styled from "styled-components";
import Background from "../../assets/images/author/Background.png";


const AuthorStyleWrapper = styled.div`

    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5rem 0;
    position: relative;

    &::before {    
        content: "";
        background: rgba(255,255,255,0.025);
        background-size: cover;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
    }

    .page-title {
        text-align: center;
        color: #FFFFFF;
        margin: 0 auto 5rem;
    }

    .author {
        display: flex;
        margin: 2rem auto 6rem;
    }

    .right {
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 768px) {
        .author {
            flex-direction: column;
        }
    }

    .author-img {
        flex: 0 0 25%;
        color: #FFFFFF;
        text-align: center;
        align-self: center;
    }
    
    .author-desc {
        h3, p {
            color: #FFFFFF;
        }
        h3 {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }
        img {
            width: 8rem;
            margin-left: 0.25rem;
        }
    }

    .author-social {
        img {
            width: 2rem;
            margin-right: 1rem;
        }
    }

    .technical-review {
        h2 {
            text-align: center;
            color: #FFFFFF;
            margin: 0 auto 3rem;
            @media screen and (max-width: 500px) {
                margin: -2rem auto;
            }
        }
    }

    .reviewers-section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem auto;
        h3 {
            color: #FFFFFF;
            margin: 0 2rem;
        }
        img {
            margin: 0 0.5rem;
            vertical-align: middle;
        }
        .reviewer-img {
            width: 6rem;
            border-radius: 6rem;
        }

        @media screen and (max-width: 500px) {
            flex-direction: column;
            margin: 4rem auto; 
            h3 {
                margin: 0.5rem auto;
            }
            a img {
                width: 1.5rem;
            }
        }
    }
`;

export default AuthorStyleWrapper;