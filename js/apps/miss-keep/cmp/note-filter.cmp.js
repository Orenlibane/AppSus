export default {
  name: 'note-filter',
  template: `
    <section class="mail-filter flex ">
    <div class="flex align-center row-reverse">
    <input class="note-fil" type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="🔍Search for Note" />
</div>
    </section>
`,
  props: [],
  data() {
    return {
      filterBy: {
        txt: ''
      }
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    emitFilter(event) {
      console.log(this.filterBy);
      this.$emit('filternote', this.filterBy);
    }
  },
  components: {}
};
