import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ResizableComponent from "./ParentItems";

import { Box } from "@chakra-ui/react";
const ResponsiveGridLayout = WidthProvider(Responsive);
const ParentComponent = () => {
  const getLayouts = () => {
    return {
      lg: [
        { i: "1", x: 0, y: 0, w: 1, h: 2 },
        { i: "2", x: 1, y: 0, w: 1, h: 2 },
        { i: "3", x: 2, y: 2, w: 1, h: 2 },
      ],
      md: [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 1, y: 0, w: 1, h: 1 },
        { i: "3", x: 0, y: 2, w: 1, h: 1 },
      ],
      sm: [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 2, y: 0, w: 1, h: 1 },
        { i: "3", x: 0, y: 1, w: 1, h: 1 },
      ],
      xs: [
        { i: "1", x: 0, y: 0, w: 2, h: 1 },
        { i: "2", x: 0, y: 1, w: 2, h: 1 },
        { i: "3", x: 0, y: 2, w: 2, h: 1 },
      ],
    };
  };
  const [layouts, setLayouts] = useState(getLayouts());

  const onResize = (layout, oldItem, newItem) => {
    console.log(oldItem, newItem,"checking");
  };
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      isResizable={true}
      resizeHandles={["se", "ne", "sw", "nw", "e", "w", "n", "s"]}
      breakpoints={{ lg: 800, md: 699, sm: 450, xs: 400, xxs: 0 }}
      cols={{ lg: 3, md: 2, sm: 2, xs: 2, xxs: 2 }}
      onResize={onResize}
    >
      <Box key="1" background={"white"}>
        <ResizableComponent
          image={
            "https://res.cloudinary.com/dqo5yb3wp/image/upload/v1712729513/bqka6oigcnvq1uzlku9p.jpg"
          }
        />
      </Box>
      <Box key="2" background={"white"}>
        <ResizableComponent
          image={
            "https://res.cloudinary.com/dqo5yb3wp/image/upload/v1712729467/j9mhe7yy3xdbneam48wl.jpg"
          }
        />
      </Box>
      <Box key="3" background={"white"}>
        <ResizableComponent
          image={
            "https://res.cloudinary.com/dqo5yb3wp/image/upload/v1712729377/jnv4ll6alydpqnnpzm5v.jpg"
          }
        />
      </Box>
      {/* <Box key="2" background={"white"}> */}
      {/* <Resizablecomponent2 /> */}
      {/* </Box> */}
      {/* <Box key="3" background={"white"}> */}
      {/* <ResizableComponent3 /> */}
      {/* </Box> */}
    </ResponsiveGridLayout>
  );
};

export default ParentComponent;
