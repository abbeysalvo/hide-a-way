import React from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";

import Prose from "../utilities/Prose";

/**
 * An alert keeps users informed of important and sometimes time-sensitive changes.
 *
 * USWDS: https://designsystem.digital.gov/components/alert/
 *
 * DO:    An alert may be a notification that keeps people informed of the status of
 *        the system and may or may not require the user to respond.
 *        Such notifications may be errors, warnings, and general updates.
 *
 * DO:    An alert may be a validation message that informs a user they just took an action that
 *        needs to be corrected or a confirmation that a task was completed successfully.
 *
 * DON'T: Alerts should not be used on long forms. Instead, always include in-line validation
 *        in addition to any error messages that appear at the top of the form.
 */
export const Alert = ({
  children,
  className,
  icon,
  slim,
  title,
  type,
  ...props
}) => {
  return (
    <div
      className={[
        "usa-alert",
        `usa-alert--${type}`,
        "margin-bottom-3",
        "maxw-tablet-lg",
        slim ? "usa-alert--slim" : "",
        icon ? "" : "usa-alert--no-icon",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="usa-alert__body">
        <span className="usa-sr-only">
          {type === "warning" || type === "error" ? "Attention: " : "Note: "}
        </span>
        {/** * SUGGESTION: Be polite in error messages — don’t blame the user. */}
        {!slim && title && (
          <span className="usa-alert__heading font-sans-md text-bold">
            {title}
          </span>
        )}
        <Prose className="usa-alert__text">
          <strong>{slim && title && `${title} `}</strong>
          {children}
        </Prose>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  icon: true,
  slim: false,
  type: "info",
};

Alert.propTypes = {
  /**
   * The content provided to the component.
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]),
  /**
   * Additional classes to be applied to the component's wrapper
   */
  className: PropTypes.string,
  /**
   * Determines whether the icon will appear
   */
  icon: PropTypes.bool,
  /**
   * Determined the size of the alert
   */
  slim: PropTypes.bool,
  /**
   * The display title.
   */
  title: PropTypes.string,
  /**
   * Determines the style and theme for the alert.
   */
  type: PropTypes.oneOf(["info", "warning", "error", "success"]),
};
