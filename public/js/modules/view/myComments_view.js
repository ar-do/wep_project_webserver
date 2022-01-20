import * as Helper from '../helper.js';

function displayMyComments(username, url) {
    const newUrl = url + "/user?user=" + username;
    
    Helper.httpGet(newUrl).then((response) => {
        for(let i = 0; i< response.length; i++){
            buildMyComments(response[i].Id, response[i].Content, response[i].Username, response[i].ArticleID)
        }
    })
}

function buildMyComments(id, content, usern, articleid) {

    let myArticles_container = document.getElementById("container-articles");

    let singleArticle_container = document.createElement("div");
    singleArticle_container.className="container-single-article";


    let content_container = document.createElement("div");
    content_container.className = "container-single-article-content";

    let content_container_title = document.createElement("h3");
    content_container_title.className ="container-single-article-content-title";

    let content_container_introtxt = document.createElement("p");
    content_container_introtxt. className = "container-single-article-content-introtxt";

    let content_container_title_ = document.createTextNode(usern);
    let content_container_introtxt_ = document.createTextNode(content);

    content_container_title.appendChild(content_container_title_);
    content_container_introtxt.appendChild(content_container_introtxt_);
    

    content_container.appendChild( content_container_title);
    content_container.appendChild(content_container_introtxt);

    let content_container_controlls = document.createElement("div");
    content_container_controlls.className = "container-single-article-controlls";

    let content_container_controlls_btn_d = document.createElement("button");
    content_container_controlls_btn_d.type = "button";
    content_container_controlls_btn_d.classList.add("btn", "btn-danger", "btn-article-controll");
    content_container_controlls_btn_d.id = id;
    content_container_controlls_btn_d.setAttribute('data-bs-toggle', 'modal');
    content_container_controlls_btn_d.setAttribute('data-bs-target', '#exampleModal');

    content_container_controlls_btn_d.addEventListener('click', () => {
        let modal_element = document.getElementById("comment-id");
        modal_element.textContent = id;

    })
   

    let content_container_controlls_btn_d_icon = document.createElement("ion-icon");
    content_container_controlls_btn_d_icon.size = "large";
    content_container_controlls_btn_d_icon.name = "trash-outline";

    content_container_controlls_btn_d.appendChild(content_container_controlls_btn_d_icon);

    let content_container_controlls_btn_e = document.createElement("button");
    content_container_controlls_btn_e.type = "button";
    content_container_controlls_btn_e.classList.add("btn", "btn-light", "btn-article-controll");
    content_container_controlls_btn_e.id = id;
    content_container_controlls_btn_e.setAttribute('data-bs-toggle', 'modal');
    content_container_controlls_btn_e.setAttribute('data-bs-target', '#exampleModalt');

    let content_container_controlls_btn_e_icon = document.createElement("ion-icon");
    content_container_controlls_btn_e_icon.size = "large";
    content_container_controlls_btn_e_icon.name = "create-outline";

    content_container_controlls_btn_e.appendChild(content_container_controlls_btn_e_icon);

    content_container_controlls.appendChild(content_container_controlls_btn_d);
    content_container_controlls.appendChild(content_container_controlls_btn_e);

    singleArticle_container.appendChild(content_container);
    singleArticle_container.appendChild(content_container_controlls);

    myArticles_container.appendChild(singleArticle_container);
}

export {displayMyComments}