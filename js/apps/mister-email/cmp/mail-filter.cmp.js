export default {
  name: 'Mailfilter',
  template: `
    <section class="mail-filter">
        <div class="flex align-center row-reverse">
            <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search for mail"/>
            <i class="fas fa-search"></i>
            <i class="fas fa-hamburger"></i>
   <select v-model="filterBy.isRead" @change="emitFilter($event)">
         <option>All</option>
                         <option>Read</option>
                         <option>UnRead</option>
                     </select>
       </div>
 
        </section>
        
        
`,
  props: [],
  data() {
    return {
      filterBy: {
        txt: '',
        isRead: 'All'
      }
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    emitFilter(event) {
      this.filterBy.isRead = event.target.value
      console.log(this.filterBy)
      this.$emit('filterapp', this.filterBy);
    }
  },
  components: {}
};
