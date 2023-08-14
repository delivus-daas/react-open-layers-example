import React from "react";
import marker from "../assets/marker.png";
import { OpenLayers, ClusterLayer } from "@delivus/react-open-layers";
import "../App.css";
import { FeatureProps } from "@delivus/react-open-layers/dist/cjs/types/layers/layer.type";

function CustomMarkerExample() {
  const features: FeatureProps[] = [
    {
      index: 1,
      coordinate: { latitude: 35.1066243, longitude: 128.9651169 },
      properties: { name: "1427 Nakdongnam-ro" }, //can be any data
      iconOptions: {
        src: marker,
        scale: 1,
        anchorOrigin: "bottom-left",
      },
    },
    {
      index: 2,
      coordinate: { latitude: 35.1048045, longitude: 128.9654626 },
      properties: { name: "1427 Nakdongnam-ro" }, //can be any data
      iconOptions: {
        src: marker,
        scale: 1,
        anchorOrigin: "bottom-left",
      },
    },
    {
      index: 3,
      coordinate: { latitude: 35.1009456, longitude: 128.9547569 },
      properties: { name: "1427 Nakdongnam-ro" }, //can be any data
      iconOptions: {
        src: marker,
        scale: 1,
        anchorOrigin: "bottom-left",
      },
    },
    {
      index: 4,
      coordinate: { latitude: 35.1051888, longitude: 128.9977189 },
      properties: { name: "zijangsa" }, //can be any data
      iconOptions: {
        src: marker,
        scale: 1,
        anchorOrigin: "bottom-left",
      },
    },
  ];
  return (
    <OpenLayers className={"map"}>
      <ClusterLayer features={features} />
    </OpenLayers>
  );
}

export default CustomMarkerExample;
