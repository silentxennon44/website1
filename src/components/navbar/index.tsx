import images from "@/assets";
import styles from "./styles.module.scss";
import { navItems, SubMenuItem } from "@/static/staticData";
import { ImSearch } from "react-icons/im";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiShoppingCartBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import { PiCaretDown } from "react-icons/pi";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Accordion from "@/components/accordion";
import Drawer from "@/components/drawer";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import GoogleInputBox from "@/components/googleInputBox";

const Navbar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [subMenuItems, setSubMenuItems] = useState([] as SubMenuItem[]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [searchString, setSearchString] = useState("");

  // TODO: Implement search
  const handleSearch = (search: string) => {
    console.log(search);
  };

  useEffect(() => {
    /**
     * Scroll event handler to toggle fixed state of the navbar
     */
    const handleScroll = () => {
      // Check if the scroll position is greater than 125 pixels
      if (window.scrollY > 125) {
        // Set the navbar to fixed position
        setIsFixed(true);
      } else {
        // Set the navbar to static position
        setIsFixed(false);
      }
    };

    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Initial check to set the fixed state on component mount
    if (document.documentElement.scrollTop > 125) {
      setIsFixed(true);
    }

    // Cleanup function to remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Resets the search string when the search mode is turned off
   */
  useEffect(() => {
    if (!isSearching) {
      // Reset the search string when the search mode is turned off
      setSearchString("");
    }
  }, [isSearching]);

  /**
   * Handles the mouse hover event on a menu item.
   * If the hovered item has a submenu, it sets the active submenu
   * and the submenu items to the corresponding values.
   * If the hovered item does not have a submenu, it resets the
   * active submenu and the submenu items to empty values.
   * @param item The hovered menu item.
   */
  const onMouseHover = (item) => {
    if (!item.subMenu) {
      setActiveSubMenu("");
      setSubMenuItems([]);
      return;
    }
    setSubMenuItems(item.subMenu);
    setActiveSubMenu(item.title);
  };
  return (
    <>
      <nav
        className={classNames(styles.navbar, {
          [styles.submenuActive]: activeSubMenu !== "",
          [styles.show]: isFixed,
        })}
      >
        <div
          className={classNames(styles.burger, {
            [styles.open]: isSideMenuOpen,
          })}
          onClick={() => setSideMenuOpen(!isSideMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src={images.navigationBar.logo2.src}
              alt={images.navigationBar.logo2.alt}
            />
          </Link>
        </div>

        <Drawer
          isOpen={isSideMenuOpen}
          setIsOpen={setSideMenuOpen}
          anchor={"left"}
          classname={styles.menuDrawer}
        >
          <Accordion
            sections={navItems}
            isDrawerOpen={isSideMenuOpen}
            classname={styles.menuAccordion}
          />
        </Drawer>

        <ul className={styles.mainMenu}>
          {navItems.map((item) => (
            <li
              key={item.title}
              className={classNames(styles.menuItem, {
                [styles.active]: item.title === activeSubMenu,
              })}
              onMouseOver={() => onMouseHover(item)}
              // onMouseLeave={() => onMouseHover("")}
            >
              <Link to={item.link}>
                {item.title}
                {item.subMenu && (
                  <i>
                    <PiCaretDown />
                  </i>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.shortcuts}>
          <li className={classNames(styles.shortcutItem)}>
            <span
              className={styles.search}
              onClick={() => setIsSearching(!isSearching)}
            >
              {<ImSearch />}
            </span>
            <Drawer
              isOpen={isSearching}
              setIsOpen={setIsSearching}
              anchor={"top"}
              classname={styles.searchDrawer}
            >
              <div className={styles.searchContainer}>
                <GoogleInputBox
                  value={searchString}
                  onChange={setSearchString}
                  onOk={handleSearch}
                  buttonTitle="Search"
                  showClear
                  placeholder="Search"
                  type="text"
                  AdditionalIcon={FaSearch}
                />
                <span
                  className={styles.close}
                  onClick={() => setIsSearching(false)}
                >
                  <AiOutlineClose />
                </span>
              </div>
            </Drawer>
          </li>
          <li className={styles.shortcutItem}>
            <Link to={"/login"} title="Login">
              {<RiAccountCircleLine />}
            </Link>
          </li>
          <li className={styles.shortcutItem}>
            <Link to={"/cart"} title="Cart">
              {<PiShoppingCartBold />}
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={classNames(styles.submenu, styles.hide, {
          [styles.active]: activeSubMenu !== "",
          [styles.show]: isFixed && activeSubMenu !== "",
        })}
        onMouseOver={() =>
          onMouseHover({ title: activeSubMenu, subMenu: subMenuItems })
        }
        onMouseLeave={() => onMouseHover("")}
        data-scrolled={isFixed}
      >
        {subMenuItems.length > 0 && (
          <ul className={styles.mainList} data-submenu={activeSubMenu}>
            {subMenuItems.map((item) => {
              return (
                <li key={item.title} className={styles.submenuItem}>
                  {item.subMenu ? (
                    <h3>{item.title}</h3>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                  {item.subMenu && (
                    <ul className={styles.innerItems}>
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link to={subItem.link}>{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
