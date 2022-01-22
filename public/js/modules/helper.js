async function httpGet(url){
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
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

async function httpDelete(url) {
    const response = await fetch(url, { method: 'DELETE'});
    return response;
}

function getCookie(cookieName) {
    let CookieName = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split('; ');
    for(let i = 0; i < ca.length; i++) {
      if (ca[i].includes(CookieName) == true) {
        let foundCookie = ca[i].split(',');
        let seperateCookieName = foundCookie[0].split('=');
        foundCookie.splice(0, 1, seperateCookieName[0], seperateCookieName[1]);
        
        return foundCookie;
      }
    }
    return "";  
}

function splitCookieAttributes(index) {
   let result = index.split(":");
   return result;
}

function getUsernameFromCookie(){
    const un = splitCookieAttributes(getCookie("session")[1])[1];
    return un;
}

function getUserIDFromCookie(){
    const id = splitCookieAttributes(getCookie("session")[3])[1];
    return id;
}

export {    httpGet, 
            httpPost, 
            httpDelete, 
            getCookie, 
            splitCookieAttributes,
            getUsernameFromCookie,
            getUserIDFromCookie };