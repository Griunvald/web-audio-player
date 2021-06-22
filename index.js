const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/songs', (req, res) => {
  res.sendFile('public/songs_list.json', { root: __dirname });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
