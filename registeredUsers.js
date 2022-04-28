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
				$.ajax({
					url: node_url.concat("/connectedESP"), // URL to "GET" : /connectedESP
					type: "GET",
					headers: { Accept: "application/json" },
					success: function (resultat) {
						resultat.forEach(function (element2) {
							if (element2.who === element.macEsp) {
								console.log("element.lastConnect", element2.lastConnect);
							}
						});
					}
				});
				// if (lastConnect.length > 0) {
				// 	var lasttime = lastConnect[0];
				// } else {
				// 	var lasttime = "Pas encore";
				// }
				if (element.permission_admin) {
					var permission = "ESP Accepté";

					var form = `<form action="/refuser/${element.macEsp}" method="post"> <button class="decliner">Refuser</button></form>`;
				} else {
					var permission = "ESP Refusé";
					var form = `<form action="/accepter/${element.macEsp}" method="post"><button class="confirmer">Accepter</button></form>`;
				}
				$("#tableUsers").append(`<tr>
			  <td>${element.username}</td>
			  <td>${element.macEsp}</td>
			  <td>{${element.lattitude},${element.longitude}}</td>
			  <td> ${permission}</td>
			  <td id="lasttime"></td>
              <td>${form}</td>
		  </tr>`);
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
