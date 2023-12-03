import transformPlugin from 'vite-plugin-transform';

export const projectConfig1 = {
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
