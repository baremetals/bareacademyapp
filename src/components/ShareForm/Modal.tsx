import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

import {
  PageContainer,
  Background,
} from "./modal.styles";

export const Modal = ({ closeM, showModal, setShowModal, children, ...props }: any) => {

  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: { target: undefined }) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <Background onClick={closeModal} ref={modalRef} {...props}>
          <animated.div styled={animation} {...props}>
            <PageContainer showModal={showModal} {...props}>
              {children}
            </PageContainer>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default Modal;
