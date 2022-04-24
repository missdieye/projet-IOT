function init() {
	//=== Page utilisateur inscrit =================================
	getUser("/users");
}
function getUser(path_on_node) {
	node_url = "https://iot22112951m1.herokuapp.com";
	// node_url = "http://localhost:3000";
	let listeData = [];
	$.ajax({
		url: node_url.concat(path_on_node),
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			resultat.forEach(function (element) {
				listeData.push(element);
				if (element.permission_admin) {
					var permission = "ESP Accepté";
				} else {
					var permission = "ESP Refusé";
				}
				$("#tableUsers").append(`<tr>
			  <td>${element.username}</td>
			  <td>${element.macEsp}</td>
			  <td>{${element.lattitude},${element.longitude}}</td>
			  <td> ${permission}</td>
			  <td> ${permission}</td>
              <td><form action="/accepter/${element.macEsp}" method="post"><button class="confirmer">Accepter</button></form><form action="/refuser/${element.macEsp}" method="post"> <button class="decliner">Refuser</button></td></form>
		  </tr>`);
			});
			console.log("resultat", resultat);
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	});

	console.log("listeData", listeData);
}
function getConnectedESP(path_on_node) {
	node_url = "https://iot22112951m1.herokuapp.com";
	// node_url = "http://localhost:3000";
	let listeData = ["30:AE:A4:93:50:0C"];
	$.ajax({
		url: node_url.concat(path_on_node), // URL to "GET" : /connectedESP
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			resultat.forEach(function (element) {
				listeData.push(element.who);
			});
			console.log("resultat", resultat);
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	});

	console.log("listeData", listeData);
	return listeData;
}
//assigns the onload event to the function init.
//=> When the onload event fires, the init function will be run.
window.onload = init;
