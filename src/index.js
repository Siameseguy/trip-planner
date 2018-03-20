//const mapboxgl = require('mapbox-gl')
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const markerMakerFunc = require('./marker.js').markerMakerFunc;

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2lhbWVzZWd1eSIsImEiOiJjamV6dGJwNmwwZnprMzFvYTVqZXR6eWF3In0.A391dwHbc5ypIjMcA3SV9g';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
})

const marker = markerMakerFunc('restaurant', -74.009151, 40.705086);
marker.addTo(map);

const fullstack = markerMakerFunc('hotel', -74.009, 40.705);
fullstack.addTo(map);

// const markerDomEl = document.createElement('div')
// markerDomEl.style.width = '32px'
// markerDomEl.style.height = '39px'
//markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map) // [-87.6354, 41.8885] for Chicago
