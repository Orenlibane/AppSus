export default {
  name: 'NoteEditorColors',
  template: `
    <section class=notes-editor-colors> 
    <section class="note-editor-colors">
        <span v-if="noteColor"v-for="(color,idx) in colors" :style={background:color} :data-color=color @click="useColors"  class="circle"></span>
      </section>
    </section>
`,
  props: [],
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
    this.noteColor= true;
      var noteColor = ev.target.dataset.color;
      console.log(ev.target.dataset.color);
      this.$emit('noteColor', noteColor);
    }
  },
  components: {}
};
