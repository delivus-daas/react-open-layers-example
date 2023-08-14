import React from "react";
import { OpenLayers, Layer } from "@delivus/react-open-layers";
import "../App.css";
import marker from "../assets/marker.png";

function MapExample() {
  const count = 50;
  const features = new Array(count);
  const e = 4500000;
  for (let i = 0; i < count; ++i) {
    const coordinate = {
      latitude: Math.random() * (37 - 35 + 1) + 35,
      longitude: Math.random() * (129 - 126 + 1) + 126,
    };
    features[i] = {
      index: 1,
      coordinate,
      properties: { name: "Lotte city hotel" }, //can be any data
      iconOptions: {
        src: marker,
        scale: 0.3,
        color: "#6e6eff",
        anchorOrigin: "bottom-left",
      },
    };
  }
  return (
    <OpenLayers>
      <Layer features={features} />
    </OpenLayers>
  );
}

export default MapExample;
