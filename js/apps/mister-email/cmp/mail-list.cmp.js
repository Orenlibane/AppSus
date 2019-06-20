import mailservice from '../services/mailservice.js';

export default {
  name: 'mailList',
  template: `
    <section class="mail-list"> 

    <ul>
        <li v-for= "email in emails">
           <button>Check</button>  <button>Star</button>  "user"  <span>{{email.subject}}</span> <span>{{email.sendAt}}</span>
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
