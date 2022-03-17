import React from "react";

export const Loading = () => {
  return (
    <div className="loading-container relative flex flex-col">
      <div className="spin"></div>
      <h1 className="text-black font-semibold text-lg">Loading...</h1>
    </div>
  );
};
