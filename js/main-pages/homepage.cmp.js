import headerCmp from '../main-cmp/header.cmp.js';
import footerCmp from '../main-cmp/footer.cmp.js';

export default {
  name: 'HomePage',
  template: `
    <section >
    <headerCmp></headerCmp>
    <div class="home-page">
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
      <router-link v-if="icon3Show" to="/missBook">  <img   src="img/books.svg"/></router-link> 
      </transition>
</div>
</div>

<footer-cmp></footer-cmp>

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
      }, 500);

      setTimeout(() => {
        this.icon1Show = true;
      }, 750);
      setTimeout(() => {
        this.icon2Show = true;
      }, 1100);
      setTimeout(() => {
        this.icon3Show = true;
      }, 1450);
    }
  },
  components: { headerCmp, footerCmp }
};
