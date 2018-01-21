PROJET SERVER SIDE MIAGE MBDS 
Mini projet à rendre avant le 31 Janvier (MBDS)
Vous devrez réaliser, avec un des trois frameworks vus en cours (VueJS, React, Angular 4/5), une application "galerie vidéo" présentant des vidéos YouTube faites par les éléves du MBDS, 30 secondes maximum, présentant le MBDS en entier ou juste une de ses facettes.

Lancer le serveur :
Pour lancer le serveur il faut :
    -  Ouvrir une première invite de commandes
    -  Exécuter la commande "mongod"
    -  Ouvrir une Deuxième invite de commandes
    -  Aller dans projet_server_Side_MBDS/angular_client/client-video
    -  Exécuter la commande "npm install"
    -  Exécuter la commande "ng build"
    -  Aller dans projet_server_Side_MBDS/server/
    -  Exécuter la commande "npm install"
    -  Exécuter la commande "node server.js"

Cahier des charges:

Description générale

L'application est une galerie de vidéos. On suppose que les vidéos ont été postées sur YouTube, et qu'elles sont accessibles via leur URL. Je suggère que la promo fasse une chaine MBDS dans laquelle l'ensemble des vidéos sera posté.
 
L'application que vous allez développer permettra d'ajouter/modifier/supprimer/afficher des vidéos sous la forme d'une galerie. 
 
Visualisation de la gallerie / lecture des vidéos

Une fois arrivé sur la page de départ, on voit une liste de vidéos (par défaut elles ne sont pas en lecture, on ne voit que le lecteur vidéo en mode "statique", on peut imaginer aussi afficher une image par vidéo, si on clique sur l'image ça lance la vidéo), sous la vidéo on voit sa légende (une ligne, par exemple le nom de la personne sur la vidéo ou le titre de la vidéo).
 
Si on clique sur une vidéo, ça joue la vidéo, et on peut voir sa description. On utilisera simplement dans le template d'un composant que vous crééerez pour jouer la vidéo, le code HTML (une iframe) proposé par YouTube pour insérer une vidéo dans une page Web.
 
A priori on n'a pas besoin de pagination, on affichera toutes les imagettes des vidéos sur une simple page.
 
Facultatif  : faire de la pagination et permettre é l'application de gérer un plus grand nombre de vidéos.
 
Facultatif : Possibilité de noter la vidéo avec des étoiles (1 é 5 étoiles), dans un premier temps on ne vérifiera pas qu'un utilisateur puisse voter plusieurs fois. On essaiera de réfléchir é un systéme essayant d'interdire les votes multiples, sans que l'utilisateur ait besoin de s'authentifier.
 
Ajout d'une vidéo

Un bouton ou une entrée de menu permettra d'ajouter une nouvelle vidéo. On demandera l'URL de la vidéo YouTube, une description de quelques lignes, et une légende pour afficher sous la vidéo. On vérifiera que la vidéo n'a pas déjà été ajoutée. On vérifiera aussi que les champs description et légende ne sont pas vides avant de publier la vidéo.
 
Facultatif : utiliser l'API de YouTube pour récupérer la description de la vidéo et la légende (le titre de la vidéo) directement sur YouTube. On supposera dans un premier temps que la clé d'API est codée "en dur", vous pourrez, si vous avez le temps et si vous êtes à l'aise, prévoir un menu "paramètres" dans lequel vous pourrez coller la clé d'API qui sera utilisée par l'application.
 
Modification d'une vidéo

On pourra modifier la description ou la légende d'une vidéo après publication. Ce ne sera pas modifié sur YouTube, ou bien (facultatif) optionellement (case à cocher ?)
 
Suppression d'une vidéo

On pourra ajouter un bouton ou une croix pour supprimer une vidéo. La vidéo ne sera supprimée que de votre base de données, pas sur YouTube.
BACK END :

Vous utiliserez soit MongoDB et NodeJS/Express comme dans les TPs, soit FireBase.
Attention, si vous faites un projet "serveur" avec node + express + mongo, et un autre projet "front end", assurez-vous que la configuration du serveur node accepte bien les requêtes cross-domain.