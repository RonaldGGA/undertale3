import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`app__landing__navbar ${scrollY > 200 ? "sticky" : ""}`}>
      <div className="app__landing__navbar__container">
        <img src={logo} />
        <div
          className={`app__landing__navbar__container-links${
            active ? " active" : ""
          }`}>
          <div className="app__landing__navbar__container-links-responsive">
            <a
              href="#"
              className="app__landing__navbar__container-links-responsive--link">
              Support
            </a>
            <a
              href="#"
              className="app__landing__navbar__container-links-responsive--link">
              Comunity
            </a>
            <a
              href="#"
              className="app__landing__navbar__container-links-responsive--link">
              Specifications
            </a>
            <a
              href="#"
              className="app__landing__navbar__container-links-responsive--link">
              Leaderboard
            </a>
          </div>
        </div>

        <a href="#" className="app__landing__navbar__container--play">
          PLAY NOW
        </a>

        <div
          className={`app__landing__navbar__container-menu ${
            active ? "active" : ""
          }`}
          onClick={handleMenu}>
          <div
            className={`app__landing__navbar__container-menu--lines${
              active ? " active" : ""
            }`}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
