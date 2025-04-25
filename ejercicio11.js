const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
  // Sumamos todas las duraciones
  const totalDuration = movies.reduce((sum, movie) => sum + movie.duration, 0);
  
  // Calculamos el promedio dividiendo la suma entre la cantidad de películas
  const average = totalDuration / movies.length;
  
  return average;
}

console.log(averageMovieDuration(movies)); // Imprime el promedio de la duración de las películas
