
export default {
  basePath: '/bhunerheri-wheat-distribution',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
