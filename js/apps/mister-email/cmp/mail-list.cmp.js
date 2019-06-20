import mailservice from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';
import mailPrev from '../cmp/mail-prev.cmp.js';
import eventBus, { PICKED_EMAIL_STATE } from '../../../event-bus.js';

export default {
  name: 'mailList',
  template: `
    <section class="mail-list"> 

    <ul>
      <mail-prev 
      :idx="idx" 
      :emails="filterdEmails" 
      v-for= "(email,idx) in filterdEmails" 
      :email="email" 
        :key="idx" class="flex space-between">

      </mail-prev>
        
    </ul>

  
    </section>
`,
  props: [],
  data() {
    return {
      emails: null,
      currentEmailsState: 1
    };
  },
  created() {
    console.log('loaded the mail-list');
    this.emails = mailservice.query();
    console.log(this.emails);
    eventBus.$on(PICKED_EMAIL_STATE, state => {
      this.currentEmailsState = state;
    });
  },
  destroyed() {},
  computed: {
    filterdEmails: function() {
      if (this.currentEmailsState === 1) {
        return this.emails.filter(email => !email.isDeleted);
      } else if (this.currentEmailsState === 2) {
        return this.emails.filter(email => email.isSent);
      } else if (this.currentEmailsState === 3) {
        return this.emails.filter(email => email.isDeleted);
      }
    }
  },
  methods: {
    pickedEmails(emailsType) {}
  },
  components: { mailPrev }
};
