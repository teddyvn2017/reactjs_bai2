const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost/clean_furniture',
      changeOrigin: true,
      secure: false,
      port:80
    })
  );
};
