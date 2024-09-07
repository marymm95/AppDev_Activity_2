const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/home', (req, res) => {
    res.render('home');
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});