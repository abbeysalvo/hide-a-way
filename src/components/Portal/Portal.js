import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * The Portal component creates a Portal for any React children passed into a component.
 * This allows dynamically generated elements, such as tooltips, popovers, and modals, to render outside of their parent wrappers which may visually cut off content due to overflow restrictions.
 */

const Portal = ({ children, className, ...props }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");
  mount.className = className;

  // Mount the element at the right time and clean up on component unmount.
  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

Portal.defaultProps = {
  children: "",
  className: "",
};

Portal.propTypes = {
  /**
   * JSX element(s), The content provided to the portal.
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]),
  /**
   * Class names to pass to wrapping portal div element
   */
  className: PropTypes.string,
};

export default Portal;
