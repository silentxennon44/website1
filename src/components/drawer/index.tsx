import classNames from "classnames";
import styles from "./styles.module.scss";
import { createPortal } from "react-dom";
import { useEffect } from "react";

type DrawerProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  classname?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  anchor: "left" | "right" | "top" | "bottom"; // Type declaration for anchor
};
const Drawer = ({
  children,
  isOpen = false,
  classname = "",
  setIsOpen,
  anchor = "left",
}: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [isOpen]);
  {
    return createPortal(
      <div
        className={classNames(classname, styles.drawer, {
          ["open"]: isOpen,
        })}
      >
        {/* Drawer */}
        <div
          // data-drawer-element-name="content"
          data-anchor={anchor}
          className={classNames("content", {
            ["left"]: isOpen && anchor === "left",
            ["right"]: isOpen && anchor === "right",
            ["top"]: isOpen && anchor === "top",
            ["bottom"]: isOpen && anchor === "bottom",
            ["shadow"]: isOpen,
          })}
        >
          {children}
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className={classNames("overlay", {
            ["bg"]: isOpen,
          })}
        ></div>
      </div>,
      document.body
    );
  }
};

export default Drawer;
