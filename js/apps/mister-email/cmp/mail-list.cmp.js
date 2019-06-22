import mailservice from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';
import mailPrev from '../cmp/mail-prev.cmp.js';
import eventBus, { PICKED_EMAIL_STATE } from '../../../event-bus.js';
import mailFilter from './mail-filter.cmp.js';

export default {
  name: 'mailList',
  template: `
    <section class="mail-list"> 
      <mail-filter @filterapp="setFilterrr"></mail-filter>

    <ul>
      <li class="flex space-between emails-titles"> 
         <span> Sent From </span> <span> subject  </span> <span>Date Recived</span>
                </li>
      <mail-prev 
      :idx="idx" 
      :emails="filterdEmails"
      v-for= "(email,idx) in filterdEmails" 
      :email="email" 

        :key="idx" class="flex space-between"
       
        >
      <!-- :emails="emailsToShow" -->
            <!-- :emails="filterdEmails" -->

                  <!-- :filterdEmails ="emailsToShow" -->





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
      temp:[]
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
  destroyed() {},
  computed: {
    filterdEmails: function() {



      if (!this.filter) return this.emails;
      // return this.emails.filter(email => email.subject.includes(this.filter.txt))
      

      // if (!this.filter) return this.emails;
      else if (this.filter.isRead === 'Read') {
        return this.emails.filter(email => email.isRead === true)
      } else if (this.filter.isRead === 'UnRead') {
        return this.emails.filter(email => email.isRead === false)
      } else if (this.filter.isRead === 'All') {
        return this.emails.filter(email => email.isRead === false)
      }
    
     
    //  if(this.filter.isRead === 'All'){
    //    this.temp = this.temp = this.emails.filter(email => email.subject.includes(this.filter.txt))
    //  }

      // if (!this.filter) return this.emails;

      if (this.currentEmailsState === 1) {
        return this.emails.filter(email => (!email.isDeleted) && (email.subject.includes(this.filter.txt)));
      } else if (this.currentEmailsState === 2) {
        return this.emails.filter(email => (email.isSent) && (email.subject.includes(this.filter.txt)));
      } else if (this.currentEmailsState === 3) {
        return this.emails.filter(email => (email.isDeleted) && (email.subject.includes(this.filter.txt)));
      }

      // if (this.currentEmailsState === 1) {
      //   return this.emails.filter(email => !email.isDeleted);
      // } else if (this.currentEmailsState === 2) {
      //   return this.emails.filter(email => email.isSent);
      // } else if (this.currentEmailsState === 3) {
      //   return this.emails.filter(email => email.isDeleted);
      // }
    },

    // emailsToShow() {

    //   if (!this.filter) return this.emails;
    //   console.log('I am here 35', this.filter.txt);
    //   console.log('I am here 75', this.emails);

    //   return this.emails.filter(email => email.subject.includes(this.filter.txt))
    // }
    
  
  },
  methods: {
    pickedEmails(emailsType) {},

    setFilterrr(filterBy) {
      this.filter = filterBy;
    }
  },
  components: {
    mailPrev,
    mailFilter
  }
};
