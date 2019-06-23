import noteService from '../services/noteservice.js';

export default {
  name: 'NoteEditorColors',
  template: `
    <section class=notes-editor-colors> 
    <section class="note-editor-colors">
        <span  v-for="(color,idx) in colors" :style={background:color} :data-color=color @click="useColors"  class="circle"></span>
        <!-- v-if="noteColor" -->
      </section>
    </section>
`,
  props: ['note'],
  data() {
    return {
      colors: ['red', 'blue', 'green', 'teal', 'purple'],
      noteColor: false
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    useColors(ev) {
      // this.noteColor = true;
      var noteColor = ev.target.dataset.color;
      this.note.color = noteColor;
      noteService.saveNotesToDb();

      // console.log(ev.target.dataset.color);
      // this.$emit('noteColor', noteColor);
    }
  },
  components: {}
};
