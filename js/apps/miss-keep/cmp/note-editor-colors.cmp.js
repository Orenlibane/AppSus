export default {
  name: 'NoteEditorColors',
  template: `
    <section class=notes-editor-colors> 
    <section class="note-editor-colors">
        <span v-for="(color,idx) in colors" :style={background:color} :data-color=color @click="useColors"  class="circle"></span>
      </section>
    </section>
`,
  props: [],
  data() {
    return {
      colors: ['red', 'blue', 'green', 'teal', 'purple']
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    useColors(ev) {
      var noteColor = ev.target.dataset.color;
      console.log(ev.target.dataset.color);
      this.$emit('noteColor', noteColor);
    }
  },
  components: {}
};
