import styled from "@emotion/styled";
import hero from "../../images/hero.png";

export const Container = styled.div`
 background-image: url(${hero});
 background-size: contain;
 width: 1280px;
 height: 768px;
 margin-left: auto;
 margin-right: auto;
`;

export const Title = styled.h1`
    font-size: 45px;
    font-weight: 600;
    line-height: 1.47;
    text-align: center;
    padding: 20px 0px;
    color: var(--dark-grey-color);
`;

export const ServicesList = styled.ul`
    margin-left: 60%;
    margin-top: 270px;
    font-size: 24px;
    font-weight: 700;
    line-height: calc(28/24);
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: circle;
    color: var(--black-color);
`