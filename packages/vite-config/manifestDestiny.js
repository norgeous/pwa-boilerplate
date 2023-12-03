import transformPlugin from 'vite-plugin-transform';

const manifestDestiny = projectConfig =>
  transformPlugin({
    tStart: '%{',
    tEnd: '}%',
    // replaceFiles: [
    //   './dist/index.html',
    //   './dist/manifest.json',
    //   './dist/favicon.svg',
    // ],
    replace: projectConfig,
  });

export default manifestDestiny;
