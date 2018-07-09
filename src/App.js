import React, { Component } from 'react';
import './App.css';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibGl4aWFveWFuZyIsImEiOiJjampjNWV1amwwbTk5M3ZvNXQ5bzE1d3dyIn0.h2iyMHOlWXQvX9czr-CdoQ';
    const map = new mapboxgl.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 13,
      center: [116.3, 40.05], // starting position
    });
    var nav = new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
    });
    map.addControl(nav, 'top-left');

    map.on('load', function() {
      map.addSource('car', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [116.31, 40.0501],
              },
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [116.32, 40.0513],
              },
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [116.34, 40.0528],
              },
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [116.35, 40.0532],
              },
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [116.36, 40.0506],
              },
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [116.46116, 39.93161],
              },
            },
          ],
        },
      });
      map.addLayer({
        id: 'population',
        type: 'circle',
        source: 'car',
        // 'source-layer': 'sf2010',
        paint: {
          // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
            base: 1.75,
            stops: [[12, 2], [22, 180]],
          },
          // color circles by ethnicity, using a match expression
          // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
          'circle-color': 'red',
          //   'match',
          //   ['get', 'ethnicity'],
          //   'Hispanic',
          //   '#e55e5e',
          //   'Asian',
          //   '#3bb2d0',
          //   'White',
          //   '#fbb03b',
          //   'Black',
          //   '#223b53',
          //   /* other */ '#ccc',
          // ],
        },
      });
    });
  }

  render() {
    return (
      <div
        className="app"
        style={{
          position: 'absolute',
        }}
        ref={map => (this.map = map)}
      />
    );
  }
}

export default App;
