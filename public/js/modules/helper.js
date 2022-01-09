
async function httpGet(url){
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    return myJson;
}

async function httpPost(url, data){
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    const response = await fetch(url, config);
    if (response.ok){
        return response;
    }

    } catch (error) {

      }
}

function dateiauswahl(evt) {

    var dateien = evt.target.files; // FileList object

    // Auslesen der gespeicherten Dateien durch Schleife
    for (var i = 0, f; f = dateien[i]; i++) {

      // nur Bild-Dateien
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          // erzeuge Thumbnails.
          var vorschau = document.createElement('img');
		  vorschau.className = 'thumb';
		  vorschau.src   = e.target.result;
		  vorschau.title = theFile.name;
          document.getElementById('list').insertBefore(vorschau, null);
        };
      })(f);

      // Bilder als Data URL auslesen.
      reader.readAsDataURL(f);
    }
  }
 

export { httpGet, httpPost, dateiauswahl};