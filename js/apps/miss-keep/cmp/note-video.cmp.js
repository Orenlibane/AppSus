import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';
import notePrev from '../cmp/note-prev.cmp.js';

export default {
    name: 'noteVideo',

    template: `
    <section class=note-video> 

            <div class="note-content">
        {{note.content}}
      </div> 
        <div class="notes-editor">
          <note-Editor></note-Editor>
          <note-editor-colors v-if="show-colors"></note-editor-colors>
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
components: { noteEditor, noteEditorColors, notePrev }
};