export default {
  name: 'Mailfilter',
  template: `
    <section class="mail-filter flex ">
        <div class="flex align-center row-reverse">
            <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search for mail"/>
            <i class="fas fa-search"></i>
            <i class="fas fa-hamburger"></i>
   <select v-model="filterBy.isRead" @change="emitFilter($event)">
         <option value="All">All</option>
         <option value="Read">Read</option>
        <option value="UnRead">UnRead</option>
  </select>
         <!-- <li class="flex space-between emails-titles"> 
          <span> Sent From </span> <span @click="sortSubject"> subject  </span> <span>Date Recived</span>
        </li> -->
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
      console.log(this.filterBy);
      this.$emit('filterapp', this.filterBy);
    }
  },
  components: {}
};
