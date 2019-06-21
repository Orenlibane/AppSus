import storageService from '../../../main-service/storage.js';
import eventBus, { EMAILS_DB } from '../../../event-bus.js';

//need to add checked to checkbox if its already been read

export default {
  name: 'mailPrev',
  template: `
    <li class="mail-prev flex align-center" :class="{ read: !email.isRead }" > 
        <span class="main-mail-spec flex align-center"> 
            <input type="checkbox" @click="toggleIsRead" />  
            <i 
                @click="toogleFav" 
                :class="[email.isFav? 'fas' : 'far']"
                class="fa-star"></i>   
            {{email.name}}             
        </span>  
        <span 
            @click="toggleIsRead('noToggle')" 
            
            class="left subject"> 
              <router-link :to="emailUrl">{{email.subject}}</router-link>  
        </span> 
        <span>{{email.sendAt}}</span>
        <i  @click.stop="deleteEmail(idx)" class="fas fa-trash-alt" ></i>
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
      //TODO: emit to list so it will delete it - also for toggleRead and togglefav.
    },
    toogleFav() {
      console.log(this.email.isFav);
      this.email.isFav = !this.email.isFav;
      console.log(this.email.isFav);
    },
    toggleIsRead(status) {
      // debugger;
      if (status === 'noToggle') {
        this.email.isRead = true;
        console.log(this.email.isRead);

        storageService.store('emailsDB', this.emails);
        return;
      }

      this.email.isRead = !this.email.isRead;
      eventBus.$emit(EMAILS_DB, this.emails); //TODO: TEST TEST TEST

      console.log(this.email.isRead);
      storageService.store('emailsDB', this.emails);
    }
  },
  components: {}
};
