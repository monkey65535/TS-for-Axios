const cheerio = require('cheerio');

class OneArticle {
    constructor(text) {
        this.page = text;
    }

    getArticleList() {
        const $ = cheerio.load(this.page);
        const articleList = [];
        // 获取今天的文章
        const articalEle = $('.fp-one-articulo')
        const todayArtical = {
            volNum: articalEle.find('.one-titulo').text().split('.')[1].trim(),
            title: articalEle.find('.one-articulo-titulo > a').text().split('-')[0].trim(),
            author: articalEle.find('.one-articulo-titulo > a > small').text().split('-')[1].trim(),
            href: articalEle.find('.one-articulo-titulo > a').attr('href').trim()
        }
        articleList.push(todayArtical);
        // 获取前6篇文章
        articalEle.find('.list-unstyled.pasado li').each((index, ele) => {
            articleList.push({
                volNum: $(ele).find('.text-muted').text().split('.')[1].trim(),
                title: $(ele).find('a').text().split('-')[0].trim(),
                author: $(ele).find('a > small').text().split('-')[1].trim(),
                href: $(ele).find('a').attr('href').trim()
            });
        })
        return articleList;
    }
}

class OneQuestion {
    constructor(text) {
        this.page = text;
    }

    getQuestionList() {
        const $ = cheerio.load(this.page);
        const quesEle = $('.fp-one-cuestion')
        const quesList = [];
        const todayQuse = {
            volNum: quesEle.find('.one-titulo').text().split('.')[1].trim(),
            title: quesEle.find('.one-cuestion-titulo  a').text().trim(),
            href: quesEle.find('.one-cuestion-titulo  a').attr('href').trim()
        }
        quesList.push(todayQuse);
        quesEle.find('.list-unstyled.pasado li').each((index, ele) => {
            quesList.push({
                volNum: $(ele).find('.text-muted').text().split('.')[1].trim(),
                title: $(ele).find('a').text().split('-')[0].trim(),
                href: $(ele).find('a').attr('href').trim()
            });
        })

        return quesList
    }
}


module.exports = {
    OneArticle,
    OneQuestion
}
