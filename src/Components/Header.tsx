import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "theme-ui";
import styles from "./Header.module.css";
import routes from "../Configs/Routes";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__contentBox}>
        <Flex className={styles.header__content}>
          <div className={styles.header__logo}>
            <img src="https://picsum.photos/80/36" alt="Logo" />
          </div>
          <Flex>
            <ul className={styles.header__ul}>
              {routes.map((route, index) => {
                return (
                  <li
                    key={index}
                    style={{ display: route.navigation ? "block" : "none" }}
                  >
                    <Link to={route.path}>{route.displayName}</Link>
                  </li>
                );
              })}
            </ul>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
