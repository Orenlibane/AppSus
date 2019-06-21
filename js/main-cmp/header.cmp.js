import mailCount from '../apps/mister-email/cmp/mail-count.cmp.js';

export default {
  name: 'Header',
  template: `
    <section class="global-header flex  align-center space-between">
      <div class="flex align-center"><div class="logo"> </div> </div> <span> <i @click="showRoutes" class="fas fa-map-signs"></i> </span>

      <transition name="slide-fade">

        <div class="appsus-nav flex both-align-center" v-if="navOpen"> 
       
          <ul class="flex flex-wrap both-align-center">
            <li><router-link to="/"> <img  src="../../../../img/house.svg" /> </router-link></li>
            <li><router-link to="/misterEmail"> <img  src="../../../../img/gmail.svg"/> </router-link></li>
            <li><router-link to="/missKeep"> <img  src="../../../../img/notepad.svg"/> </router-link></li>
            <li><router-link to="/"> <img  src="../../../../img/books.svg" /> </router-link></li>
          </ul>
          
          
        </div>
      </transition>
      <div class="counters-container">
        <ul class="flex clean-list space-between">
          <li class="flex column align-center">  <img  src="../../../../img/gmail.svg"/><mail-count> </mail-count></li>
           <li class="flex column align-center"> <img  src="../../../../img/notepad.svg"/><mail-count> </mail-count></li>
          <li class="flex column align-center">  <img  src="../../../../img/books.svg"/><mail-count> </mail-count></li>
        </ul>
      </div>

    </section>
`,
  // props: [],
  data() {
    return {
      navOpen: false
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    showRoutes() {
      this.navOpen = !this.navOpen;
    }
  },
  components: { mailCount }
};
