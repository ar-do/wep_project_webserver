import * as Config from '../config.js';
import * as Helper from '../helper.js';
import * as myArticle_View from '../view/myArticles_view.js';


if(window.location.href.includes('/myArticles') == true)
{

    const un = Helper.getUsernameFromCookie();
    myArticle_View.displayMyArticles(un, Config.baseurl_article);

    let btn_delete_article = document.getElementById("btn_delete_article");

    btn_delete_article.addEventListener("click", () => {

        // Get content of article
        const id = document.getElementById("article-id").textContent;
        const url = Config.baseurl_article + "/" + id;
        
        Helper.httpDelete(url);
        location.reload();
    });

}
