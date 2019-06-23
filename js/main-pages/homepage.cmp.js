import headerCmp from '../main-cmp/header.cmp.js';

export default {
  name: 'HomePage',
  template: `
    <section class="home-page ">
    <headerCmp></headerCmp>
    <transition name="slide-fade">
    <h1 v-if="showTitle" class="main-title flex both-align-center"> Welcome to AppSus</h1>
    </transition>

    



  <div class="apps-icons flex both-align-center">
  <transition name="slide-fade-left">
  <router-link v-if="icon1Show" to="/misterEmail">   <img  src="img/gmail.svg"/> </router-link>  
    </transition>
    <transition name="slide-fade-left">
    <router-link v-if="icon2Show"  to="/missKeep"><img  src="img/notepad.svg"/></router-link> 
    </transition>
      <transition name="slide-fade-left">        
      <router-link v-if="icon3Show" to="/miss-books"">  <img   src="img/books.svg"/></router-link> 
      </transition>
</div>


    </section>
`,
  props: [],
  data() {
    return {
      showTitle: false,
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
        this.icon1Show = true;
      }, 1500);
      setTimeout(() => {
        this.icon2Show = true;
      }, 2000);
      setTimeout(() => {
        this.icon3Show = true;
      }, 2500);
    }
  },
  components: { headerCmp }
};
