export default {
  name: 'NoteEditorColors',
  template: `
    <section class=notes-editor-colors> 
    <section class="note-editor-colors">
        <span @click="useColors()" class="circle circle1"></span>
        <span @click="useColors()"  class="circle circle2"></span>
        <span @click="useColors()"  class="circle circle3"></span>
        <span @click="useColors()"  class="circle circle4"></span>
        <span @click="useColors()"  class="circle circle5"></span>
        <span @click="useColors()"  class="circle circle6"></span>
        <span @click="useColors()"  class="circle circle7"></span> 
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
    useColors() {
      console.log(color);
    }
  },
  methods: {},
  components: {}
};
