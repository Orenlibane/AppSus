import notesService from '../services/noteservice.js';

export default {
  name: 'TextCount',
  template: `
       <section class="text-count flex  both-align-center"> 
                <span>Notes Count </span>
                <span>{{notesToFinishShow}} / {{notes}}</span>
    </section>
`,
  props: [],
  data() {
    return {
      notes: null,
      notesToFinish: null,
      notesToFinishShow: null
    };
  },
  created() {
    this.notes = notesService.query().length;

    this.notesToFinish = notesService.query().filter(note => {
      return !note.isDone;
    });
    this.notesToFinishShow = this.notesToFinish.length;

    console.log(this.notes);
    console.log(this.notesToFinish);
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: {}
};
