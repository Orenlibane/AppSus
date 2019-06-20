import homePageCmp from './main-pages/homepage.cmp.js';
import misterEmailCmp from './apps/mister-email/pages/mister-email.cmp.js';
import missKeepCmp from './apps/miss-keep/pages/miss-keep.cmp.js';
import emailDet from './apps/mister-email/pages/email-det.cmp.js';
import mailList from './apps/mister-email/cmp/mail-list.cmp.js';

export default [
  { path: '/', component: homePageCmp },
  {
    path: '/misterEmail',
    component: misterEmailCmp
  },
  { path: '/missKeep', component: missKeepCmp },
  {
    path: '/missKeep/mails',
    component: mailList
  },
  { path: '/mails/:theMailId', component: emailDet }
];
