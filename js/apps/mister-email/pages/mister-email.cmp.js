import headerCmp from '../../../main-cmp/header.cmp.js';
import sideNav from '../cmp/mail-side.cmp.js';
import mailList from '../cmp/mail-list.cmp.js';
import mailDet from '../pages/email-det.cmp.js';

import mailservice from '../services/mailservice.js';

export default {
  name: 'MisterEmail',
  template: `
    <section class="mister-email"> 
       <header-cmp></header-cmp>
      <div class="flex">
        <side-nav></side-nav>
        <mail-list></mail-list>
        <!-- <router-view></router-view>  -->
        
      </div>
    </section>
`,
  props: [],
  data() {
    return {
      emails: null
    };
  },
  created() {
    console.log('loaded main mister-email');
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: { headerCmp, sideNav, mailList, mailDet }
};
