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
];

const songIndex = 0;
const currentSong = songsList[songIndex];

const initSong = () => {
  artist.innerText = currentSong.artist;
  title.innerText = currentSong.title;
  year.innerText = currentSong.year;
  audio.src = currentSong.file;
};
initSong();

play.addEventListener('click', () => {
  audio.play();
});
