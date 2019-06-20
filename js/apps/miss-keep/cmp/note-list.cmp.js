import noteService from '../services/noteservice.js';
import notePrev from './note-prev.cmp.js';

export default {
  name: 'NoteList',
  template: `
    <section class=note-list> 
    <div class="add-note center flex both-align-center">  
      <div className="input-container "> 
  <input type="text" placeholder="What's on your mind?"/>
   <i class="fas fa-font"></i> <i class="fas fa-image"></i><i class="fab fa-youtube"></i><i class="fas fa-volume-up"></i>
   </div>
   </div>
   <div class="no-pinned-notes flex flex-wrap both-align-center">
      <note-prev 
        v-for="(note,idx) in notes"
        :key="idx"
        :note="note">

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
  methods: {},
  components: { notePrev }
};
