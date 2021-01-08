//object key,entries,value
let westeros = {
    cersei :'Lannister',
    arya:'Stark',
    jon:'Snow',
    brienne:'Tarth',
    daenerys:'Targaryen',
    theon:'Greyjoy',
    jorah:'Mormont',
    margaery:'Tyrell',
    sandor:"Clegane",
    samwell:'Tarly',
    ramsay:'Bolton'
}

let keys = Object.keys(westeros);
console.log('Keys',keys);
let values = Object.values(westeros)
console.log(values);
let entries = Object.entries(westeros)
console.log('Entries' ,entries);
console.log(entries[2][1])