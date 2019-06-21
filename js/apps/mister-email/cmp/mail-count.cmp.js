import mailService from '../services/mailservice.js';
import eventBus, { EMAILS_DB } from '../../../event-bus.js';

export default {
  name: 'Mailcount',

  template: `
    <section class="mail-count"> 
                <h1>Email Count </h1>
                <p>{{mailsToReadShow}} / {{emails}}</p>
    </section>
`,
  props: [],
  data() {
    return {
      emails: null,
      mailsToRead: null,
      mailsToReadShow: null
    };
  },
  created() {
    this.emails = mailService.query().length;
    this.mailsToRead = mailService.query().filter(email => {
      return !email.isRead;
    });
    this.mailsToReadShow = this.mailsToRead.length;

    eventBus.$on(EMAILS_DB, emails => {
      this.mailsToRead = emails.filter(email => {
        return !email.isRead;
      });
      this.mailsToReadShow = this.mailsToRead.length;
    });
  },
  destroyed() {},
  computed: {
    // countEmailRead() {
    //   return (this.mailsToReadShow = this.mailsToRead.length);
    // }
  },
  methods: {},
  components: {}
};
