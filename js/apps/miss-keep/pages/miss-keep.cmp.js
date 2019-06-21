import headerCmp from '../../../main-cmp/header.cmp.js';
import noteList from '../cmp/note-list.cmp.js';
import notePrev from '../cmp/note-prev.cmp.js';

export default {
  name: 'Misskeep',
  template: `
      <section class="miss-keep"> 
      <header-cmp></header-cmp>
        <note-list></note-list>
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
  components: { headerCmp, noteList, notePrev }
};
