//var node_url = "localhost:3000";
$.ajax({
  url: node_url.concat("/coordonnees"), // URL to "GET" : /connectedESP
  type: "GET",
  headers: { Accept: "application/json" },
  success: function (resultat) {
    resultat.forEach((element) => {
      mylocation_lon = element.longitude; // lon WGS84
      mylocation_lat = element.lattitude;
      var myURL = jQuery('script[src$="static_markers.js"]')
        .attr("src")
        .replace("static_markers.js", "");

      const myIcon = L.icon({
        iconUrl: myURL + "images/pin24.png",
        iconRetinaUrl: myURL + "images/pin48.png",
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14],
      });
      L.marker([mylocation_lat, mylocation_lon], {
        icon: myIcon,
      })
        .bindPopup(
          "<b>adress ESP</b> =   " +
            element.macEsp +
            "<br> <b>Nom du user</b> = " +
            element.username
        )
        .addTo(map);
    });
  },
  error: function (resultat, statut, erreur) {},
  complete: function (resultat, statut) {},
});
