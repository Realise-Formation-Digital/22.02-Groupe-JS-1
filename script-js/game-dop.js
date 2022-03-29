// ----- PAGE DOP.--------

import { Hero } from './hero.js';
let armePardefault = new Armes()
armePardefault.attaque = 1
armePardefault.defence = 1
armePardefault.nom = "épée"
armePardefault.prix = 50

let nameArray = ["Oni","Ogre","Drake","Goblin","Green","Viper","Wall"]

let hero = new Hero(10,49,100,1,[armePardefault], 1000)
import { Monster } from './monstre.js'
import { Armes } from './armes.js'
let armMonstre = new Armes("hache",500,hero.xPHero)
let monstre = new Monster(10,hero.xPHero,hero.pvHero, armMonstre, nameArray)
console.log(armMonstre)
let messageDeVictoire = document.getElementById("message-de-victoire")
let messageDeDefaite = document.getElementById("message-de-defaite")


//localStorage
//  localStorage.setItem("pv",hero.pV)
//  localStorage.setItem("xp", hero.xPHero)
//  localStorage.setItem("sous", hero.sous)
//  console.log(localStorage)



//affichhage de l'experience du hero

let expHero = document.getElementById("exp-hero")
// expHero.innerText = localStorage.getItem("xp", hero.xPHero)
expHero.innerText =  hero.xPHero
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
  let monstrenom = document.getElementById("monstre-name")
  monstrenom.innerText = monstre.name
//affichage attaque du monstre
 let attaqueMonstre = document.getElementById("monstre-attaque")
 attaqueMonstre.innerText = monstre.attaque
//affichage defence du monstre
let defenceMonstre = document.getElementById("defence-monstre")
defenceMonstre.innerText = monstre.defence
 

//btn combat
let fightBtn = document.getElementById("fight")
fightBtn.addEventListener("click",function(){
    console.log("j'ai clické sur fight")
    fightBtn.style.display= "none"
      fuite.style.display="none"
    //qui commence le combat
    let decision = Math.random()
    let affichageDecision = document.getElementById("quiCommence")
    if(decision>0.5){
        console.log("le héro commence le combat")
        console.log(decision)
        affichageDecision.innerText = "le héro commence le combat"
        hero.fight(monstre.defence, monstre.attaque, monstre.sous, armMonstre)
    }else if(decision<0.5){
        console.log("le monstre commence le combat")
        console.log(decision)
        affichageDecision.innerText = "le monstre commence le combat"
        if(monstre.attaque>hero.defence){
            console.log("le monstre gagne")
            hero.looseWhenMonsterStart()
            console.log(hero.Pv)
            let pvHerotext = document.getElementById("pv-hero")
            pvHerotext.innerText = hero.pV
            //affichage defaite
            let messageDeDefaite = document.getElementById("message-de-defaite")
            messageDeDefaite.style.display = "block"
            let messageDeFuite = document.getElementById("message-de-fuite")
            messageDeFuite.style.display = "none"
            let messageDeVictoire = document.getElementById("message-de-victoire")
            messageDeVictoire.style.display = "none"
            //diminution du pv du hero et affichage
        }else if(hero.attaque > monstre.defence){
            let messageDeFuite = document.getElementById("message-de-fuite")
            messageDeFuite.style.display = "none"
            let messageDeVictoire = document.getElementById("message-de-victoire")
            messageDeVictoire.style.display = "block"
            let messageDeDefaite = document.getElementById("message-de-defaite")
            messageDeDefaite.style.display = "none"
            console.log("le monstre perd")
        }
        
    }
     if(hero.pV == 0){
         hero.die()
     }
    if(hero.xPHero == 50){
         hero.gameFinish()
     }
    RenduInventaire()
   
})

// Btn action Fuite...PAGE DOP.
const fuite = document.getElementById("fuir")
fuite.addEventListener("click",function(){
    console.log("Je prends La fuite")
      hero.fuir()
      fightBtn.style.display= "none"
      fuite.style.display="none"
       let messageDeFuite = document.getElementById("message-de-fuite")
       messageDeFuite.style.display = "block"
       let messageDeVictoire = document.getElementById("message-de-victoire")
       messageDeVictoire.style.display = "none"
       let messageDeDefaite = document.getElementById("message-de-defaite")
       messageDeDefaite.style.display = "none"
       
    //   localStorage.setItem("xp",hero.xPHero-1)
      expHero.innerText = hero.xPHero    
})


// Btn equiper 1
// let equiper = document.getElementById("equiper")
// equiper.addEventListener("click",function()
// {
//     if(equiper.value === "equipe"){
//         equiper.value = "desequipe";
//     }else{
//         equiper.value = "equipe";
//     }

//     console.log("Je Equipe Arm 1")
// })


// // Btn equiper 2
// const equiper2 = document.getElementById("equiper2")

// equiper2.addEventListener("click",function(){
//     console.log("Je Equipe Arm 2")
// })


// // Btn equiper 3
// const equiper3 = document.getElementById("equiper3")

// equiper3.addEventListener("click",function(){
//     console.log("Je Equipe Arm 3")
// })


// // Btn equiper 4
// const equiper4 = document.getElementById("equiper4")

// equiper4.addEventListener("click",function(){
//     console.log("Je Equipe Arm 4")
// })
//modal gab
let mymodal = document.getElementById("INVmodal");

let INV = document.getElementById("inventory");

let span = document.getElementsByClassName("close")[0];

INV.onclick = function() {
    mymodal.style.display = "block";
}

span.onclick = function() {
    mymodal.style.display = "none";
}
//intervention sur l'inventaire 
let emplacementInventaire = document.getElementById("emplacementInventaire")
function RenduInventaire(){
    emplacementInventaire.innerHTML= ""

    hero.sacDarmes.forEach(element => {
        
        emplacementInventaire.innerHTML += `
        <div class="col-6">
                                                <div class="card bordure">
                                                    <img src="../images/armes.png" class="card-img-top img-fluid"
                                                        alt="...">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${element.nom}</h5>
                                                        <p class="card-text">
                                                        <p>Attaque ${element.attaque}</p>
                                                        <p>Defence ${element.defence}</p>
                                                        <button type="button" id="equiper" value="equipe" class="btn btn-secondary btn-sm power-up">Equiper</button>
                                                    </div>
                                                </div>
        `
        
        
        
    });
}
RenduInventaire();

function renduMonstre(){
    let imageMonstre = document.getElementById("image-monstre")
    imageMonstre.innerHTML = `
    
    <img  class="img-fluid"src="../images/${monstre.name}.png" alt="">
    `
    
}
renduMonstre()

