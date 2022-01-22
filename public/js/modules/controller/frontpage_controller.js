import * as Front_View from '../view/frontpage_view.js';
import * as Config from '../config.js';


// Root (localhost:3000)
if(window.location.href.includes('/') !== false 
&& window.location.href.includes('?') == false
&& window.location.href.includes('/article') == false
&& window.location.href.includes('/search') == false
&& window.location.href.includes('/createArticle') == false
&& window.location.href.includes('/myArticles') == false
&& window.location.href.includes('/myComments') == false
&& window.location.href.includes('/login') == false
&& window.location.href.includes('/logout') == false
){
    // Display all articles
    Front_View.displayAllArticleCards(Config.baseurl_article, Config.img_src);
} 

