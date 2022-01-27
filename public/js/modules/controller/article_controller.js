import * as Model from '../model.js';
import * as Config from '../config.js';
import * as Helper from '../helper.js';
import * as Article_View from '../view/article_view.js';
import * as Comment_View from '../view/comment_view.js';

if(window.location.href.includes('/article') == true)
{
    const Params = new URLSearchParams(window.location.search);
    const _id = Params.get('id');
    Article_View.displayArticle(_id, Config.baseurl_article);
    Comment_View.displayComment(_id, Config.baseurl_comment);

    let btn_submit_comment = document.getElementById("btn_submit_comment");

    btn_submit_comment.addEventListener("click", () => {

        // Get content of textarea
        const comment = document.getElementById("comment-text").value;

        if(comment != "") {
             // Get ID from Article (extracted from url)
            const Params = new URLSearchParams(window.location.search);
            const _id = Params.get('id');
            const userid = Helper.getUserIDFromCookie();
            const commentdata = {
                content: comment,
                userid: userid,
                articleid: _id
            }
    
            Model.createComment(commentdata);
            location.reload();
        }else{
            const _alert = document.getElementById("alert-comment");
            _alert.classList.add("show");
        }  
 
    });

    let c_alert = document.getElementById("alert-comment");
    c_alert.addEventListener('click', () => {
        c_alert.classList.remove("show");
    });

}

