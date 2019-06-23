import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'noteTodo',

  template: `
    <section class="note-todo"> 
    <div class="status-icons flex">
    <i v-if="note.isPin" class="fas fa-thumbtack pinned-note"></i> 
    <i v-if="note.isDone" class="fas fa-check pinned-note"></i> 
    </div>

    <div class="flex both-align-center">
  <ol>
    <li>{{note.todos.todo1}}</li>
    <li>{{note.todos.todo2}}</li>
    <li>{{note.todos.todo3}}</li>
</ol>
  </div>
          
      </div> 
      <div class="notes-editor flex both-align-center ">
          <note-Editor :note="note" :idx="idx"></note-Editor>
          <note-editor-colors :note="note" :idx="idx" ></note-editor-colors>
</div>
</li>
</ul>
 
    </section>
`,
  props: ['note', 'idx'],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {},
  components: { noteEditor, noteEditorColors }
};
