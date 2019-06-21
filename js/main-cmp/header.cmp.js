export default {
  name: 'Header',
  template: `
    <section class="global-header flex  align-center space-between">
      <div>APSUS -> some cool logo will come here</div> <span> <i @click="showRoutes" class="fas fa-map-signs"></i> </span>
        <transition name="slide-fade">
        <div class="appsus-nav flex both-align-center" v-if="navOpen"> 
          
          <ul class="flex flex-wrap both-align-center">
            <li><router-link to="/"> <img  src="../../../../img/house.svg" alt="" /> </router-link></li>
            <li><router-link to="/misterEmail"> <img  src="../../../../img/gmail.svg" alt="" /> </router-link></li>
            <li><router-link to="/missKeep"> <img  src="../../../../img/notepad.svg" alt="" /> </router-link></li>
            <li><router-link to="/"> <img  src="../../../../img/books.svg" alt="" /> </router-link></li>
          </ul>
          
          
        </div>
      </transition>
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
  components: {}
};
