let songsList;

fetch('http://localhost:3000/songs_list.json')
  .then((response) => response.json())
  .then((data) => {
    songsList = data;
    onSongsReturn(songsList);
  });

const onSongsReturn = (songsList) => {
  let songIndex = 0;

  const initSong = () => {
    album_cover.src = songsList[songIndex].cover;
    artist.innerText = songsList[songIndex].artist;
    title.innerText = songsList[songIndex].title;
    year.innerText = songsList[songIndex].year;
    audio.src = songsList[songIndex].file;
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
    if (songIndex > songsList.length - 1) {
      songIndex = 0;
    }
    initSong();
  });

  backward.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songsList.length - 1;
    }
    initSong();
  });
};

const prettyTime = (t) => {
  let minutes = Math.floor(t / 60);
  if (minutes < 10) minutes = '0' + minutes;
  let seconds = Math.floor(t % 60);
  if (seconds < 10) seconds = '0' + seconds;
  return `${minutes}:${seconds}`;
};

audio.addEventListener('timeupdate', (e) => {
  const { currentTime, duration } = e.srcElement;

  const currentPosition = (currentTime / duration) * 100;
  progress_bar.style.width = `${currentPosition}%`;

  console.log(prettyTime(currentTime));
  console.log(prettyTime(duration));
});
