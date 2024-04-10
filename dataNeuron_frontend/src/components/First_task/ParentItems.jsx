import React from "react";
import { Box ,Image} from "@chakra-ui/react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResizableComponent= ({ image }) => {
  return (
    <>
      <Box border={"5px solid white"} w={"100%"} h={"100%"}>
       <Image src={image} height={"100%"} w={"100%"}/>
      </Box>
    </>
  );
};

export default ResizableComponent;
