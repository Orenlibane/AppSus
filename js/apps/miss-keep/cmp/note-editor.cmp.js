import noteService from '../services/noteservice.js';

import eventBus, { NOTE_EMAIL, NOTES_DB } from '../../../event-bus.js';

export default {
  name: 'note-editor',
  template: `
    <section class="note-editor">

        <div class="editor flex"> 
          
            <i @click="deleteNote(note,idx)" class="fas fa-trash"></i>
            <!-- <i class="fas fa-palette"></!  -->
            <i @click="pinTheNote(note,idx)"class="fas fa-thumbtack"></i> 
            <i @click="setDone(note)" class="fas fa-check"></i>
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
      editNote: false
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    deleteNote(noteTodelete, idx) {
      if (noteTodelete.isPin) return;
      noteService.deleteNote(idx);
    },
    copyNote(noteToCopy) {
      if (noteToCopy.isPin) return;
      noteService.copyNote(noteToCopy);
    },
    updateNote() {
      this.editNote = !this.editNote;
    },
    saveNote() {
      noteService.saveNotesToDb();
      this.editNote = !this.editNote;
    },
    movingNote(note) {
      eventBus.$emit(NOTE_EMAIL, note);

      this.$router.push('/misterEmail');
    },
    setDone(noteToSetAsDone) {
      noteToSetAsDone.isDone = !noteToSetAsDone.isDone;
      noteService.saveNotesToDb();

      // eventBus.$emit(NOTES_DV, this.notes);
      // storageService.store('emailsDB', this.emails);
    },
    pinTheNote(noteToPin, idx) {
      noteService.deleteNote(idx);
      noteService.pinNote(noteToPin);
    }
  },
  components: {}
};
