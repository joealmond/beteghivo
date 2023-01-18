const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/vizsgalat", {
      target: "https://felveteli.tigra.hu/feladat/frontend1",
    })
  );
};
