const cards = [
    {
        number: 1,
        isDiscarded: false,
        hint: "L’infographie montre le nombre d’hôtels recensés",
        solution: "64 caché dans le nombre d’hôtels → prenez la carte 64"    
    },
    {
        number: 3,
        isDiscarded: false,
        hint: "Observez le numéro attribué à chaque dépôt. Lequel correspond aux critères mentionnés sur la carte S2 ?",
        solution: "Le dépôt est FORSBase, le numéro 1. +70 = 71 → prenez la carte 71"   
    },
    {
        number: 4,
        isDiscarded: false,
        hint: "Rien à trouver",
        solution: "Rien à trouver"    
    },
    {
        number: 6,
        isDiscarded: false,
        hint: "Il va falloir marcher un peu",
        solution: "11e étage → prenez la carte 11"    
    },
    {
        number: 7,
        isDiscarded: false,
        hint: "Quel identifiant correspond à celui d’un jeu de données ? Aidez-vous de la carte I 3.",
        solution: "Le doi est correct. 10.1840/309registries → prenez la carte 84"    
    },
    {
        number: 8,
        isDiscarded: false,
        hint: "Comptez les post-itssur le bureau",
        solution: "On compte 4 grands post-it sur le bureau de la carte 59 → prenez la carte 4"    
    },
    {
        number: 9,
        isDiscarded: false,
        hint: "Regardez bien les post-its. Votre téléphone vous sera aussi utile.",
        solution: "Prenez la carte S8 (dans le téléphone) Prenez la carte 85 (post-it sur l’écran d’ordinateur)"    
    },
    {
        number: 11,
        isDiscarded: false,
        hint: "Avez-vous bien noté la date ? Les livres vous seront peut-être aussi utiles.",
        solution: "Prenez la carte 17 (en chiffres romains sur un livre) Prenez la carte 19 (entouré en rouge sur le calendrier)"
    },
    {
        number: 12,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 13,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 15,
        isDiscarded: false,
        hint: "Regardez bien le nom de la page dans le document",
        solution: "C’est le même document que la carte 16 ! Additionnez-les. 16 + 15 = 31 → prenez la carte 31"
    },
    {
        number: 16,
        isDiscarded: false,
        hint: "Regardez bien le nom de la page dans le document",
        solution: "C’est le même document que la carte 15 ! Additionnez-les. 16 + 15 = 31 → prenez la carte 31"
    },
    {
        number: 17,
        isDiscarded: false,
        hint: "Ce chapitre semble intéressant et le livre semble ouvert à un emplacement stratégique",
        solution: "Chapitre 30 → prenez la carte 30. Les numéros de pages I 67 et I 68 renvoient aux cartes rôle correspondantes → prenez les cartes I 67 et I 68"
    },
    {
        number: 18,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 19,
        isDiscarded: false,
        hint: "Il semble qu’il soit nécessaire d’ajouter un fichier pour lancer l’analyse",
        solution: "19 + 60 (carte avec les données les plus propres) = 79 → prenez la carte 79"
    },
    {
        number: 21,
        isDiscarded: false,
        hint: "Un dossier semble particulièrement intéressant",
        solution: "Dossier_Numéro vingt-six.zip → prenez la carte 26"
    },
    {
        number: 22,
        isDiscarded: false,
        hint: "Avez-vous observé le tableau de liège derrière le bureau de votre collègue ?",
        solution: "Prendre carte 1 indiqué sur le post-it → prenez la carte 1"
    },
    {
        number: 25,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 26,
        isDiscarded: false,
        hint: "Quel fichier est nommé correctement ? Aidez-vous des informations données sur la carte S10.",
        solution: "OFS_Continental_20200628.png → prenez la carte 28"
    },
    {
        number: 28,
        isDiscarded: false,
        hint: "Observez la boite à cléset le panneau réception",
        solution: "Numéro 92 dans la boîte à clés → prenez la carte 92 R36ception : prenez la carte 36"
    },
    {
        number: 29,
        isDiscarded: false,
        hint: "Il s’agit d’un message codé à déchiffrer ! Observer la carte 59 pour trouver le titre du message, qui servira de clé de décodage.",
        solution: "Rédiger son DMP A. Informations administratives B. Collecte des données C. Documentation et métadonnées D. Éthique et conformité légale E. Stockage et sauvegarde F. Sélection et conservation G. Partage de données H. Responsabilités et ressources"
    },
    {
        number: 30,
        isDiscarded: false,
        hint: "Lisez bien les informations en gras et aidez-vous de la carte I 68.",
        solution: "La carte à introduire dans le logiciel est la carte 60"
    },
    {
        number: 31,
        isDiscarded: false,
        hint: "Rien à trouver. Prenez la carte S1.",
        solution: "Rien à trouver. Prenez la carte S1."
    },
    {
        number: 32,
        isDiscarded: false,
        hint: "Rien à trouver",
        solution: "Rien à trouver"
    },
    {
        number: 35,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 36,
        isDiscarded: false,
        hint: "Certains champs du questionnaire semblent remplis",
        solution: "Numéros 15 et 16 → prenez les cartes 15 et 16"
    },
    {
        number: 37,
        isDiscarded: false,
        hint: "Rien à trouver, vous êtes à la fin du jeu !",
        solution: "Rien à trouver, vous êtes à la fin du jeu !"
    },
    {
        number: 44,
        isDiscarded: false,
        hint: "Faites appel à Inès l’informaticienne en prenant la carte I 22",
        solution: "Prenez la carte I22"
    },
    {
        number: 47,
        isDiscarded: false,
        hint: "Regardez bien l’écran. Votre téléphone vous sera aussi utile.",
        solution: "Prenez la carte S5 (sur le téléphone) Prenez la carte 3 (sur l’écran, re3data.org)"
    },
    {
        number: 51,
        isDiscarded: false,
        hint: "Après avoir répondu à ce message, sachez que d’autres sont en attente de lecture",
        solution: "47 messages non lus →prenez la carte 47"
    },
    {
        number: 56,
        isDiscarded: false,
        hint: "Est-ce que toutes les cellules semblent correctes ?",
        solution: "Ce n’est pas la carte correcte, les données sont complètement mélangées et il y a des cellules vides sans explication."
    },
    {
        number: 59,
        isDiscarded: false,
        hint: "Regardez bien l'écran et la date à laquelle le DMP doit être rédigé. Besoin d’une petite pause ?",
        solution: "Prenez la carte 8 (dans la tasse à café) Prenez la carte 21 (dans l’écran) Prenez la carte 29 (dans le carnet de notes)"
    },
    {
        number: 60,
        isDiscarded: false,
        hint: "Est-ce que toutes les cellules semblent correctes ?",
        solution: "C’est la carte correcte ! Vous pouvez l’ajouter dans le logiciel d’analyse"
    },
    {
        number: 61,
        isDiscarded: false,
        hint: "Lisez bien les informations en gras",
        solution: "Prenez les cartes 68 et S28"
    },
    {
        number: 64,
        isDiscarded: false,
        hint: "Prenez contact avec le service informatique",
        solution: "N° de téléphone 0099 → prenez la carte 99"
    },
    {
        number: 65,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 68,
        isDiscarded: false,
        hint: "Une balise précise devrait vous aider à avancer",
        solution: "<carte carteAPrendre=’’pourEtapeSuivante’’> → prenez la carte51"
    },
    {
        number: 69,
        isDiscarded: false,
        hint: "Est-ce que toutes les cellules semblent correctes ?",
        solution: "Ce n’est pas la carte correcte, les données sont non standardisées, certaines cellules sont vides, les N/A sont hétérogènes."
    },
    {
        number: 71,
        isDiscarded: false,
        hint: "Voici un conseil: les données peuvent être publiées au vu de tous et ne contiennent pas de données sensibles. Aidez-vous de la carte J1.",
        solution: "Les données sont ouvertes → prenez la carte 96"
    },
    {
        number: 75,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 77,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 79,
        isDiscarded: false,
        hint: "Le chercheur semble très heureux !",
        solution: "Numéro 22 sur le pull → prenez la carte 22"
    },
    {
        number: 81,
        isDiscarded: false,
        hint: "Demandez conseil au spécialiste en information documentaireen prenant la carte S13",
        solution: "Prenez la carte S13"
    },
    {
        number: 82,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 84,
        isDiscarded: false,
        hint: "Il faut vous rendre quelque part",
        solution: "Bureau n°9 → prenez la carte 9"
    },
    {
        number: 85,
        isDiscarded: false,
        hint: "Il faut faire une opération individuelle avec lenombre de vues et de téléchargements",
        solution: "Additionner les chiffres individuels des vues et des téléchargements 1+5+2+3+7+7+1+1+0+6+4+0 = 37 → prenez la carte 37"
    },
    {
        number: 88,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 92,
        isDiscarded: false,
        hint: "Une petite addition sera certainement nécessaire",
        solution: "3+2+1 = 6 → prenez la carte 6"
    },
    {
        number: 93,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 94,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 95,
        isDiscarded: false,
        hint: "Carte pénalité",
        solution: "Carte pénalité"
    },
    {
        number: 96,
        isDiscarded: false,
        hint: "Quelle licence permet une réutilisation libre à condition de créditer les auteur-e-s d’un travail ? Aidez-vous de la carte J9",
        solution: "Licence CC BY → prenez la carte 7"
    },
    {
        number: 99,
        isDiscarded: false,
        hint: "On dirait qu’il y a un logo sur le bord du bureau, non?Les différents écrans attirent aussi votre attention.",
        solution: "Prenez la carte 44 (écran) Prenez la carte 81 (bord du bureau)"
    },
    {
        number: "i22",
        isDiscarded: false,
        hint: "Théorie sur les formats de fichiers. Prenez la carte I 51",
        solution: "Théorie sur les formats de fichiers. Prenez la carte I 51"
    },
    {
        number: "i3",
        isDiscarded: false,
        hint: "Théorie sur les identifiants. Aide à trouver la solution de la carte 7",
        solution: "Théorie sur les identifiants. Aide à trouver la solution de la carte 7"   
    },
    {
        number: "i51",
        isDiscarded: false,
        hint: "Repérez tous les chiffres et additionnez-les",
        solution: "5+2+3+4+4+2+3+3+3+3 = 32 → prenez la carte 32"
    },
    {
        number: "i67",
        isDiscarded: false,
        hint: "Théorie sur le nettoyage des données",
        solution: "Théorie sur le nettoyage des données"
    },
    {
        number: "i68",
        isDiscarded: false,
        hint: "Théorie sur le nettoyage des données. Aide à identifier la carte sur laquelle les données sont le mieux nettoyées",
        solution: "Théorie sur le nettoyage des données. Aide à identifier la carte sur laquelle les données sont le mieux nettoyées"
    },
    {
        number: "j1",
        isDiscarded: false,
        hint: "Théorie sur l’ouverture des données. Aide à trouver la solution de la carte 71",
        solution: "Théorie sur l’ouverture des données. Aide à trouver la solution de la carte 71"    
    },
    {
        number: "j9",
        isDiscarded: false,
        hint: "Théorie sur les licences deréutilisation. Aide à trouver la solution de la carte 96",
        solution: "Théorie sur les licences de réutilisation. Aide à trouver la solution de la carte 96"    
    },
    {
        number: "s1",
        isDiscarded: false,
        hint: "Théorie sur la documentation du projet. Rien à trouver",
        solution: "Théorie sur la documentation du projet. Rien à trouver"    
    },
    {
        number: "s2",
        isDiscarded: false,
        hint: "Quel dépôt est gratuit et possède tous ses serveurs en Suisse ? Aidez-vous de la carte 3 pour trouver son numéro",
        solution: "Le dépôt est FORSBase, le numéro 1. +70 = 71 → prenez la carte 71"    
    },
    {
        number: "s4",
        isDiscarded: false,
        hint: "Théorie sur les types de données. Rien à trouver",
        solution: "Théorie sur les types de données. Rien à trouver"    
    },
    {
        number: "s5",
        isDiscarded: false,
        hint: "Théorie sur le dépôt de données. Rien à trouver",
        solution: "Théorie sur le dépôt de données. Rien à trouver"    
    },
    {
        number: "s8",
        isDiscarded: false,
        hint: "Théorie sur les altmetrics. Rien à trouver",
        solution: "Théorie sur les altmetrics. Rien à trouver"    
    },
    {
        number: "s10",
        isDiscarded: false,
        hint: "Théorie sur le nommage des fichiers. Aide à trouver la solution de la carte 26",
        solution: "Théorie sur le nommage des fichiers. Aide à trouver la solution de la carte 26"    
    },
    {
        number: "s13",
        isDiscarded: false,
        hint: "Théorie sur la valeur des données. Prenez la carte S25",
        solution: "Théorie sur la valeur des données. Prenez la carte S25"    
    },
    {
        number: "s15",
        isDiscarded: false,
        hint: "Théorie sur le DMP. Rien à trouver",
        solution: "Théorie sur le DMP. Rien à trouver"    
    },
    {
        number: "s25",
        isDiscarded: false,
        hint: "Quelques lettres sont mises en évidence",
        solution: "En lisant les lettres en rouge uniquement, on obtient soixante-et-un → prenez la carte 61"    
    },
    {
        number: "s28",
        isDiscarded: false,
        hint: "Théorie sur les métadonnées. Rien à trouver",
        solution: "Théorie sur les métadonnées. Rien à trouver"    
    }
]

export default cards
