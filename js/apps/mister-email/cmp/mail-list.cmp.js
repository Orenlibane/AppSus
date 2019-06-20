import mailservice from '../services/mailservice.js';

export default {
  name: 'mailList',
  template: `
    <section class="mail-list"> 

    <ul>
        <li v-for= "(email,idx) in emails" :key="idx" class="flex space-between" >
           <span class="main-mail-spec"><button>Check</button>  <button>Star</button>  {{email.name}}</span>  <span class="left subject">{{email.subject}}</span> <span>{{email.sendAt}}</span><i class="fas fa-trash-alt"></i>
        </li>
    </ul>

    </section>
`,
  props: [],
  data() {
    return { emails: null };
  },
  created() {
    console.log('loaded the mail-list');
    this.emails = mailservice.query();
    console.log(this.emails);
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: {}
};
