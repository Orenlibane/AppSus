import noteService from '../services/noteservice.js';
import notePrev from './note-prev.cmp.js';
import noteAdd from './add-note-input.cmp.js';
import noteFilter from './note-filter.cmp.js';

export default {
  name: 'NoteList',
  template: `
    <section class=note-list> 
    <div class="add-note center flex both-align-center">  
      <note-add @noteValue="addNote"></note-add>        <note-filter  @filternote="setFilterrr"></note-filter>                     

    </div>
   <div class="no-pinned-notes flex flex-wrap both-align-center">


      <note-prev 
      v-for="(note,idx) in filterdNotes"
      :notes="filterdNotes"
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
      notes: null,
      filter: {
        txt: ''
      }
    };
  },
  created() {
    this.notes = noteService.query();
    console.log(this.notes);
  },
  destroyed() {},
  computed: {
    filterdNotes: function() {
      return this.notes.filter(
        note =>
          note.content.toLowerCase().includes(this.filter.txt.toLowerCase()) ||
          note.todos.todo1
            .toLowerCase()
            .includes(this.filter.txt.toLowerCase()) ||
          note.todos.todo2
            .toLowerCase()
            .includes(this.filter.txt.toLowerCase()) ||
          note.todos.todo3.toLowerCase().includes(this.filter.txt.toLowerCase())
      );
    }
  },
  methods: {
    addNote(newNote) {
      noteService.updateDB(newNote);
    },
    setFilterrr(filterBy) {
      this.filter = filterBy;
      console.log(this.filterdNotes);
      console.log(this.filter.txt);
    }
  },
  components: { notePrev, noteAdd, noteFilter }
};
