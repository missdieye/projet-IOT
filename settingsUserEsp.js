function init() {
	//=== Page settings utilisateur  =================================
	var connect = document.getElementById("connect");
	getPermissionAdmin("/permissionAdmin");
}

function getPermissionAdmin(path_on_node) {
	node_url = "https://iot22112951m1.herokuapp.com";
	// node_url = "http://localhost:3000";
	$.ajax({
		url: node_url.concat(path_on_node), // URL to "GET" : /connectedESP
		type: "GET",
		headers: { Accept: "application/json" },
		success: function (resultat) {
			console.log("resultat", resultat);
			var divConnect = document.getElementById("divConnect");
			$("#titre").append(`<i>Votre adresse MAC : ${resultat.macEsp}</i>`);
			if (!resultat.permission_admin && resultat.permission_user) {
				divConnect.innerHTML = `<p>Votre demande de connexion est en attente de validation par l'administrateur.</p>`;
			} else if (resultat.permission_admin && resultat.permission_user) {
				divConnect.innerHTML = `<p>Votre ESP est actuellement entrain de publier sur le site. <br>
                <i>Cliquez sur le bouton <b>Dépublier mon ESP</b> pour arrêter la publication.</i></p><form action="/depublier" method="post"><button id="connect">Dépublier mon ESP</button></form>`;
			} else {
				divConnect.innerHTML = `<form action="/publier" method="post"><button id="connect">Connecter mon esp</button></form>`;
			}
		},
		error: function (resultat, statut, erreur) {},
		complete: function (resultat, statut) {}
	});
}
window.onload = init;
