import headerCmp from '../../../main-cmp/header.cmp.js';
import sideNav from '../cmp/mail-side.cmp.js';
import mailList from '../cmp/mail-list.cmp.js';
import mailservice from '../services/mailservice.js';

export default {
  name: 'MisterEmail',
  template: `
    <section class="mister-email"> 
       <header-cmp></header-cmp>
      <div class="flex">
        <side-nav></side-nav>
        <mail-list></mail-list>        
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
  components: { headerCmp, sideNav, mailList }
};
