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
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1857.966635974254!2d4.83461141597007!3d45.75506472566847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb8bf1d8b11f%3A0xd2c339c720c6a0f7!2sOrange%20Business!5e0!3m2!1sfr!2sfr!4v1767369713283!5m2!1sfr!2sfr",
        "adresse": "13 Quai du Dr Gailleton, 69002 Lyon",
        "horaires": [
            ["09:00","09:00","09:00","09:00","09:00","Fermé","Fermé"],
            ["17:00","17:00","17:00","17:00","17:00","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 45 56 67"
    },

    "agence_3": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.7668644338737!2d5.714519676768992!3d45.1918153710709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af486d4db2145%3A0x5855b4bb6787a494!2sI.U.T.2%20Institut%20Universitaire%20de%20Technologie%20-%20B%C3%A2timent%20Doyen%20Gosse!5e0!3m2!1sfr!2sfr!4v1767683386294!5m2!1sfr!2sfr",
        "adresse": "2 Place Doyen Gosse, 38000 Grenoble",
        "horaires": [
            ["08:00-12:00","08:00-12:00","08:00-12:00","08:00-12:00","08:00-12:00","Fermé","Fermé"],
            ["14:00-18:00","14:00-18:00","14:00-18:00","Fermé","14:00-18:00","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 28 45 09"
    },
    
    "agence_4": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89847.27340727611!2d5.5797793182770645!3d45.27352312536464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ae4460d1a2de9%3A0x98b8d21788e7e4b4!2sLyc%C3%A9e%20Polyvalent%20Ferdinand%20Buisson%20(%20dit%20%22La%20NAT%22)!5e0!3m2!1sfr!2sfr!4v1767683585343!5m2!1sfr!2sfr",
        "adresse": "21 Boulevard Edgar Kofler, 38500 Voiron",
        "horaires": [
            ["08:00-12:00","08:00-12:00","08:00-12:00","08:00-12:00","08:00-12:00","Fermé","Fermé"],
            ["14:00-18:00","14:00-18:00","Fermé","14:00-18:00","14:00-18:00","Fermé","Fermé"]
        ],
        "tel": "+33 4 76 05 83 90"
    },
    
    "agence_5": {
        "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547742.8801428896!2d4.379829483720352!3d45.936399538595694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ec854224d8ab%3A0x2166d105dc815ee!2sOrange!5e0!3m2!1sfr!2sfr!4v1767684110695!5m2!1sfr!2sfr",
        "adresse": "CENTRE COMMERCIAL, Grand Ouest, Le Perollier, 69130 Écully",
        "horaires": [
            ["09:30","09:30","09:30","09:30","09:30","09:30","Fermé"],
            ["20:00","20:00","20:00","20:00","20:00","20:00","Fermé"]
        ],
        "tel": "+33 4 76 45 18 32"
    }

};

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
