require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res) => {
    res.render('404');
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
