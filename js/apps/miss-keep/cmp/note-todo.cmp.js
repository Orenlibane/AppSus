export default {
  name: 'noteTodo',

  template: `
    <section class=note-todo> 
    <i v-if="note.isPin" class="fas fa-thumbtack pinned-note"></i> 

<ul>
<li >
          <div :class="{pinned:note.isPin }" class="note-content flex-space-around">
        {{note.content}}
      </div> 
        <div class="notes-editor">
          <note-Editor :note="note" :idx="idx"></note-Editor>
          <note-editor-colors :note="note" :idx="idx" ></note-editor-colors>
</div>
</li>
</ul>
 
    </section>
`,
  props: [],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {},
  components: {}
};
