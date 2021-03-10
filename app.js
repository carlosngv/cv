require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');
const {sendMail} = require('./controllers/mail.controller');

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/download', (req, res) => {
    res.download(__dirname  + '/public/cv.pdf');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.post('/sendMail', (req, res) => {
    console.log(req.body);
    const { email, message, name} = req.body
     sendMail(email, message, name, (res) => {
        console.log(res);
    });

    res.status(202).json({
        msg: "ok"
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
