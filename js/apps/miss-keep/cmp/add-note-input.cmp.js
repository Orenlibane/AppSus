export default {
  name: 'addNoteInput',
  template: `
    
    <section class="input-container "> 
        
                <input  v-model="newNote.content" v-if="noteTxt" type="text" placeholder="Please enter a text"/>
                <input   v-model="newNote.picture" v-if="noteImg" type="text" placeholder="Enter Image URL"/>
                <input   v-model="newNote.video" v-if="noteVideo" type="text" placeholder="Enter Video URL"/>
                <input   v-model="audio" v-if="noteAudio" type="text" placeholder="Enter Audio"/>
                <input   v-model="newNote.todos" v-if="noteTodos" type="text" placeholder="Enter Comma Seperated List"/>
                    
                    <i @click="changeNoteState('txt')"   class="fas fa-font"></i> 
                    <i @click="changeNoteState('img')"   class="fas fa-image"></i>
                    <i @click="changeNoteState('video')" class="fab fa-youtube"></i>
                    <i @click="changeNoteState('audio')" class="fas fa-volume-up"></i>    
                    <i @click="changeNoteState('todos')" class="fas fa-list"></i>    
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
        picture: null,
        video: null,
        todos: null,
        audio: null
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
        this.newNote.type = 'noteTxt';
      }
      if (state === 'img') {
        this.noteImg = true;
        this.newNote.type = 'noteImg';
      }

      if (state === 'video') {
        this.noteVideo = true;
        this.newNote.type = 'noteVideo';
      }
      if (state === 'audio') {
        this.noteAudio = true;
        this.newNote.type = 'noteAudio';
      }

      if (state === 'todos') {
        this.noteTodos = true;
        this.newNote.type = 'noteToods';
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
