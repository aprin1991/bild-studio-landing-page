import React from "react";
type IProps = {
  children: React.ReactNode;
  classes?: string;
};
const Container: React.FC<IProps> = ({ children, classes = "" }) => {
  return <div className={`main-container ${classes}`}>{children}</div>;
};

export default Container;
