import styled from "@emotion/styled";

export const Container = styled.div`
    width: 274px;
    margin-left: auto;
    margin-right: auto;
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