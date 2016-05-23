var map = L.map('map', { minZoom: 4});
// .setView([55.75, 37.6], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' +
    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var izmaylovo_district = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

"features": [
{ "type": "Feature", "properties": { "NAME": "Северное Измайлово", "OKATO": "45263585", "OKTMO": "45313000", "NAME_AO": "Восточный", "OKATO_AO": "45263000", "ABBREV_AO": "ВАО", "TYPE_MO": "Муниципальный округ" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 37.7508483, 55.8021699 ], [ 37.7522271, 55.80242 ], [ 37.7532274, 55.8026359 ], [ 37.7539457, 55.8028041 ], [ 37.7549958, 55.8030569 ], [ 37.7572679, 55.803648 ], [ 37.7593085, 55.8041829 ], [ 37.7637097, 55.8053458 ], [ 37.7729895, 55.8078 ], [ 37.7752588, 55.808449 ], [ 37.776385, 55.8087725 ], [ 37.7785026, 55.8092981 ], [ 37.7790516, 55.8093915 ], [ 37.7801438, 55.809554 ], [ 37.7805676, 55.8096152 ], [ 37.7819911, 55.8097362 ], [ 37.7827637, 55.8097862 ], [ 37.7842036, 55.8098233 ], [ 37.7871593, 55.8098994 ], [ 37.7974681, 55.8101875 ], [ 37.800102, 55.8102518 ], [ 37.8047509, 55.8103932 ], [ 37.8098773, 55.8105297 ], [ 37.8105847, 55.8105618 ], [ 37.81176, 55.8106461 ], [ 37.8168043, 55.8112745 ], [ 37.8209936, 55.8118351 ], [ 37.8288166, 55.8128537 ], [ 37.8319407, 55.8131815 ], [ 37.8326337, 55.8132497 ], [ 37.8338269, 55.813322 ], [ 37.8348308, 55.8134023 ], [ 37.8362224, 55.8135694 ], [ 37.8380146, 55.8138056 ], [ 37.8396719, 55.8140429 ], [ 37.8407801, 55.8141973 ], [ 37.8414608, 55.8143206 ], [ 37.8420799, 55.8144885 ], [ 37.8428274, 55.8146971 ], [ 37.8435518, 55.8149722 ], [ 37.8436234, 55.8149044 ], [ 37.8437616, 55.8147738 ], [ 37.8430436, 55.8143651 ], [ 37.8414487, 55.8128949 ], [ 37.840632, 55.8124518 ], [ 37.8400458, 55.8120784 ], [ 37.8397912, 55.8117392 ], [ 37.839762, 55.8116247 ], [ 37.8399519, 55.8090302 ], [ 37.8402067, 55.8061352 ], [ 37.8404123, 55.803686 ], [ 37.8355002, 55.8035496 ], [ 37.8326167, 55.803473 ], [ 37.8324904, 55.8034624 ], [ 37.8324015, 55.8034442 ], [ 37.8323332, 55.8034142 ], [ 37.8322483, 55.8033665 ], [ 37.832188, 55.8033445 ], [ 37.8321071, 55.8033358 ], [ 37.8309753, 55.8033343 ], [ 37.8306311, 55.8033267 ], [ 37.8295176, 55.803281 ], [ 37.8291842, 55.8032671 ], [ 37.8270023, 55.8032385 ], [ 37.8266217, 55.8032337 ], [ 37.8254353, 55.8032186 ], [ 37.8231268, 55.8031893 ], [ 37.8188585, 55.8030549 ], [ 37.8119601, 55.8029601 ], [ 37.8051248, 55.8028665 ], [ 37.8049213, 55.8028636 ], [ 37.7987688, 55.8027832 ], [ 37.786029, 55.8026515 ], [ 37.7802602, 55.8026355 ], [ 37.7746433, 55.8025483 ], [ 37.7691393, 55.8024799 ], [ 37.7686508, 55.8024297 ], [ 37.7678692, 55.8023999 ], [ 37.7677908, 55.8023995 ], [ 37.7666786, 55.8023939 ], [ 37.7650771, 55.8023843 ], [ 37.7631862, 55.802356 ], [ 37.7573299, 55.802291 ], [ 37.7570911, 55.8022884 ], [ 37.7563449, 55.8022807 ], [ 37.7555202, 55.8022722 ], [ 37.754528, 55.8022619 ], [ 37.7531848, 55.802248 ], [ 37.7522201, 55.802238 ], [ 37.7518137, 55.8022252 ], [ 37.7514912, 55.8022038 ], [ 37.7511279, 55.8021376 ], [ 37.7508483, 55.8021699 ] ] ] } }
]
}

var value = document.getElementById('value');
var percentMetro = document.getElementById('percent-metro');
var percentDistrict = document.getElementById('percent-district');
var percentOkrug = document.getElementById('percent-okrug');

// 1. Ecology map

var izmaylovo_bounds = L.geoJson(izmaylovo_district, {
      style: function(feature) {
        return {
          opacity: 1,
          // fillOpacity: 1,
          color: "#00CE61",
          weight: 5,
          noClip: true
        };
      }
})
  .addTo(map);
map.fitBounds(izmaylovo_bounds.getBounds());

var izmaylovoMarkerOptions = {
    radius: 5,
    fillColor: "#00CE61",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function setPopup(feature, layer) {
    if (feature.properties.Eco) {
        layer.bindPopup('Экология: ' + '<b>' + feature.properties.Eco + '</b>');
    }
    layer.on({
      click: function whenClicked(e) {
        var parameter = feature.properties.Eco;
        var sign;
        value.innerHTML = 'Индекс = ' + parameter.toFixed(1);

        var metroValue = ((parameter - 6.8)/parameter);
          sign = (metroValue > 0) ? '+' : '';
          percentMetro.style.color = (metroValue > 0) ? 'green' : 'red';
          percentMetro.innerHTML = '(' + sign + ((metroValue)*100).toFixed(0) + '%)';

        var districtValue = ((parameter - 7.2)/parameter);
          sign = (districtValue > 0) ? '+' : '';
          percentDistrict.style.color = (districtValue > 0) ? 'green' : 'red';
          percentDistrict.innerHTML = '(' + sign + ((districtValue)*100).toFixed(0) + '%)';

        var okrugValue = ((parameter - 6.5)/parameter);
          sign = (okrugValue > 0) ? '+' : '';
          percentOkrug.style.color = (okrugValue > 0) ? 'green' : 'red';
          percentOkrug.innerHTML = '(' + sign + ((okrugValue)*100).toFixed(0) + '%)';

      }
});
}

var izmaylovo_points = L.geoJson(izmaylovo, {
  pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, izmaylovoMarkerOptions);
  },
  onEachFeature: setPopup,
})
.addTo(map);






// 2. Transport map
