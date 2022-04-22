function init() {
	//=== Page utilisateur inscrit =================================
	getUser("/users");
}

function getUser(path_on_node) {
	// node_url = "https://iot22112951m1.herokuapp.com";
	node_url = "http://localhost:3000";
	let listeData = [];
	$.ajax({
		url: node_url.concat(path_on_node),
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			resultat.forEach(function (element) {
				listeData.push(element);
				$("#tableUsers").append(`<tr>
			  <td>${element.username}</td>
			  <td>${element.macEsp}</td>
			  <td>{${element.lattitude},${element.longitude}}</td>
			  <td>${element.permission}</td>
              <td><button class="confirmer">Confirmer</button> <button class="decliner">Décliner</button></td>
		  </tr>`);
			});
			console.log("resultat", resultat);
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	});

	console.log("listeData", listeData);
}
//assigns the onload event to the function init.
//=> When the onload event fires, the init function will be run.
window.onload = init;
