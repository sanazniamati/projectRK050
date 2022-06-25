import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Group, Circle } from "react-konva";

const App = () => {
  const handelClickCircle = (evt) => {
    alert("You clicked the circle!");
    evt.cancelBubble = true;
  };
  const handelClickGroup = () => {
    alert("You clicked on the group!");
  };
  const handelClickLayer = () => {
    alert("You clicked on the layer!");
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer onClick={handelClickLayer}>
        <Group onClick={handelClickGroup}>
          <Circle
            x={350}
            y={100}
            radius={50}
            ScaleX={2}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            strokeScaleEnabled={false}
            onClick={handelClickCircle}
          />
        </Group>
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
