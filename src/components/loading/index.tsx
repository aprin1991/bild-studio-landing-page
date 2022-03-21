import React, { FC } from "react";
type Iprops = {
  classes?: string;
};
export const Loading: FC<Iprops> = ({ classes = "" }) => {
  return (
    <div className="loading-container relative flex flex-col">
      <div className="spin"></div>
      <h1
        className={`font-semibold text-lg ${classes ? classes : "text-black"}`}
      >
        Loading...
      </h1>
    </div>
  );
};
