import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'noteText',

  template: `
    <section class=note-text> 
      <div class="status-icons flex">
    <i v-if="note.isPin" class="fas fa-thumbtack pinned-note"></i> 
    <i v-if="note.isDone" class="fas fa-check pinned-note"></i> 
    </div>
    


          <div :class="{pinned:note.isPin }"  class="note-content flex-space-around">
        {{note.content}}
      </div> 
      <div class="notes-editor">
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
  computed: {
    changeNoteColor() {}
  },
  methods: {},
  components: { noteEditor, noteEditorColors }
};
