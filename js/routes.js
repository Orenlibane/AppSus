import homePageCmp from './main-pages/homepage.cmp.js';
import misterEmailCmp from './apps/mister-email/pages/mister-email.cmp.js';
import missKeepCmp from './apps/miss-keep/pages/miss-keep.cmp.js';

export default [
  { path: '/', component: homePageCmp },
  { path: '/misterEmail', component: misterEmailCmp },
  { path: '/missKeep', component: missKeepCmp }
];
