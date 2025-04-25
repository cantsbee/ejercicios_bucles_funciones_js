const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestCartoon = cartoons[0]; // Empezamos con el primer cartoon como el más antiguo

for (const cartoon of cartoons) {
  if (cartoon.debut < oldestCartoon.debut) {
    oldestCartoon = cartoon; // Si encontramos una más antigua, actualizamos la variable
  }
}


console.log('La serie de dibujos animados más antigua es:', oldestCartoon.name);
