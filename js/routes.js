import homePageCmp from './main-pages/homepage.cmp.js';
import misterEmailCmp from './apps/mister-email/pages/mister-email.cmp.js';
import missKeepCmp from './apps/miss-keep/pages/miss-keep.cmp.js';
import emailDet from './apps/mister-email/pages/email-det.cmp.js';
import missBook from './apps/miss-book/cmp/miss-book.cmp.js';

export default [
  { path: '/', component: homePageCmp },
  {
    path: '/misterEmail',
    component: misterEmailCmp
  },
  { path: '/missKeep', component: missKeepCmp },
  { path: '/missBook', component: missBook },
  // {
  // path: '/misterEmail/mails',
  // component: mailList
  // children: [{ path: 'misterEmail/mails/:theMailId', component: emailDet }]
  // },
  { path: '/misterEmail/:theMailId', component: emailDet }
];
