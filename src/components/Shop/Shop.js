import React from "react";
import { useLoaderData } from "react-router-dom";

import { finishes } from "../../data/finishes";

export async function loader() {
  //   const finishesLoaded = await finishes;
  return { finishes };
}

/**
 * The shop page allows users to browse buying options and make selections
 * before checking out and paying.
 */
const Shop = ({ ...props }) => {
  const { finishes } = useLoaderData();
  return (
    <div>
      Shop
      {finishes.length ? (
        <ul>
          {finishes.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </div>
  );
};

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
