import * as Helper from '../helper.js';
import * as Front_View from '../view/frontpage_view.js';
import * as Article_View from '../view/article_view.js';
import * as Comment_View from '../view/comment_view.js';
import * as myArticle_View from '../view/myArticles_view.js';
import * as Config from '../config.js';


/* Checks URL for certain words, this is used to display the content based on the path the user is in */

// Root (localhost:3000)
if(window.location.href.includes('/') !== false 
&& window.location.href.includes('?') == false
&& window.location.href.includes('/article') == false
&& window.location.href.includes('/search') == false
&& window.location.href.includes('/createArticle') == false
&& window.location.href.includes('/myArticles') == false
){
    // Display all articles
    Front_View.displayAllArticleCards(Config.baseurl_article, Config.img_src);
} 
// localhost:3000/article    
if (window.location.href.includes('/article') !== false)
{
    // Article Full View
    const Params = new URLSearchParams(window.location.search);
    const _id = Params.get('id');
    Article_View.displayArticle(_id, Config.baseurl_article);
    Comment_View.displayComment(_id, Config.baseurl_comment);
} 
// localhost:3000/profile
if(window.location.href.includes('/profile') !== false)
{
    // tbd
} 
// localhost:3000/search
if(window.location.href.includes('/search') !== false)
{
    // tbd
} 
// localhost:3000/createArticle
if(window.location.href.includes('/createArticle') !== false)
{
    
    // tbd
} 
// localhost:3000/myArticles
if(window.location.href.includes('/myArticles') !== false)
{
    myArticle_View.displayMyArticles(Config._username, Config.baseurl_article);
}



// OnClick functions used for navigation --> Maybe move into helpers since this is not really tied to routing...
function goToHome() {
    window.location = "/";
}
function goToArticle(id, title){
    window.location = "/article?id=" + id + "&title=" + title;
}


export { goToHome, goToArticle };

