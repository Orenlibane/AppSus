export default {
  name: 'HomePage',
  template: `
    <section class="home-page">
      <div class="main-title">  <h1 class="center">Welcome to AppSus</h1></div>
    <nav class="main-routes-nav center">
                    <router-link exact to="/">Home</router-link> | 
                    <router-link to="/misterEmail">Mister-Email</router-link> |
                    <router-link to="/missKeep">Miss-Keep</router-link> 
                    <!-- <router-link to="/miss-books">Miss-books</router-link>  -->
    </nav>

    </section>
`,
  props: [],
  data() {
    return {};
  },
  created() {
    console.log('home-page-loaded');
  },
  destroyed() {},
  computed: {},
  methods: {},
  components: {}
};
