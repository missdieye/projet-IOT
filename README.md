# Projet IoT Master 1 MIAGE 2021/2022 par Diallo Binta et Dieye Khadidiatou

## Informations Générales
Notre application intitulée **DIADIE** est un site d'informations climat en temps réel et sur toute la planète. Ces températures proviennent globalement d'openweathermap mais aussi des personnes ayant des ESP avec un capteur de température et souhaitant partager leurs informations.

Le nom **DIADIE** en plus qui est notre logo est inspiré de la combinaison de nos deux noms **DIA**llo et **DIE**ye.
Un profil admin pour vous connecter y est dont le nom d'utilisateur est admin et son Mot de passe : admin.
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
- l'API https://api.openweathermap.org/ permettant de récupérer les données météorologique en temps réel de tous endroit dans le monde dans notre map en particulier.
-L'API local api/coordonnees qui permet de récupérer les coordonnées d'un utisateur inscrit dans notre application notamment la latitude et longitude.


## Fonctionnalités
Les différentes fonctionnalités de **DIADIE** sont :
- Le déployement sur heroku;
- Voir les températures en temps réel sur les graphes des utilisateurs autorisés;
- Sur la map afficher en temps réel la température des graphes
- Utilisateur peut créer son compte s'y connecter et se déconnecter;
- Pilotage de la communauté : Un La permission à des utilisateur de publier sur notre app


## Fonctionnalité qui fais banko

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

Dans les prochaines versions, nous souhaitions permettre à l'utilisateur de créer son identifiant et de se connecter avec et lui permettre de visiter le site sans identification s'il ne souhaite pas commander.
Pour le moment l'utilisateur peut se connecter avec les identifiants que nous avons créé nous même dans la base de données.

## Crédit

Pour la réalisation de ce projet, nous nous sommes resourcées de :


