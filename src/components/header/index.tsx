import Container from "components/container";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { socialIcons } from "utilities/icons";

export const Header = () => {
  const containerRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const { pathname } = useLocation();
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setSticky(!entry?.isIntersecting);
  };
  const options = {
    root: null,
    threshold: 0.15,
    rootMargin: `75px`,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <header ref={containerRef} className={`${sticky ? "is-sticky" : ""}`}>
      <Container>
        <div className="flex flex-col justify-start sm:justify-between sm:flex-row items-start sm:items-center top-header">
          <Link to="/" className="logo">
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
          <li className="uppercase">
            <Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
              home
            </Link>
          </li>
          <li className="uppercase">
            <Link
              to="/about"
              className={`${pathname === "/about" ? "active" : ""}`}
            >
              about
            </Link>
          </li>
          <li className="uppercase">
            <Link
              to="/work"
              className={`${pathname === "/work" ? "active" : ""}`}
            >
              work
            </Link>
          </li>
          <li className="uppercase">
            <Link
              to="/contact"
              className={`${pathname === "/contact" ? "active" : ""}`}
            >
              contact
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};
