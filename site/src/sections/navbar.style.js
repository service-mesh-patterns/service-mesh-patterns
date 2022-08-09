import styled from "styled-components";
export const NavStyleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 28px 184px;
    gap: 400px;
    position: absolute;
    width: 1440px;
    height: 110px;
    left: calc(50% - 1440px/2);
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 179, 159, 0.2);
    div{
        width: 68px;
        height: 44px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #3C494F;
    }
`;