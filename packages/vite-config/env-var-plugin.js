const envVarPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml: html => {
    console.log(html);
    return html.replaceAll('%VERSION%', `<h1>replaced!</h1>`);
  },
  configureServer: server => () => {
    server.middlewares.use((req, res, next) => {
      console.log(req.originalUrl);
      next();
    });
  },
});

export default envVarPlugin;
