import utiService from '../../../main-service/util-service.js';
import storageService from '../../../main-service/storage.js';

const MAIL_KEY = 'emailsDB';

export default {
  query,
  getById
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
    _id: '5d0b4608545dead7cbf1b2bd',
    body:
      'Aute eiusmod irure cillum adipisicing duis consectetur aliquip laborum ex sit dolore nisi laboris. Officia aliquip excepteur ex fugiat duis aute consectetur magna cupidatat nostrud fugiat occaecat consequat. Aliquip dolor fugiat incididunt est veniam id quis aliqua quis laboris proident ex.\r\n',
    subject: 'Qui amet mollit magna sit aliquip ad non culpa cillum.',
    isRead: true,
    sendAt: '2017-10-01T10:06:20 -03:00'
  },
  {
    _id: '5d0b460824b242045b79c13d',
    body:
      'Id voluptate mollit est officia sunt cillum fugiat Lorem reprehenderit deserunt ipsum sit. Eu ut dolor nostrud excepteur officia cupidatat ex. Proident deserunt et officia proident enim consectetur duis ea sit enim adipisicing sit. Consequat incididunt exercitation non consectetur ipsum esse nostrud ullamco dolor deserunt. Est labore ipsum ea quis incididunt mollit consequat est. Nostrud elit excepteur adipisicing est veniam voluptate sint elit. Ad Lorem dolor exercitation nostrud pariatur commodo officia id.\r\n',
    subject: 'Duis duis fugiat anim qui ut Lorem quis.',
    isRead: true,
    sendAt: '2018-06-04T04:00:47 -03:00'
  },
  {
    _id: '5d0b46087a094757d63097e1',
    body:
      'Excepteur mollit nisi adipisicing pariatur sint deserunt cupidatat. Tempor sint fugiat nisi non aute proident. Esse est do eiusmod occaecat officia pariatur.\r\n',
    subject:
      'Dolore adipisicing laborum sint anim mollit ex commodo ut nostrud cillum ea aliqua ad.',
    isRead: false,
    sendAt: '2014-02-18T05:02:34 -02:00'
  },
  {
    _id: '5d0b4608416e2d22ed560a32',
    body:
      'In cupidatat ullamco incididunt cillum adipisicing sunt incididunt duis est non ex nostrud Lorem do. Ullamco ea duis in esse adipisicing est anim consectetur commodo. Ea elit officia eu aliqua magna pariatur aute laboris laborum cillum ex id.\r\n',
    subject: 'Nostrud magna occaecat aliquip proident amet irure qui aliquip.',
    isRead: true,
    sendAt: '2019-04-09T09:29:20 -03:00'
  },
  {
    _id: '5d0b46089b1596eec75e7ed6',
    body:
      'Deserunt ea velit nostrud proident duis ex ullamco qui officia dolor. Sunt labore minim dolore enim non ad. Nostrud consequat aliquip veniam eu non aliquip labore enim ad veniam.\r\n',
    subject: 'Consequat enim Lorem tempor esse Lorem exercitation.',
    isRead: true,
    sendAt: '2018-04-04T11:06:42 -03:00'
  },
  {
    _id: '5d0b4608db8b0dbbf32c37e2',
    body:
      'Aute cillum voluptate ullamco eiusmod ex veniam do. Consectetur ullamco dolor laboris aliquip ad laboris ex laboris qui. In adipisicing dolore elit quis nulla do veniam consequat proident proident velit sint ut ea. Fugiat non aliquip minim magna sint. Esse commodo est Lorem et. Id labore et tempor excepteur labore dolor labore nulla deserunt nostrud dolore.\r\n',
    subject:
      'Eiusmod enim voluptate aliqua elit eiusmod cillum ut tempor reprehenderit voluptate fugiat.',
    isRead: true,
    sendAt: '2015-06-26T07:55:40 -03:00'
  }
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  return email;
}
