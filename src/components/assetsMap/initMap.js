import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import XYZ from "ol/source/XYZ.js";
import {getCenter} from "ol/extent";
// import Control from "ol/control/Control.js";
import { getWidth, getHeight} from "ol/extent";
export async function initMap(ref){
  const extent =[-3096886.9812604133, 4653273.510972174, -3057751.222778403, 4692409.269454184];
  const view = new View({
    center: getCenter(extent),
    zoom: 10,
    maxZoom: 12,
    minZoom: 9,
    extent: [-3650640.1987236603, 4268529.142941898, -2910830.334111336, 5008339.007554222]

  });
  const layer = new TileLayer({
    source: new XYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
  });
  const map = new Map({
    layers: [
      layer,
    ],
    target: ref,
    view: view,
  });
    
  map.removeControl(map.getControls().array_[0]);
  map.removeControl(map.getControls().array_[0]);
  map.removeControl(map.getControls().array_[0]);
  return {map, view};
}

export function setZoom(extent, mapSize, view) {
  const mapWidth = mapSize[0];
  const mapHeight = mapSize[1];
  const extentWidth = getWidth(extent);
  const extentHeight = getHeight(extent);
  const resolutionX = extentWidth / mapWidth;
  const resolutionY = extentHeight / mapHeight;
  const resolution = Math.max(resolutionX, resolutionY);
  const zoom = view.getZoomForResolution(resolution);
  console.log(zoom);
  view.setZoom(zoom);
}