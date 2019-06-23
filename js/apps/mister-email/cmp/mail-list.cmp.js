import mailservice from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';
import mailPrev from '../cmp/mail-prev.cmp.js';
import mailDet from '../pages/email-det.cmp.js';
import eventBus, { PICKED_EMAIL_STATE } from '../../../event-bus.js';
import mailFilter from './mail-filter.cmp.js';



export default {
  name: 'mailList',
  template: `
    <section class="mail-list">

      
      <ul>
          <mail-filter @filterapp="setFilterrr"></mail-filter>
        <li class="flex space-between emails-titles"> 
          <span> Sent From </span> <span @click="sortSubject"> subject  </span> <span @click="sortDate">Date Recived</span>
        </li>
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
      currentEmailsState: 1,
      filter: null,
      temp: [],
    };
  },
  created() {
    console.log('loaded the mail-list');
    this.emails = mailservice.query();
    // this.emails =  this.filterdEmails;

    console.log(this.emails);
    eventBus.$on(PICKED_EMAIL_STATE, state => {
      this.currentEmailsState = state;
    });
  },
  destroyed() { },
  computed: {
    filterdEmails: function () {
      this.temp = this.emails;

      if (!this.filter || this.filter.isRead === 'All') {
        if (!this.filter) {
          this.temp = this.emails;
        } else {
          this.temp = this.emails.filter(email =>
            email.subject.includes(this.filter.txt)
          );
        }
      } else if (this.filter.isRead === 'Read') {
        this.temp = this.emails.filter(
          email => email.isRead && email.subject.includes(this.filter.txt)
        );
      } else if (this.filter.isRead === 'UnRead') {
        this.temp = this.emails.filter(
          email => !email.isRead && email.subject.includes(this.filter.txt)
        );
      }
      if (this.currentEmailsState === 1) {
        return this.temp.filter(email => !email.isDeleted);
      } else if (this.currentEmailsState === 2) {
        return this.temp.filter(email => email.isSent);
      } else if (this.currentEmailsState === 3) {
        return this.temp.filter(email => email.isDeleted && !email.isSent);
      }
    }
  },
  methods: {
    setFilterrr(filterBy) {
      this.filter = filterBy;
    },
    sortSubject() {
      this.emails.sort((email1, email2) => {
        if (email1.subject.toLowerCase() > email2.subject.toLowerCase()) {
          return 1
        } else if (email1.subject.toLowerCase() < email2.subject.toLowerCase()) {
          return -1
        } else { return 0 }
      });
    },
    sortDate() {
      this.emails.sort((email1, email2) => {
        if (email1.sendAt > email2.sendAt) {
          return 1
        } else if (email1.sendAt < email2.sendAt) {
          return -1

        } else { return 0 }
      });
    }
  },
  components: {
    mailPrev,
    mailFilter,
    mailDet
  }
};
