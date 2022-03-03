const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "api/regestry/",
    createProxyMiddleware({
      target: "https://serwer-dream-team.herokuapp.com/",
      changeOrigin: true,
    })
  );
  app.use(
    "api/loginUserDatabase/",
    createProxyMiddleware({
      target: "https://serwer-dream-team.herokuapp.com/",
      changeOrigin: true,
    })
  );
  app.use(
      "REACT_APP_REG_API",
      createProxyMiddleware({
          target: "REACT_APP_GLOBAL_POST",
          changeOrigin: true,
      })
  )
};
