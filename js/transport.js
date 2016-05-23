var map = L.map('map', { minZoom: 4})
.setView([55.8, 37.7], 14);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' +
    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var value = document.getElementById('value');
var button = document.getElementById('btn');
var results = document.getElementById('results');
button.onclick = search;
// 2. Transport map

var marker = L.marker([55.8, 37.7], {
  draggable: true
}).addTo(map);
var markers;
function search() {
    if (markers) {
      map.removeLayer(markers);
    }
    var pointsArray = [];
    var bounds = map.getBounds();
    var x_min  = bounds.getEast();
    var x_max  = bounds.getWest();
    var y_min  = bounds.getSouth();
    var y_max  = bounds.getNorth();
    var count = Math.floor(Math.random()*100);
    var price = 5000000 + Math.floor(Math.random()*5000000);
    for (var i = 0; i < count; i++) {
      var lat = y_min + (Math.random() * (y_max - y_min));
      var lng = x_min + (Math.random() * (x_max - x_min));
      var point  = turf.point([lng, lat]);
      pointsArray.push(point);
    }
     markers = L.geoJson(turf.featurecollection(pointsArray)).addTo(map);
     results.innerHTML = '<br>Найдено <b>' + count + ' </b> предложений' +
                         '<br>Средняя цена: <b>' + price.toLocaleString() + '</b> руб.' +
                         '<br>Средняя цена за метр: <b>' + (+(price/50).toFixed(0)).toLocaleString() + '</b> руб.'
  }
