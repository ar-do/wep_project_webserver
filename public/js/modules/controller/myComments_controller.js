import * as Config from '../config.js';
import * as Helper from '../helper.js';


if(window.location.href.includes('/myComments') !== false)
{

    let btn_delete_article = document.getElementById("btn_delete_comment");

    btn_delete_article.addEventListener("click", () => {

        // Get content of article
        const id = document.getElementById("comment-id").textContent;
        const url = Config.baseurl_comment + "/" + id;
        
        Helper.httpDelete(url);
        location.reload();
    });

}
