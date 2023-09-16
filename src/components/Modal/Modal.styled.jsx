import styled from "@emotion/styled";

export const ModalWindow = styled.div`
    position: absolute;
    /* height: 500px; */
    /* top: 50%; */
    left: 50%;
    top: 150px;
    transform: translate(-50%);
    /* min-height: 300px;
    max-width: 600px;
    width: 100%; */
    /* padding: 16px; */
    background-color: #fff;
    border-radius: 24px; 
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rbga(0,0,0, 0.12); 

`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    background-color: rgba(0,0,0,0.5);

`;