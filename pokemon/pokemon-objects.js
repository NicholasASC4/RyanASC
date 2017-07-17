var pokemonRoster = [[],[],[],[][][]]
function printRoster(name,type,hp,atk,def,legend){
this.name = name;
this.type = type;
this.hp = hp;
this.atk = atk;
this.def = def;
this.legend = legend; }

var Dragonite = new printRoster('Dragonite',['Dragon and Flying'],200,120,150,false);
var Arceus = new printRoster('Arceus','Normal',120,120,120,true);
var Charizard = new printRoster('Charizard'['Fire and Flying'], 200,120,150,false);
var Greninja = new printRoster('Greninja'['Water and Dark'],72,145,67,false);
var Electivire = new printRoster('Electivire','Electric',75,123,67,false);
var Lugia = new printRoster('Lugia',['Psychic and Flying'],106,90,130,true);

console.log(Dragonite);
console.log(Arceus);
console.log(Charizard);
console.log(Greninja);
console.log(Electivire);
console.log(Lugia);






