import utiService from '../../../main-service/util-service.js';
import storageService from '../../../main-service/storage.js';

const MAIL_KEY = 'emailsDB';

export default {
  query,
  getById,
  updateDB
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
    _id: '5d0c90fa49bc241d22541812',
    body:
      'Non ullamco excepteur anim nulla. Adipisicing fugiat proident labore nisi nulla ad laborum pariatur id dolor. Reprehenderit ipsum Lorem elit ex consectetur est nostrud ullamco nostrud Lorem magna officia adipisicing mollit. Do cupidatat aute ut adipisicing mollit. Do aliquip consequat sint dolore. Qui consectetur ad non enim esse minim. Anim id in culpa sint amet quis quis Lorem aliquip dolor culpa cupidatat sint.\r\n',
    subject:
      'Non deserunt ipsum esse sit reprehenderit velit do proident id quis aliqua nulla.',
    name: 'Samantha Richardson',
    isRead: false,
    sendAt: '05-22:09:52',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0c90fa7e3c775b3389065b',
    body:
      'Cillum deserunt commodo do irure excepteur dolor anim voluptate exercitation aliquip consequat. Adipisicing enim tempor fugiat proident mollit consectetur. Dolore labore excepteur reprehenderit aute do ipsum voluptate pariatur.\r\n',
    subject:
      'Consequat voluptate laborum labore ex cillum nisi non aliquip cupidatat tempor.',
    name: 'Christine Ryan',
    isRead: false,
    sendAt: '08-28:02:08',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0c90fa6d8f0a02eb44d3ad',
    body:
      'Qui consequat cupidatat deserunt esse laborum deserunt tempor. Non officia nostrud cupidatat laborum dolore consectetur commodo consectetur adipisicing laboris. Ad voluptate veniam fugiat officia eiusmod quis fugiat nulla et.\r\n',
    subject:
      'Dolor ad non do officia ipsum aliquip aliqua culpa reprehenderit qui.',
    name: 'Bright Newton',
    isRead: false,
    sendAt: '08-23:11:42',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0c90faff0b1bae5e0e1a05',
    body:
      'Sit ullamco consectetur aliquip labore proident. Commodo fugiat cillum mollit dolor aliquip proident incididunt cupidatat nostrud elit quis. Incididunt minim ex fugiat non. Excepteur velit consectetur ex magna non amet culpa consequat ea.\r\n',
    subject:
      'Fugiat quis qui non tempor enim minim laboris sunt irure reprehenderit sit et nisi cupidatat.',
    name: 'Dale Soto',
    isRead: false,
    sendAt: '12-05:04:05',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0c90fabb16c58c8e74e7f1',
    body:
      'Consequat officia in qui esse nulla anim labore. Sint esse adipisicing nisi culpa sit laborum labore fugiat enim laborum id. Aute duis aliquip ad magna deserunt velit eiusmod ex culpa qui consequat amet. Cupidatat sint excepteur cillum amet. Minim aliqua sunt culpa consequat irure est cillum officia consequat dolor non eu ea veniam. Ullamco amet sunt esse culpa incididunt dolor laborum adipisicing duis consectetur. Proident culpa aliquip cupidatat do officia.\r\n',
    subject:
      'Dolor fugiat ad ullamco cillum proident amet nulla eu consectetur commodo cupidatat.',
    name: 'Wooten Cole',
    isRead: false,
    sendAt: '04-23:07:33',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0c90fa51fbfb8dd64b6bf0',
    body:
      'Tempor consectetur excepteur duis consectetur irure cupidatat enim excepteur minim est tempor. Velit adipisicing culpa minim nisi id enim esse Lorem ad officia. Minim esse in velit est incididunt consequat irure nulla est mollit ipsum.\r\n',
    subject: 'Et cupidatat labore sint deserunt.',
    name: 'Larsen Osborne',
    isRead: false,
    sendAt: '09-20:07:06',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0c90fa9f440c22c82eb8b1',
    body:
      'Veniam aliquip mollit occaecat et consectetur quis commodo dolore qui consectetur cillum. Eiusmod nulla esse culpa id amet quis velit sint deserunt amet sunt eu reprehenderit magna. Aliquip exercitation magna eiusmod voluptate quis ipsum occaecat nulla consequat dolor ex culpa magna. Nisi occaecat sint veniam minim aliquip excepteur qui sit cillum.\r\n',
    subject:
      'Laboris excepteur id sit magna labore dolore in minim elit ipsum labore.',
    name: 'Genevieve Howard',
    isRead: false,
    sendAt: '05-14:03:36',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0c90fa3741c58a3d44f817',
    body:
      'Cupidatat cillum non nisi duis nostrud laborum dolore proident. Velit do amet sint amet ullamco sit magna amet aliquip excepteur laboris aliquip tempor ipsum. Sit laboris incididunt do veniam proident officia deserunt sit ullamco pariatur ea voluptate voluptate elit. Adipisicing sint commodo nulla id officia. Minim non exercitation dolore ut irure mollit sunt. Veniam sunt quis occaecat labore. Nostrud ad eu duis laborum consequat quis tempor voluptate et nulla ad exercitation eiusmod.\r\n',
    subject: 'Id Lorem incididunt ipsum ea occaecat magna.',
    name: 'Sanford Benson',
    isRead: false,
    sendAt: '10-12:01:49',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0c90faa9bb7b2bc358f532',
    body:
      'Aliquip adipisicing ullamco ipsum irure nulla et do cupidatat dolore ea cillum sunt esse qui. Deserunt excepteur in duis consequat sunt occaecat commodo eu nostrud nisi occaecat qui laborum aliqua. Incididunt elit mollit adipisicing Lorem nostrud eiusmod incididunt ad incididunt adipisicing ut non eu id. Deserunt labore enim cillum voluptate aute ipsum amet cupidatat anim nisi. Esse irure sit qui amet.\r\n',
    subject: 'Excepteur occaecat consectetur do officia.',
    name: 'Harvey Blair',
    isRead: true,
    sendAt: '02-07:10:04',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0c90face9bc48c06afd502',
    body:
      'Incididunt incididunt eiusmod aliqua reprehenderit laborum esse ullamco. Irure ea aliqua esse ad. Aute commodo sunt tempor duis nulla elit laboris qui pariatur pariatur qui cupidatat. Nulla proident cillum dolor sit eiusmod est aliqua nisi.\r\n',
    subject:
      'Consequat adipisicing voluptate fugiat non nisi enim cupidatat sunt incididunt sint.',
    name: 'Burton Gibson',
    isRead: false,
    sendAt: '12-10:04:24',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0c90fad1ec086f94c66f35',
    body:
      'Proident qui veniam laboris consequat dolor. Proident sunt id nulla anim Lorem ipsum sunt dolore. Et pariatur mollit amet excepteur anim amet tempor minim duis culpa ex. Quis et laborum adipisicing et voluptate enim eiusmod aliquip exercitation. Do magna occaecat aliquip laboris.\r\n',
    subject: 'Deserunt mollit sint culpa fugiat sint quis mollit.',
    name: 'Helen Curtis',
    isRead: true,
    sendAt: '04-07:09:17',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  }
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  return Promise.resolve(email);
}

function updateDB(newEmail) {
  emailsDB.unshift(newEmail);
  storageService.store(MAIL_KEY, emailsDB);
}

function saveDb() {
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
