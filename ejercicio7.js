const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

let categorizedTracks = {};

// Bucle para recorrer las canciones
for (const track of tracks) {
  const genre = track.genre;
  const title = track.title;

  // Si el género ya está en el objeto, agregar la canción al array
  if (categorizedTracks[genre]) {
    categorizedTracks[genre].push(title);
  } else {
    // Si el género no está en el objeto, crear una nueva clave con un array de canciones
    categorizedTracks[genre] = [title];
  }
}

// Imprimir el objeto resultante
console.log(categorizedTracks);
