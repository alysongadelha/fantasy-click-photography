import React from "react";
import { medias } from "../Configs/Medias";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <small>Copyright © 2022 DrLysn. Todos os direitos reservados.</small>
      <ul className={styles.footer__list}>
        {medias.map((footer, index) => {
          return (
            <li key={index}>
              <a href={footer.link} target="_blank" rel="noreferrer">
                {footer.media}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
