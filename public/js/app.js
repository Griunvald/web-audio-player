let songsList;

fetch('http://localhost:3000/songs_list.json')
  .then((response) => response.json())
  .then((data) => {
    songsList = data;
    onSongsReturn(songsList);
  });

const onSongsReturn = (songsList) => {
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
};
