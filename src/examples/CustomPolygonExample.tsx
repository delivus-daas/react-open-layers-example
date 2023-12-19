import React from "react";
import {OpenLayers, CustomPolygon} from "@delivus/react-open-layers";
import "../App.css";
import {Coordinate} from "@delivus/react-open-layers/dist/cjs/types/layers/layer.type";

function CustomPolygonExample() {
    const count = 20;
    const coordinateGroups:Coordinate[][] = new Array();
    let coordinates:Coordinate[] = new Array();
    for (let i = 0; i < count; ++i) {
        const coordinate = {
            latitude: Math.random() * (37 - 35 + 1) + 35,
            longitude: Math.random() * (129 - 126 + 1) + 126,
        };
        coordinates.push(coordinate);
        if(i%5===0) {
            coordinateGroups.push(coordinates);
            coordinates = new Array();
        }
    }
    return (
      <OpenLayers className={"map"}>
          <CustomPolygon coordinateGroups={coordinateGroups} />
      </OpenLayers>
    );
}

export default CustomPolygonExample;
