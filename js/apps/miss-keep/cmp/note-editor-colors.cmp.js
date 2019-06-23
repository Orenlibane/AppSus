import noteService from '../services/noteservice.js';

export default {
  name: 'NoteEditorColors',
  template: `
    <section class=notes-editor-colors> 
    <section class="note-editor-colors">
        <!-- <span  v-for="(color,idx) in colors" :style={background:color} :data-color=color @click="useColors"  class="circle"></span> -->
        <input @change="useColors" type="color"/>        <!-- v-if="noteColor" -->
      </section>
    </section>
`,
  props: ['note'],
  data() {
    return {
      colors: [
        'yellow',
        'rgb(177, 252, 255)',
        'rgb(247, 170, 250)',
        'rgb(255, 229, 111)',
        'rgb(164, 255, 142)'
      ],
      noteColor: false
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    useColors(ev) {
      console.log(ev);
      // this.noteColor = true;
      // var noteColor = ev.target.dataset.color;
      var noteColor = ev.target.value;
      this.note.color = noteColor;
      noteService.saveNotesToDb();

      // console.log(ev.target.dataset.color);
      // this.$emit('noteColor', noteColor);
    }
  },
  components: {}
};
