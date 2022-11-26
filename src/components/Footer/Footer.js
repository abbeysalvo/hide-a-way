import React from "react";
import { NavLink } from "react-router-dom";
import { siteNavigation } from "../..";

/**
 * A footer serves site visitors who arrive at the
 * bottom of a page without finding what they want.
 *
 * USWDS: https://designsystem.digital.gov/components/footer/
 */
const Footer = ({ ...props }) => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        <div className="footer__column">
          <a className="footer__logo" href="/">
            <svg
              className="logo__image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.88 32.37"
            >
              <polygon
                vector-effect="non-scaling-stroke"
                points="27.84 3.58 27.88 0 18 0 18 9.46 9.88 9.46 9.88 0 0 0 0 25.1 5.67 28.79 9.88 28.78 15.41 32.37 15.41 20.01 9.88 16.42 18 16.42 18 28.81 27.88 28.81 27.84 3.58"
              />
            </svg>
            <h1 className="logo__name">Hide-A-Way</h1>
          </a>
        </div>
        <div className="footer__column">
          <div className="footer__contact">
            <h2 className="footer__content_title">Contact</h2>
            <ul className="footer__nav-list">
              <li>
                <a
                  className="footer__nav-link"
                  href="tel:8889284534"
                  aria-label="8 8 8. 9 2 8. 4 5 3 4."
                >
                  (888) 928-4534
                </a>
              </li>
              <li>
                <a
                  className="footer__nav-link"
                  href="mailto:sales@hideawaydoors.com"
                >
                  sales@hideawaydoors.com
                </a>
              </li>
              <li>
                325 South Sugar Hollow Rd
                <br /> Morristown, TN 37813
              </li>
              <ul className="footer__nav-list footer__nav-list--row">
                <li>
                  <div
                    className="icon--social--facebook icon--outline icon--3xs"
                    title="Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                  </div>
                </li>
                <li>
                  <div
                    className="icon--social--twitter icon--outline icon--3xs"
                    title="Twitter"
                  >
                    <span className="sr-only">Twitter</span>
                  </div>
                </li>
                <li>
                  <div
                    className="icon--social--youtube icon--outline icon--3xs"
                    title="YouTube"
                  >
                    <span className="sr-only">YouTube</span>
                  </div>
                </li>
                <li>
                  <div
                    className="icon--social--instagram icon--outline icon--3xs"
                    title="Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <h2 className="footer__content_title">Quick Links</h2>
          <div className="footer__quick-links">
            <ul className="footer__nav-list">
              {siteNavigation.map(({ path, title }) => (
                <li>
                  {/**
                   * ACCESSIBILITY: Label Active Link
                   * Provide an invisible label that is read aloud to screen reader users
                   * and used by other assistive technologies to mark the current item.
                   * This is handled by default with NavLink
                   */}
                  <NavLink className="footer__nav-link" to={path}>
                    {title}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink className="footer__nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink className="footer__nav-link" to="/visit">
                  Location & Hours
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <h2 className="footer__content_title">Payment Methods</h2>
          <ul className="footer__nav-list footer__nav-list--row">
            <li>
              <div
                className="icon--payment--amex icon--fill icon--lg"
                title="American Express"
              >
                <span className="sr-only">American Express</span>
              </div>
            </li>
            <li>
              <div
                className="icon--payment--mastercard icon--fill icon--lg"
                title="Master Card"
              >
                <span className="sr-only">Master Card</span>
              </div>
            </li>
            <li>
              <div
                className="icon--payment--paypal icon--fill icon--lg"
                title="PayPal"
              >
                <span className="sr-only">PayPal</span>
              </div>
            </li>
            <li>
              <div
                className="icon--payment--visa icon--fill icon--lg"
                title="Visa"
              >
                <span className="sr-only">Visa</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        © 2022 by Hide-A-Way Doors, LLC
        <div className="flex margin-left-auto">
          <ul className="footer__nav-list">
            <li>
              <NavLink className="footer__nav-link" to="/privacy-terms">
                Privacy & Terms
              </NavLink>
            </li>
            <li>
              <NavLink
                className="footer__nav-link"
                to="/privacy-terms#refund-return-policy"
              >
                Refund & Return Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
