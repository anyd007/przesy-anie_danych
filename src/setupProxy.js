const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/loginUserDatabase", , "/regestry"], { target: "http://localhost:5000" })
  )
};