const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa-cors')
const app = new Koa()
app.use(cors())
app.use(router.routes())

let index_html = fs.readFileSync('index.html', 'utf8')

router.get('/', async (ctx, next) => {
    ctx.response.body = index_html
})

router.get('/jsonp/search', async(ctx, next) => {
    // ctx.response.header('Access-Control-Allow-Origin:*')
    ctx.response.body = `
        searchHandler({
            name: 'zjc',
            age: 34
        })
    `
})

app.listen(3000)
console.log('app started at port 3000...')