import mailFilter from './mail-filter.cmp.js';

export default {
  name: 'Mailheader',
  template: `
    <section class="mailheader flex row-reverse align-center flex-end">
THIS IS THE HEADER
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
