import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

// import noteAudioCmp from './note.audio.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTxt from './note-text.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodo from './note-todo.cmp.js';

export default {
  name: 'notePrev',
  template: `

<section :style={background:note.color} class="note-prev flex column flex-space-around center">


    <component :note="note" :idx="idx" :is="currentNoteType"></component>
    </section>
    `,
  props: ['note', 'idx'],
  data() {
    return {
      showColors: false,
      isBold: false,
      color: null
    };
  },
  created() {},
  destroyed() {},
  computed: {
    currentNoteType() {
      return this.note.type;
    }
  },
  methods: {},
  components: {
    noteEditor,
    noteEditorColors,
    noteImg,
    noteTxt,
    noteVideo,
    noteTodo
  }
};
