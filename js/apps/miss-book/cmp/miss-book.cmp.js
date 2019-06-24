import headerCmp from '../../../main-cmp/header.cmp.js';
import footerCmp from '../../../main-cmp/footer.cmp.js';

export default {
  name: 'Missbooks',
  template: `
    <section class="miss-books"> 
        <header-cmp></header-cmp>
<div class="under-construction flex both-align-center">

<img src="img/under-construction.jpg" alt=""/>

</div>


        <footer-cmp></footer-cmp>
    </section>
`,
  props: [],
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {},
  components: { headerCmp, footerCmp }
};
