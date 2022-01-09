import * as Model from './model.js';
import * as Helper from './helper.js';
import * as View from './view.js';
import * as Config from './config.js';


if(window.location.href.includes('/') !== false 
&& window.location.href.includes('?') == false
&& window.location.href.includes('/article') == false
&& window.location.href.includes('/search') == false
&& window.location.href.includes('/createArticle') == false
&& window.location.href.includes('/myArticles') == false
){
    // Home
    View.displayAllArticleCards(Config.get_articles, Config.img_src);
} if (window.location.href.includes('/article') !== false){
    // Article Full View

    const Params = new URLSearchParams(window.location.search);
    const _id = Params.get('id');
    View.displayArticle(_id, Config.get_articles, Config.img_src);
} if(window.location.href.includes('/profile') !== false){
    // Profile
} if(window.location.href.includes('/search') !== false){
    // Search
} if(window.location.href.includes('/createArticle') !== false){
    document.getElementById('files').addEventListener('change', Helper.dateiauswahl, false);
    // create Article
} if(window.location.href.includes('/myArticles') !== false){
    // See my Articles
}


function goToHome() {
    window.location = "/";
}
function goToArticle(id, title){
    window.location = "/article?id=" + id + "&title=" + title;
}


export { goToHome, goToArticle };

