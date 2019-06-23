import countersCmp from '../../../main-cmp/counters.cmp.js';

export default {
  name: 'Mailfilter',
  template: `
    <section class="mail-filter flex ">
        <div class="flex align-center row-reverse">
            <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="🔍Search for mail" />
   <select v-model="filterBy.isRead" @change="emitFilter($event)">
         <option value="All">All</option>
         <option value="Read">Read</option>
        <option value="UnRead">UnRead</option>
        <option value="fav">Favorites⭐</option>
  </select>

       </div>
       <counters-cmp></counters-cmp>
        </section>      

`,
  props: [],
  data() {
    return {
      filterBy: {
        txt: '',
        isRead: 'All',
        isFav: false
      }
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    emitFilter(event) {
      console.log(this.filterBy);
      this.$emit('filterapp', this.filterBy);
    }
  },
  components: { countersCmp }
};
