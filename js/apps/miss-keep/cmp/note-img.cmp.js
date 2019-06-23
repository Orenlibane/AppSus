import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'NoteImg',
  template: `
    <section class="img-note note-content flex flex-space-around column" @click="showNote"> 
      <div class="flex both-align-center">   
           <img :src="note.picture">
      </div>
    <div class="notes-editor ">
    <note-Editor :note="note" :idx="idx"></note-Editor>
          <note-editor-colors ></note-editor-colors>
</div>
    </section>
`,
  props: ['note', 'idx'],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    showNote() {
      console.log(this.note);
    }
  },
  components: { noteEditor, noteEditorColors }
};
