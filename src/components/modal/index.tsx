import React from "react";
import { IProps } from "./types";

const Modal: React.FC<IProps> = ({ children, close }) => {
  return (
    <div
      onClick={() => close()}
      className="modal fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-70 flexBox"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
