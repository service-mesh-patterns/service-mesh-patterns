import styled from "styled-components";

export  const NavStyleWrapper = styled.nav`

    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2.4rem 11.04rem;
        gap: 6rem;
        padding-right: 4.2rem;
        position: sticky;
        width: auto;
        height: 6.6rem;
        left: calc(50% - 86.4rem/2);
        margin: 0rem;
        background: #FFFFFF;
        box-shadow: 0rem0.6rem 1.5rem rgba(0, 179, 159, 0.2);
    }
    li{
        width: 5.28rem;
        height: 2.64rem;
        list-style: none;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 0.96rem;
        line-height: 1.32rem;
        
        color: #3C494F;

    }

    .pattern{
        width: 9.9rem;
    }

    .L5{
        position: relative;
        right: 14px;
    
    }

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 1.92rem;

        width: 8.94rem;
        height: 3.36rem;
        background: #00B39F;
        border-radius: 0.24rem;
    }
    .label{
        width: 5.1rem;
        height: 2.4rem;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 0.96rem;
        line-height: 1.32rem;
        color: #FFFFFF;
    }
`;