const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Load content from data.json
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

app.get('/', (req, res) => res.render('index', { data }));
app.get('/about', (req, res) => res.render('about', { data }));
app.get('/projects', (req, res) => res.render('projects', { data }));
app.get('/contact', (req, res) => res.render('contact', { data }));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
