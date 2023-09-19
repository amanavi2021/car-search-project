import styled from "@emotion/styled";

export const Container = styled.div`
    width: 1184px;
    margin-left: auto;
    margin-right:auto;

`;

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 150px;
    margin-left: auto;
    margin-right: auto;
    font-size: "Manrope";
    font-size: 16px;
    font-weight: 500;
    color: var(--blue-color);
    line-height: calc(24/16);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    background-color: transparent;

    &:hover, :focus {
        color:  var(--dark-blue-color);
    }


`;