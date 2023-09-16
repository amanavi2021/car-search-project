import styled from "@emotion/styled";

export const Container = styled.div`
    /* width: 100%;
    height: 100%; */
    width: 461px ;
    min-height: 50px;
    padding: 40px;
    margin-left: auto;
    margin-right: auto;
    /* overflow-y: auto;
    overflow-x: hidden; */
     /* -ms-overflow-style: none; */
    /* scrollbar-width: none; */
   /* &::-webkit-scrollbar {
  display: none; */
/* } */

`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap:24px;
  margin-top: 14px;

`;

export const ImageAuto = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleAuto = styled.h1`
  font-size: 18px;
  color: var(--black-color);
  font-weight: 500;
  line-height: calc(24/18);
`;

export const Model = styled.span`
  color: var(--blue-color);
`;

export const InfoAuto = styled.div`
  font-size: 12px;
  color: var(--grey-color);
  line-height: calc(18/12);
  margin-top: 8px;
`;

export const Description = styled.p`
  color: var(--black-color);
  line-height: calc(20/14);
  margin-top: 14px;
`;

export const InfoTitle = styled.h2`
  font-size: 14px;
  color: var(--black-color);
  line-height: calc(20/14);
  font-weight: 500;
`;

export const RentalConditionsList = styled.ul`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: calc(18/12);
`;

export const ItemValue = styled.span`
  color: var(--blue-color);
  font-weight: 600;
`