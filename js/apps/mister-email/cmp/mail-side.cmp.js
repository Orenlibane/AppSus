import utilService from '../../../main-service/util-service.js';
import eventBus, { PICKED_EMAIL_STATE } from '../../../event-bus.js';

export default {
  name: 'mailSide',
  template: `
    <section class="mail-side flex">
        <div class="flex column side center  "> 
            <ul>    
              <li class="send-mail" @click="showSendMailModal">Send Mail</li>
                <li class="flex flex-space-around" @click="sendPickedEmails(1)"><i class="fas fa-inbox"></i>Mails</li>
                <li class="flex flex-space-around" @click="sendPickedEmails(2)"><i class="fas fa-share"></i>Sent</li>
                <li class="flex flex-space-around" @click="sendPickedEmails(3)"><i class="fas fa-trash"></i>Deleted</li>
              </ul>
              <div class="send-modal" v-if="sendmodal">
                <div class="flex space-between send-mail-head"> <span>  New Messege </span> <span><i @click=showSendMailModal class="fas fa-times"></i></span> </div>
               <div><input v-model="newemail.subject" type="text" placeholder="Enter mail Subject"/>  </div> 
                <div><input v-model="newemail.sendto" type="text" placeholder="Enter email to send to"/>  </div>
                <textarea name="" id="" v-model="newemail.body"></textarea>
                <div> here will come the edit text buttons <button @click="sendmail">SEND MAIL</button></div>
              </div>
        </div>
    </section>
`,
  props: [],
  data() {
    return {
      sendmodal: false,
      pickedEmails: 1,
      newemail: {
        id: utilService.makeId(),
        body: '',
        subject: '',
        name: 'oren&lior',
        isRead: true,
        sendAt: new Date(),
        isDeleted: false,
        sendto: '',
        isSent: true
      }
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    showSendMailModal() {
      this.sendmodal = !this.sendmodal;
    },
    sendmail() {
      if (this.newemail.sendto) {
        return false;
      }
      console.log(this.newemail.sendto);
      console.log(this.newemail);
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
    sendPickedEmails(emailsType) {
      this.pickedEmails = emailsType;
      console.log(this.pickedEmails);
      eventBus.$emit(PICKED_EMAIL_STATE, this.pickedEmails);
    }
  },
  components: {}
};
