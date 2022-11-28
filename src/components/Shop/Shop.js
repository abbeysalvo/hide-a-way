import React from "react";
import { NavLink } from "react-router-dom";

/**
 * The door-builder page allows users to browse buying options and make selections
 * before checking out and paying.
 */
const Shop = ({ ...props }) => {
  return (
    <div class="shop">
      <div>Ready-to-Ship Doors</div>
      <div>
        <NavLink className="footer__nav-link" to="builder">
          Build Your Doors
        </NavLink>
      </div>
      <div>Extras</div>
    </div>
  );
};

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
