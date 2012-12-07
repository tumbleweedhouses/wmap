document.getElementById('mapwrapper').innerHTML='<div id="map" style="width: 690px; height: 415px; border:5px solid #7f4936; position:absolute;"></div><img id="headerimg" style="position:absolute; top:5px; left:170px; z-index:100" src="http://cdn.shopify.com/s/files/1/0150/9532/files/mheader_2.png?2407" width="362" height="27" >';

var locations = [
  ['Seattle,+WA', 47.665764,-122.313366, 0, 'seattle', 'left'],
  ['Berkeley,+CA', 37.868078,-122.254915, 0, 'berkeley', 'left'],
  ['Boulder,+CO', 40.004098,-105.268786, 0, 'boulder', 'left'],
  ['Santa+Fe,+NM', 35.66053,-105.938995, 0, 'santa-fe', 'left'],
  ['Austin,+TX', 30.355178,-97.733122, 0, 'austin', 'left'],
  ['Chicago,+IL', 41.874941,-87.627513, 80, 'chicago', 'right'],
  ['Asheville,+NC', 35.613219,-82.440817, 0, 'asheville', 'left'],
  ['Boston,+MA', 42.3403675,-71.1057417, 80, 'boston', 'right'],
  ['Orlando,+FL', 28.5360992,-81.4579786, 80, 'orlando', 'right'],
  ['Portland,+OR', 45.521744,-122.607422, 0, 'portland', 'left'],
  ['Nashville,+TN', 36.1450547,-86.7974222, 80, 'nashville', 'right']
];

var styles = [ { "featureType": "administrative.country", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.province", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.locality", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "stylers": [ { "visibility": "on" } ] } ]
var map;
var locationinfo;
function initialize() {
  var mapOptions = {
zoom: 4,
center: new google.maps.LatLng(39.828175, -98.5795),
mapTypeId: google.maps.MapTypeId.ROADMAP,
styles: styles
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  if (document.getElementById("map2") != null) map2 = new google.maps.Map(document.getElementById("map2"), mapOptions);
  var marker, marker2, i;
  for (i = 0; i < locations.length; i++) {
var image = new google.maps.MarkerImage("https://chart.googleapis.com/chart?chst=d_simple_text_icon_"+locations[i][5]+"&chld="+locations[i][0]+"|14|655945|glyphish_house|16|5b484a|f1f4e9", null, null, new google.maps.Point(locations[i][3],11));//0,11
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map: map,
title: locations[i][0],
icon: image,
});
if (document.getElementById("map2") != null) marker2 = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map: map2,
title: locations[i][0],
icon: image,
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
if (website_id == "tumbleweed") {document.location="http://www.tumbleweedhouses.com/products/"+locations[i][4]} else { document.location="http://www.avantlink.com/click.php?tt=cl&mi=10985&pw=" + website_id + "&url=http://www.tumbleweedhouses.com/products/"+locations[i][4]}
}
})(marker, i));
if (document.getElementById("map2") != null) google.maps.event.addListener(marker2, 'click', (function(marker2, i) {
return function() {
if (website_id == "tumbleweed") {document.location ="http://www.tumbleweedhouses.com/products/"+locations[i][4]} else { document.location="http://www.avantlink.com/click.php?tt=cl&mi=10985&pw=" + website_id + "&url=http://www.tumbleweedhouses.com/products/"+locations[i][4]}
}
})(marker2, i));
  }
}
var script3 = document.createElement('script');script3.type = 'text/javascript';script3.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +'callback=initialize';document.body.appendChild(script3); 
dropdowncontent.init("houses", "right-bottom", 500, 'mouseover');
dropdowncontent.init("workshops", "right-bottom", 500, 'mouseover')