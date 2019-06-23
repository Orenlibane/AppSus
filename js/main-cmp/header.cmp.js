export default {
  name: 'Header',
  template: `
    <section class="global-header flex  align-center space-between">
    <div class="logo"> </div>
     
      
            <transition name="slide-fade">
              <div class="appsus-nav flex both-align-center" v-if="navOpen"> 
             
                <ul class="flex flex-wrap both-align-center">
                  <li><router-link to="/"> <img  src="img/house.svg" /> </router-link></li>
                  <li><router-link to="/misterEmail"> <img  src="img/gmail.svg"/> </router-link></li>
                  <li><router-link to="/missKeep"> <img  src="img/notepad.svg"/> </router-link></li>
                  <li><router-link to="/missBook"> <img  src="img/books.svg" /> </router-link></li>
                </ul>
                
              </div>
            </transition>
            <i @click="showRoutes" class="fas fa-th"></i>               

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
