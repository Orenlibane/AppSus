import mailService from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';

export default {
  name: 'email-det',
  template: `
    <section class="email-det">
    <div class="flex space-between send-mail-head"> <span>  New Messege </span> <span><i  @click="backToMails" class="fas fa-times"></i></span> </div>
               <div><input v-model="newEmail.subject" type="text" placeholder="Enter mail Subject"/>  </div> 
                <div><input v-model="newEmail.sendto" type="text" placeholder="Enter email to send to"/>  </div>
                <textarea name="" id="" v-model="newEmail.body"></textarea>
                 <button @click="replaymail">Reply To MAIL</button>
                 <button v-if="isReply" @click="sendmail">Send Mail</button>
              </div>    </section>
`,
  props: [],
  data() {
    return {
      email: null,
      isReply: false,
      newEmail: null
    };
  },

  created() {
    const mailId = this.$route.params.theMailId;
    mailService.getById(mailId).then(email => {
      this.email = email;
      //creating the returning mail
      this.newEmail = {
        _id: this.email._id,
        body: this.email.body,
        subject: this.email.subject,
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
        sendto: this.email.sendto,
        isSent: true
      };
    });
  },
  destroyed() {},
  computed: {},
  methods: {
    sendmail() {
      if (!this.newEmail.sendto) {
        return false;
      }

      mailService.updateDB(this.newEmail);

      this.$router.push('/misterEmail');
    },
    replaymail() {
      this.isReply = true;
      this.newEmail.subject = 'RE:' + this.newEmail.subject;
    },
    backToMails() {
      this.$router.push('/misterEmail');
    }
  },
  components: {}
};
