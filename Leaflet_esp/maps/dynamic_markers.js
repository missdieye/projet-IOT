let node_url = "http://localhost:3000";
$.ajax({
  url: node_url.concat("/coordonnees"), // URL to "GET" : /connectedESP
  type: "GET",
  headers: { Accept: "application/json" },
  success: function (resultat, statut) {
    drawMarkers(resultat);
  },
  error: function (resultat, statut, erreur) {},
  complete: function (resultat, statut) {},
});
const drawMarkers = (markers) => {
  const myURL = jQuery('script[src$="static_markers.js"]')
    .attr("src")
    .replace("static_markers.js", "");

  const myIcon = L.icon({
    iconUrl: myURL + "images/pin24.png",
    iconRetinaUrl: myURL + "images/pin48.png",
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
  });
  for (let i = 0; i < markers.length; ++i) {
    L.marker(
      [parseFloat(markers[i].latitude), parseFloat(markers[i].longitude)],
      {
        icon: myIcon,
      }
    )
      .bindPopup(
        '<a href="/?mac=' +
          markers[i].mac +
          '" target="_blank">' +
          markers[i].mac +
          "</a>"
      )
      .addTo(map);
  }
};

/* let getCoordonnées(){

}

$.ajax({
  url: node_url.concat("/coordonnees"), // URL to "GET" : /connectedESP
  type: "GET",
  headers: { Accept: "application/json" },
  success: function (resultat) {
    resultat.forEach(function (element) {
      if (element.who === element.macEsp) {
        mylocation_lon = element.longitude; // lon WGS84
        mylocation_lat = element.lattitude;
      }
    });
  },
}); */
