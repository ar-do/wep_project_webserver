import * as Model from './model.js';
import * as Helper from './helper.js';
import * as View from './view.js';
import * as Config from './config.js';


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
    View.displayAllArticleCards(Config.get_articles, Config.img_src);
} 
// localhost:3000/article    
if (window.location.href.includes('/article') !== false)
{
    // Article Full View
    const Params = new URLSearchParams(window.location.search);
    const _id = Params.get('id');
    View.displayArticle(_id, Config.get_articles, Config.img_src);
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
    document.getElementById('files').addEventListener('change', Helper.dateiauswahl, false);
    // tbd
} 
// localhost:3000/myArticles
if(window.location.href.includes('/myArticles') !== false)
{
    // tbd
}


function goToHome() {
    window.location = "/";
}
function goToArticle(id, title){
    window.location = "/article?id=" + id + "&title=" + title;
}


export { goToHome, goToArticle };

