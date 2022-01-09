import * as Helper from './helper.js';

function createArticle(data) {
    let _article = {
            headerimg: data.headerimg,
            title: data.title,
            introtxt: data.introtxt,
            content: data.content,
            user: data.userid
    };
    Helper.httpPost(Config.get_articles, _article).then(function(response) {
        return response;
    });
}

export { createArticle };