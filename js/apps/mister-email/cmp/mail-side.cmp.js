export default {
  name: 'mailSide',
  template: `
    <section class="mail-side flex">
        <div class="flex column side center  "> 
            <ul>    
              <li class="send-mail" @click="showSendMailModal">Send Mail</li>
                <li>Mails</li>
                <li>Sent</li>
                <li>Deleted</li>
              </ul>
              <div class="send-modal" v-if="sendmodal">
                <div class="flex space-between send-mail-head"> <span>  New Messege </span> <span><button>X</button></span> </div>
               <div><input type="text" placeholder="Enter mail Subject"/>  </div> 
                <div><input type="text" placeholder="Enter email to send to"/>  </div>
                <textarea name="" id="" ></textarea>
                <div> here will come the edit text buttons</div>
              </div>
        </div>
    </section>
`,
  props: [],
  data() {
    return {
      sendmodal: false
    };
  },
  created() {},
  destroyed() {},
  computed: {},
  methods: {
    showSendMailModal() {
      this.sendmodal = !this.sendmodal;
    }
  },
  components: {}
};
