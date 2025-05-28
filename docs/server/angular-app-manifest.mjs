
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bhunerheri-wheat-distribution',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/bhunerheri-wheat-distribution"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 521, hash: '0ece9bdd73755c1fbe2417cec380ecd97b455bb76102980c21940c054a3a221f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '6a2c13ac95cd0f44f176fd1b3d5933423b74838d7b107de041d04504f6b7366b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20862, hash: '1b7048ac29822b984b85fdf7384f5fcb7834402a24afabe10af4f9213b747738', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
