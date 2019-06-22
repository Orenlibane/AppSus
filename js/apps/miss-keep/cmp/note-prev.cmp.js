import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';
// import noteImg from './note-img.cmp.js';
// import noteTxt from './note-text.cmp.js';

export default {
  name: 'notePrev',
  template: `
    <section @click="showtype()" class="note-prev flex column space-between center">

    <!-- <component :is="currentNoteType"></component> -->

      <div class="note-content">
        <div v-if="note.content"> {{note.content}} </div>
        <img  v-if="note.picture"   :src='note.picture'/> 
      </div> 
      
      <div class="notes-editor">
          <note-Editor></note-Editor>
          <note-editor-colors v-if="showColors"></note-editor-colors>
        </div>
    </section>


`,
  props: ['note'],
  data() {
    return {
      showColors: false
    };
  },
  created() {},
  destroyed() {},
  computed: {
    // currentNoteType() {
    //   return note.type;
    // },
  },
  methods: {
    showtype() {
      console.log(this.note.type);
    }
  },
  components: { noteEditor, noteEditorColors }
};
