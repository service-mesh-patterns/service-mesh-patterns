import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::selection {
    background: ${(props) => props.theme.primaryColor};
    color: #ffffff;
}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

body,html {
    margin: 0;
    background-color: ${(props) => props.theme.primaryColor};
}

body {
  font-size: 1.125rem;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme.textColor};
  overflow-x: hidden !important;
  font-weight: 400 !important;
  margin: 0;
  padding: 0;
  @media (max-width: 62rem) {
      font-size: 1rem;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Qanelas Soft', 'Open Sans', sans-serif;
    color: ${(props) => props.theme.tertiaryColor};
    margin: 0;
    line-height: normal;
}

h1 {
    font-size: 3.125rem;
    font-weight: 700;
    @media (max-width: 62rem) {
      font-size: 2.125rem;
    }
}

h2 {
    font-size: 2.125rem;
    font-weight: 600;
    @media (max-width: 62rem) {
      font-size: 1.75rem;
    }
}

h3 {
    font-size: 1.75rem;
    font-weight: 500;
    @media (max-width: 62rem) {
      font-size: 1.5rem;
    }
}

h4 {
    font-size: 1.5rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1.25rem;
    }
}

h5 {
    font-size: 1.25rem;
    font-weight: 300;
    @media (max-width: 62rem) {
      font-size: 1.1rem;
    }
}

h6 {
    font-weight: 200;
    font-size: 1rem;
}

h2.sub-heading, h3.sub-heading {
    color: gray;
    text-align: center;
    font-style: italic;
    margin-bottom: 1.25rem;
}

h5.section-title {
    font-size: 1.25rem;
    font-weight: 600;
    @media (max-width: 62rem) {
      font-size: 1.1rem;
    }
}

p {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1rem;
    }
}

a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor};
    &:hover{
        color: ${(props) => props.theme.primaryColor};
    }
  }
  img{
    max-width: 100%;
  }

section{
    position: relative;
}

span{
  color:${(props) => props.theme.linkColor}
}

`;

export { GlobalStyle };
