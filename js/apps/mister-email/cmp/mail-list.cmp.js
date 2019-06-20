import mailservice from '../services/mailservice.js';

export default {
  name: 'mailList',
  template: `
    <section class="mail-list"> 

    <ul>
        <li v-for= "(email,idx) in emails" :key="idx" class="flex space-between" v-if = "!email.isDeleted">
           <span class="main-mail-spec"><button>Check</button>  <button>Star</button>   
           {{email.name}}               
</span>  <span class="left subject">{{email.subject}}
           </span> <span>{{email.sendAt}}</span><i  @click.stop="deleteEmail(idx)" class="fas fa-trash-alt" ></i>
        </li>
    </ul>

    </section>
`,
  props: [],
  data() {
    return { 
      emails: null,
      // deletedEmail: {isDeleted: false}
    };
  },
  created() {
    console.log('loaded the mail-list');
    this.emails = mailservice.query();
    console.log(this.emails);
  },
  destroyed() {},
  computed: {},
  methods: {
    deleteEmail(emailIdx){
      this.emails[emailIdx].isDeleted = true
      // this.emails.splice(emailIdx,1)
      console.log(this.emails[emailIdx]);


      // v -if= "deletedEmail.isDeleted"

      
    },
  },
  components: {}
};
