// ##### VARAIABLES #####

page = "secteur";

const lastsecteur_nb = 7; // Il y a 7 secteurs d'activité
const lastservice_nb = 7; // Il y a 7 services

const secteur_infos = {
    
    "secteur1": {
        "name": "Infrastructure Digitale",
        "description": "<h4>Digital Consulting</h4>Nos équipes permettent aux entreprises d’exceller dans tous les domaines du numérique en les aidant à développer leur environnement numérique."
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
        "description": "<h4>Choisir les services adaptés à la criticité de vos activités</h4>Certains échanges d’information (E-mail,vidéoconférence) sont plus importants que d'autres en entreprise (comme un conseil d'administration ) il est donc nécessaire d’adapter les outils de communication  en fonction de son importance. Orange accompagne les entreprises dans l’amélioration et l'installation de systèmes de sécurité adaptés."
        + "<h4>Protéger vos données et créer des IA responsables</h4>Quand on navigue sur un site, les actions et données enregistrées par l’entreprise doivent être protégées contre un potentiel vol de données. Le respect du RGPD est obligatoire en Europe, Orange aide les sites internet à être plus sûrs pour protéger les utilisateurs de la fraude ainsi que pour respecter et appliquer la lois. L'Intelligence Artificielle doit être \"responsable\" : elle doit respecter les lois actuelles et être transparente, Orange aide à créer des IA qui respectent à la fois la loi et les droits des personnes."
        + "<h4>S’appuyer sur un socle d’infrastructure résilient et sécurisé</h4>Orange Cyberdéfense aide les entreprises à surveiller, détecter et bloquer les attaques informatiques."
    },
    "secteur6": {
        "name": "Cybersécurité",
        "description": "<h4>Sécuriser l'entreprise</h4>Grâce à la connaissance des tendances et des vulnérabilités, nous anticipons les menaces, évaluons les risques et élaborons des stratégies proactives pour renforcer les défenses de nos clients face aux cyberattaques et à leurs évolutions."
    },
    "secteur7": {
        "name": "La transition numérique et écologique de cette entreprise",
        "description": "<h4>Les enjeux de Numérique Responsable</h4>Comprendre et mesurer son empreinte carbone et environnementale La première étape d’une transformation responsable consiste à comprendre et mesurer l’empreinte de son activité. Orange propose des produits respectant les nouvelles réglementations et accompagne les entreprises voulant respecter ces réglementations."
        + "<h4>Utiliser l’IT au service de votre transition écologique</h4>Utiliser les technologies de l’internet au service de votre transition écologique Orange Business propose des solutions utilisant des outils numériques pour optimiser l’efficacité énergétique"
        + "<h4>Favoriser des produits et services IT à impact environnemental réduit</h4>Orange travaille sur 3 sources afin de réduire la pollution numérique : nos équipements, nos infrastructures réseaux avec des infrastructures cloud optimiséesn nos Data Centers en France et nous travaillons à l’optimisation de neuf Data Centers en Europe."
    },

};

const service_infos = {
    
    "service1": {
        "name": "A",
        "description": "aa"
    },
    "service2": {
        "name": "",
        "description": ""
    },
    "service3": {
        "name": "",
        "description": ""
    },
    "service4": {
        "name": "",
        "description": ""
    },
    "service5": {
        "name": "",
        "description": ""
    },
    "service6": {
        "name": "",
        "description": ""
    },
    "service7": {
        "name": "",
        "description": ""
    },

};

selectedSecteur = 1; // Secteur par defaut
selectedService = 1; // Service par defaut

sideSecteurHeight = 15;

// ##### FUNCTIONS #####


// EVENTS HANDLER

// On page loading
window.onload = function() {

    // Position par defaut:
    checkResize();

    // Vérifie si l'on est sur la page des secteurs d'activité ou celle des services
    if(document.getElementById("service1") != null) { // Signifie qu'on est sur la page des services
        page = "service";
        selectService(selectedService);
    } else {
        selectSecteur(selectedSecteur);
    }
    
   
};

// RESIZE EVENT FOR MOBILE COMPATIBILITY
window.onresize = function() {
    checkResize();
    selectSecteur(selectedSecteur);
}


// Utils FUNCTIONS

/**
 * Vérifie la largeur de la fenêtre et modifie la hauteur des secteurs en fonction
 */
function checkResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    // Width: Si le portable est en mode portrait
    // Height: Si le portable est en mode paysage

    if(width <= 700 || height <= 700) {
        sideSecteurHeight = 25;
    } else if (width <= 980 || height <= 980) {
        sideSecteurHeight = 20;
    } else {
        sideSecteurHeight = 15;
    }

    // Un seul élément possède la classe "secteurs-list", donc on prend le premier
    document.getElementsByClassName("secteurs-list").item(0).style.height = "max(280px, " + (sideSecteurHeight+3) + "vh)";
}

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
 * Sectionne le service suivant
 * Si le service actuel est le dernier, on revient au premier
 */
function nextService() {
    if(selectedService < lastservice_nb) {
        selectedService++;
    } else {
        selectedService = 1;
    }
    selectService(selectedService);
}

/**
 * Sectionne le service précédent
 * Si le service actuel est le premier, on revient au dernier
 */
function previousService() {
    if(selectedService > 1) {
        selectedService--;
    } else {
        selectedService = lastservice_nb;
    }
    selectService(selectedService);
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
 * Gère l'affichage des services
 * @param {*} service  : service selectionné
 */
function selectService(service) {
    if(service == 1) { // premier secteur selectionné
        hide();
        highlight("service"+lastservice_nb, "service1", "service2"); //Si le service selectionné est le premier, on montre le dernier service, le premier service et le second
        

    } else if(service == lastservice_nb) { // dernier service sélectionné
        hide();
        highlight("service" + (service-1), "service" + service, "service1"); // Montre : avant dernier, dernier, premier

    } else { // Dans tous les autres cas
        hide();
        highlight("service" + (service-1), "service" + service, "service" + (service+1)); // Montre : avant, secteur, suivant
    }
}

/**
 * Affiche et positionnne les secteurs selon le secteur selectionné
 * @param {*} left : secteur précédent le secteur sélectionné
 * @param {*} selected : le secteur sélectionné
 * @param {*} right : secteur suivant le secteur sélectionné
 */
function highlight(left, selected, right) {

    // Positionnement des secteurs/services
    document.getElementById(left).setAttribute("style", "display: flex; bottom: 2vh; left: 5vw; width: 19vw; height: max(260px, " + sideSecteurHeight + "vh);");
    document.getElementById(selected).setAttribute("style", "display: flex; bottom: 1vh; left: 29vw; width: 22vw; height: max(270px, " + (sideSecteurHeight+2) + "vh); box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);");
    document.getElementById(right).setAttribute("style", "display: flex; bottom: 2vh; left: 56vw; width: 19vw; height: max(260px, " + sideSecteurHeight + "vh);");

    // Affichage des infos du secteur/service
    if(page == "service") {
        document.getElementById("secteur-name").innerHTML = service_infos[selected]["name"];
        document.getElementById("secteur-description").innerHTML = service_infos[selected]["description"];
    } else {
        document.getElementById("secteur-name").innerHTML = secteur_infos[selected]["name"];
        document.getElementById("secteur-description").innerHTML = secteur_infos[selected]["description"];
    }
    
}

/**
 * Cache tous les secteurs/services
 */
function hide() {
    last_elt = lastsecteur_nb;
    if(page == "service") last_elt = lastservice_nb;

    for (i = 1; i <= last_elt; i++) {
        document.getElementById(page + i).setAttribute("style", "display: none;");
    }
}
