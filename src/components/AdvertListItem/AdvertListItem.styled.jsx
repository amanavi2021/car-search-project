import styled from "@emotion/styled";

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight:600;
    color: var(--white-color);
    line-height: calc(20/14);
    border-radius: 12px;
    height: 44px;
    background-color: var(--blue-color);
   
`;

export const ImageAuto = styled.img`
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
`;