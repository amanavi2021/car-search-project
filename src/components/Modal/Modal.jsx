// import { useTransition } from "";
import React, { useEffect } from "react";  
import { createPortal } from "react-dom";
import { ModalWindow, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector("#modal-root");
console.log('modalRoot', modalRoot);

export default function Modal ({ children, isOpen, onClose }) {
    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //     }

    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     }
        
    // }, [isOpen]);

    useEffect(() => {
        const closeESC = (e) => {
            if (e.code === "Escape") {
                onClose();
            };
        };

        window.addEventListener("keydown", closeESC);

        return () => {
            window.removeEventListener("keydown", closeESC);
        };
    }, [onClose]);

    // const modalTransition = useTransition(isOpen, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 1 },
    //     config: {
    //         duration: 500
    //     },
       
    // });
    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return (createPortal(
        <Backdrop onClick={handleBackDropClick}>
            <ModalWindow>
                {children}
            </ModalWindow>
        </Backdrop>, modalRoot)
    )
    
        
    
}