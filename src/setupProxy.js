const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy('/server/loginApi/oauth',{
      target: 'http://192.168.1.100:9020/',
      changeOrigin: true,
      pathRewrite: { '^/server/loginApi': '' },
    })
  );
  app.use(
    proxy('/api', {
      target: 'http://192.168.1.100:9070/',
      changeOrigin: true,
      pathRewrite:{ '^/api':'' }
    })
  );
};