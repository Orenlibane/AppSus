import mailFilter from './mail-filter.cmp.js';

export default {
  name: 'Mailheader',
  template: `
    <section class="mailheader flex column both-align-center">
      THIS IS THE HEADER
        <mail-filter class="flex row-reverse align-center flex-end"></mail-filter>
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
