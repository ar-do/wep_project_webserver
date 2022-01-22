const express = require('express');
const fileUpload = require('express-fileupload');
const sharp = require('sharp');
const fsExtra = require('fs-extra');
const app = express();
const port = 3000;


// Sends all static files to client (like css, js etc.), Files are located in public directory

// Only do if authenticated (cookie is there)
app.use(express.static('public'));
app.use(fileUpload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/templates/login.html');
});
app.get('/article', (req, res) => {
    res.sendFile(__dirname + '/templates/article.html');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/templates/search.html');
});

app.get('/createArticle', (req, res) => {
    res.sendFile(__dirname + '/templates/createArticle.html');
});

app.get('/myArticles', (req, res) => {
    res.sendFile(__dirname + '/templates/myArticles.html');
});

app.get('/myComments', (req, res) => {
    res.sendFile(__dirname + '/templates/myComments.html');
});

app.post('/upload', (req, res) => {
    const image = req.files.myFile;
    const fileName = req.files.myFile.name;
    const newFileName = req.files.tempFile.name;
   
    // Path to a temp folder
    const path = __dirname + '/img_dump/' + fileName;

    // Path to the img folder where imgs get loadad
    const out_path = __dirname + '/public/img/' + newFileName;

    // move image to temp folder
    image.mv(path, (error) => {
      if (error) {
        console.error(error)
        res.writeHead(500, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ status: 'error', message: error }));
        return
      }

      // Compress the file (from temp folder) and save it into the public/img folder.
      sharp(path).resize({ width: 500}).toFile(out_path).then((newFileInfo) => {
        console.log("File Uploaded to" + out_path);
        // Remove FIles from temp folder
        const fileDir = __dirname + "/img_dump/";
        fsExtra.emptyDirSync(fileDir)
        console.log(fileDir + " cleared");
      }).catch((err) => {
        console.log(err);
      });
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ status: 'success', path: '/public/img/' + fileName }));
    });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});


app.listen(port, () => console.log('Published on Port 3000'));