# BACK-AWI

### Le projet
Il y un site festival-jeu.fr destiné au grand public, avec un bouton qui dirige vers le sous-domaine benevole.festival-jeu.fr. Donc la page d’accueil du sous-domaine comprendrait uniquement des informations relatives au bénévolat.
Utilisateur non-connecté
S’inscrire en tant que bénévole
Se connecter
Bénévole
CRUD sur ses informations(ex: Nom, prénom, mail, recherche hébergement, association, pseudo : penom.n +chiffre, taille t-shirt, végé?)
Inscription horaire/poste
Valider attribution d’un poste/zone
Visualiser son planning (dans quelle zone on, avec quel référent, et les bénévoles qui sont avec nous - le pseudo)
Visualiser le jeux disponibles sa zone / sous-zone
Accéder au profil du/des référents
Admin
CRUD sur ses informations
CRUD sur les informations des bénévoles
CRUD sur les informations des référents
CRUD sur les attributions de postes
Valider / invalider requêtes participation à un horaire des bénévoles
Importation du CSV (zones + jeux)
Statistique (stats sur la représentations des associations dans le festival, + autres trucs ?)

Rérérent
CRUD sur ses informations
Interface pour envoyer des mails aux bénévoles directement depuis le site ? (ça ouvre le client mail par défaut)
Visualiser les plannings par poste et par créneaux
Visualiser les postes de ses bénévoles (et leur planning) + tous les bénévoles
Statistique (stats sur la représentations des associations dans le festival, + autres trucs ?)
Le référent est censé voir les bénévoles qui animent cette zone à un moment du festival, pour les contacter en cas d’urgence 

### Installation
- Copier .env.example et le renommer en .env
- Lancer la BD avec la commmande `docker compose up` à la racine du projet
- Lancer le serveur avec la commande `npm run dev` ou `npm run start` en prod
