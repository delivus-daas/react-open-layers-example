import React from "react";
import marker from "../assets/marker.png";
import CircleStyle from "ol/style/Circle";
import { Fill, Stroke, Text } from "ol/style";
import { OpenLayers, ClusterLayer } from "@delivus/react-open-layers";
import "../App.css";

const count = 50;
function ClusterExample() {
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

  function styleShippingCluster(
    resolution: number,
    size: number,
    fill?: Array<number>
  ) {
    console.log("styleCluster", fill, resolution);
    let radius = 16;
    if (resolution > 130) {
      radius = 37;
    } else if (resolution > 90) {
      radius = 26;
    } else if (resolution > 45) {
      radius = 20;
    }
    const image: any = new CircleStyle({
      radius,
      stroke: new Stroke({
        width: 2,
        color: "#fff",
      }),
      fill: new Fill({
        color: "#3399CC",
      }),
    });
    const text: any = new Text({
      font: "bold 13px Spoqa Han Sans Neo",
      text: size.toString(),
      fill: new Fill({
        color: "#fff",
      }),
    });

    return {
      image,
      text,
    };
  }

  return (
    <OpenLayers className={"map"}>
      <ClusterLayer features={features} clusterStyle={styleShippingCluster} />
    </OpenLayers>
  );
}

export default ClusterExample;
