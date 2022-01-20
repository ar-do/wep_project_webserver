import * as Config from '../config.js';
import * as Helper from '../helper.js';


if(window.location.href.includes('/myArticles') !== false)
{

    let btn_delete_article = document.getElementById("btn_delete_article");

    btn_delete_article.addEventListener("click", () => {

        // Get content of article
        const id = document.getElementById("article-id").textContent;
        const url = Config.baseurl_article + "/" + id;
        
        Helper.httpDelete(url);
        location.reload();
    });

}
