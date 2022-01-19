import * as Helper from '../helper.js';

function displayArticle(id, url) {
    const newUrl = url + "/" + id;
    Helper.httpGet(newUrl).then((response) => {
        buildArticleFullView(response);
    });
}

function buildArticleFullView(response) {
    // Add Img
    let article_img = document.getElementById("article-img-f");
    article_img.src = response.Image;

    // Add Title
    let article_title = document.getElementById("article-title-f");
    let article_title_h1 = document.createTextNode(response.Title);
    article_title.appendChild(article_title_h1);

    // Add Introtext
    let article_introtxt = document.getElementById("article-introtxt-f");
    let article_introtxt_h3 = document.createTextNode(response.Intro);
    article_introtxt.appendChild(article_introtxt_h3);

    // Add Text
    let article_body = document.getElementById("article-body-f");
    let article_body_p = document.createElement("p");
    let article_body_text = document.createTextNode(response.Content);
    article_body.appendChild(article_body_p);
    article_body_p.appendChild(article_body_text);
    
}

export { displayArticle };