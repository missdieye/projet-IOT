# Projet IoT Master 1 MIAGE 2021/2022 par Diallo Binta et Dieye Khadidiatou

## Informations Générales
Notre application intitulée **DIADIE** est un site d'informations climat en temps réel et sur toute la planète. Ces températures proviennent globalement d'openweathermap mais aussi des personnes ayant des ESP avec un capteur de température et souhaitant partager leurs informations.

Le nom **DIADIE** en plus qui est notre logo est inspiré de la combinaison de nos deux noms **DIA**llo et **DIE**ye.

## Profils Utilisateur
Il existe 2 types de profils:
- L'utilisateur souhaitant partager les informations de son ESP: Il doit créer son compte,se connecter et cliquer sur le bouton **publier** pour demander à publier sur le site.
- Le profil admin: qui correspond à l'administrateur du site. C'est à lui d'accepter ou non, qu'un ESP publie.Pour vous connecter en tant qu'admin, il faut utiliser le nom d'utilisateur admin et son Mot de passe : admin.
## Démarrage et Compilation
Pour utiliser notre application en locale, il faut avoir MongoDb et NodeJs installés dans votre ordinateur, un éditeur comme Visual Studio Code.
Ensuite, pensez à installer les différents modules du dossier client en utilisant `npm install`.

Pour démarrer le serveur, il suffit de se positionner sur le dossier du serveur et taper la commande suivante : `node node_lucioles_v4.js`.
Une base de données mongoDB cloud a été créé à cet effet et est connectée au projet.

## Auteurs
Cette précieuse application du nom de **DIADIE** est le résultat d'un travail collaboratif entre deux étudiantes en master 1 MIAGE à l'université Côte d'Azur de Nice dont :
- **DIALLO Fatoumata Binta** ,
- **DIEYE Khadidiatou**.

La partie serveur est quasiment contibuée par Mr Giles Menez professeur au sein de l'université Côte d'Azur.

## License
Le projet est **opensource**.

## API
POur ce projet on a utilisé les API suivants :
- L'API local **/signup** permettant de s'inscrire sur le site;
- L'API local **/login** permettant de se connecter sur le site;
- L'API local **/users** qui donne la liste des utilisateurs voulant publier sur le site;
- L'API local **/permissionAdmin** qui vérifie si l'administrateur a accepté la demande d'un nouvel utilisateur;
- L'API local **/accepter/:macEsp** qui permet d'accepter une demande d'ajout d'un utilisateur souhaitant publier;
- L'API local **/refuser/:macEsp"** qui permet de refuser une demande d'ajout d'un utilisateur souhaitant publier;
- L'API local **/publier"** qui permet à un utilisateur de publier ses données dans le site;
- L'API local **/depublier"** qui permet à un utilisateur de dépublier ses données dans le site;
- L'API local **/supprimer"** qui permet à un utilisateur de supprimer ses données dans le site;
- L'API local **/authorizedEsp"** qui nous donne la liste des ESP autorisés à publier sur le site;
- L'API local **/esp/:what"** qui nous donne les données mqtt publiées par un ESP et enregistrées dans la base de données.
- l'API https://api.openweathermap.org/ permettant de récupérer les données météorologique en temps réel de tous endroit dans le monde dans notre map en particulier.
- L'API local coordonnees qui permet de récupérer les coordonnées d'un utisateur inscrit dans notre application notamment la latitude et longitude.


## Fonctionnalités
Les différentes fonctionnalités de **DIADIE** sont :
- Voir les températures des utilisateurs autorisés, en temps réel sur les graphes;
- Utilisateur peut créer son compte s'y connecter et se déconnecter;
-L'utilisateur peut demander de publier les informations de son ESP, les dépublier ou même les supprimer;
- Pilotage de la communauté : l'administrateur peut donner la permission à un utilisateur de publier sur notre app.Ou bien même lui refuser sa publication.
- Placer dans la map, les ESP des différents utilisateurs autorisés ainsi que leur température.
- Sur la map afficher en temps réel la température de toutes les autres villes, dont aucun ESP autorisé n'y est.

## Fonctionnalité qui fait banko
- Presque toutes les applications qui écoutent les topics "sensors/light" et "sensors/temp" crashent quand un message qui n'est pas du Json(mauvais format ou écriture) est envoyé.
Nous avons résolu ce problème et notre app ne crash plus;
- Nous avons aussi déployer une bonne gestion de la communauté. Ce n'est pas n'importe quel ESP qui peut publier ses informations.

## Technologies
Les technologies utilisé sont:
- Arduino,
- NodeJS,
- MongoDB atlas,
- Html,
- Jquery,
- heroku,


## Comment contribuer
Pour contribuer, veuillez demander aux auteurs pour que l'on puisse créer un document contributeur.

## Versionnement
- Version 1
- Version 2 Ajouter d'autres fonctionnalités tel que permettre à l'utilisateur de rester connecter sur l'application en quittant la page de pilotage de la communauté ...

## Crédit

Pour la réalisation de ce projet, nous nous sommes resourcées de :
- https://nodejs.org/en/
- https://openweathermap.org/api
- OpenClassroom pour la gestion des bugs.
