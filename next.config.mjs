/** @type {import('next').NextConfig} */

import withPWA from '@ducanh2912/next-pwa';

export default withPWA({
  pwa: {
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    sw: true,
    disable: false,
    workboxOptions: {
      disableDevLogs: true,
    },
  },
});
