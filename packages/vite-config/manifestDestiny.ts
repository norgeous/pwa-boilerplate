import transformPlugin from 'vite-plugin-transform';

const manifestDestiny = (replace: Record<string, string>) =>
  transformPlugin({
    tStart: '%{',
    tEnd: '}%',
    replaceFiles: [
      './dist/index.html',
      './dist/manifest.json',
      './dist/favicon.svg',
    ],
    replace,
  });

export default manifestDestiny;
