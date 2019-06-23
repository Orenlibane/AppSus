import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';

export default {
  name: 'noteVideo',

  template: `
    <section class="note-video flex column flex-space-around" > 

            <div class="note-content ">
            <!-- <iframe width="500" height="299" :src=note.video> </iframe> -->
              <video width="320" height="240" controls>
                <source :src=note.video type="video/mp4">
                <source :src=note.video type="video/ogg">
                Your browser does not support the video tag.

              </video>
           </div> 
        <div class="notes-editor">
        <note-Editor :note="note" :idx="idx"></note-Editor>
          <note-editor-colors ></note-editor-colors>
</div>
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
