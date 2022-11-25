import React, { useEffect } from "react";
import PropTypes from "prop-types";

const FocusTrap = ({ children, isActive, ...props }) => {
  const topTabTrap = React.useRef();
  const bottomTabTrap = React.useRef();
  const container = React.useRef();

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'
  //   return () => document.body.removeAttribute('style')
  // }, [])

  const trapFocus = (event) => {
    // Only trap focus in modal form
    if (!isActive) return;

    let elements;
    // if (!event || elements.indexOf(event?.target) !== 1) elements?.[0].focus
    if (event?.target === topTabTrap.current) {
      elements = getFocusableElements();
      if (elements.length > 0) {
        const lastElement = elements[elements.length - 1];
        lastElement.focus();
      }
    }

    if (event?.target === bottomTabTrap.current) {
      elements = getFocusableElements();
      if (elements.length > 0) {
        const firstElement = elements[0];
        firstElement.focus();
      }
    }
  };

  const getFocusableElements = () => {
    if (!container.current) return [];

    const FOCUSABLE_SELECTOR = [
      "button",
      "a[href]",
      "input",
      "select",
      "textarea",
      "[tabindex]",
      "[contenteditable]",
    ]
      .map((selector) => `${selector}:not(:disabled):not([disabled])`)
      .join(", ");

    return Array.from(container.current.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter((element) => element !== topTabTrap.current)
      .filter((element) => element !== bottomTabTrap.current);
  };
  useEffect(() => {
    // if (isActive) trapFocus()
    document.addEventListener("focusin", trapFocus);
    return () => document.removeEventListener("focusin", trapFocus);
  }, [isActive, topTabTrap, bottomTabTrap, container]);

  return isActive ? (
    <div ref={container}>
      <span ref={topTabTrap} tabIndex="0" />
      {children}
      <span ref={bottomTabTrap} tabIndex="0" />
    </div>
  ) : (
    children
  );
};
FocusTrap.propTypes = {
  /**
   * JSX element(s), The content provided to the component.
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]),
  /**
   * Activates the focus trap
   */
  isActive: PropTypes.bool,
};

export default FocusTrap;
