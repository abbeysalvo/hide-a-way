import React from "react";
import { useLoaderData } from "react-router-dom";

import { finishes } from "../../data/finishes";
import { woodTypes } from "../../data/woodTypes";
import { backing } from "../../data/backing";
import { useDoorBuilderSelect } from "./use-door-builder-select";
import { trim } from "../../data/trim";

export async function loader() {
  //   const finishesLoaded = await finishes;
  return { backing, finishes, trim, woodTypes };
}

/**
 * The door-builder page allows users to browse buying options and make selections
 * before checking out and paying.
 */
const DoorBuilder = ({ ...props }) => {
  const { backing, finishes, trim, woodTypes } = useLoaderData();

  const { selected: selectedTrim, setSelectedHandler: setSelectedTrim } =
    useDoorBuilderSelect(trim);

  const { selected: selectedBacking, setSelectedHandler: setSelectedBacking } =
    useDoorBuilderSelect(backing);

  const {
    selected: selectedWoodType,
    setSelectedHandler: setSelectedWoodType,
  } = useDoorBuilderSelect(woodTypes);

  const {
    reset: resetFinish,
    selected: selectedFinish,
    setSelectedHandler: setSelectedFinish,
  } = useDoorBuilderSelect(finishes);

  return (
    <div class="door-builder">
      <img
        alt="Coastal view of the mountains"
        src="/images/renders/front.png"
        class="door-builder__image"
      />
      <div class="door-builder__options">
        <h2>Materials</h2>
        <div class="alert alert__icon">
          <div class="alert__content">
            Hide-A-Way Doors are proudly made with solid wood, never MDF.
            <a href="/" class="alert__link">
              Learn more...
            </a>
          </div>
        </div>
        {woodTypes.length > 0 && (
          <>
            <h3>Wood Types</h3>
            <span className="font-display-md">
              <span className="text--uppercase">Selected: </span>
              <strong>
                <em>
                  {selectedWoodType?.title}{" "}
                  {selectedWoodType?.cost
                    ? `(+$${selectedWoodType.cost}.00)`
                    : "(FREE)"}
                </em>
              </strong>
            </span>
            {/*selectedWoodType?.description && (
              <p>{selectedWoodType?.description}</p>
            )*/}
            <ul className="flex flex--gap-3xs flex--wrap tablet:flex--gap-2xs">
              {woodTypes.map(({ alt, finishes, id, value, title }) => (
                <li
                  className={[
                    selectedWoodType?.value === value ? "swatch--active" : "",
                    value ? "" : "swatch--no-image",
                    "swatch",
                    "square-12",
                    "tablet:square-15",
                  ].join(" ")}
                  key={id}
                  onClick={(event) =>
                    setSelectedWoodType(
                      event,
                      value,
                      finishes.includes(
                        selectedFinish.type || selectedFinish.value
                      )
                        ? null
                        : resetFinish
                    )
                  }
                >
                  {value ? (
                    <>
                      <img
                        alt={alt || ""}
                        srcSet={`
                    /images/woodTypes/${value}-100.jpg 340w, 
                    /images/woodTypes/${value}-200.jpg 640w, 
                    /images/woodTypes/${value}-400.jpg 880w, 
                    /images/woodTypes/${value}-800.jpg 1400w
                  `}
                      />
                      <span className="swatch__title">{title}</span>
                    </>
                  ) : (
                    <span className="swatch__title swatch__title--no-image">
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
            <h3>Finishes</h3>
            <span className="font-display-md">
              <span className="text--uppercase">Selected: </span>
              <strong>
                <em>
                  {selectedFinish?.title}{" "}
                  {selectedFinish?.cost
                    ? `(+$${selectedFinish.cost}.00)`
                    : "(FREE)"}
                </em>
              </strong>
            </span>
            {selectedFinish?.description && (
              <p>{selectedFinish?.description}</p>
            )}
            <ul className="flex flex--gap-3xs flex--wrap tablet:flex--gap-2xs">
              {finishes
                .filter(
                  (finish) =>
                    selectedWoodType.finishes.includes(finish.type) ||
                    selectedWoodType.finishes.includes(finish.value) ||
                    finish.value === "unfinished"
                )
                .map(({ alt, id, value, title, type }) => (
                  <li
                    className={[
                      selectedFinish?.value === value ? "swatch--active" : "",
                      value ? "" : "swatch--no-image",
                      "swatch",
                      "square-12",
                      "tablet:square-15",
                    ].join(" ")}
                    key={id}
                    onClick={(event) => setSelectedFinish(event, value)}
                  >
                    {value ? (
                      <>
                        <img
                          alt={alt || ""}
                          srcSet={`
                   /images/${
                     value === "unfinished" ? "woodTypes" : "finishes"
                   }/${type === "paint" ? "" : `${selectedWoodType.value}-`}${
                            value === "unfinished" ? "" : `${value}-`
                          }100.jpg 340w, 
                   /images/${
                     value === "unfinished" ? "woodTypes" : "finishes"
                   }/${type === "paint" ? "" : `${selectedWoodType.value}-`}${
                            value === "unfinished" ? "" : `${value}-`
                          }200.jpg 640w, 
                    /images/${
                      value === "unfinished" ? "woodTypes" : "finishes"
                    }/${type === "paint" ? "" : `${selectedWoodType.value}-`}${
                            value === "unfinished" ? "" : `${value}-`
                          }400.jpg 880w, 
                    /images/${
                      value === "unfinished" ? "woodTypes" : "finishes"
                    }/${type === "paint" ? "" : `${selectedWoodType.value}-`}${
                            value === "unfinished" ? "" : `${value}-`
                          }800.jpg 1400w
                  `}
                        />
                        <span className="swatch__title">
                          {type && `${type}: `}
                          {title}
                        </span>
                      </>
                    ) : (
                      <span className="swatch__title swatch__title--no-image">
                        {type && `${type}: `}
                        {title}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </>
        )}
        {backing.length > 0 && (
          <>
            <h3>Bookcase Backing</h3>
            <span className="font-display-md">
              <span className="text--uppercase">Selected: </span>
              <strong>
                <em>
                  {selectedBacking?.title}{" "}
                  {selectedBacking?.cost
                    ? `(+$${selectedBacking.cost}.00)`
                    : "(FREE)"}
                </em>
              </strong>
            </span>
            <ul className="flex flex--gap-3xs flex--wrap tablet:flex--gap-2xs">
              {backing.map(({ alt, id, value, title }) => (
                <li
                  className={[
                    selectedBacking?.value === value ? "swatch--active" : "",
                    value ? "" : "swatch--no-image",
                    "swatch",
                    "square-12",
                    "tablet:square-15",
                  ].join(" ")}
                  key={id}
                  onClick={(event) => setSelectedBacking(event, value)}
                >
                  {value ? (
                    <>
                      <img
                        alt={alt || ""}
                        srcSet={`
                    /images/backing/${value}-100.jpg 340w, 
                    /images/backing/${value}-200.jpg 640w, 
                    /images/backing/${value}-400.jpg 880w, 
                    /images/backing/${value}-800.jpg 1400w
                  `}
                      />
                      <span className="swatch__title">{title}</span>
                    </>
                  ) : (
                    <span className="swatch__title swatch__title--no-image">
                      {title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
        {trim.length > 0 && (
          <>
            <h3>Trim</h3>
            <span className="font-display-md">
              <span className="text--uppercase">Selected: </span>
              <strong>
                <em>
                  {selectedTrim?.title}{" "}
                  {selectedTrim?.cost
                    ? `(+$${selectedTrim.cost}.00)`
                    : "(FREE)"}
                </em>
              </strong>
            </span>
            <ul className="flex flex--gap-3xs flex--wrap tablet:flex--gap-2xs">
              {trim.map(({ alt, id, value, title }) => (
                <li
                  className={[
                    selectedTrim?.value === value ? "swatch--active" : "",
                    value ? "" : "swatch--no-image",
                    "swatch",
                    "square-12",
                    "tablet:square-15",
                  ].join(" ")}
                  key={id}
                  onClick={(event) => setSelectedTrim(event, value)}
                >
                  {value ? (
                    <>
                      <img
                        alt={alt || ""}
                        srcSet={`
                    /images/trim/${value}-100.jpg 340w, 
                    /images/trim/${value}-200.jpg 640w, 
                    /images/trim/${value}-400.jpg 880w, 
                    /images/trim/${value}-800.jpg 1400w
                  `}
                      />
                      <span className="swatch__title">{title}</span>
                    </>
                  ) : (
                    <span className="swatch__title swatch__title--no-image">
                      {title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

DoorBuilder.defaultProps = {};

DoorBuilder.propTypes = {};

export default DoorBuilder;
