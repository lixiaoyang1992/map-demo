import React, { Component } from "react";
import "./App.css";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

class App extends Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGl4aWFveWFuZyIsImEiOiJjampjNWV1amwwbTk5M3ZvNXQ5bzE1d3dyIn0.h2iyMHOlWXQvX9czr-CdoQ";
    const map = new mapboxgl.Map({
      container: this.map,
      style: "mapbox://styles/mapbox/light-v9",
      zoom: 12,
      center: [116.46, 39.92] // starting position
    });
    var nav = new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true
    });
    map.addControl(nav, "top-left");
    map.on("load", function() {});
  }

  render() {
    return (
      <div
        className="app"
        style={{
          position: "absolute"
        }}
        ref={map => (this.map = map)}
      />
    );
  }
}

export default App;
