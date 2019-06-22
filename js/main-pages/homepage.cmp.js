export default {
  name: 'HomePage',
  template: `
    <section class="home-page ">
     
    <transition name="slide-fade">
    <h1 v-if="showTitle" class="main-title flex both-align-center"> Welcome to AppSus</h1>
    </transition>

    <transition name="slide-fade">

    <nav v-if="showNav" class="main-routes-nav center">
                    <router-link exact to="/">Home</router-link> | 
                    <router-link to="/misterEmail">Mister-Email</router-link> |
                    <router-link to="/missKeep">Miss-Keep</router-link> 
                    <!-- <router-link to="/miss-books">Miss-books</router-link>  -->
    </nav>
    </transition>



  <div class="apps-icons flex both-align-center">
  <transition name="slide-fade-left">
    <img v-if="icon1Show" src="../../../../img/gmail.svg"/>
    </transition>
    <transition name="slide-fade-left">
      <img  v-if="icon2Show" src="../../../../img/notepad.svg"/>
    </transition>
      <transition name="slide-fade-left">        
        <img  v-if="icon3Show" src="../../../../img/books.svg"/>
      </transition>
</div>


    </section>
`,
  props: [],
  data() {
    return {
      showTitle: false,
      showNav: false,
      icon1Show: false,
      icon2Show: false,
      icon3Show: false
    };
  },
  created() {
    console.log('home-page-loaded');
    this.showAnimations();
  },
  destroyed() {},
  computed: {},
  methods: {
    showAnimations() {
      setTimeout(() => {
        this.showTitle = true;
      }, 1000);
      setTimeout(() => {
        this.showNav = true;
      }, 1500);
      setTimeout(() => {
        this.icon1Show = true;
      }, 2000);
      setTimeout(() => {
        this.icon2Show = true;
      }, 2500);
      setTimeout(() => {
        this.icon3Show = true;
      }, 3000);
    }
  },
  components: {}
};
