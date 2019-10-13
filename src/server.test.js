const server = require("./server.js");

describe("Server", function() {
  it("should say Hello", () => {
    expect(server.sayHello()).toBe("Hello World");
  });
});
