import transformPlugin from 'vite-plugin-transform';

const projectConfig = {
  SHORTNAME: 'Monorepo',
  LONGNAME: 'PWA Monorepo',
  DESCRIPTION: 'Tools for making cool PWAs',
  DISPLAY: 'fullscreen',
  ORIENTATION: 'landscape',
  BACKGROUNDCOLOR: '#000',
  TEXTCOLOR: '#FFF',
  EMOJI: '🥵',
  VERSION: '0.0.0',
};

const manifestDestiny = () =>
  transformPlugin({
    tStart: '%{',
    tEnd: '}%',
    replaceFiles: [
      './dist/index.html',
      './dist/manifest.json',
      './dist/favicon.svg',
    ],
    replace: projectConfig,
  });

export default manifestDestiny;
