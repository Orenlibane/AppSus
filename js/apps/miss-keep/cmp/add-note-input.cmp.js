export default {
  name: 'addNoteInput',
  template: `
    <section class="input-container "> 

                <input  v-model="newNote.content" v-if="noteTxt" type="text" placeholder="Please enter a text"/>
                <input   v-model="newNote.picture" v-if="noteImg" type="text" placeholder="Enter Image URL"/>
                <input   v-model="newNote.video" v-if="noteVideo" type="text" placeholder="Enter Video URL"/>
                <input   v-model="audio" v-if="noteAudio" type="text" placeholder="Enter Audio"/>
                <input  v-model="newNote.content" v-if="noteTodos" type="text" placeholder="Enter Comma Seperated List"/>
                    
                    <i @click="changeNoteState('noteTxt')"   class="fas fa-font"></i> 
                    <i @click="changeNoteState('noteImg')"   class="fas fa-image"></i>
                    <i @click="changeNoteState('noteVideo')" class="fab fa-youtube"></i>
                    <i @click="changeNoteState('noteAudio')" class="fas fa-volume-up"></i>    
                    <i @click="changeNoteState('noteTodos')" class="fas fa-list"></i>    
                    <button @click="emitNoteValue">ADD ME</button>

              
                    <transition name="slide-fade">
    <div v-if='todoModal' class="todo-model flex column">
            <h1>TODOS</h1>
                   <div> <input type="text" v-model="newNote.todos.todo1" placeholder="ENTER YOUR TODO"><img src="../../../../img/push-pin.png" alt=""/></div>
                   <div><input type="text" v-model="newNote.todos.todo2" placeholder="ENTER YOUR TODO"><img src="../../../../img/push-pin.png" alt=""/></div>
                   <div> <input type="text" v-model="newNote.todos.todo3" placeholder="ENTER YOUR TODO"><img src="../../../../img/push-pin.png" alt=""/></div>
                <div class="flex both-align-center"> <button  @click="emitNoteValue" >Add </button> <button @click="todoModal=!todoModal"> X </button> </div>
                  </div>
                </transition>
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
        type: 'noteTxt',
        color: null,
        picture: null,
        video: null,
        audio: null,
        todos: {
          todo1: '',
          todo2: '',
          todo3: ''
        },
        isPin:false
      },
      currentState: 'noteTxt',
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
      this.currentState = state;
      console.log(state);
      this.inputValue = '';
      this.noteTxt = false;
      this.noteImg = false;
      this.noteVideo = false;
      this.noteAudio = false;
      this.noteTodos = false;
      if (state === 'noteTxt') {
        this.noteTxt = true;
        this.newNote.type = 'noteTxt';
      }
      if (state === 'noteImg') {
        this.noteImg = true;
        this.newNote.type = 'noteImg';
      }

      if (state === 'noteVideo') {
        this.noteVideo = true;
        this.newNote.type = 'noteVideo';
      }
      if (state === 'noteAudio') {
        this.noteAudio = true;
        this.newNote.type = 'noteAudio';
      }

      if (state === 'noteTodos') {
        this.noteTodos = true;
        this.newNote.type = 'noteToods';
        this.todoModal = !this.todoModal;
      }
    },
    emitNoteValue() {
      console.log(this.newNote);
      this.$emit('noteValue', this.newNote);
      this.inputValue = '';
      this.newNote = {
        _id: null,
        content: null,
        type: this.currentState,
        color: null,
        picture: null,
        video: null,
        audio: null,
        todos: {
          todo1: '',
          todo2: '',
          todo3: ''
        },
        isPin:false,
        isDone: false
      };
    },
    components: {}
  }
};
