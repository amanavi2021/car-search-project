import styled from "@emotion/styled";

export const Container = styled.div`
    width: 274px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;

export const ImageAuto = styled.img`
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
`;


export const TitleAuto = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 16px;
  color: var(--black-color);
  font-weight: 500;
  line-height: calc(24/16);
`;

export const Model = styled.span`
  color: var(--blue-color);
`;

export const InfoAuto = styled.div`
  font-size: 12px;
  color: var(--grey-color);
  line-height: calc(18/12);
  margin-top: 8px;
  margin-bottom: 28px;
`;

export const FavoriteBtn = styled.button`
position: absolute;
top: 0;
right: 0;
margin-top: 14px;
margin-right: 14px;
display: flex;
justify-content: center;
align-items: center;
border: none;
outline: none;
cursor: pointer;
background-color: transparent;
/* color:  var(--black-color); */
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 /* &:hover, :focus {
        color:  var(--dark-blue-color);
    } */

`;

export const Heart = styled.svg`
    stroke: var(--white-color);
    fill: transparent;

`;

export const FavoriteHeart = styled.svg`
    stroke: var(--blue-color);
    fill: var(--blue-color);;

`;

export const CatalogItem = styled.li`
  width: 274px;
`;