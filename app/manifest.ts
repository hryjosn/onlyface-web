import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Onlyface - Where Beauty Meets Approval!',
    short_name: 'Onlyface',
    description: 'Onlyface is a revolutionary app that redefines social networking through the power of beauty and community approval.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
