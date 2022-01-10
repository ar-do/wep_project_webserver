import * as Controller from './controller.js';
import * as Helper from './helper.js';

function displayAllArticleCards(url) {
    Helper.httpGet(url).then((response) => {
        for(let i = 0; i<response.length;i++){
            buildArticleCard(response[i].Id, response[i].Image, response[i].Title, response[i].Intro, response[i].Author);
        
        }
    });
}
function displayArticle(id, url) {
    const newUrl = url + "/" + id;
    console.log(newUrl);
    Helper.httpGet(newUrl).then((response) => {
        buildArticleFullView(response);
    });
}

function buildArticleFullView(response) {
    console.log(response);
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

/************************************************************************************************** */
/*  This function does create the Articles on the Frontpage. The function does Inject HTML Tags
    into the DOM. Looks like that:

                <div class="card-row">
                    <a href="#" class="card-a">                
                        <div class="card article-tile" >
                            <img src="" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </a>   
                </div>

/************************************************************************************************** */
function buildArticleCard(id, img_src, defaultTitle, defaultText, defaultUsername) {

    // Create Parent Div
        let containerPosts = document.getElementById("ContainerContent");
        let post = document.createElement("div");

        post.className = "card-row";
           
             // Create Link
            let post_a = document.createElement("a");
            post_a.className = "card-a";
            post_a.href = "/article?id=" + id + "&title=" + defaultTitle;

           
            // Create Header
            let post_header = document.createElement("div");
            post_header.className ="card article-tile";
    
                let img_post_header = document.createElement("img");
                img_post_header.className ="card-img-top";
                img_post_header.src = img_src;
            
            post_header.appendChild(img_post_header);

            // Create Title
            let post_title = document.createElement("div");
            post_title.className = "card-body";
    
                let h5_post_title = document.createElement("h5");
                let h5_post_title_text = document.createTextNode(defaultTitle);
                h5_post_title.className = "card-title";
                h5_post_title.appendChild(h5_post_title_text);
    
            post_title.appendChild(h5_post_title);

            // Create Username 
            let post_username = document.createElement("p");
            post_username.className = "card-user";

                let post_username_text = document.createTextNode(defaultUsername);
                post_username.appendChild(post_username_text);

            // Create Text
    
                let p_post_text = document.createElement("p");
                let p_post_text_text = document.createTextNode(defaultText);
                p_post_text.className = "card-text";
                p_post_text.appendChild(p_post_text_text);
            
            post_title.appendChild(post_username);    
            post_title.appendChild(p_post_text);
        
        // Output de Div in order
        post_header.appendChild(post_title);
        post_a.appendChild(post_header);
        post.appendChild(post_a);
        containerPosts.appendChild(post);
}

export { buildArticleCard, displayAllArticleCards, displayArticle};