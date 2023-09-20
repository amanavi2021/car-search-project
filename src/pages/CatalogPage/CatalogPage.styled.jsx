import styled from "@emotion/styled";
import noCarImage from "../../images/no-cars.webp";

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
    margin-top: 50px;
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

export const EmptyPage = styled.div`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmptyImage= styled.div`
    width: 1280px;
    height: 768px;
    margin-top: 100px;
    background-image: url(${noCarImage});
    background-size: contain;
    background-repeat:no-repeat;
`;

export const Text = styled.p`
    font-size: 38px;
    font-weight: 600;
    line-height: 1.47;
    text-align: center;
    color: var(--dark-grey-color);
`;