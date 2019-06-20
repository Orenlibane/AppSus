import mailService from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';

export default {
  name: 'email-det',
  template: `
    <section class="email-det">
    <div class="flex space-between send-mail-head"> <span>  New Messege </span> <span><i  @click="backToMails" class="fas fa-times"></i></span> </div>
               <div><input v-model="email.subject" type="text" placeholder="Enter mail Subject"/>  </div> 
                <div><input v-model="email.sendto" type="text" placeholder="Enter email to send to"/>  </div>
                <textarea name="" id="" v-model="email.body"></textarea>
                 <button @click="sendmail">SEND MAIL</button>
              </div>    </section>
`,
  props: [],
  data() {
    return {
      email: null,
      newemail: {
        _id: '',
        body: '',
        subject: '',
        name: 'oren&lior',
        isRead: true,
        sendAt:
          new Date().getMonth() +
          '-' +
          new Date().getDay() +
          ':' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes(),
        isDeleted: false,
        sendto: '',
        isSent: true
      }
    };
  },
  created() {
    const mailId = this.$route.params.theMailId;
    mailService.getById(mailId).then(email => {
      this.email = email;
      console.log(this.email);
    });
  },
  destroyed() {},
  computed: {},
  methods: {
    sendmail() {
      if (!this.newemail.sendto) {
        return false;
      }

      mailService.updateDB(this.newemail);

      this.newemail = {
        id: '',
        body: '',
        subject: '',
        name: 'oren&lior',
        isRead: true,
        sendAt: new Date(),
        isDeleted: false,
        sendto: '',
        isSent: true
      };
      this.sendmodal = !this.sendmodal;
    },
    backToMails() {
      this.$router.push('/misterEmail');
    }
  },
  components: {}
};
