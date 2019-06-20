import noteService from '../services/noteservice.js';

export default {
  name: 'NoteList',
  template: `
    <section class=note-list> 
      <!-- <note-prev></note-prev> -->
      <section class="note-editor">
        <div class='note-editor'> <i class="fas fa-trash"></i> <i class="fas fa-palette"></i><i class="fas fa-thumbtack"></i> </div> 
      </section>
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
