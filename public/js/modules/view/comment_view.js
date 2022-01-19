import * as Helper from '../helper.js';

function displayComment(id, url) {
    const newUrl = url + "/articleid?id=" + id;
    let comment_count = document.getElementById("comment-count");
    
    Helper.httpGet(newUrl).then((response) => {
        let comment_count_ = document.createTextNode(response.length);
        comment_count.appendChild(comment_count_);
        for(let i = 0; i<response.length;i++){
            buildComment(response[i].Username, response[i].Content);
        }
    });
}

function buildComment(cusername, ctxt) {

    let comments_container = document.getElementById("article-container-comment");
   
    let single_comment_container = document.createElement("div")
    single_comment_container.className = "article-comment-f";

    let comment_header = document.createElement("div");
    comment_header.className = "article-comment-header-f";

    single_comment_container.appendChild(comment_header);

    let comment_header_text = document.createElement("h4");
    comment_header_text.className = "comment-header-txt";

    comment_header.appendChild(comment_header_text);

    let comment_header_text_ = document.createTextNode(cusername);

    comment_header_text.appendChild(comment_header_text_);
    
    

    let comment_content = document.createElement("div");
    comment_content.className = "article-comment-content-f";

    let comment_content_text = document.createElement("p");
    comment_content_text.className = "comment-content-txt";

    let comment_content_text_ = document.createTextNode(ctxt);

    comment_content_text.appendChild(comment_content_text_);
    comment_content.appendChild(comment_content_text);    
    single_comment_container.appendChild(comment_content);
    

    comments_container.appendChild(single_comment_container);

}


export {buildComment, displayComment};

