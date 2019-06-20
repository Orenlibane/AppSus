import mailFilter from './mail-filter.cmp.js';

export default {
  name: 'Mailheader',
  template: `
    <section class="mailheader flex align-center flex-end">
        <mail-filter></mail-filter>
    </section>
`,
  // props: [],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {},
  components: { mailFilter }
};
