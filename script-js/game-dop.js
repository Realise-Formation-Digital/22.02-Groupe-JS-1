// -----EVENTLISTENER PAGE DOP.--------
import { Hero } from './hero.js';
let expHero = document.getElementById("exp-hero")

// Btn action Fuite...PAGE DOP.
const fuite = document.getElementById("fuir")
 let hero = new Hero(10,1,1,1,[], 1000)
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


