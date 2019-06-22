// import notePrev from './note-prev.cmp.js';

export default {
  name: 'note-editor',
  template: `
    <section class="note-editor">

        <div class="editor flex"> 
          
            <i @click="deleteNote(idx)" class="fas fa-trash"></i>
            <i class="fas fa-palette"></i>
            <i class="fas fa-thumbtack"></i> 
            <i class="fas fa-check"></i>
            <i class="fas fa-copy"></i>
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
  components: {}
};
