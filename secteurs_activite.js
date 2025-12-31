lastsecteur_nb = 7; // Il y a 7 secteurs d'activité
selectedSecteur = 1; // Secteur par defaut

secteur_infos = {
    
    "secteur1": {
        "name": "Infrastructure Digitale",
        "description": "<h4>Digital Consulting</h3>Nos équipes permettent aux entreprises d’exceller dans tous les domaines du numérique en les aidant à développer leur environnement numérique."
            + "<h4>SASE</h4>Les utilisateurs peuvent utiliser ce service où qu’ils soient. Grâce à notre service, les entreprises n’ont pas à s’occuper des serveurs et permettent facilement d’en augmenter leur nombre."
            + "<h4>Cloud Networking</h4>Notre cloud est flexible et rapide, les entreprises ne subissent pas de limitations liées au réseau lors de l’ajout de nouvelles applications. Les entreprises n’ont pas à se soucier des coûts liés à l’entretien des serveurs."
            + "<h4>Optimisation multicloud</h4>Nous adaptons l’infrastructure pour améliorer les performances et la rentabilité et permet au cloud* de fonctionner partout et tout le temps. Des serveurs de secours permettent aux services d’être disponibles en permanence même en cas de panne."
    },
    "secteur2": {
        "name": "Data et IA",
        "description": "<h4>Protéger vos données et créer des IA responsables</h4>L’arrivée de l’IA générative est un acteur majeur dans la transformation numérique des entreprises. L’IA décuple la productivité et transforme l’expérience des clients/collaborateurs. L’IA pose de nombreux défis (technologiques, éthiques, sécuritaires, organisationnels, etc.). Orange Business accompagne les entreprises avec des solutions et services de confiance pour réussir leur stratégie et leurs projets d’Intelligence Artificielle."
        + "<h4>S’appuyer sur un socle d’infrastructure résilient et sécurisé</h4>La Data Architecture est le socle technique sur lequel s'appuient toutes les initiatives Data et IA. Elle permet de structurer, intégrer et gérer efficacement des volumes croissants de données provenant de diverses sources, tout en assurant la qualité, la cohérence, la sécurité et la conformité de ces données."
        + "<h4>Choisir les services adaptés à la criticité de vos activités</h4>L'accompagnement Business permet de mettre en place outils/processus pour transformer les données brutes en information pertinente et stratégique, ce qui facilite la prise de décision."
    },
    "secteur3": {
        "name": "Expérience Employé",
        "description": "<h4>Mettre en place une solution de collaboration pensée pour les employés</h4>Nous proposons des outils numériques adaptés aux usages de l’entreprise. Nous améliorons l’efficacité des employés en unifiant tous leurs outils numériques de gestion des clients, gestion des relations clients et le système téléphonique de l'entreprise. Nos experts aident les entreprises à mettre ces outils en place."
        + "<h4>Garantir la satisfaction des employés</h4>Les entreprises peuvent visualiser l'opinion des employés sur leurs services, automatiser des tâches à l’aide de la robotisation."
    },
    "secteur4": {
        "name": "Expérience Client",
        "description": "<h4>L'expérience client omnicanale et cognitive</h4>L’expérience client omnicanale veut dire qu’une entreprise communique avec ses clients par plusieurs moyens (site web, téléphone, réseaux sociaux, etc.) en même temps et de façon fluide. Avec l’aide de l’automatisation et des systèmes intelligents, les clients reçoivent des réponses rapides et personnalisées, peu importe le canal qu’ils utilisent."
        + "<h4>Accélérer et sécuriser les choix technologiques</h4>Prendre des décisions technologiques rapides et sûres grâce à notre expertise, pour que nos client puisssent se concentrer sur leur activité principale."
    },
    "secteur5": {
        "name": "Bâtir un environnement numérique de confiance",
        "description": "Des mots"
    },
    "secteur6": {
        "name": "Cybersécurité",
        "description": "Des mots"
    },
    "secteur7": {
        "name": "La transition numérique et écologique de cette entreprise",
        "description": "Des mots"
    },

};

window.onload = function() {
    // Position par defaut:
    selectSecteur(selectedSecteur);
};

/**
 * Sectionne le secteur suivant
 * Si le secteur actuel est le dernier, on revient au premier
 */
function nextSecteur() {
    if(selectedSecteur < lastsecteur_nb) {
        selectedSecteur++;
    } else {
        selectedSecteur = 1;
    }
    selectSecteur(selectedSecteur);
}

/**
 * Sectionne le secteur précédent
 * Si le secteur actuel est le premier, on revient au dernier
 */
function previousSecteur() {
    if(selectedSecteur > 1) {
        selectedSecteur--;
    } else {
        selectedSecteur = lastsecteur_nb;
    }
    selectSecteur(selectedSecteur);
}

/**
 * Gère l'affichage des secteurs
 * @param {int} secteur : secteur selectionné
 */
function selectSecteur(secteur) {
    if(secteur == 1) { // premier secteur selectionné
        hide();
        highlight("secteur"+lastsecteur_nb, "secteur1", "secteur2"); //Si le secteur selectionné est le premier, on montre le dernier secteur, le premier secteur et le second
        

    } else if(secteur == lastsecteur_nb) { // dernier secteur sélectionné
        hide();
        highlight("secteur" + (secteur-1), "secteur" + secteur, "secteur1"); // Montre : avant dernier, dernier, premier

    } else { // Dans tous les autres cas
        hide();
        highlight("secteur" + (secteur-1), "secteur" + secteur, "secteur" + (secteur+1)); // Montre : avant, secteur, suivant
    }
}

/**
 * Affiche et positionnne les secteurs selon le secteur selectionné
 * @param {*} left : secteur précédent le secteur sélectionné
 * @param {*} selected : le secteur sélectionné
 * @param {*} right : secteur suivant le secteur sélectionné
 */
function highlight(left, selected, right) {

    // Positionnement des secteurs
    document.getElementById(left).setAttribute("style", "display: block; bottom: 2vh; left: 5vw; width: 19vw; height: 15vh;");
    //document.getElementById(selected).setAttribute("style", "display: block; bottom: 1vh; left: 29vw; width: 22vw; height: 17vh; box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);");
    document.getElementById(right).setAttribute("style", "display: block; bottom: 2vh; left: 56vw; width: 19vw; height: 15vh;");

    document.getElementById(selected).style.display = "block";
    document.getElementById(selected).style.bottom = "1vh";
    document.getElementById(selected).style.left = "29vw";
    document.getElementById(selected).style.width = "22vw";
    document.getElementById(selected).style.height = "17vh";
    document.getElementById(selected).style.boxShadow = "box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5)";

    // Affichage des infos du secteur
    document.getElementById("secteur-name").innerHTML = secteur_infos[selected]["name"];
    document.getElementById("secteur-description").innerHTML = secteur_infos[selected]["description"];
}

/**
 * Cache tous les secteurs
 */
function hide() {
    for (i = 1; i <= lastsecteur_nb; i++) {
        document.getElementById("secteur" + i).setAttribute("style", "display: none;");
    }
}