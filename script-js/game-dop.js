// -----EVENTLISTENER PAGE DOP.--------
import { Hero } from './hero.js';
let hero = new Hero(10,1,1,1,[], 1000)
// import { Monster } from './monstre.js';
// let monstre = new Monster("Troll",10,"massue")
let messageDeVictoire = document.getElementById("message-de-victoire")
let messageDeDefaite = document.getElementById("message-de-defaite")

//affichhage de l'experience du hero
let expHero = document.getElementById("exp-hero")
//affichage des points de vie du hero
let pvHero = document.getElementById("pv-hero")
pvHero.innerText = hero.pV
// affichage des sous du hero
let sousHero = document.getElementById("gold-hero")
sousHero.innerText = hero.sous
//affichage attaque du héro
let attaqueHero = document.getElementById("attaque-hero")
attaqueHero.innerText = hero.attaque
// affichage defence héro
let defenceHero = document.getElementById("defenceHero")
defenceHero.innerText = hero.defence
//affichage nom du monstre
// let monstrenom = document.getElementById("monstre-name")
// monstrenom.innerText = monstre.name

//btn combat
let fightBtn = document.getElementById("fight")
fightBtn.addEventListener("click",function(){
    console.log("j'ai clické sur fight")
    messageDeVictoire.style.display = "block"
    // hero.fight(monstre)
})

// Btn action Fuite...PAGE DOP.
const fuite = document.getElementById("fuir")
fuite.addEventListener("click",function(){
    console.log("Je prends La fuite")
      hero.fuir()
      messageDeDefaite.style.display = "block"
      expHero.innerText = hero.xPHero    
})
//  if(hero.pV == 0){
//      console.log("die")
//      hero.die()
//  }
// Modal button
let mymodal = document.getElementById("INVmodal");

let INV = document.getElementById("inventory");

let span = document.getElementsByClassName("close")[0];

INV.onclick = function() {
    mymodal.style.display = "block";
}

span.onclick = function() {
    mymodal.style.display = "none";
}

// Modal content
// Btn equiper 1
let changer = document.getElementById("equiper");

changer.addEventListener("click", ()=>{

    if(changer.innerText === "Equipe"){
        changer.innerText = "desequiper";
    }else{
        changer.innerText= "Equipe";
    }
});

// Btn equiper 2
let equiper2 = document.getElementById("equiper2")

equiper2.addEventListener("click",function(){
    console.log("Je Equipe Arm 2")
})

// Btn equiper 3
let equiper3 = document.getElementById("equiper3")  

equiper3.addEventListener("click",function(){
    console.log("Je Equipe Arm 3")
})

// Btn equiper 4
let equiper4 = document.getElementById("equiper4")

equiper4.addEventListener("click",function(){
    console.log("Je Equipe Arm 4")
})

//gameover