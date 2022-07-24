import React from "react";
import { IText } from "../../Models/About";
import styles from "./TextBlock.module.css";

const TextBlock = (props: IText) => {
  const { title, paragraph } = props;
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.TextBlock__boxText}>
        {paragraph.map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </div>
    </div>
  );
};

export default TextBlock;
