import noteService from '../services/noteservice.js';
import notePrev from './note-prev.cmp.js';
import noteAdd from './add-note-input.cmp.js';

export default {
  name: 'NoteList',
  template: `
    <section class=note-list> 
    <div class="add-note center flex both-align-center">  
      <note-add @noteValue="addNote"></note-add>                     
    </div>
   <div class="no-pinned-notes flex flex-wrap both-align-center">


      <note-prev 
        v-for="(note,idx) in notes"
        :key="idx"
        :note="note"
        :idx="idx" >
      </note-prev>
      </div>

    
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
  methods: {
    addNote(newNote) {
      noteService.updateDB(newNote);
    }
  },
  components: { notePrev, noteAdd }
};
