import utiService from '../../../main-service/util-service.js';
import storageService from '../../../main-service/storage.js';

const MAIL_KEY = 'emailsDB';

export default {
  query,
  getById,
  updateDB,
  saveEmailDB
};

function query() {
  var emails = storageService.load(MAIL_KEY);
  if (!emails) {
    emails = emailsDB;
    storageService.store(MAIL_KEY, emails);
  }
  emailsDB = emails;
  return emailsDB;
}
var emailsDB = [
  {
    _id: '5d0c94ff2f312ed1a4bfa8c0',
    body:
      'Labore officia voluptate nostrud sunt ea culpa voluptate. Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'vue for dummies - the complete guide',
    name: 'Bernadette Graves',
    isRead: false,
    sendAt: '04:04',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isFav: false
  },
  {
    _id: '5d0c94ffb5a787ded7c48f73',
    body:
      'Qui officia consequat eiusmod Lorem id tempor voluptate. Ea eiusmod sit excepteur cupidatat officia non ullamco anim amet voluptate eiusmod. Et irure laborum enim aliquip nulla est eiusmod laboris velit irure enim. Veniam velit tempor mollit quis exercitation exercitation qui consequat officia anim mollit est Lorem commodo.\r\n',
    subject: 'Full guide to figuring out sprints number 1,2,4',
    name: 'Mattie Rios',
    isRead: true,
    sendAt: '10:25',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: false
  },
  {
    _id: '5d0c94ffff75c3cd3b5d3d93',
    body:
      'Nostrud nisi deserunt amet et. Velit dolore magna labore commodo elit nulla eiusmod id quis cupidatat qui aute et elit. Aute reprehenderit irure nisi qui aute eu. Anim Lorem enim eu ullamco pariatur occaecat eiusmod fugiat consectetur eiusmod cillum qui eiusmod.\r\n',
    subject: 'Why cards against humanity is the best game ever',
    name: 'Estrada Turner',
    isRead: false,
    sendAt: '07:26',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: true
  },
  {
    _id: '5d0c94ffbc2df0f5f2b3ce6e',
    body:
      'Nostrud reprehenderit veniam ad exercitation officia magna tempor cillum adipisicing. Fugiat eu proident non et laborum duis in. Adipisicing minim ea ea nisi non cillum esse commodo. Pariatur ut nulla et cillum laborum sit cupidatat eu. Laboris pariatur officia anim ad eiusmod exercitation in ad. Amet eu reprehenderit qui elit aliqua dolor incididunt et dolor pariatur anim.\r\n',
    subject: 'html, js, and the ugly',
    name: 'Carrie Pitts',
    isRead: true,
    sendAt: '05:35',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: true
  },
  {
    _id: '5d0c94ffe7681cf9a2379982',
    body:
      'Officia elit reprehenderit incididunt commodo aliquip eiusmod minim. Pariatur incididunt velit id sunt qui. Ex laboris ex eiusmod amet eu ullamco nostrud id duis fugiat cillum voluptate velit. Ullamco ea deserunt laboris id ad quis incididunt ipsum irure ea ipsum aute.\r\n',
    subject: 'life after bootcamp, how to start again?',
    name: 'Herman Knox',
    isRead: false,
    sendAt: '10:00',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false,
    isFav: false
  },
  {
    _id: '5d0c94ff8de8749f8e287260',
    body:
      'Ullamco sit fugiat dolore cillum sunt nulla. Qui quis et irure mollit et elit enim excepteur labore anim nostrud sit in. Officia officia aliqua in dolor ut eiusmod occaecat enim aute Lorem consectetur do ex.\r\n',
    subject: 'You just won 100000000$ this is not a scam, cough cough',
    name: 'Stone Merrill',
    isRead: true,
    sendAt: '09:26',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isFav: true
  },
  {
    _id: '5d0c94fffc3988ccf168b0b3',
    body:
      'Officia ipsum commodo esse qui. Irure eu minim officia incididunt reprehenderit mollit cillum eu. Dolore labore nostrud est do.\r\n',
    subject: 'how working on apps at 23:00 can change your life',
    name: 'Guzman Sims',
    isRead: false,
    sendAt: '01:04',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: false
  },
  {
    _id: '5d0c94ff387d27dfa0c6eef2',
    body:
      'Eiusmod enim nulla proident duis labore tempor. Eu culpa duis esse reprehenderit ullamco exercitation consequat commodo elit labore cillum. Incididunt sunt magna cupidatat anim nulla commodo nostrud tempor deserunt laborum.\r\n',
    subject: 'how lorem ipsium changed the world',
    name: 'Theresa Chase',
    isRead: true,
    sendAt: '10:43',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: true
  },
  {
    _id: '5d0c94ffed9231b53f6c3996',
    body:
      'Labore fugiat consequat cillum elit enim velit ea esse nisi cupidatat ad ipsum excepteur ipsum. Sit commodo laborum laborum ad veniam. Sit consectetur exercitation ullamco enim. Cillum minim officia qui cupidatat ullamco elit voluptate qui proident sint ullamco. Cillum ex minim labore adipisicing do.\r\n',
    subject: '2020 - The Rise of vue and the downfall of react and angular',
    name: 'Mathews Harrison',
    isRead: true,
    sendAt: '06:33',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: true
  },
  {
    _id: '5d0c94ffe370bd0116ef0c82',
    body:
      'Aute elit sint ex enim. Est minim Lorem in cupidatat amet nulla officia sint reprehenderit aliqua. Proident cupidatat irure esse esse enim elit laborum. Incididunt consequat officia nisi in reprehenderit nisi deserunt. Magna Lorem enim deserunt labore id. Tempor ut sint anim incididunt pariatur est. Ad veniam ex irure id nostrud sint mollit.\r\n',
    subject: 'Promise finally, why? and who really use it?',
    name: 'Britney Travis',
    isRead: true,
    sendAt: '08:10',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: true
  },
  {
    _id: '5d0c94ff510cf956c088d4fa',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How to use vue in everyday cooking!',
    name: 'Jocelyn Blevins',
    isRead: false,
    sendAt: '01:22',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true,
    isFav: true
  }
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  // return Promise.resolve(email);
  return email;
}

function updateDB(newEmail) {
  emailsDB.unshift(newEmail);
  storageService.store(MAIL_KEY, emailsDB);
}

function saveEmailDB() {
  storageService.store(MAIL_KEY, emailsDB);
}

// FOR LOADING RANDOMS DB
// [
//   '{{repeat(80, 100)}}',
//   {
//     _id: '{{objectId()}}',

//     body: '{{lorem(1, "paragraphs")}}',
//     subject: '{{lorem(1)}}',
//     name: '{{firstName()}} {{surname()}}',

//     isRead: '{{bool()}}',
//     sendAt: '{{date(new Date(2014), new Date(), "MM-dd:hh:mm")}}',
//     isDeleted: '{{bool()}}',
//     sendto: "",
//     isSent: '{{bool()}}',
//     isDone: '{{bool()}}'
//   }
// ]
