import React, { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.scss";
import useInterval from "../../hooks/useInterval";
import { Link } from "react-router-dom";
const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
];

const Header = (props) => {
  const location = useLocation();
  console.log(location);

  const [showMenu, setShowMenu] = useState(false);

  const backgroundShow = () => {
    const navItems = document.querySelectorAll(".nav-link-background");
    const navLinks = document.querySelectorAll(".nav-link");
    var index = 0;

    var delay = setInterval(function () {
      if (index < navItems.length) {
        navLinks[index].classList.add("show");
        navItems[index].classList.add("show");
        index += 1;
      } else {
        clearInterval(delay);
      }
    }, 150);
  };

  const backgroundHide = () => {
    const navItems = document.querySelectorAll(".nav-link-background");
    const navLinks = document.querySelectorAll(".nav-link");
    var index = 0;

    var delay = setInterval(function () {
      if (index < navItems.length) {
        navLinks[index].classList.remove("show");
        navItems[index].classList.remove("show");
        index += 1;
      } else {
        clearInterval(delay);
      }
    }, 150);
  };

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      backgroundShow();
    } else if (window.scrollY < 200) {
      backgroundHide();
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <div id="navigation">
      <div className="container">
        <Link to={"/"} className="Logo">
          <h5>Carsecondlife</h5>
        </Link>

        <div className="nav-items">
          {pages.map(({ name, link }) => {
            const classname = `nav-link no-under ${
              location.pathname === link ? "under" : ""
            }`;
            return (
              <Link to={link} className={classname}>
                <div className="nav-link-background"></div>
                <div className="nav-link-text">{name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
