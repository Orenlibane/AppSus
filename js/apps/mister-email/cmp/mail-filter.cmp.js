export default {
  name: 'Mailfilter',
  template: `
    <section class="mail-filter">
        <div class="flex align-center row-reverse">
            <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search for mail"/>
            <i class="fas fa-search"></i>
            <i class="fas fa-hamburger"></i>
       </div>
        </section>
        
        
`,
  props: [],
  data() {
    return {
      filterBy: {
        txt: '',
      }
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    emitFilter() {
      this.$emit('filterapp', this.filterBy);
    }
  },
  components: {}
};
