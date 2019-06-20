import noteheader from '../cmp/note-header.cmp.js';
import notelist from '../cmp/note-list.cmp.js';

export default {
  name: 'Misskeep',
  template: `
      <section class="miss-keep"> 
        <noteheader> </noteheader>
        <notelist></notelist>
      </section>
  `,
  props: [],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {},
  components: { noteheader, notelist }
};
