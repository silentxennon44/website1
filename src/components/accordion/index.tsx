import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { PiCaretDown } from "react-icons/pi";

const Accordion = ({ sections, isDrawerOpen, classname = "" }) => {
  const [activeIndexes, setActiveIndexes] = useState({});

  useEffect(() => {
    if (!isDrawerOpen) {
      // Reset the state when the Drawer is closed
      setActiveIndexes({});
    }
  }, [isDrawerOpen]); // Dependency on the Drawer state

  /**
   * Toggles the active state of a section and
   * closes any active sibling sections.
   * @param {string} path The path of the section to toggle.
   */
  const toggleSection = (path: string) => {
    setActiveIndexes((prevState) => {
      // Create a new state object with the toggled section
      const current = { ...prevState, [path]: !prevState[path] };

      // Filter out sections that have a false value
      const filteredState = Object.keys(current)
        // Only keep keys where the value is truthy
        .filter((key) => current[key])
        // Reduce the filtered keys to a new object
        .reduce((acc, key) => {
          acc[key] = current[key];
          return acc;
        }, {});

      // Close sibling sections
      const closeSibling = Object.entries(filteredState)
        .map(([key, value]) => {
          // Keep only the toggled section or its parent sections
          if (key.length! < path.length || key === path) {
            return [key, value];
          }
        })
        // Filter out undefined entries
        .filter((item) => item !== undefined);

      // Convert the entries back to an object
      return Object.fromEntries(closeSibling);
    });
  };

  const renderSections = (sections, path = "") => {
    return sections.map((section, index) => {
      const currentPath = path ? `${path}-${index}` : `${index}`;
      const isOpen = activeIndexes[currentPath];

      return (
        <div
          key={currentPath}
          className={classNames("section", {
            ["marginLeft"]: path,
          })}
        >
          {section.subMenu ? (
            <>
              <button
                onClick={() => toggleSection(currentPath)}
                className={classNames("sectionItem", {
                  ["open"]: isOpen,
                })}
                type="button"
              >
                {section.title}
                {section.subMenu && (
                  <i>
                    <PiCaretDown />
                  </i>
                )}
              </button>
              <div
                className={classNames("wrapper", {
                  ["open"]: isOpen,
                })}
              >
                {
                  <div>
                    <div className={"sectionContainer"}>
                      {renderSections(section.subMenu, currentPath)}
                    </div>
                  </div>
                }
              </div>
            </>
          ) : (
            <Link
              to={section.link} // Assuming each deepest item has a `link` property
              className={"sectionLink"}
            >
              {section.title}
            </Link>
          )}
        </div>
      );
    });
  };

  return (
    <div className={classNames(styles.accordion, classname)}>
      {renderSections(sections)}
    </div>
  );
};

export default Accordion;
