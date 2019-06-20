export default {
  name: 'NoteEditorColors',
  template: `
    <section class=notes-editor-colors> 
    <section class="note-editor-colors">
        <span @click="useColors('red')" :value="red" class="circle circle1"></span>
        <span @click="useColors('blue')" :value="blue" class="circle circle2"></span>
        <span @click="useColors('green')" :value="green" class="circle circle3"></span>
        <span @click="useColors('teal')" :value="teal" class="circle circle4"></span>
        <span @click="useColors('purple')" :value="purple" class="circle circle5"></span>
        <span @click="useColors('black')" :value="black" class="circle circle6"></span>
        <span @click="useColors('white')" :value="white" class="circle circle7"></span> 
      </section>
    </section>
`,
  props: [],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {
    useColors(color) {
      console.log(color);
    }
  },
  methods: {},
  components: {}
};
