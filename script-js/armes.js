class Armes{
    nom;
    defence;
    attaque;
    prix;
  
   //Definition
      constructor(nom, defence, attaque, prix){
       this.nom = nom;
       this.defence = defence;
       this.attaque = attaque;
       this.prix = prix;
   }
  
   
  
  
  }
  //proprietes pour chaque arme 
  
  var arme1 = new Armes("arme1",20, 20, 10);
  var arme2 = new Armes("arme2",30, 30, 20);
  var arme3 = new Armes("arme3",40, 40, 30);
  var arme4 = new Armes("arme4",50, 50, 40);