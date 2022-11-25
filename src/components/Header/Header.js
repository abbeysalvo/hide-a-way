import React from "react";
import { NavLink } from "react-router-dom";

/**
 * A header helps users identify where they are and provides a quick,
 * organized way to reach the main sections of a website.
 *
 * USWDS: https://designsystem.digital.gov/components/header/
 *
 * DO:    While a horizontal navigation bar is just one option for navigation design,
 *        it is one of the most visible and familiar ways of helping users navigate a site.
 */
const Header = ({ ...props }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/shop", title: "Shop" },
    { path: "/about", title: "About Us" },
  ];

  return (
    <header className="header" role="banner">
      <a className="header__logo" href="/">
        <svg
          className="logo__image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.88 32.37"
        >
          <polygon points="27.84 3.58 27.88 0 18 0 18 9.46 9.88 9.46 9.88 0 0 0 0 25.1 5.67 28.79 9.88 28.78 15.41 32.37 15.41 20.01 9.88 16.42 18 16.42 18 28.81 27.88 28.81 27.84 3.58" />
        </svg>
        <h1 className="logo__name">Hide-A-Way</h1>
      </a>
      {/**
       * ACCESSIBILITY: Label Menus
       * Labels should be short but descriptive, to allow users to distinguish
       * between multiple menus on a web page. Use a heading, aria-label, or aria-labelledby
       * to provide the label.
       */}
      <nav
        aria-labelledby="main-nav-label"
        className="header__nav"
        role="navigation"
      >
        <h2
          aria-label="Open the main menu"
          className="sr-only"
          id="main-nav-label"
        >
          Main Menu
        </h2>
        <div className="header__nav-mobile">
          <svg
            className="nav__image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.39 15.95"
          >
            <line y1="1" x2="18.39" y2="1" />
            <line y1="7.98" x2="18.39" y2="7.98" />
            <line y1="14.95" x2="18.39" y2="14.95" />
          </svg>
        </div>
        <ul className="header__nav-list">
          {navLinks.map(({ path, title }) => (
            <li>
              {/**
               * ACCESSIBILITY: Label Active Link
               * Provide an invisible label that is read aloud to screen reader users
               * and used by other assistive technologies to mark the current item.
               * This is handled by default with NavLink
               */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "header__nav-link header__nav-link--active"
                    : "header__nav-link"
                }
                to={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
          {/*<li>
            <span className="current header__nav-link">
              <span className="sr-only">Current Page: </span>
              Home
            </span>
          </li>*/}
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
