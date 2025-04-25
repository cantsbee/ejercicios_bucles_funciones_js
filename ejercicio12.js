const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const foundMutants = mutants.filter(mutant => mutant.power === power);

  if (foundMutants.length > 0) {
    return `Se encontraron ${foundMutants.length} mutante(s) con el poder ${power}: ${foundMutants.map(mutant => mutant.name).join(', ')}`;
  } else {
    return `No se encontraron mutantes con el poder ${power}.`;
  }
}
