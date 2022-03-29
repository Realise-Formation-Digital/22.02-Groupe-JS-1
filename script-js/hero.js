 export class Hero {
    pV;
    xPHero;
    attaque;
    defence;
    sacDarmes = [];
    sous;
    
    constructor(pV,xPHero,attaque,defence,sacDarmes,sous){
        this.pV = pV
        this.xPHero = xPHero
        this.attaque = attaque
        this.defence = defence
        this.sacDarmes = sacDarmes
        this.sous = sous
    }
   
    
   fight(monstreDef,monstreAtt, monstreSous ,monstreArme){
       console.log("je combat")
        let messageDeVictoire = document.getElementById("message-de-victoire")
        let messageDeDefaite = document.getElementById("message-de-defaite")
        let sousHero = document.getElementById("gold-hero")
        if(this.attaque>monstreDef){
           this.win(monstreSous, monstreArme)
        }else if(monstreAtt>this.defence){
            this.loose()
            console.log("j ai perdu")
        }
        
   }
   win(monstreSous, monstreArme){
    let messageDeVictoire = document.getElementById("message-de-victoire")
    let sousHero = document.getElementById("gold-hero")
    this.sous += monstreSous
    sousHero.innerText = this.sous
    let expHero = document.getElementById("exp-hero")
    this.xPHero++
    expHero.innerText= this.xPHero
    messageDeVictoire.style.display = "block"
    this.sacDarmes.push(monstreArme)
    console.log(this.sacDarmes)
    
}
   loose(){
    let messageDeDefaite = document.getElementById("message-de-defaite")
    messageDeDefaite.style.display = "block"
    let pvHero = document.getElementById("pv-hero")
    this.pV--
    pvHero.innerText = this.pV

}
   fuir(){
      console.log("le hero prends la fuite")
    this.xPHero--
    
    if(this.xPHero <1){
        this.xPHero = 0
    }
     console.log(this.xPHero)
        
    
   }
   die(){
       /*
       si le pV du héro atteint 0 => hero meurt 
                                    gameover la partie est terminée
       */
        console.log("Gameover")
        window.location.href = "../pages.html/gameOver.html"
      
   }
   equiper(){
       /** 
        * La force et l’endurance de l’arme, s’ajoute à la force et l’endurance
            du héro tant que l’arme est équipée.
        * Une arme équipée ne peut pas être vendue
       */
   }
   desequiper(){
       /**
        * La force et l’endurance de l’arme, s’enlève à la force et l’endu-
rance du héro une fois l’arme déséquipée.
        * Une arme déséquipée peut être désormais être
        vendue
        */
   }
   acheterArme(){
       /**
        * Il est possible d’acheter une arme à un marchant qui a au moins le même
nombre de point d’expérience que le héro et échanger le nombre de sous contre le prix de
l’arme
        */
   }
   vendreArme(){
       /**
        * Il est possible de vendre une arme déséquipée à n’importe
quel marchant et recevoir 50% du prix de l’arme
        */
   }
   acheterDefence(){
        /**
         * acheter un point de défence contre 100sous
         */
   }
   acheterAttaque(){
        /**
         * acheter un point d'attaque contre 100sous
         */
   }
   gagnerLaPartie(){
       /**
        * si le héro atteint 50xp tu as gagné la partie
        */
   }
}

//let hero = new hero(10,1,1,1,["épee","hache"], 1000)


