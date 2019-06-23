import noteService from '../services/noteservice.js';
import noteservice from '../services/noteservice.js';

import eventBus, { NOTE_EMAIL } from '../../../event-bus.js';


export default {
  name: 'note-editor',
  template: `
    <section class="note-editor">

        <div class="editor flex"> 
          
            <i @click="deleteNote(note,idx)" class="fas fa-trash"></i>
            <i class="fas fa-palette"></i>
            <i @click="pinTheNote(note,idx)"class="fas fa-thumbtack"></i> 
            <i class="fas fa-check"></i>
            <i @click="copyNote(note)" class="fas fa-copy"></i>
            <i @click="movingNote(note)"  v-if="note.content" class="fas fa-envelope-open-text"></i>
            <i @click="updateNote" v-if="note.content" class="fas fa-pencil-alt"></i>
        </div> 


        <transition name="appear">
    <div v-if='editNote' class="  todo-model flex column ">
                   <h1>Update ME!</h1>
                   <div> <input type="text" v-model="note.content" ></div>
                   <button @click="saveNote">Save Update</button>
                  </div>
                </transition>

    </section>
`,
  props: ['note', 'idx'],
  data() {
    return {
      editNote: false,
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    deleteNote(note, idx) {
      if (note.isPin) return;
      noteService.deleteNote(idx);
    },
    copyNote(noteToCopy) {
      noteservice.copyNote(noteToCopy);
    },
    updateNote() {
      this.editNote = !this.editNote;
    },
    saveNote() {
      noteservice.saveNotesToDb();
    },
    movingNote(note){
      eventBus.$emit(NOTE_EMAIL,note); 

      this.$router.push('/misterEmail')
      // note.sendmodal = true;
    
    },
    pinTheNote(noteToPin, idx) {
      noteService.deleteNote(idx);
      noteService.pinNote(noteToPin);
    }
  },
  components: {}
};
