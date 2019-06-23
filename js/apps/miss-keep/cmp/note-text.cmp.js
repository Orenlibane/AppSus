import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'noteText',

  template: `
    <section class=note-text> 
          <div class="note-content flex-space-around">
        {{note.content}}
      </div> 
        <div class="notes-editor">
          <note-Editor :note="note" :idx="idx"></note-Editor>
          <!-- <note-editor-colors ></note-editor-colors> -->
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
