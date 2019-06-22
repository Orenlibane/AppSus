import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'notePrev',
  template: `
    <section @click="showtype()" class="note-prev flex column space-between center">
    <!-- <component v-bind:is="currentNoteType"></component> -->

      <!-- <div class="note-content">
        {{note.content}}
      </div> 
        <div class="notes-editor">
          <note-Editor></note-Editor>
          <note-editor-colors v-if="show-colors"></note-editor-colors> -->
        </div>
    </section>


`,
  props: ['note'],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {
    currentNoteType() {
      return note.type;
    }
  },
  methods: {
    showtype() {
      console.log(this.note.type);
    }
  },
  components: { noteEditor, noteEditorColors }
};
