export default {
  name: 'addNoteInput',
  template: `
    
    <section class="input-container "> 

    

                
                <input  v-model="newNote.content" v-if="noteTxt" type="text" placeholder="Please enter a text"/>
                <input   v-model="newNote.picture" v-if="noteImg" type="text" placeholder="Enter Image URL"/>
                <input   v-model="newNote.video" v-if="noteVideo" type="text" placeholder="Enter Video URL"/>
                <input   v-model="audio" v-if="noteAudio" type="text" placeholder="Enter Audio"/>
                <input   v-if="noteTodos" type="text" placeholder="Enter Comma Seperated List"/>
                    
                    <i @click="changeNoteState('txt')"   class="fas fa-font"></i> 
                    <i @click="changeNoteState('img')"   class="fas fa-image"></i>
                    <i @click="changeNoteState('video')" class="fab fa-youtube"></i>
                    <i @click="changeNoteState('audio')" class="fas fa-volume-up"></i>    
                    <i @click="changeNoteState('todos')" class="fas fa-list"></i>    
                    <button @click="emitNoteValue">ADD ME</button>

              
                    <transition name="slide-fade">
    <div v-if='todoModal' class="  todo-model flex both-align-center column space-between">
            <h1>TODOS</h1>
                    <input type="text" v-model="newNote.todos.todo1" placeholder="ENTER YOUR TODO">
                    <input type="text" v-model="newNote.todos.todo2" placeholder="ENTER YOUR TODO">
                    <input type="text" v-model="newNote.todos.todo3" placeholder="ENTER YOUR TODO">
                </div>
      <transition>
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
        audio: null,
        todos: {
          todo1: '',
          todo2: '',
          todo3: ''
        }
      },
      todoModal: false
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
        this.todoModal = !this.todoModal;
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
