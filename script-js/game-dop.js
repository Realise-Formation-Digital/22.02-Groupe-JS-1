// -----EVENTLISTENER PAGE DOP.--------
import { Hero } from './hero.js';
let hero = new Hero(100,100,100,1,[], 1000)
import { Monster } from './monstre.js'
let monstre = new Monster("Troll",10,"massue",hero.xPHero)

let messageDeVictoire = document.getElementById("message-de-victoire")
let messageDeDefaite = document.getElementById("message-de-defaite")

//affichhage de l'experience du hero
let expHero = document.getElementById("exp-hero")
expHero.innerText = hero.xPHero
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
    //qui commence le combat
    let decision = Math.random()
    if(decision>0.5){
        console.log("le héro commence le combat")
        console.log(decision)
        hero.fight(monstre.defence, monstre.attaque, monstre.sous)
    }else if(decision<0.5){
        console.log("le monstre commence le combat")
        console.log(decision)
        monstre.fight(hero.attaque, hero.defence)
    }
    // hero.fight(monstre)
})

// Btn action Fuite...PAGE DOP.
const fuite = document.getElementById("fuir")
fuite.addEventListener("click",function(){
    console.log("Je prends La fuite")
      hero.fuir()
      
      expHero.innerText = hero.xPHero    
})
//  if(hero.pV == 0){
//      console.log("die")
//      hero.die()
//  }

// Btn equiper 1
let equiper = document.getElementById("equiper")
equiper.addEventListener("click",function()
{
    if(equiper.value === "equipe"){
        equiper.value = "desequipe";
    }else{
        equiper.value = "equipe";
    }

    console.log("Je Equipe Arm 1")
})


// Btn equiper 2
const equiper2 = document.getElementById("equiper2")

equiper2.addEventListener("click",function(){
    console.log("Je Equipe Arm 2")
})


// Btn equiper 3
const equiper3 = document.getElementById("equiper3")

equiper3.addEventListener("click",function(){
    console.log("Je Equipe Arm 3")
})


// Btn equiper 4
const equiper4 = document.getElementById("equiper4")

equiper4.addEventListener("click",function(){
    console.log("Je Equipe Arm 4")
})


