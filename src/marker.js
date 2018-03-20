const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const markerMakerFunc = function(type, lat, long) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  if (type === 'activity') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }
  else if (type === 'hotel') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';

  return new mapboxgl.Marker(markerDomEl).setLngLat([lat, long]);
}

module.exports = {
  markerMakerFunc
}
