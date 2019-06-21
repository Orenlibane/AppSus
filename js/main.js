import mainRoutes from './routes.js';
const myRouter = new VueRouter({ routes: mainRoutes });


// filter
Vue.filter('snippet',function(value){
  return value.slice(0,50);
});


var app = new Vue({
  el: '#app',
  created() {
    console.log('App has been Created!');
  },
  template: `
        <div>
            <router-view></router-view>
        </div>
    `,
  components: {},
  methods: {},
  router: myRouter
});
