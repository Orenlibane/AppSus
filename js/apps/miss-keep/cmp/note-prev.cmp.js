import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';
// import noteAudioCmp from './note.audio.cmp.js';

import noteImg from './note-img.cmp.js';
import noteTxt from './note-text.cmp.js';
import noteVideo from './note-video.cmp.js';

export default {
  name: 'notePrev',
  template: `
    <section class="note-prev flex column space-between center">
   
    <component :note="note" :is="currentNoteType"></component>
<!-- 
      <div class="note-content flex both-align-center">
        <div v-if="note.content"> {{note.content}} </div>
        <img  v-if="note.picture"   :src='note.picture'/> 
        <video  v-if="note.video" width="220" height="200" controls autoplay>
        <source  :src='note.video' type="video/mp4">
         Your browser does not support the video tag.
        </video>

        <audio controls width="20" height="40" v-if="note.audio">
       <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
         </audio>
      </div> 
      
      <div class="notes-editor">
          <note-Editor></note-Editor>
          <note-editor-colors v-if="showColors"></note-editor-colors>
        </div> -->
    </section>


`,
  props: ['note'],
  data() {
    return {
      showColors: false,
      isBold: false,
      color: null
    };
  },
  created() {},
  destroyed() {},
  computed: {
    currentNoteType() {
      return this.note.type;
    }
  },
  methods: {},
  components: { noteEditor, noteEditorColors, noteImg, noteTxt, noteVideo }
};
