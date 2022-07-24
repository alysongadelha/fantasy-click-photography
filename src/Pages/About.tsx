import React from "react";
import { Box, Flex } from "theme-ui";
import { about } from "../Configs/About";
import Head from "../Components/Head";
import TextBlock from "../Components/Forms/TextBlock";
import styles from "./About.module.css";

const imgStyle = {
  backgroundColor: "red",
  width: "20rem",
  height: "18rem",
  borderRadius: "10px",
  overflow: "hidden",
};
const About = ({ ...props }) => {
  return (
    <div>
      <Head
        title={props.title}
        project={props.project}
        description={props.description}
      />
      {about && (
        <div>
          <Flex className={styles.about__flex}>
            <Box className={styles.about__boxImage}>
              <img style={imgStyle} src={about.image} alt="OurImage" />
            </Box>
            <Box className={styles.about__boxData}>
              <h2>{about.name}</h2>
              <p>Local: {about.location}</p>
              <p>Idade da Empresa: {about.companyAge} anos</p>
              <p>Horario de Abertura: {about.openingTime}:00 a.m</p>
              <p>Hora de Fechamento: {about.closingTime}:00 p.m</p>
            </Box>
          </Flex>

          {about.texts.map((text, index) => {
            return (
              <TextBlock
                title={text.title}
                paragraph={text.paragraph}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default About;
