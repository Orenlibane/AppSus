import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'notePrev',
  template: `
    <section class="note-prev flex column space-between center"> 
        {{note.content}}
        <div>
        <note-Editor></note-Editor>
        <note-editor-colors></note-editor-colors>
        </div>
    </section>


`,
  props: ['note'],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {},
  components: { noteEditor, noteEditorColors }
};
