const KOA = require('koa')
const Router = require('koa-router');
const superagent = require('superagent');

const {OneArticle, OneQuestion} = require('./textProcess/init')

const app = new KOA();
const router = new Router()


const getOnePageData = async () => {
    const URL = 'http://wufazhuce.com/';
    // 使用superagent爬取数据
    try {
        const oneRes = await superagent.get(URL);
        return oneRes.text;
    } catch (e) {
        throw new Error(e);
    }
}


router.get('/', async (ctx, next) => {
    const resPage = await getOnePageData();
    const articalList = new OneArticle(resPage).getArticleList();
    const quesList = new OneQuestion(resPage).getQuestionList();
    ctx.body = {
        articalList,
        quesList
    };
})

app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000, () => {
    console.log(`app is running at port 3000`)
})
