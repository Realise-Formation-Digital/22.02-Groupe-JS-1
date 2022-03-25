 export class Hero {
    pV;
    xPHero = 1;
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
   
    
   fight(){
       /*si le héro bat le monstre
       
        le héro récupère l'argent du monstre +
                         l'arme du monstre
                         + 1 point d'expérience
        si le héro perd => points de vie -1*/
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
