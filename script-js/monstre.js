class monster {
    name;
    xp;
    attaque;
    defence;
    sous;
    arme;
    constructor(name, sous, arme) {
        this.name = name;
        // this.attaque = attaque;
        // this.defence = defence;
        // this.xp = xp;
        this.sous = sous;
        this.arme = arme;
    }
    randomstats(){
        this.xp = Math.floor(Math.random() * 50 +1);
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