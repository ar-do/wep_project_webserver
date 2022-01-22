import * as Config from '../config.js';
import * as Search_View from '../view/search_view.js';

if(window.location.href.includes('/login') == false)
{

    let btn_search = document.getElementById("search-button");

    btn_search.addEventListener('click', () => {
        const baseurl = window.location.origin;
        const searchquery = document.getElementById("search-query").value;
        const newUrl = baseurl + "/search?q=" + searchquery;
        location.href = newUrl
    });

}

if(window.location.href.includes('/search') == true)
{
    const Params = new URLSearchParams(window.location.search);
    const _q = Params.get('q');
    Search_View.displayFoundArticles(_q, Config.baseurl_article);
} 