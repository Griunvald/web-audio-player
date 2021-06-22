// const songsList = fetch('http://localhost:3000/songs_list.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log(songsList);

const songsList = [
  {
    artist: 'Led Zeppelin',
    title: 'Good Times Bad Times',
    year: '1969',
    cover: 'images/led_zeppelin.png',
    file: 'songs/1.mp3',
  },
  {
    artist: 'The Rolling Stones',
    title: 'Gimmi Shelter',
    year: '1969',
    cover: 'images/rolling_stones.jpg',
    file: 'songs/2.mp3',
  },
  {
    artist: 'Jimy Hendrix',
    title: 'Foxy Lady',
    year: '1967',
    cover: 'images/jimy_hendrix.jpg',
    file: 'songs/3.mp3',
  },
];

let songIndex = 2;
let currentSong = songsList[songIndex];
console.log(currentSong);

const initSong = () => {
  album_cover.src = currentSong.cover;
  artist.innerText = currentSong.artist;
  title.innerText = currentSong.title;
  year.innerText = currentSong.year;
  audio.src = currentSong.file;
};
initSong();

play.addEventListener('click', () => {
  const playButton = document.getElementById('play');
  isPlaying = playButton.classList.contains('fa-pause');
  console.log(isPlaying);
  if (isPlaying) {
    playButton.classList.remove('fa-pause');
    audio.pause();
    playButton.classList.add('fa-play');
  } else if (!isPlaying) {
    audio.play();
    playButton.classList.add('fa-pause');
  }
});

forward.addEventListener('click', () => {
  songIndex++;
  initSong();
  console.log(songIndex);
  console.log(currentSong);
});
