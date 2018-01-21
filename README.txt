PROJET SERVER SIDE MIAGE MBDS 
Mini projet � rendre avant le 31 Janvier (MBDS)
Vous devrez r�aliser, avec un des trois frameworks vus en cours (VueJS, React, Angular 4/5), une application "galerie vid�o" pr�sentant des vid�os YouTube faites par les �l�ves du MBDS, 30 secondes maximum, pr�sentant le MBDS en entier ou juste une de ses facettes.

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

Description g�n�rale

L'application est une galerie de vid�os. On suppose que les vid�os ont �t� post�es sur YouTube, et qu'elles sont accessibles via leur URL. Je sugg�re que la promo fasse une chaine MBDS dans laquelle l'ensemble des vid�os sera post�.
 
L'application que vous allez d�velopper permettra d'ajouter/modifier/supprimer/afficher des vid�os sous la forme d'une galerie. 
 
Visualisation de la gallerie / lecture des vid�os

Une fois arriv� sur la page de d�part, on voit une liste de vid�os (par d�faut elles ne sont pas en lecture, on ne voit que le lecteur vid�o en mode "statique", on peut imaginer aussi afficher une image par vid�o, si on clique sur l'image �a lance la vid�o), sous la vid�o on voit sa l�gende (une ligne, par exemple le nom de la personne sur la vid�o ou le titre de la vid�o).
 
Si on clique sur une vid�o, �a joue la vid�o, et on peut voir sa description. On utilisera simplement dans le template d'un composant que vous cr��erez pour jouer la vid�o, le code HTML (une iframe) propos� par YouTube pour ins�rer une vid�o dans une page Web.
 
A priori on n'a pas besoin de pagination, on affichera toutes les imagettes des vid�os sur une simple page.
 
Facultatif  : faire de la pagination et permettre � l'application de g�rer un plus grand nombre de vid�os.
 
Facultatif : Possibilit� de noter la vid�o avec des �toiles (1 � 5 �toiles), dans un premier temps on ne v�rifiera pas qu'un utilisateur puisse voter plusieurs fois. On essaiera de r�fl�chir � un syst�me essayant d'interdire les votes multiples, sans que l'utilisateur ait besoin de s'authentifier.
 
Ajout d'une vid�o

Un bouton ou une entr�e de menu permettra d'ajouter une nouvelle vid�o. On demandera l'URL de la vid�o YouTube, une description de quelques lignes, et une l�gende pour afficher sous la vid�o. On v�rifiera que la vid�o n'a pas d�j� �t� ajout�e. On v�rifiera aussi que les champs description et l�gende ne sont pas vides avant de publier la vid�o.
 
Facultatif : utiliser l'API de YouTube pour r�cup�rer la description de la vid�o et la l�gende (le titre de la vid�o) directement sur YouTube. On supposera dans un premier temps que la cl� d'API est cod�e "en dur", vous pourrez, si vous avez le temps et si vous �tes � l'aise, pr�voir un menu "param�tres" dans lequel vous pourrez coller la cl� d'API qui sera utilis�e par l'application.
 
Modification d'une vid�o

On pourra modifier la description ou la l�gende d'une vid�o apr�s publication. Ce ne sera pas modifi� sur YouTube, ou bien (facultatif) optionellement (case � cocher ?)
 
Suppression d'une vid�o

On pourra ajouter un bouton ou une croix pour supprimer une vid�o. La vid�o ne sera supprim�e que de votre base de donn�es, pas sur YouTube.
BACK END :

Vous utiliserez soit MongoDB et NodeJS/Express comme dans les TPs, soit FireBase.
Attention, si vous faites un projet "serveur" avec node + express + mongo, et un autre projet "front end", assurez-vous que la configuration du serveur node accepte bien les requ�tes cross-domain. 