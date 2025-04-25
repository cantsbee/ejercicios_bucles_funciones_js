const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  // Verificamos si el país existe en el objeto capitals
  if (capitals[country]) {
    return `La capital de ${country} es ${capitals[country]}.`;
  } else {
    return `El país ${country} no está en la lista.`;
  }
}

// Ejemplos de uso
console.log(getCapital('Spain')); // La capital de Spain es Madrid.
console.log(getCapital('Italy')); // La capital de Italy es Rome.
console.log(getCapital('USA'));   // El país USA no está en la lista.
