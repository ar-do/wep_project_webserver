// Entrypoint of website. All Modules are loaded here

// Loading Controllers
import './modules/controller/routing_controller.js';
import './modules/controller/createArticle_controller.js';
import './modules/controller/createComment_controller.js';
import './modules/controller/myArticles_controller.js';

// Loading Views
import './modules/view/frontpage_view.js';
import './modules/view/article_view.js';
import './modules/view/comment_view.js';

// Loading Model
import './modules/model.js';

