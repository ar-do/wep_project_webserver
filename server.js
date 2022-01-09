const express = require('express');
const app = express();
const port = 3000;


// Sends all static files to client (like css, js etc.), Files are located in public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    
    //Check if User is Authenticated or not, if yes forward him to homepage. If not force to authenticate
    res.sendFile(__dirname + '/index.html');

});
app.get('/article', (req, res) => {
    res.sendFile(__dirname + '/article.html');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/search.html');
});

app.get('/createArticle', (req, res) => {
    res.sendFile(__dirname + '/createArticle.html');
});

app.get('/myArticles', (req, res) => {
    res.sendFile(__dirname + '/myArticles.html');
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html');
});


app.listen(port, () => console.log('server listening...'));