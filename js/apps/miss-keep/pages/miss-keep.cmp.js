import noteHeader from '../cmp/note-header.cmp.js';
import noteList from '../cmp/note-list.cmp.js';
import notePrev from '../cmp/note-prev.cmp.js';

export default {
  name: 'Misskeep',
  template: `
      <section class="miss-keep"> 
        <note-header> </note-header>
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
  components: { noteHeader, noteList, notePrev }
};
