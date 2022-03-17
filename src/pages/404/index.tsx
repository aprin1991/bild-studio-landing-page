import { RippleButton } from "components";
import React from "react";
import { Link } from "react-router-dom";

function Custom404() {
  return (
    <div className="h-64 flex justify-center items-center flex-col">
      <div className="font-bold text-slate-800 text-center mb-4">
        Sorry We Can't Find It.
      </div>
      <Link to="/">
        <RippleButton
          classes={`text-white bg-green bg-indigo-500 block  px-10 py-2 text-white `}
        >
          Home
        </RippleButton>
      </Link>
    </div>
  );
}

export default Custom404;
