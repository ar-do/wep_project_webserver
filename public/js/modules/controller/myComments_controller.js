import * as Config from '../config.js';
import * as Helper from '../helper.js';
import * as myComment_View from '../view/myComments_view.js';


if(window.location.href.includes('/myComments') !== false)
{

    const un = Helper.getUsernameFromCookie();
    myComment_View.displayMyComments(un, Config.baseurl_comment)

    let btn_delete_article = document.getElementById("btn_delete_comment");

    btn_delete_article.addEventListener("click", () => {

        // Get content of article
        const id = document.getElementById("comment-id").textContent;
        const url = Config.baseurl_comment + "/" + id;
        
        Helper.httpDelete(url);
        location.reload();
    });

}
