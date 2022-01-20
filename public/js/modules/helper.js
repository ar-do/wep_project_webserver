
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

export { httpGet, httpPost};