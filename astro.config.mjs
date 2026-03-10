// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';

export default defineConfig({
  site: 'https://kblivesolutions.github.io',
  base: '/showcontrol-user-manual',
  integrations: [
    starlight({
      title: 'ShowControl User Manual',
      plugins: [
        starlightThemeBlack({
          navLinks: [
            { label: 'Manual', link: '/' },
            { label: 'Releases', link: 'https://github.com/KBLiveSolutions/showcontrol_releases/releases' }
          ],
          footerText: 'ShowControl User Manual'
        })
      ],
      sidebar: [
        {
          label: 'Manual',
          items: [
            { label: 'Home', slug: 'index' },
            { label: 'Installation / Connection', slug: 'connecting-the-device' },
            { label: 'Using Setlists', slug: 'using-setlists' },
            { label: 'User-defined Controls', slug: 'using-user-defined-controls' },
            { label: 'Using Ableset', slug: 'using-ableset' },
            { label: 'Troubleshooting', slug: 'troubleshooting' }
          ]
        }
      ]
    })
  ]
});
