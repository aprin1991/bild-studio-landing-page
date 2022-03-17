import Container from "components/container";
import React from "react";
import { Link } from "react-router-dom";
import { socialIcons } from "utilities/icons";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center top-header">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>
          <ul className="header-social flex justify-start">
            <li>
              <a
                href="/"
                target="_blank"
                title="twitter"
                style={{ "--border": "#76A9EA" } as React.CSSProperties}
              >
                {socialIcons.twitter}
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                title="faceBook"
                style={{ "--border": "#3c5a9a" } as React.CSSProperties}
              >
                {socialIcons.faceBook}
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                title="rss"
                style={{ "--border": "#EE802F" } as React.CSSProperties}
              >
                {socialIcons.rss}
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                title="pinterest"
                style={{ "--border": "#C8232C" } as React.CSSProperties}
              >
                {socialIcons.pinterest}
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                title="google plus"
                style={{ "--border": "#DB4A39" } as React.CSSProperties}
              >
                {socialIcons.gPlus}
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                title="dribbble"
                style={{ "--border": "#EA4C89" } as React.CSSProperties}
              >
                {socialIcons.dribbble}
              </a>
            </li>
          </ul>
        </div>
        <ul className="bottom-header flex justify-start">
          <li className="capitalize">
            <Link to="/" className="active">
              home
            </Link>
          </li>
          <li className="capitalize">
            <Link to="/">about</Link>
          </li>
          <li className="capitalize">
            <Link to="/">work</Link>
          </li>
          <li className="capitalize">
            <Link to="/">contact</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};
