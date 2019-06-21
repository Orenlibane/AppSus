import mailService from '../services/mailservice.js';

export default {
    name: 'Mailcount',

    template: `
    <section class="mail-count"> 
                <h1>Email Count </h1>
                <p>{{coutEmailRead}}</p>

    </section>
`,
props: [],
data() {
    return {
        emails: [],
        readEmail: []

    };
},
created() {
    this.emails = mailService.query();
    console.log(this.emails);

    // mailService.query()
    //     .then(email=>{
    //         console.log(this.email);

    //         this.emails = email

    //     })

},
destroyed() {},
computed: {
    coutEmailRead(){
        const readEmails = this.emails.filter(email => {
            return email.isRead === true})
        console.log(readEmails);
        let allEmails = this.emails.length;
        console.log(allEmails);
        let readEmail = readEmails.length;
        return ( allEmails - readEmail)

    }
},
methods: {},
components: {}
};