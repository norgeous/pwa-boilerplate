import { MetadataRoute } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SHORTNAME: 'NextJS App',
  LONGNAME: 'NextJS App - PWA Monorepo',
  DESCRIPTION: 'Tools for making cool PWAs',
  DISPLAY: 'fullscreen' as MetadataRoute.Manifest['display'],
  ORIENTATION: 'landscape' as MetadataRoute.Manifest['orientation'],
  BACKGROUNDCOLOR: '#000',
  TEXTCOLOR: '#FFF',
  EMOJI: '🥵',
  VERSION: '0.0.0', // TODO: read from package.json
};
