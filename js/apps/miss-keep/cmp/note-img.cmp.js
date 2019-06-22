import notePrev from './note-prev.cmp.js';
import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'NoteImg',
  template: `
    <section class="img-note"> 

    <img src="note.picture">

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
  components: { notePrev, noteEditor, noteEditorColors }
};
