  import { Hero } from './hero.js';

export class Monster{
    
    name;
    xp;
    attaque;
    defence;
    sous;
    armeMonstre;
    xPHero;
    
    constructor( sous, xPHero,pvHero, armeMonstre, nameArray) {

        this.name = nameArray[Math.floor(Math.random()*7)];
        this.xp = Math.floor(Math.random() * xPHero +1) +((70*xPHero)/100);
        this.attaque = Math.floor(Math.random() * this.xp +1)
        this.defence = Math.floor(Math.random() * this.xp +1)
        this.sous = Math.floor(Math.random()*100);
        this.armeMonstre = armeMonstre;
        this.xPHero = xPHero;
        this.pvHero = pvHero;
    }
 
    

  
    

}
