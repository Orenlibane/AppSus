import mailHeader from '../cmp/mail-header.cmp.js';

export default {
  name: 'MisterEmail',
  template: `
    <section class="mister-email"> 
      <mail-Header></mail-Header>
      <!-- <nav-side></nav-side> -->
      <!-- <mail-list></mail-list> -->
    </section>
`,
  props: [],
  data() {
    return {};
  },
  created() {
    console.log('loaded main mister-email');
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: { mailHeader }
};
