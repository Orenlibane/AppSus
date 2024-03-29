import storageService from '../../../main-service/storage.js';
import eventBus, { EMAILS_DB } from '../../../event-bus.js';

export default {
  name: 'mailPrev',
  template: `
          <transition name="appear">
    <li class="mail-prev flex align-center" :class="{ read: !email.isRead }" > 
        <span class="main-mail-spec flex align-center">             
            <i 
                @click="toogleFav" 
                :class="[email.isFav? 'fas' : 'far']"
                class="fa-star"></i>   
            {{email.name}}             
        </span>  
        <span 
            @click="toggleIsRead('noToggle')" 
            class="left subject"> 
              <router-link :to="emailUrl">{{email.subject | snippet}}</router-link>  
        </span> 
        <span>{{email.sendAt}}</span>
        <i  @click.stop="deleteEmail(idx)" class="fas fa-trash-alt" ></i>
     <span @click="toggleIsRead">
                      <i class="far fa-envelope-open" v-if="email.isRead"></i>
                      <i class="fas fa-envelope" v-else></i>
                    </span>
      </li>
      </transition>

    

`,
  props: ['email', 'idx', 'emails'],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {
    emailUrl() {
      return '/misterEmail/' + this.email._id;
    }
  },
  methods: {
    deleteEmail(emailIdx) {
      this.emails[emailIdx].isDeleted = true;
      storageService.store('emailsDB', this.emails);
      //TODO: emit to list so it will delete it - also for toggleRead and togglefav.
    },
    toogleFav() {
      this.email.isFav = !this.email.isFav;
    },
    toggleIsRead(status) {
      if (status === 'noToggle') {
        this.email.isRead = true;
        storageService.store('emailsDB', this.emails);
        return;
      }

      this.email.isRead = !this.email.isRead;
      eventBus.$emit(EMAILS_DB, this.emails); //TODO: TEST TEST TEST
      storageService.store('emailsDB', this.emails);
    }
  },
  components: {}
};
