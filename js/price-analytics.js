var map = L.map('map', { minZoom: 4})
.setView([55.75, 37.6], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' +
    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var value = document.getElementById('value');
var rooms = document.getElementById('rooms');
var valueAllMetro = document.getElementById('all-metro');
var valueAllDistrict = document.getElementById('all-district');
var valueAllOkrug = document.getElementById('all-okrug');
var percentAllMetro = document.getElementById('percent-all-metro');
var percentAllDistrict = document.getElementById('percent-all-district');
var percentAllOkrug = document.getElementById('percent-all-okrug');
var valueMetrMetro = document.getElementById('metr-metro');
var valueMetrDistrict = document.getElementById('metr-district');
var valueMetrOkrug = document.getElementById('metr-okrug');
var percentMetrMetro = document.getElementById('percent-metr-metro');
var percentMetrDistrict = document.getElementById('percent-metr-district');
var percentMetrOkrug = document.getElementById('percent-metr-okrug');

// 3. Price map


var oneMarkerOptions = {
    radius: 8,
    fillColor: "blue",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var twoMarkerOptions = {
    radius: 8,
    fillColor: "yellow",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var threeMarkerOptions = {
    radius: 8,
    fillColor: "green",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function oneSetPopup(feature, layer) {
  if (feature.properties.Price) {
      layer.bindPopup('Цена: ' + '<b>' + feature.properties.Price.toLocaleString() + '</b>' + '<br>' +
                      'за метр: ' + feature.properties.Average.toLocaleString());
  }
}

var one_points = L.geoJson(one, {
  pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, oneMarkerOptions);
  },
  onEachFeature: oneSetPopup,
})
.addTo(map);

map.fitBounds(one_points.getBounds());

var two_points = L.geoJson(two, {
  pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, twoMarkerOptions);
  },
  onEachFeature: oneSetPopup,
})
.addTo(map);
var three_points = L.geoJson(three, {
  pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, threeMarkerOptions);
  },
  onEachFeature: oneSetPopup,
})
.addTo(map);

var control = L.control.layers(null, null, {
  collapsed: false
}).addTo(map);

control.addBaseLayer(one_points, "Однокомнатные");
control.addBaseLayer(two_points, "Двухкомнатные");
control.addBaseLayer(three_points, "Трехкомнатные");

map.on ('baselayerchange', function(layer) {
  redraw(layer);
});

function redraw(layer) {
    var obj = layer.layer._layers,
        sign,
        allMetro = 0,
        allDistrict = 0,
        allOkrug = 0,
        avgMetro = 0,
        avgDistrict = 0,
        avgOkrug = 0;
    for (var key in obj) {
      allMetro += obj[key].feature.properties.Price/10
      avgMetro += obj[key].feature.properties.Average/10
    }
    allDistrict = Math.random()*300000 + allMetro;
    allDistrict = +(allDistrict - allDistrict % 10000).toFixed(0);
    allOkrug = Math.random()*2000000 + allMetro;
    allOkrug = +(allOkrug - allOkrug % 10000).toFixed(0);

    avgDistrict = Math.random()*3000 + avgMetro;
    avgDistrict = +(avgDistrict - avgDistrict % 10000).toFixed(0);
    avgOkrug = Math.random()*20000 + avgMetro;
    avgOkrug = +(avgOkrug - avgOkrug % 1000).toFixed(0);

        rooms.innerHTML = layer.name + ' квартиры:';
        valueAllMetro.innerHTML = allMetro.toLocaleString();
        valueAllDistrict.innerHTML = allDistrict.toLocaleString();
        valueAllOkrug.innerHTML = allOkrug.toLocaleString();
        valueMetrMetro.innerHTML = avgMetro.toLocaleString();
        valueMetrDistrict.innerHTML = avgDistrict.toLocaleString();
        valueMetrOkrug.innerHTML = avgOkrug.toLocaleString();
}
