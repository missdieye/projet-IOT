

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
