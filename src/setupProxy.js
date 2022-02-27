const { createProxyMiddleware } = require('http-proxy-middleware');
     
    module.exports = function(app) {
        app.use(createProxyMiddleware('/regestry/**', { target: 'http://localhost:5000' }));
        app.use(createProxyMiddleware('/loginUserDatabase/**', { target: 'http://localhost:5000' }));
    };

    // module.exports = function(app) {
    //     app.use(
    //       createProxyMiddleware(["/regestry", , "/loginUserDatabase"], { target: "http://localhost:5000" })
    //     );
    //   };