# Projet IoT Master 1 MIAGE 2021/2022 par Diallo Binta et Dieye Khadidiatou

## Informations Générales
Notre application intitulée **DIADIE** est un site d'informations climat en temps réel et sur toute la planète. Ces températures proviennent globalement d'openweathermap mais aussi des personnes ayant des ESPs avec un capteur de température et souhaitant partager leurs informations.

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

La partie serveur est quasiment contribuée par **Mr Giles Menez** professeur au sein de l'université Côte d'Azur.

## License
Le projet est **opensource**.

## API
Pour ce projet nous avons utilisé les API suivants :
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
- L'API local **/coordonnees** qui permet de récupérer les coordonnées d'un utilisateur inscrit dans notre application notamment la latitude et longitude.


## Fonctionnalités
Les différentes fonctionnalités de **DIADIE** sont :

- Voir les températures des utilisateurs autorisés, en temps réel sur les graphes;
- Utilisateur peut créer son compte s'y connecter et se déconnecter;
-L'utilisateur peut demander de publier les informations de son ESP, les dépublier ou même les supprimer;
- Pilotage de la communauté : l'administrateur peut donner la permission à un utilisateur de publier sur notre app ou bien même lui refuser sa publication.
- A l'aide de l'API openWeather l'utilisateur peut voir la météo de tout point dans la map
- Placer dans la map, les ESP des différents utilisateurs autorisés ainsi que leur température.
- Lorsque l'on clique sur un marker on peut observer le nom de l'utilisateur son esp/temp s'il est connecté ainsi que l'adresse mac de son ESP
- Sur la map afficher en temps réel la température de toutes les autres villes, dont aucun ESP autorisé n'y est.
- Quand on se connecte avec l'admin l'utilisateur peut gérer la publication des esp : autorisé ou refusé.

## Fonctionnalités qui font bancos
1. Presque toutes les applications qui écoutent les topics "sensors/light" et "sensors/temp" crashent quand un message qui n'est pas du Json(mauvais format ou écriture) est envoyé. Car généralement, un script js “meurt” (s’arrête immédiatement) en cas d’erreur, en l’imprimant sur la console.
Nous avons résolu ce problème pour que notre app ne crash plus grâce aux instructions **try** et **catch**. 
Dans notre instruction try, nous récupérons les messages envoyés dans nos topics(venant de nos ESP ou même par ligne de commande) et nous les traitons. 
Au cas où un problème survient lors du traitement du **try**,le script y sort et exécute le **catch** dans lequel nous envoyons un message(exemple:"Invalid JSON string"). En conclusion, notre instruction **try...catch** nous a permis d'exécuter un ensemble de traitement, et d'éviter l'arrêt de notre serveur en cas d'erreur.

2. Nous avons aussi déployer une bonne gestion de la communauté. Ce n'est pas n'importe quel ESP qui peut publier ses informations.
Pour qu'un ESP puisse publier ses informations, il faut qu'il s'inscrit.
- Une fois inscrit, l'utilisateur dans son espace peut demander de publier ses informations dans le site.
![image](https://user-images.githubusercontent.com/82032275/167046618-6b73efb8-cf68-4875-94e5-35fcc9201ea7.png)
![image](https://user-images.githubusercontent.com/82032275/167046781-26e72490-cba0-42bb-ba46-e7c3eef9e943.png)
- Une fois la demande de publication effectué, il lui faut l'approbation de l'admin pour que son ESP puisse publier.
- L'administrateur de son côté, dispose d'un tableau de bord, qui lui informe des utilisateurs qui ont eu a effectué une demande de publication avec toutes les informations( l'adresse MAC de l'ESP, l'état actuel de son autorisation, la dernière date de publication de l'ESP aux topics...) . Dans ce même tableau de bord, il peut choisir d'admettre l'ESP ou de le refuser.
![image](https://user-images.githubusercontent.com/82032275/167050275-cbb2477e-9cf2-47b4-a7f2-46f2eddb4ecf.png)
- Que la demande de l'utilisateur soit acceptée ou refusée, l'utilisateur est notifié de la décision.
Exemple du cas où sa demande est acceptée: ![image](https://user-images.githubusercontent.com/82032275/167048457-b7a9cf7c-704e-465c-9a88-c8790766660e.png)
- L'utilisateur a la possibilité de refaire une demande, quand la précédente est refusée;
- L'utilisateur peut choisir de dépublier son ESP sur le site ou même le supprimer.
![image](https://user-images.githubusercontent.com/82032275/167048531-9e7ff181-2a43-48c7-b3dc-4f403ed7f8e5.png)

3. La façon dont les données sont affichées sur la map ainsi que les marker indiquant la position d'un utilisateur.
Notre map donne non seulement les températures venant d'openweather mais aussi celles de nos ESPs.
Nous avons positionné sur la carte map tous les ESPs, selon la latitude et la longitude renseignés par l'utilisateur durant son inscription.
- Tous les marqueurs de map( :map_marker) correspondent aux différents ESPs autorisés à publier;  
![image](https://user-images.githubusercontent.com/82032275/167050389-738c23cb-c830-4c62-83b0-7164048dfe43.png)
- Toutefois si dans une localisation, aucun ESP y est, la donnée d'openweathermap est donnée.
![image](https://user-images.githubusercontent.com/82032275/167051054-89e8faf9-a1bf-48e1-b4ec-4abfab421752.png)


## Technologies
Les technologies utilisées sont:
- Arduino,
- NodeJS,
- MongoDB atlas,
- Html,
- Jquery,
- heroku


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
- https://leafletjs.com/examples/quick-start/

