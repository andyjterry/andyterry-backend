module.exports = [
  {
    name: 'strapi::security',
    config: {
      cors: {
        enabled: true,
        origin: ['http://localhost:3000'], // Add your Nuxt app origin here
      },
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
