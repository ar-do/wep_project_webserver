const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;


// Sends all static files to client (like css, js etc.), Files are located in public directory
app.use(express.static('public'));
app.use(fileUpload());

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

app.post('/upload', (req, res) => {

    const fileName = req.files.myFile.name
    const image = req.files.myFile;
    const path = __dirname + '/public/img/' + fileName
  
    image.mv(path, (error) => {
      if (error) {
        console.error(error)
        res.writeHead(500, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ status: 'error', message: error }))
        return
      }
  
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ status: 'success', path: '/public/img/' + fileName }))
    })
});


app.listen(port, () => console.log('Published on Port 8080'));