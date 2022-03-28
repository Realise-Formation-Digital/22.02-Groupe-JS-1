export class Armes{
    nom;
    defence;
    attaque;
    prix;
  
   //Definition
      constructor(nom, prix, xPHero){
       this.nom = nom;
       this.defence = Math.floor(Math.random() * xPHero +1);
       this.attaque = Math.floor(Math.random() * xPHero +1);
       this.prix = prix;
   }
  
   
  
  
  }
  //proprietes pour chaque arme 
  
  var arme1 = new Armes("arme1",20, 20, 10);
  var arme2 = new Armes("arme2",30, 30, 20);
  var arme3 = new Armes("arme3",40, 40, 30);
  var arme4 = new Armes("arme4",50, 50, 40);