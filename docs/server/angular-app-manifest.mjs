
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bhunerheri-wheat-distribution-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/bhunerheri-wheat-distribution-frontend"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 531, hash: '7b4c4321c28feeb17c5e92adaf8b28b07a6166e60b6126b23a288feee66c818f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: 'd6df14e0dd9061ecce65cd6acbbe3bf50cca1e91ba0abcf706f609dab7e090d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20872, hash: '13404570506efb9e8aa50e95c87537f87aabf4cd071c3563fd20dc595a5438ca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
