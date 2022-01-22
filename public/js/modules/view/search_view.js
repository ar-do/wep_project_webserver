import * as Helper from '../helper.js';

function displayFoundArticles(q, url) {
    const newUrl = url + "/search?search=" + q; 
    const search_value = document.getElementById("search-query");   
    Helper.httpGet(newUrl).then((response) => {

        if(response.length != 0) {
            for(let i = 0; i<response.length;i++){
                buildArticleCard(response[i].Id, response[i].Image, response[i].Title, response[i].Intro, response[i].Author);
            }
            search_value.value = q;
        }else{
            // Display no found message later
            console.log("Keine Artikel gefunden");
        }

    });
}

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


export { displayFoundArticles };