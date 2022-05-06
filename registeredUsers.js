function init() {
	//=== Page utilisateur inscrit =================================
	getUser("/users");
}
function getUser(path_on_node) {
	node_url = "https://iot22112951m1.herokuapp.com";
	// node_url = "http://localhost:3000";
	$.ajax({
		url: node_url.concat(path_on_node),
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			resultat.forEach(function (element) {
				if (element.permission_admin) {
					var permission = "ESP Accepté";

					var form = `<form action="/refuser/${element.macEsp}" method="post"> <button class="decliner">Refuser</button></form>`;
				} else {
					var permission = "ESP Refusé";
					var form = `<form action="/accepter/${element.macEsp}" method="post"><button class="confirmer">Accepter</button></form>`;
				}
				var idTd = "lasttime" + element.macEsp;
				$("#tableUsers").append(`<tr>
			  <td>${element.username}</td>
			  <td>${element.macEsp}</td>
			  <td>{${element.lattitude},${element.longitude}}</td>
			  <td> ${permission}</td>
			  <td id=${idTd}></td>
              <td>${form}</td>
		  </tr>`);
				$.ajax({
					url: node_url.concat("/connectedESP"), // URL to "GET" : /connectedESP
					type: "GET",
					headers: { Accept: "application/json" },
					success: function (resultat) {
						if (resultat.length === 0) {
							document.getElementById(idTd).innerHTML = "Pas encore connecté";
						} else {
							for (let index = 0; index < resultat.length; index++) {
								const element2 = resultat[index];

								if (element2.who === element.macEsp) {
									console.log("idTd", element2.lastConnect);
									document.getElementById(idTd).innerHTML = ` ${element2.lastConnect}`;
								} else {
									var contenu = document.getElementById(idTd).innerHTML;
									console.log("contenu", contenu);
									if (contenu === "") {
										document.getElementById(idTd).innerHTML = "Pas encore connecté";
									}
								}
							}
						}
					}
				});
			});
			// console.log("resultat", resultat);
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	});
}
function getConnectedESP(path_on_node, macEsp) {
	node_url = "https://iot22112951m1.herokuapp.com";
	// node_url = "http://localhost:3000";
	let lastConnect = [];
	$.ajax({
		url: node_url.concat(path_on_node), // URL to "GET" : /connectedESP
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			resultat.forEach(function (element) {
				if (element.who === macEsp) {
					console.log("element.lastConnect", element.lastConnect);
					lastConnect.push(element.lastConnect);
				}
			});
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	});
	return lastConnect;
}
//assigns the onload event to the function init.
//=> When the onload event fires, the init function will be run.
window.onload = init;
