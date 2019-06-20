import noteService from '../services/noteservice.js';

export default {
  name: 'NoteList',
  template: `
    <section class=note-list> 
      <!-- <note-prev></note-prev> -->

    </section>
`,
  props: [],
  data() {
    return {
      notes: null
    };
  },
  created() {
    this.notes = noteService.query();
    console.log(this.notes);
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: {}
};
