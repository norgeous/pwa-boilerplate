import { MetadataRoute } from 'next';
import projectConfig from '../../project.config';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: projectConfig.SHORTNAME,
  name: projectConfig.LONGNAME,
  description: projectConfig.DESCRIPTION,
  theme_color: projectConfig.BACKGROUNDCOLOR,
  background_color: projectConfig.BACKGROUNDCOLOR,
  scope: './',
  start_url: './',
  display: projectConfig.DISPLAY,
  orientation: projectConfig.ORIENTATION,
  icons: [
    {
      src: 'favicon.svg',
      type: 'image/svg+xml',
      purpose: 'any',
      sizes:
        '32x32 48x48 64x64 72x72 96x96 128x128 152x152 168x168 192x192 256x256 384x384 512x512 700x700 1280x1280',
      //     src: '/favicon.ico',
      //     sizes: 'any',
      //     type: 'image/x-icon',
    },
  ],
});

export default manifest;
