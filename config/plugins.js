module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
        sites: [
          {
            name: 'Andy Terry - Backend',  // Capitalization adjusted
            id: "c3ffe028-ecb0-4350-b6d2-1f71908de283",
            buildHook: "https://api.netlify.com/build_hooks/65e1ed386dd3cae4aaa01bd9",
          }
        ]
      },
    },
  });
  