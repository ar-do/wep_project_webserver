import * as Model from '../model.js';
import * as Config from '../config.js';

if(window.location.href.includes('/article') !== false)
{

    let btn_submit_comment = document.getElementById("btn_submit_comment");

    btn_submit_comment.addEventListener("click", () => {

        // Get content of textarea
        const comment = document.getElementById("comment-text").value;
        // Get ID from Article (extracted from url)
        const Params = new URLSearchParams(window.location.search);
        const _id = Params.get('id');

        const commentdata = {
            content: comment,
            userid: Config._userid,
            articleid: _id
        }

        Model.createComment(commentdata);
        location.reload();
    });

}

