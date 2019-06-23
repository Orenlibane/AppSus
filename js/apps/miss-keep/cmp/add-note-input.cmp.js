import countersCmp from '../../../main-cmp/counters.cmp.js';

export default {
  name: 'addNoteInput',
  template: `
    <section class="input-container"> 
                <input  v-model="newNote.content" v-if="noteTxt" type="text" placeholder="Please enter a text"/>
                <input   v-model="newNote.picture" v-if="noteImg" type="text" placeholder="Enter Image URL"/>
                <input   v-model="newNote.video" v-if="noteVideo" type="text" placeholder="Enter Video URL"/>
                <input   v-model="audio" v-if="noteAudio" type="text" placeholder="Enter Audio"/>
                <input  v-model="newNote.content" v-if="noteTodo" type="text" placeholder="Enter Comma Seperated List"/>
                    
                    <i @click="changeNoteState('noteTxt')"   class="fas fa-font"></i> 
                    <i @click="changeNoteState('noteImg')"   class="fas fa-image"></i>
                    <i @click="changeNoteState('noteVideo')" class="fab fa-youtube"></i>
                    <i @click="changeNoteState('noteAudio')" class="fas fa-volume-up"></i>    
                    <i @click="changeNoteState('noteTodo')" class="fas fa-list"></i>    
                    <button @click="emitNoteValue('dontCloseModal')">ADD ME</button>

              
                    <transition name="slide-fade">
    <div v-if='todoModal' class="todo-model flex column">
            <h1>TODOS</h1>
                   <div> <input type="text" v-model="newNote.todos.todo1" placeholder="ENTER YOUR TODO"><img src="../../../../img/push-pin.png" alt=""/></div>
                   <div><input type="text" v-model="newNote.todos.todo2" placeholder="ENTER YOUR TODO"><img src="../../../../img/push-pin.png" alt=""/></div>
                   <div> <input type="text" v-model="newNote.todos.todo3" placeholder="ENTER YOUR TODO"><img src="../../../../img/push-pin.png" alt=""/></div>
                  <div class="flex both-align-center"> <button  @click="emitNoteValue('closeModal')" >Add </button>  </div>
                  </div>
                </transition>
                <!-- <counters-cmp></counters-cmp> -->

        </section>
`,
  props: [],
  data() {
    return {
      noteTxt: true,
      noteImg: false,
      noteVideo: false,
      noteAudio: false,
      noteTodo: false,
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
        isPin: false
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

      if (state === 'noteTodo') {
        this.noteTodos = true;
        this.newNote.type = 'noteTodo';
        this.todoModal = !this.todoModal;
      }
    },
    emitNoteValue(indicator) {
      console.log(this.newNote);
      if (indicator === 'closeModal') this.todoModal = !this.todoModal;
      this.$emit('noteValue', this.newNote);
      this.inputValue = '';
      this.newNote = {
        _id: null,
        content: null,
        type: this.currentState,
        color: 'yellow',
        picture: null,
        video: null,
        audio: null,
        isPin: false,
        isDone: false,
        todos: {
          todo1: '',
          todo2: '',
          todo3: ''
        }
      };
    }
  },
  components: { countersCmp }
};
