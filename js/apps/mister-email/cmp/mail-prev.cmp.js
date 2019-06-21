import storageService from '../../../main-service/storage.js';

export default {
  name: 'mailPrev',
  template: `
    <li class="mail-prev"> 
    <span class="main-mail-spec"> <input type="checkbox"/>  <i @click=toggleDone class="fas fa-star"></i>   
    {{email.name}}             
                </span>  <span :class="{ read: email.isRead }" class="left subject"> <router-link :to="emailUrl">{{email.subject}}</router-link>  
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
      //TODO: emit to list so it will delete it.
    },
    toggleDone() {
      //TODO: need to update the class and adding to props is done
    },
    addDone() {
      console.log('should add done');
    }
  },
  components: {}
};
