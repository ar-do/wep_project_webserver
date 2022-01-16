import * as Helper from '../helper.js';

function displayAllArticleCards(url) {
    Helper.httpGet(url).then((response) => {
        for(let i = 0; i<response.length;i++){
            buildArticleCard(response[i].Id, response[i].Image, response[i].Title, response[i].Intro, response[i].Author);
        
        }
    });
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


export { displayAllArticleCards };