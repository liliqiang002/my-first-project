const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'fsdfsdfsf';
});

app.listen(3000);