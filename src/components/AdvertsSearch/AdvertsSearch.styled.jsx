import styled from "@emotion/styled";

export const Container = styled.div`
    margin-left: auto;
    margin-right:auto;
    margin-bottom: 50px;
    margin-top: 20px;
`;


export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 50px;
    font-family: 'Manrope', sans-serif;
    font-size: 14;
    font-weight:600;
    color: var(--white-color);
    line-height: calc(20/14);
    border-radius: 12px;
    height: 48px;
    width: 136px;
    border: none;
    background-color: var(--blue-color);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover, :focus {
        background-color:  var(--dark-blue-color);
    }

`;
export const SearchForm = styled.form`
    display: flex;
    gap: 18px;
    align-items:end;
    width: 859px;
`;

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FilterInput = styled.input`
    box-sizing: border-box;
    height: 48px;
    padding: 14px 18px;
    font-size: 18px;
    font-family: 'Manrope', sans-serif;;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20/18);
    border-radius: 14px;
    background-color: #F7F7FB;
    color: var(--black-color);
    border: none;

    /* &::placeholder { */
        /* padding: 14px 18px; */
        /* color: var(--black-color); */
        /* font-family: 'Manrope', sans-serif;;
        font-size: 18px;
        font-weight: 500;
        line-height: calc(20/18); */

    /* };  */
    /* &:focus-visible{
        border-color: transparent;
    } */
    

`;

export const GroupInput = styled.div`
    display: flex;
    /* width: 320px; */
`;

export const TextLabel = styled.label`
    font-size: 14px;
    color: #8A8A89;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const FilterInputLeft = styled.input`
    box-sizing: border-box;
    height: 48px;
    width: 160px;
    padding: 14px 18px;
    font-size: 18px;
    font-family: 'Manrope', sans-serif;;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20/18);
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    background-color: #F7F7FB;
    color: var(--black-color);
    /* border: none; */
    border-right-color: var(--grey-color);
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    `;

    export const FilterInputRight = styled.input`
    box-sizing: border-box;
    height: 48px;
    width: 160px;
    padding: 14px 18px;
    font-size: 18px;
    font-family: 'Manrope', sans-serif;;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20/18);
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    background-color: #F7F7FB;
    color: var(--black-color);
    /* border: none; */
    border: none;
    /* border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent; */
    `;