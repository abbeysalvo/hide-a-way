import React, { forwardRef, useEffect, useRef } from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";
//Components
import FocusTrap from "./focus_trap";
import Portal from "../utilities/Portal";
// import { Button } from "../Button/Button";

/**
 * https://designsystem.digital.gov/components/modal/
 *
 * A modal disables page content and focuses the user’s attention
 * on a single task or message.
 *
 * A modal prevents interaction with page content until
 * the user completes an action or dismisses the modal.
 * This intentionally interrupts the user’s workflow.
 * Use modals sparingly to minimize unnecessary disruptions.
 *
 * Modals should have a simple headline that explains its purpose.
 * Use enough descriptive text to be clear what the user needs to do and why.
 * Avoid using modals to display complex forms or large amounts of information.
 *
 * IMPORTANT: The Modal component must be used in conjunction with the useModal hook
 * in order to be fully accessible. The useModal hook handles body scrolling and
 * keyboard accessibility. It is used outside of this component for further flexibility.
 */

const Modal = forwardRef(
  ({ children, className, hide, id, size, title, ...props }, ref) => {
    const content = useRef();

    useEffect(() => {
      if (content.current) {
        content.current.focus();
      }
    }, [content]);

    return (
      <Portal>
        <FocusTrap isActive={true}>
          <div
            aria-modal
            className={[
              "modal-bg",
              "bg-base-darkest-opacity-50",
              "bottom-0",
              "left-0",
              "position-fixed",
              "right-0",
              "top-0",
              "z-500",
            ].join(" ")}
            onClick={hide}
          ></div>

          <div
            className={[
              "modal-container",
              "padding-2",
              "position-fixed",
              "minw-0",
              size === "sm" ? "width-mobile-lg" : "width-full",
              "z-top",
            ].join(" ")}
          >
            {/**
             * Identify the title.
             * Use aria-labelledby="id" on .usa-modal to associate a title
             * with the modal so that it’s read when opening the modal.
             * The id should belong to the id attribute on .usa-modal__heading.
             */}

            {/**
             * Descriptions.
             * Optionally, you may use aria-describedby="id" on .usa-modal
             * to associate descriptive text to the modal window
             * so that it’s read when opening the modal.
             * The id should belong to a paragraph or a brief piece of content.
             */}
            <div
              aria-describedby={`modal-${id}-description`}
              aria-labelledby={`modal-${id}-heading`}
              className={[
                "usa-modal",
                "modal-content",
                "bg-white",
                "border-base-lighter",
                "border-1px",
                "display-flex",
                "flex-column",
                "margin-x-auto",
                "maxh-tablet",
                "radius-md",
                "minw-mobile",
                size === "sm" ? "maxw-mobile-lg" : "maxw-desktop-lg",
                "shadow-md",
                "z-top",
                className,
              ].join(" ")}
              id={`modal-${id}`}
              ref={content}
              role="dialog"
              tabIndex="0"
            >
              <div
                className={[
                  "usa-modal__heading",
                  "modal-header",
                  "border-bottom-1px",
                  "border-base-lighter",
                  "display-flex",
                  "flex-align-center",
                  "minh-button",
                  "padding-x-105",
                  "padding-y-105",
                  "position-relative",
                  "margin-right-5",
                ].join(" ")}
              >
                {title && (
                  <h2
                    className={[
                      "font-sans-lg",
                      "margin-bottom-0",
                      "width-full",
                    ].join(" ")}
                    id={`modal-${id}-heading`}
                  >
                    {title}
                  </h2>
                )}
              </div>
              {children}
            </div>
          </div>
        </FocusTrap>
      </Portal>
    );
  }
);

Modal.defaultProps = {};

Modal.defaultProps = {
  size: "sm",
};

Modal.propTypes = {
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
   * Additional classes to apply to the modal wrapper
   */
  className: PropTypes.string,
  /**
   * Function to execute when the backdrop is clicked
   */
  hide: PropTypes.func.isRequired,
  /**
   * Each .usa-modal must have a unique id so that
   * openers can associate them with their aria-controls attribute.
   */
  id: PropTypes.string.isRequired,
  /**
   * JSX element(s), text displayed in the header of of the modal component
   */
  size: PropTypes.oneOf(["sm", "lg"]),
  title: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

Modal.displayName = "Modal";

export default Modal;

export const ModalBody = ({ children, id, ...props }) => {
  return (
    <div
      className={[
        "modal-body",
        //
        "contents-scroll",
        "overflow-y-auto",
        "padding-2",
        "width-full",
      ].join(" ")}
      id={`modal-${id}-description`}
    >
      {children}
    </div>
  );
};

ModalBody.propTypes = {
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
   * For use with aria-describedby="id" on
   * .usa-modal to associate descriptive text to the modal window
   * so that it’s read when opening the modal.
   */
  id: PropTypes.string.isRequired,
};

export const ModalFooter = ({ children, hide, ...props }) => {
  return (
    <>
      {children && (
        <div
          className={[
            "modal-footer",
            "border-top-1px",
            "border-base-lighter",
            // 'display-flex',
            "padding-1",
          ].join(" ")}
        >
          {children}
        </div>
      )}
      {/**
       * Include the “X” close button at the end of the modal code.
       * CSS will display .usa-modal__close at the top right
       * of the modal window, but placing the close button at
       * the bottom of the modal will prevent some screen readers
       * from reading the close button first and allow users to
       * navigate directly to the main content instead.
       */}
      {hide && (
        <>
          'button'
          {/*<Button
          className={["position-absolute", "right-05", "top-05"].join(" ")}
          displayClass="block"
          iconName="close"
          iconOnly
          iconSize="xs"
          onClick={hide}
          outline
          reduced
          srText="Close modal"
      />*/}
        </>
      )}
    </>
  );
};

ModalFooter.propTypes = {
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
   * Function to execute when the close button is clicked
   */
  hide: PropTypes.func.isRequired,
};
