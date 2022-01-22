// Loading Controllers
import './modules/controller/frontpage_controller.js';
import './modules/controller/createArticle_controller.js';
import './modules/controller/article_controller.js';
import './modules/controller/myArticles_controller.js';
import './modules/controller/myComments_controller.js';
import './modules/controller/search_controller.js';

// Loading global.js (Contains stuff that applies to all pages)
import './modules/global.js';

// Loading Helper
import * as Helper from './modules/helper.js';

// Get Cookie and check if its empty
const session = Helper.getCookie("session");

if(session == "") {
    location.href="/login";
}





