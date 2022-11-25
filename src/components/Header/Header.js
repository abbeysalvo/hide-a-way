import React from "react";

/**
 * A header helps users identify where they are and provides a quick,
 * organized way to reach the main sections of a website.
 *
 * USWDS: https://designsystem.digital.gov/components/header/
 *
 * DO:    It is recommended to include the "official government website"
 *        banner and a logo or site name.
 *
 * DO:    While a horizontal navigation bar is just one option for navigation design,
 *        it is one of the most visible and familiar ways of helping users navigate a site.
 */
const Header = ({ ...props }) => {
  return (
    <header class="header">
      <div class="header__logo">
        <svg
          class="logo__image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.88 32.37"
        >
          <polygon points="27.84 3.58 27.88 0 18 0 18 9.46 9.88 9.46 9.88 0 0 0 0 25.1 5.67 28.79 9.88 28.78 15.41 32.37 15.41 20.01 9.88 16.42 18 16.42 18 28.81 27.88 28.81 27.84 3.58" />
        </svg>
        <span class="logo__name">Hide-A-Way</span>
      </div>
      <nav class="header__nav">
        <div class="header__nav-mobile">
          <svg
            class="nav__image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.39 15.95"
          >
            <line y1="1" x2="18.39" y2="1" />
            <line y1="7.98" x2="18.39" y2="7.98" />
            <line y1="14.95" x2="18.39" y2="14.95" />
          </svg>
        </div>
        <ul class="header__nav-list">
          <li>
            <a class="header__nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="header__nav-link" href="/shop">
              Shop
            </a>
          </li>
          <li>
            <a class="header__nav-link" href="/about">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
