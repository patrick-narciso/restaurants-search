import React, { useEffect } from "react";

import Portal from './Portal';

import { Overlay, Dielog } from './styles';

const Modal = ({ children, open, onClose }) => {
    useEffect(() => {
        function onEsc(e) {
            if(e.keyCode === 27){
                onClose();
            }
        }

        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [onClose]);

    if(!open) return null;

    const onOverlayClick = () => onClose();

    const onDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dielog onClick={onDialogClick}>
                    {children}
                </Dielog>
            </Overlay>
        </Portal>
    )
};

export default Modal;