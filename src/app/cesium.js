import React from 'react';

const Cesium = window.Cesium;
const cesiumViewerOptions = {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  timeline: false,
  navigationHelpButton: false,
  navigationInstructionsInitiallyVisible: false,
  automaticallyTrackDataSourceClocks: false,
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  }),
  skyBox: false
};

export default class Alkali extends React.Component {

  componentDidMount() {
    // Create the Cesium Viewer
    this.viewer = new Cesium.Viewer('cesiumContainer', cesiumViewerOptions);

    const scene = this.viewer.scene;
    const entity = this.viewer.entities.add({
      label: {
        show: false
      }
    });

    // Mouse over the globe to see the cartographic position
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(movement => {
      const cartesian = this.viewer.camera.pickEllipsoid(movement.endPosition, scene.globe.ellipsoid);
      if (cartesian) {
        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        const longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
        const latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);
        entity.position = cartesian;
        entity.label.show = true;
        entity.label.text = `${longitudeString}, ${latitudeString}`;
      } else {
        entity.label.show = false;
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  render() {
    // eslint-disable-next-line
    return ( // eslint-disable-next-line
      <div>
        <div id="cesiumContainer"></div>
      </div>
    );
  }
}

