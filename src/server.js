const Koa = require("koa");
const CircularBuffer = require("circular-buffer");

const server = {
  prepareJson: (dataObject = {}) => {
    const data = { ...dataObject };
    return JSON.stringify(data).substring(0, 500);
  },
  init: () => {
    const app = new Koa();
    const buffer = new CircularBuffer(3);

    app.use(async ctx => {
      try {
        if (Object.keys(ctx.request.query).length > 0)
          buffer.enq(prepareJson(ctx.request.query));

        let bufferItems = buffer.toarray();
        ctx.body = bufferItems.join("\n");
      } catch (error) {
        ctx.body = ":-)";
      }
    });

    app.listen(8036);
  }
};
const prepareJson = server.prepareJson.bind(server);

module.exports = server;
