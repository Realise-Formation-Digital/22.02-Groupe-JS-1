// import { Hero } from './hero.js';

export class Monster {
    name;
    xp;
    attaque;
    defence;
    sous;
    armeMonstre;
    xPHero;
    constructor(name, sous, armeMonstre, xPHero) {
        
        this.name = name;
        this.xp = Math.floor(Math.random() * xPHero +1) +((70*xPHero)/100);
        this.attaque = Math.floor(Math.random() * this.xp +1)
        this.defence = Math.floor(Math.random() * this.xp +1)
        this.sous = sous;
        this.armeMonstre = armeMonstre;
        this.xPHero = xPHero;
    }
 
    fight(heroAttaque,heroDefence) {
        /**
         * combattre (S’il meurt, le héro récupère ses sous et l’arme du monstre et gagne 1 point d’ex-
périence. S’il gagne contre le héro, le héro perd un point de vie)
         */
        if(this.attaque>heroDefence){
            console.log("le monstre gagne")
            this.Monstrewin()
        }else if(heroAttaque>this.defence){
           this.monstreLoose()
            console.log("le monstre perd")
        }


    }
    Monstrewin(){
        let messageDeDefaite = document.getElementById("message-de-defaite")
        messageDeDefaite.style.display = "block"

    }
    monstreLoose(){
        let messageDeVictoire = document.getElementById("message-de-victoire")
        messageDeVictoire.style.display = "block"

    }

}
