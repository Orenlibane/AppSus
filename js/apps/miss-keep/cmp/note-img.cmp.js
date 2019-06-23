import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'NoteImg',
  template: `
    <section class="img-note note-content flex flex-space-around column"> 
    <div class="status-icons flex">
    <i v-if="note.isPin" class="fas fa-thumbtack pinned-note"></i> 
    <i v-if="note.isDone" class="fas fa-check pinned-note"></i> 
    </div>
      <div class="flex both-align-center">   
           <img :src="note.picture">
      </div>
    <div class="notes-editor flex both-align-center ">
    <note-Editor :note="note" :idx="idx"></note-Editor>
    <note-editor-colors :note="note" :idx="idx" ></note-editor-colors>
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
  methods: {},
  components: { noteEditor, noteEditorColors }
};
