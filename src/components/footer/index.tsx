import { RippleButton } from "components/button";
import Container from "components/container";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <Container classes="flex flex-col md:flex-row justify-between">
          <h5 className="text-xl text-center md:text-left mb-2 md:mb-0">
            Are You Ready To Be Blown Away?
          </h5>
          <RippleButton
            classes={`text-white bg-green bg-indigo-500 block  px-6 py-2 `}
          >
            Click Here to Find Out
          </RippleButton>
        </Container>
      </div>
      <div className="bottom-footer">
        <Container classes="flex flex-col md:flex-row justify-between items-center">
          <small>Copyright 2013 Display. All Rights Reserved.</small>
          <ul className="footer-menu flex justify-start items-center">
            <li className="uppercase">
              <Link to="/" className="active">
                home
              </Link>
            </li>
            <li className="uppercase">
              <Link to="/about">about</Link>
            </li>
            <li className="uppercase">
              <Link to="/work">work</Link>
            </li>
            <li className="uppercase">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};
