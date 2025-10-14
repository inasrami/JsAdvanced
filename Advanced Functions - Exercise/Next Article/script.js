function getArticleGenerator(articles) {
    let index = 0;

    return function() {
        if (index < articles.length) {
            const article = $('<article>').text(articles[index]);
            $('#content').append(article);
            index++;
        }
    };
}