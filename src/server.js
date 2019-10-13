const Koa = require("koa");

const server = {
  sayHello: () => "Hello World",
  init: () => {
    const app = new Koa();

    app.use(async ctx => {
      ctx.body = "Hello World";
    });

    app.listen(3000);
  }
};

module.exports = server;
