class monster extends Hero{
    name;
    xp;
    attaque;
    defence;
    sous;
    armeMonstre;
    constructor(name, sous, armeMonstre) {
        super(this.xPHero)
        this.name = name;
        // this.attaque = attaque;
        // this.defence = defence;
        // this.xp = xp;
        this.sous = sous;
        this.armeMonstre = armeMonstre;
    }
    randomstats(){
        this.xp = Math.floor(Math.random() * this.xPHero +1) +((50*this.xPHero)/100);
        this.attaque = Math.floor(Math.random() * this.xp +1)
        this.defence = Math.floor(Math.random() * this.xp +1)
    }
    fight() {
        /**
         * combattre (S’il meurt, le héro récupère ses sous et l’arme du monstre et gagne 1 point d’ex-
périence. S’il gagne contre le héro, le héro perd un point de vie)
         */

    }

}