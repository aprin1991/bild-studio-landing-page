import React from "react";
import map from "lodash/map";
function WorksLoading() {
  return (
    <>
      {map(new Array(9), (_, index) => {
        return (
          <div key={index} className="bg-gray-300 h-56 w-full animate-pulse" />
        );
      })}
    </>
  );
}

export default WorksLoading;
