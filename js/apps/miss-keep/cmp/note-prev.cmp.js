import noteEditor from '../cmp/note-editor.cmp.js';
import noteEditorColors from '../cmp/note-editor-colors.cmp.js';
import noteAudioCmp from './note.-udio.cmp.js';
// import noteImg from './note-img.cmp.js';
// import noteTxt from './note-text.cmp.js';

export default {
  name: 'notePrev',
  template: `
    <section @click="showtype()" class="note-prev flex column space-between center">

    <!-- <component :is="currentNoteType"></component> -->

      <div class="note-content">
        <div v-if="note.content"> {{note.content}} </div>
        <img  v-if="note.picture"   :src='note.picture'/> 
        <video  v-if="note.video" width="120" height="140" controls autoplay>
        <source  :src='note.video' type="video/mp4">
        <!-- <source :src='note.video' type="video/ogg"> -->
         Your browser does not support the video tag.
        </video>

        <!-- <audio controls width="20" height="40" v-if="note.audio">
       <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
         </audio> -->
      </div> 
      
      <div class="notes-editor">
          <!-- <note-Editor  ></note-Editor>
          <note-editor-colors v-if="showColors"></note-editor-colors> -->
        </div>
    </section>


`,
  props: ['note'],
  data() {
    return {
      showColors: false,
      // noteImg: note.picture,
      // noteVideo: note.video,
      // noteAudio: note.audio,
      isBold: false,
      color: null
    };
  },
  created() {},
  destroyed() {},
  computed: {
    currentNoteType() {
      return note.type;
    }
    // notePicture() {
    //   return note.picture;
    // },
    // noteVideo() {
    //   return note.video;
    // },
    // noteAudio() {
    //   return note.audio;
    // }
  },
  methods: {
    showtype() {
      console.log(this.note.type);
    }
  },
  components: { noteEditor, noteEditorColors }
};
