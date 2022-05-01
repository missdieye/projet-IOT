var node_url = "https://iot22112951m1.herokuapp.com";
// var node_url = "http://localhost:3000";
//Pour ajouter dans la carte les données des ESP autorisés
setInterval(
	$.ajax({
		url: node_url.concat("/coordonnees"), // URL to "GET" : /connectedESP
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			resultat.forEach(element => {
				// Pour récupérer la température des ESP autorisés
				$.ajax({
					url: node_url.concat("/esp/temp"), // URL to "GET" : /esp/temp ou /esp/light
					type: "GET",
					headers: { Accept: "application/json" },
					data: { who: element.macEsp }, // parameter of the GET request
					success: function (resultat2, statut) {
						console.log("resultat2", resultat2);
						var temp = "ESP non connecté";
						resultat2.forEach(element2 => {
							if (element2.who === element.macEsp) {
								temp = resultat2[0].value;
							}
						});

						mylocation_lon = element.longitude; // lon WGS84
						mylocation_lat = element.lattitude;
						var myURL = jQuery('script[src$="static_markers.js"]').attr("src").replace("static_markers.js", "");

						const myIcon = L.icon({
							iconUrl: myURL + "images/pin24.png",
							iconRetinaUrl: myURL + "images/pin48.png",
							iconSize: [29, 24],
							iconAnchor: [9, 21],
							popupAnchor: [0, -14]
						});
						L.marker([mylocation_lat, mylocation_lon], {
							icon: myIcon
						})
							.bindPopup(
								"<b>MAC ESP</b> =   " +
									element.macEsp +
									"<br> <b>User</b> = " +
									element.username +
									"<br> <b>Température</b> = " +
									temp+ " °C"
							)
							.addTo(map);
					}
				});
			});
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	}),
	5000
);
