//incrémenter de 1 a chaque fois que je clique sur le bouton "hautHeures" !
let ajoutTime = 0;
document.getElementById("hautHeures").addEventListener("click", function (){
    valeursHauteTime(100, "heures");
})

//Décrémenter de 1 a chaque fois que je clique sur le bouton "basHeures" !
document.getElementById("basHeures").addEventListener("click", function (){
    valeursBasseTime(100, "heures")
})

//incrémenter de 1 a chaque fois que je clique sur le bouton "hautMinutes" !
document.getElementById("hautMinutes").addEventListener("click", function (){
    valeursHauteTime(60, "minutes");
})

//Décrémenter de 1 a chaque fois que je clique sur le bouton "basMinutes" !
document.getElementById("basMinutes").addEventListener("click", function (){
    valeursBasseTime(60, "minutes", 59);
})

//incrémenter de 1 a chaque fois que je clique sur le bouton "hautSecondes" !
document.getElementById("hautSecondes").addEventListener("click", function (){
    valeursHauteTime(60, "secondes");
})

//Décrémenter de 1 a chaque fois que je clique sur le bouton "basSecondes" !
document.getElementById("basSecondes").addEventListener("click", function (){
    valeursBasseTime(60, "secondes", 59);
})





//permet d'incrémenter de 1 chaque bouton "hautHeures", "hautMinutes" et "hautSecondes"
function valeursHauteTime(limite, id) {
    setTimeout(function () {
        if (ajoutTime < 9){
            let spanTime = document.getElementById(id);
            spanTime.innerHTML = "0" + (ajoutTime += 1);
        }

        else if (10 >= ajoutTime <= limite){
            let spanTime = document.getElementById(id);
            spanTime.innerHTML = (ajoutTime += 1);
        }

        if (ajoutTime === limite){
            ajoutTime = 0;
            let spanTime = document.getElementById(id);
            spanTime.innerHTML = "00";
        }
    }, 500);
}

//permet de décrémenter de 1 chaque bouton "basHeures", "basMinutes" et "basSecondes"
function valeursBasseTime(limite, id, time) {
    setTimeout(function () {
        if (ajoutTime < 11){
            let spanTime = document.getElementById(id);
            spanTime.innerHTML = "0" + (ajoutTime -= 1);
        }

        else if (10 >= ajoutTime <= limite){
            let spanTime = document.getElementById(id);
            spanTime.innerHTML = (ajoutTime -= 1);
        }

        if (ajoutTime === -1){
            ajoutTime = time;
            let spanTime = document.getElementById(id);
            spanTime.innerHTML = time.toString();
        }
    }, 500);
}
