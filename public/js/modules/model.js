import * as Helper from './helper.js';
import * as Config from './config.js';

function createArticle(data) {
 
    let _article = {
            headerimg: data.headerimg,
            title: data.title,
            introtxt: data.introtxt,
            content: data.content,
            user: data.userid
    };

    Helper.httpPost(Config.baseurl_article, _article).then(function(response) {
        return response;
    });
    
}

function createComment(data) {
    let _comment = {
        content: data.content,
        userid: data.userid,
        articleid: data.articleid
    }

    Helper.httpPost(Config.baseurl_comment, _comment).then(function(response) {
        return response;
    })
}

export { createArticle, createComment };