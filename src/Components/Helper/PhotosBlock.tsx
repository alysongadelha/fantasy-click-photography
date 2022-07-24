import React from "react";
import { Box, Text } from "theme-ui";

const PhotosBlock: React.FC<any> = ({ title, children }) => {
  return (
    <Box
      style={{
        width: "400px",
        margin: "20px auto",
        border: "3px solid red",
        padding: "10px",
      }}
    >
      <Box>
        <img src="https://picsum.photos/320/288" alt="" />
      </Box>
      <Box>
        <h3>{title}</h3>
        <Text>{children}</Text>
      </Box>
    </Box>
  );
};

export default PhotosBlock;
