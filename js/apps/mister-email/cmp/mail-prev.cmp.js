import storageService from '../../../main-service/storage.js';

export default {
  name: 'mailPrev',
  template: `
    <li class="mail-prev"> 
    <span class="main-mail-spec"> <input type="checkbox" @click="toggleIsRead"/>  <i @click="" class="fas fa-star"></i>   
    {{email.name}}             
                </span>  <span @click="toggleIsRead('noToggle')" :class="{ read: !email.isRead }" class="left subject"> <router-link :to="emailUrl">{{email.subject}}</router-link>  
           </span> <span>{{email.sendAt}}</span><i  @click.stop="deleteEmail(idx)" class="fas fa-trash-alt" ></i>
   
   
          </li>

`,
  props: ['email', 'idx', 'emails'],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {
    emailUrl() {
      return '/mails/' + this.email._id;
    }
  },
  methods: {
    deleteEmail(emailIdx) {
      this.emails[emailIdx].isDeleted = true;
      storageService.store('emailsDB', this.emails);
      //TODO: emit to list so it will delete it - also for toggleRead.
    },

    // maybe to move to mail-list
    toggleIsRead(status) {
      // debugger;
      if (status === 'noToggle') {
        this.email.isRead = true;
        console.log(this.email.isRead);

        storageService.store('emailsDB', this.emails);
        return;
      }

      this.email.isRead = !this.email.isRead;
      console.log(this.email.isRead);
      storageService.store('emailsDB', this.emails);
    }
  },
  components: {}
};
