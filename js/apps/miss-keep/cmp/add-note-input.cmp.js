export default {
  name: 'addNoteInput',
  template: `
    
    <section class="input-container "> 
        
                <input  v-model="newNote.content" v-if="noteTxt" type="text" placeholder="Please enter a text"/>
                <input   v-model="newNote.content" v-if="noteImg" type="text" placeholder="Enter Image URL"/>
                <input   v-model="newNote.content" v-if="noteVideo" type="text" placeholder="Enter Video URL"/>
                <!-- <input   v-model="inputValue" v-if="noteAudio" type="text" placeholder="Enter Image Url"/> -->
                <input   v-model="newNote.content" v-if="noteTodos" type="text" placeholder="Enter Comma Seperated List"/>
                    
                    <i @click="changeNoteState('txt')"   class="fas fa-font"></i> 
                    <i @click="changeNoteState('img')"   class="fas fa-image"></i>
                    <i @click="changeNoteState('video')" class="fab fa-youtube"></i>
                    <i @click="changeNoteState('audio')" class="fas fa-volume-up"></i>    
                    <i @click="changeNoteState('todos')" class="fas fa-volume-up"></i>    
                    <button @click="emitNoteValue">ADD ME</button>
        </section>
`,
  props: [],
  data() {
    return {
      noteTxt: true,
      noteImg: false,
      noteVideo: false,
      noteAudio: false,
      noteTodos: false,
      newNote: {
        _id: null,
        content: null,
        type: null,
        color: null,
        picture: null
      }
    };
  },
  created() {
    console.log('loaded');
  },
  destroyed() {},
  computed: {},
  methods: {
    changeNoteState(state) {
      console.log(state);
      this.inputValue = '';
      this.noteTxt = false;
      this.noteImg = false;
      this.noteVideo = false;
      this.noteAudio = false;
      this.noteTodos = false;
      if (state === 'txt') {
        this.noteTxt = true;
        this.newNote.type = 'txt';
      }
      if (state === 'img') {
        this.noteImg = true;
        this.newNote.type = 'img';
      }

      if (state === 'video') {
        this.noteVideo = true;
        this.newNote.type = 'video';
      }
      if (state === 'audio') {
        this.noteAudio = true;
        this.newNote.type = 'audio';
      }

      if (state === 'todos') {
        this.noteTodos = true;
        this.newNote.type = 'toods';
      }
    },
    emitNoteValue() {
      this.$emit('noteValue', this.newNote);
      this.inputValue = '';
      this.newNote = {
        _id: null,
        content: null,
        type: null,
        color: null,
        picture: null
      };
    }
  },
  components: {}
};
