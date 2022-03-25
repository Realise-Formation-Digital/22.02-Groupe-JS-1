class marchand extends Hero{
    name;
    xp;
    armes;
    constructor(name, xp, armes) {
        super(this.xPHero)
        this.name = name;
        this.xp = xp;
        this.armes = armes;
    }
    acheterArmeDuHero(){
        /**
         * il peut acheter n’importe quelle arme et donne 50% de la valeur de l’arme au héro
         */
    }
    vendreArme(){
        /**
         * il cède une de ses armes contre la valeur de l’arme
         * 
         */
    }
}

let marchand = new marchand("marchand", xp, armes);