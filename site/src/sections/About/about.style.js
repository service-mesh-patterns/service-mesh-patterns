import styled from "styled-components";
import StartQuote from "../../assets/images/about/start-quote.png";
import EndQuote from "../../assets/images/about/end-quote.png";

export  const AboutStyleWrapper = styled.section`

    margin: 4rem auto;

    .heading{
        font-size: 2.75rem;
        margin-bottom: 1rem;
    }

    .green{
        color: #00B39F;
    }

    .subhead{
        margin: 2rem auto 1rem;
    }

    ul {
        list-style: none;
        padding-left: 1.5rem;
    }

    li::before {
        content: "•";
        color: #00B39F;
        margin: 0.5em;
        font-size: 1.5rem;
        top: 2px;
        position: relative;
    }

    @media screen and (max-width: 700px) {
        li {
            display: flex;
            
            &::before {
                margin: 0 0.5rem;
            }
        }
    }

    .book-quote{
        p {
            margin-left: 2rem;
            
            &:first-child::before {
                content: url(${StartQuote});
                position: absolute;
                left: 0;
                margin-top: -0.25rem;
            }
            
            &:last-child::after {
                content: url(${EndQuote});
                position: relative;
                margin-left: 0.5rem;
            }
        }
    }
`;