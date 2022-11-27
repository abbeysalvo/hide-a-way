import React from "react";
import { useLoaderData } from "react-router-dom";

import { finishes } from "../../data/finishes";
import { woodTypes } from "../../data/woodTypes";
import { useShopSelect } from "./use-shop-select";

export async function loader() {
  //   const finishesLoaded = await finishes;
  return { finishes, woodTypes };
}

/**
 * The shop page allows users to browse buying options and make selections
 * before checking out and paying.
 */
const Shop = ({ ...props }) => {
  const { finishes, woodTypes } = useLoaderData();

  const {
    selected: selectedWoodType,
    setSelectedHandler: setSelectedWoodType,
  } = useShopSelect(woodTypes);

  return (
    <div className="wrapper">
      {woodTypes.length > 0 && (
        <>
          <h2>Wood Types</h2>
          <span className="text--uppercase">Selected: </span>
          <strong>
            <em>
              {selectedWoodType.title}{" "}
              {selectedWoodType.cost
                ? `(+$${selectedWoodType.cost}.00)`
                : "(FREE)"}
            </em>
          </strong>
          <p>{selectedWoodType.description}</p>
          <ul className="flex flex--gap-3xs flex--wrap tablet:flex--gap-2xs">
            {woodTypes.map(({ alt, id, value, title }) => (
              <li
                className={[
                  selectedWoodType?.value === value
                    ? "shop__thumbnail--active"
                    : "",
                  value ? "" : "shop__thumbnail--no-image",
                  "shop__thumbnail",
                  "square-10",
                  "tablet:square-15",
                ].join(" ")}
                key={id}
                onClick={(event) => setSelectedWoodType(event, value)}
              >
                {value ? (
                  <>
                    <img
                      alt={alt || ""}
                      srcSet={`
                    images/woodTypes/${value}-100.jpg 340w, 
                    images/woodTypes/${value}-200.jpg 640w, 
                    images/woodTypes/${value}-400.jpg 880w, 
                    images/woodTypes/${value}-800.jpg 1400w
                  `}
                    />
                    <span className="shop__thumbnail-title">{title}</span>
                  </>
                ) : (
                  <span className="shop__thumbnail-title shop__thumbnail-title--no-image">
                    {title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
      {finishes.length > 0 && (
        <>
          <h2>Finishes</h2>
          <ul>
            {finishes.map(({ cost, description, id, title, type }) => (
              <li key={id}>
                {type && `${type}: `}
                {title} {cost ? `(+$${cost}.00)` : "(FREE)"}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
