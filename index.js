const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the server!' });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
