//Le compte a rebours doit être un objet instanciable


//Permettre à l'utilisateur de spécifier un temps personnalisé
//incrémenter de 1 a chaque fois que je clique sur le bouton "hautHeures" !
let ajoutHeures = 0;
document.getElementById("hautHeures").addEventListener("click", function (){
    setTimeout(function () {
        if (ajoutHeures < 9){
            let spanTime = document.getElementById("heures");
            spanTime.innerHTML = "0" + (ajoutHeures += 1);
        }

        else if (10 >= ajoutHeures <= 100){
            let spanTime = document.getElementById("heures");
            spanTime.innerHTML = (ajoutHeures += 1);
        }

        if (ajoutHeures === 100){
            ajoutHeures = 0;
            let spanTime = document.getElementById("heures");
            spanTime.innerHTML = "00";
        }
    }, 500);
    //valeursHauteTime(100, "heures");
});

let ajoutMinutes = 0;
//incrémenter de 1 a chaque fois que je clique sur le bouton "hautMinutes" !
document.getElementById("hautMinutes").addEventListener("click", function (){
    setTimeout(function () {
        if (ajoutMinutes < 9){
            let spanTime = document.getElementById("minutes");
            spanTime.innerHTML = "0" + (ajoutMinutes += 1);
        }

        else if (10 >= ajoutMinutes <= 60){
            let spanTime = document.getElementById("minutes");
            spanTime.innerHTML = (ajoutMinutes += 1);
        }

        if (ajoutMinutes === 60){
            ajoutMinutes = 0;
            let spanTime = document.getElementById("minutes");
            spanTime.innerHTML = "00";
        }
    }, 500);
    //valeursHauteTime(60, "minutes");
});

let ajoutSeconde = 0;
//incrémenter de 1 a chaque fois que je clique sur le bouton "hautSecondes" !
document.getElementById("hautSecondes").addEventListener("click", function (){
    setTimeout(function () {
        if (ajoutSeconde < 9){
            let spanTime = document.getElementById("secondes");
            spanTime.innerHTML = "0" + (ajoutSeconde += 1);
        }

        else if (10 >= ajoutSeconde <= 60){
            let spanTime = document.getElementById("secondes");
            spanTime.innerHTML = (ajoutSeconde += 1);
        }

        if (ajoutSeconde === 60){
            ajoutSeconde = 0;
            let spanTime = document.getElementById("secondes");
            spanTime.innerHTML = "00";
        }
    }, 500);
    //valeursHauteTime(60, "secondes");
});

//Décrémenter de 1 a chaque fois que je clique sur le bouton "basHeures" !
document.getElementById("basHeures").addEventListener("click", function (){
    setTimeout(function () {
        if (ajoutHeures < 11){
            let spanTime = document.getElementById("heures");
            spanTime.innerHTML = "0" + (ajoutHeures -= 1);
        }

        else if (10 >= ajoutHeures <= 100){
            let spanTime = document.getElementById("heures");
            spanTime.innerHTML = (ajoutHeures -= 1);
        }

        if (ajoutHeures === -1){
            ajoutHeures = 99;
            let spanTime = document.getElementById("heures");
            spanTime.innerHTML = "99";
        }
    }, 500);
});

//Décrémenter de 1 a chaque fois que je clique sur le bouton "basMinutes" !
document.getElementById("basMinutes").addEventListener("click", function (){
    setTimeout(function () {
        if (ajoutMinutes < 11){
            let spanTime = document.getElementById("minutes");
            spanTime.innerHTML = "0" + (ajoutMinutes -= 1);
        }

        else if (10 >= ajoutMinutes <= 60){
            let spanTime = document.getElementById("minutes");
            spanTime.innerHTML = (ajoutMinutes -= 1);
        }

        if (ajoutMinutes === -1){
            ajoutMinutes = 59;
            let spanTime = document.getElementById("minutes");
            spanTime.innerHTML = "59";
        }
    }, 500);
});

//Décrémenter de 1 a chaque fois que je clique sur le bouton "basSecondes" !
document.getElementById("basSecondes").addEventListener("click", function (){
    setTimeout(function () {
        if (ajoutSeconde < 11){
            let spanTime = document.getElementById("secondes");
            spanTime.innerHTML = "0" + (ajoutSeconde -= 1);
        }

        else if (10 >= ajoutSeconde <= 60){
            let spanTime = document.getElementById("secondes");
            spanTime.innerHTML = (ajoutSeconde -= 1);
        }

        if (ajoutSeconde === -1){
            ajoutSeconde = 59;
            let spanTime = document.getElementById("secondes");
            spanTime.innerHTML = "59";
        }
    }, 500);
    //valeursHauteTime(60, "secondes");
});

