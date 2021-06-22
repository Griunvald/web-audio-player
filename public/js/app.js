const songsList = fetch('http://localhost:3000/songs_list.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
