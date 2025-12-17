agences_data = {
    "agence_1": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.532401793785!2d5.7309767891287455!3d45.19048085297762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48b24ee5d87%3A0xf76d4b15a3cfc863!2sLa%20Fabrique%20-%20Orange%20Business!5e0!3m2!1sfr!2sfr!4v1764941966967!5m2!1sfr!2sfr",
        "adresse": "29 rue Servan, 38000 Grenoble",
        "horaires": [
            ["08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","Fermé","Fermé"],
            ["13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-16:30","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 44 50 50"
    },
    
    "agence_2": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.532401793785!2d5.7309767891287455!3d45.19048085297762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48b24ee5d87%3A0xf76d4b15a3cfc863!2sLa%20Fabrique%20-%20Orange%20Business!5e0!3m2!1sfr!2sfr!4v1764941966967!5m2!1sfr!2sfr",
        "adresse": "69 rue des Poutres, 38000 Grenoble",
        "horaires": [
            ["08:30-12:30","08:30-12:30","08:30-12:30","08:30-21:30","08:30-12:30","Fermé","Fermé"],
            ["13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-16:30","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 44 50 50"
    },
    
    "agence_3": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.532401793785!2d5.7309767891287455!3d45.19048085297762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48b24ee5d87%3A0xf76d4b15a3cfc863!2sLa%20Fabrique%20-%20Orange%20Business!5e0!3m2!1sfr!2sfr!4v1764941966967!5m2!1sfr!2sfr",
        "adresse": "69 rue des Poutres, 38000 Grenoble",
        "horaires": [
            ["08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","Fermé","Fermé"],
            ["13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-16:30","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 44 50 50"
    },
    
    "agence_4": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.532401793785!2d5.7309767891287455!3d45.19048085297762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48b24ee5d87%3A0xf76d4b15a3cfc863!2sLa%20Fabrique%20-%20Orange%20Business!5e0!3m2!1sfr!2sfr!4v1764941966967!5m2!1sfr!2sfr",
        "adresse": "69 rue des Poutres, 38000 Grenoble",
        "horaires": [
            ["08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","Fermé","Fermé"],
            ["13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-16:30","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 44 50 50"
    },
    
    "agence_5": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.532401793785!2d5.7309767891287455!3d45.19048085297762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48b24ee5d87%3A0xf76d4b15a3cfc863!2sLa%20Fabrique%20-%20Orange%20Business!5e0!3m2!1sfr!2sfr!4v1764941966967!5m2!1sfr!2sfr",
        "adresse": "69 rue des Poutres, 38000 Grenoble",
        "horaires": [
            ["08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","08:30-12:30","Fermé","Fermé"],
            ["13:30-17:30","13:30-17:30","13:30-17:30","13:30-17:30","13:30-16:30","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 44 50 50"
    }

}

function selectAgence(agence_id) {

    // Mise à jour du bouton de selection d'agence
    document.getElementById("agence-1").classList.remove("agence-selected");
    document.getElementById("agence-2").classList.remove("agence-selected");
    document.getElementById("agence-3").classList.remove("agence-selected");
    document.getElementById("agence-4").classList.remove("agence-selected");
    document.getElementById("agence-5").classList.remove("agence-selected");

    document.getElementById("agence-1").classList.add("agence-unselected");
    document.getElementById("agence-2").classList.add("agence-unselected");
    document.getElementById("agence-3").classList.add("agence-unselected");
    document.getElementById("agence-4").classList.add("agence-unselected");
    document.getElementById("agence-5").classList.add("agence-unselected");
    
    document.getElementById("agence-" + agence_id).classList.remove("agence-unselected");
    document.getElementById("agence-" + agence_id).classList.add("agence-selected");

    document.getElementById("agence_map").src = agences_data["agence_" + agence_id]["map_url"];
    document.getElementById("agence_adresse").innerHTML = "Adresse: " + agences_data["agence_" + agence_id]["adresse"];
    
    morning = agences_data["agence_" + agence_id]["horaires"][0];
    afternoon = agences_data["agence_" + agence_id]["horaires"][1];
    
    // Mise à jour des horaires
    for (i = 0; i < 7; i++) { // Permet de changer les éléments de la table: <tr>
        document.getElementById("morning").children[i].innerHTML = morning[i];
        document.getElementById("afternoon").children[i].innerHTML = afternoon[i];
    }

    // Mise à jour du tel

    // --> lien
    document.getElementById("agence_tel").href = "tel:" + agences_data["agence_" + agence_id]["tel"];

    // --> texte
    document.getElementById("agence_tel").innerHTML = "Tel: " + agences_data["agence_" + agence_id]["tel"];
}
