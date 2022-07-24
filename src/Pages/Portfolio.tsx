import React from "react";
import Head from "../Components/Head";
import PhotosBlock from "../Components/Helper/PhotosBlock";
import { Portfolio as ports } from "../Mocks/PortFolio";

const Portfolio = ({ ...props }) => {
  return (
    <div>
      <Head
        title={props.title}
        project={props.project}
        description={props.description}
      />
      {ports.map((port, index) => {
        return (
          <PhotosBlock key={index} title={port.title}>
            {port.desciption}
          </PhotosBlock>
        );
      })}
    </div>
  );
};

export default Portfolio;
