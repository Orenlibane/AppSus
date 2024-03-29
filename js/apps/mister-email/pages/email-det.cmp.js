import mailService from '../services/mailservice.js';
import utilService from '../../../main-service/util-service.js';
import headerCmp from '../../../main-cmp/header.cmp.js';
import sideNav from '../cmp/mail-side.cmp.js';

export default {
  name: 'email-det',
  template: `
  <div>
  <header-cmp></header-cmp>
      <div class="flex">
        <side-nav></side-nav>
  
    <section class="email-det">
    <div class="flex space-between send-mail-head"> <span>  {{subject}} </span> <span><i  @click="backToMails" class="fas fa-times"></i></span> </div>
    
    <div class="flex">
          <button class="replayBtn" v-if="!isReply" @click="replaymail"><i class="fas fa-reply"></i>Reply</button>
          <button class="replayBtn" v-if="isReply" @click="sendmail"><i class="fas fa-share"></i>Send</button>
        <div class="flex column inputs-container">
          <div class="flex"><button>Subject:</button><input v-model="newEmail.subject" type="text" placeholder="Enter mail Subject"/>  </div> 
          <div class="flex"><button @click="showMailsAdress=!showMailsAdress">SendTo:</button><input v-model="newEmail.sendto" type="text" placeholder="Enter email to send to"/> 
          <transition name="appear">
                <div class="show-mails-adress" v-if='showMailsAdress'>
              <h3>Regular contacts:</h3>  
              <ol>
                  <li>orenlibane@gmail.com</li>
                  <li>liorLila@gmail.com</li>
                  <li>BarakTal@gmail.com</li>
                </ol>
              </div>       
              </transition>        
          </div>
        </div>
      </div>
      <div class="sent-from"> Sent From: {{email.name}}</div>
                <textarea name="" id="" v-model="newEmail.body"></textarea>
                 </section>
              </div>
</div>
`,
  props: [],
  data() {
    return {
      email: null,
      isReply: false,
      newEmail: null,
      subject: '',
      showMailsAdress: ''
    };
  },

  created() {
    const mailId = this.$route.params.theMailId;
    this.email = mailService.getById(mailId);
    this.subject = this.email.subject;
    this.newEmail = {
      _id: this.email._id,
      body: this.email.body,
      subject: this.email.subject,
      name: 'oren&lior',
      isRead: true,
      sendAt: new Date().getHours() + ':' + new Date().getMinutes(),
      isDeleted: false,
      sendto: this.email.sendto,
      isSent: true,
      isFav: false
    };
  },
  mounted() {},
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
      mailService.saveEmailDB();

      this.$router.push('/misterEmail');
    }
  },
  components: { headerCmp, sideNav }
};
