// import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import toast, { Renderable, Toast, ValueOrFunction } from "react-hot-toast";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { JSX, useState } from "react";
import { RiInformation2Fill } from "react-icons/ri";

// Custom Toast Component
/**
 * CustomToast component
 * @param {{ message: ValueOrFunction<Renderable, Toast>, type: "default" | "success" | "error", toastId: unknown, classname: string }} props
 * @returns {JSX.Element}
 */
const CustomToast = ({
  message,
  type = "default",
  toastId,
  classname,
}: {
  message: ValueOrFunction<Renderable, Toast>;
  type: "default" | "success" | "error";
  toastId: string;
  classname: string;
}): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false);

  const handleDismiss = () => {
    setIsClosing(true);
    toast.dismiss(toastId);
  };

  return (
    <div
      className={classNames(styles.customToast, classname, {
        ["information-toast"]: type === "default",
        ["closing-toast"]: type === "default" && isClosing,
        ["success-toast"]: type === "success",
        ["error-toast"]: type === "error",
      })}
    >
      {type === "default" && (
        <div className={"defaultIcon"}>
          <RiInformation2Fill />
        </div>
      )}
      <div className={"toastMessage"}>{message}</div>
      <button
        type="button"
        onClick={handleDismiss} // Dismiss the toast when clicked
        className={"closeButton"}
        title="Dismiss"
      >
        &#10006;
      </button>
    </div>
  );
};

// Notify function
/**
 * Notify the user with a message and optional type.
 *
 * @param {ValueOrFunction<Renderable, Toast>} message The message to be displayed.
 * @param {"default" | "success" | "error"} [type="default"] The type of the notification.
 * @param {string} [classname=""] The CSS class name to be applied to the notification.
 * @return {string} The ID of the toast.
 */
const notify = (
  message: ValueOrFunction<Renderable, Toast>,
  type: "default" | "success" | "error" = "default",
  classname: string = ""
): string => {
  const toastTypes = {
    success: toast.success,
    error: toast.error,
    default: toast.custom,
  };

  return (toastTypes[type] || toast.custom)((t: { id: string }) => (
    <CustomToast
      key={t.id}
      toastId={t.id}
      message={message}
      type={type}
      classname={classname}
    />
  ));
};

export { notify };
