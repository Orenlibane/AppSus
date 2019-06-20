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
    _id: '5d0b73c2504de9a83f4bb5c6',
    body:
      'Voluptate laboris ullamco aliquip eiusmod cillum do voluptate reprehenderit quis labore esse ad eiusmod. Ad ipsum cupidatat voluptate in Lorem aliqua est ad ipsum laborum tempor ad reprehenderit. Velit incididunt ad culpa dolore labore reprehenderit. Laborum deserunt eu non incididunt id commodo occaecat sit. Aliquip ullamco mollit id commodo dolore cillum reprehenderit proident cillum magna ipsum anim in sunt.\r\n',
    subject:
      'Qui Lorem excepteur veniam consequat excepteur enim Lorem pariatur aute.',
    name: 'Riley Underwood',
    isRead: true,
    sendAt: '09-01:12:48',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c2af5e08e13ea670f7',
    body:
      'Proident velit do eu quis enim exercitation tempor adipisicing magna fugiat minim ex sint duis. Lorem veniam dolor veniam officia excepteur. Quis excepteur amet enim veniam ea pariatur et qui mollit sunt tempor enim Lorem. Nisi velit non minim consectetur irure officia esse ad velit.\r\n',
    subject: 'Voluptate laborum eu et veniam nulla ipsum nulla.',
    name: 'Loraine Gilmore',
    isRead: false,
    sendAt: '12-19:11:04',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2aa68461aa11e00a2',
    body:
      'Magna incididunt dolore dolore ad ea. Irure excepteur pariatur qui do cupidatat dolor labore excepteur dolor aliquip qui minim proident. Anim irure fugiat cillum deserunt ut irure exercitation. Consequat ipsum non proident nulla nostrud esse excepteur fugiat eu ea ad enim eiusmod veniam.\r\n',
    subject:
      'Id dolor ad ea aliqua sint esse duis deserunt dolor culpa aliquip deserunt ea Lorem.',
    name: 'Forbes Mason',
    isRead: false,
    sendAt: '05-29:01:29',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2f4243e3ce4a747b5',
    body:
      'Commodo dolore proident sit nulla ipsum do cupidatat ullamco culpa magna aute. Est voluptate nisi minim anim nostrud nostrud commodo excepteur cupidatat nisi nulla. Dolore commodo cupidatat nulla elit sunt et proident ut. Commodo nisi excepteur eu commodo ullamco. Dolor nisi laboris dolore eu sunt.\r\n',
    subject: 'Enim magna ea fugiat reprehenderit velit ipsum.',
    name: 'Sharron Harrison',
    isRead: false,
    sendAt: '01-15:05:22',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2b1e7c079ff750687',
    body:
      'Culpa ut exercitation tempor culpa commodo anim do velit ipsum ut. Nostrud sit excepteur sint incididunt ad dolore esse. Et et nostrud cillum nostrud anim. Amet cupidatat commodo culpa tempor officia et commodo.\r\n',
    subject: 'Mollit enim elit incididunt sint ipsum laboris proident.',
    name: 'Angelina Cannon',
    isRead: false,
    sendAt: '08-29:03:32',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c29220655cfd935ef3',
    body:
      'Mollit nostrud exercitation non labore dolor nulla commodo aliquip minim minim fugiat quis dolore proident. Ut exercitation est esse et irure culpa dolor minim sunt ex velit excepteur et in. Dolore reprehenderit qui eiusmod in dolore.\r\n',
    subject: 'Sint est dolore aliquip esse.',
    name: 'Mason Parsons',
    isRead: true,
    sendAt: '08-01:09:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c27900ed2d130ffacb',
    body:
      'Ad ea qui non officia id laborum Lorem laborum duis. Duis est et duis nostrud cupidatat eiusmod. Cupidatat quis voluptate qui ut laborum excepteur velit culpa Lorem magna quis incididunt. Eu ad fugiat deserunt ad in est sit. Consequat sit eiusmod sunt velit nostrud enim veniam elit ea esse. Aute culpa consectetur culpa occaecat excepteur.\r\n',
    subject: 'Dolore pariatur ex enim qui sunt cupidatat.',
    name: 'Thelma Short',
    isRead: true,
    sendAt: '11-17:10:16',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c23b5db4df1fc800b0',
    body:
      'Magna sunt voluptate qui laborum minim elit commodo ipsum in consectetur do. Adipisicing enim magna amet consequat qui eiusmod sunt exercitation aute aliqua nisi est velit. Exercitation non incididunt magna veniam elit.\r\n',
    subject: 'Sint ex ut deserunt aute reprehenderit veniam incididunt.',
    name: 'Herrera Mcintosh',
    isRead: false,
    sendAt: '02-29:07:57',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c25838e93c1b466476',
    body:
      'Labore mollit fugiat laborum ad ad excepteur deserunt officia aliqua ipsum non sint ipsum. Mollit labore nulla sunt proident sint amet minim laboris adipisicing mollit enim fugiat. Reprehenderit eu exercitation cupidatat ea duis culpa nisi veniam laborum ipsum.\r\n',
    subject: 'Laborum fugiat occaecat id duis aute ad.',
    name: 'Mathews Harrell',
    isRead: true,
    sendAt: '10-13:12:11',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2ba59c8f13476f1f4',
    body:
      'Cupidatat incididunt nisi quis aliquip nostrud. Tempor reprehenderit veniam Lorem consequat reprehenderit minim ullamco ut Lorem fugiat occaecat ipsum id. Dolore quis irure nulla deserunt minim ut amet sint. Lorem aute ad velit labore. Nostrud labore ullamco enim fugiat adipisicing velit velit ipsum nisi tempor labore nisi enim. Velit id velit consequat dolore voluptate consequat sit esse occaecat deserunt nulla occaecat amet ea.\r\n',
    subject: 'Labore cupidatat quis dolor ipsum eu.',
    name: 'Madge Maxwell',
    isRead: false,
    sendAt: '11-08:08:43',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c259bd9bef677d0d27',
    body:
      'Est irure dolore excepteur nisi eiusmod do enim. In culpa quis elit aute sunt. Duis culpa culpa aute exercitation sit irure duis est ut dolore amet exercitation cupidatat ut. Elit eiusmod incididunt aute excepteur aliqua et laborum adipisicing voluptate amet aliquip. Deserunt non culpa nulla et. Magna irure fugiat proident ipsum sunt labore incididunt adipisicing id cupidatat eiusmod. Cillum Lorem velit reprehenderit sint cillum sit voluptate commodo dolore consectetur deserunt laborum excepteur deserunt.\r\n',
    subject: 'Ex voluptate nostrud dolor do.',
    name: 'Johnnie Black',
    isRead: false,
    sendAt: '02-13:09:25',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2ea26eead40a9bb13',
    body:
      'Excepteur in est amet non. Pariatur duis ut duis do occaecat in ex commodo culpa consectetur irure elit. Nulla in consectetur reprehenderit ea sit dolor laboris amet est. Officia id labore nulla adipisicing sunt consequat eiusmod esse irure qui elit mollit.\r\n',
    subject:
      'Incididunt esse quis dolor consequat ut aliquip deserunt consectetur.',
    name: 'Briggs Marshall',
    isRead: true,
    sendAt: '10-12:05:34',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2511ae5529bfc1bf7',
    body:
      'Amet velit irure proident voluptate occaecat amet nulla. Non do magna ipsum do in cupidatat labore ullamco amet nulla dolore aliqua. Nulla ipsum velit labore pariatur ut labore cillum esse in minim qui elit cupidatat ut. Id id ut ad eu esse exercitation.\r\n',
    subject: 'Elit esse voluptate et adipisicing in ut.',
    name: 'Watkins Atkinson',
    isRead: true,
    sendAt: '02-17:10:51',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c24da2670a3fc55cb0',
    body:
      'Minim proident velit cillum tempor fugiat Lorem aute consectetur in eiusmod. Eu amet enim exercitation irure amet esse occaecat qui eiusmod. Sunt sunt proident aliquip magna reprehenderit est eu. Et cupidatat adipisicing voluptate deserunt velit pariatur cillum minim.\r\n',
    subject:
      'Sunt aliqua laboris sint cupidatat nostrud quis mollit irure veniam.',
    name: 'Keri Perry',
    isRead: true,
    sendAt: '02-26:02:25',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2a3e8d1446b70ee44',
    body:
      'Deserunt id ut mollit sunt sit ea in veniam labore eu. Tempor mollit consectetur sunt eu nostrud culpa consequat est velit sint anim. Tempor fugiat commodo excepteur sunt commodo nostrud labore eiusmod. Consectetur veniam pariatur occaecat non. Aute ullamco esse cupidatat ipsum in. Incididunt irure in ipsum voluptate occaecat et magna elit ut aliqua ex eu culpa.\r\n',
    subject:
      'Est veniam consectetur laborum id enim enim ullamco aute quis dolore deserunt cupidatat.',
    name: 'Schneider Sears',
    isRead: false,
    sendAt: '05-24:11:18',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c25d26cc51c173a047',
    body:
      'Ullamco ipsum ea consequat aliqua anim dolore qui et consectetur esse cupidatat anim adipisicing. Ut aute mollit id dolore est culpa do anim ad aliquip irure nulla. Quis quis laborum minim officia pariatur fugiat in est eu. Deserunt non veniam incididunt ea exercitation. Incididunt amet ea do reprehenderit mollit exercitation. Pariatur sint non velit adipisicing laboris mollit sint dolore fugiat voluptate ipsum nisi. Proident id commodo et consectetur occaecat non ullamco dolor.\r\n',
    subject:
      'Nostrud proident deserunt ea aute officia pariatur ea excepteur veniam mollit ex laborum.',
    name: 'Gillespie Rowe',
    isRead: false,
    sendAt: '09-03:08:02',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c26dcefd2b344098a3',
    body:
      'Ullamco esse culpa consequat adipisicing occaecat aute ullamco quis pariatur elit. Enim veniam voluptate officia ipsum id sint. Sit duis nostrud deserunt culpa officia aliqua duis nostrud non sit sint aute velit sint. Est adipisicing ullamco ad id ad irure pariatur culpa fugiat aliquip consequat duis.\r\n',
    subject:
      'Exercitation commodo Lorem aliquip laboris nostrud cillum laborum commodo adipisicing tempor.',
    name: 'Janet Collins',
    isRead: true,
    sendAt: '02-24:07:37',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2c04cc6e3c06f90df',
    body:
      'Labore exercitation anim est proident. Adipisicing do nisi sunt consequat voluptate aliquip mollit ullamco laborum. Officia enim cupidatat incididunt deserunt minim.\r\n',
    subject:
      'Dolor fugiat exercitation elit culpa deserunt laborum minim tempor fugiat ullamco.',
    name: 'Figueroa Weiss',
    isRead: false,
    sendAt: '08-06:04:47',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c22f008f081ff18f0d',
    body:
      'Duis occaecat in ut et magna tempor est minim ipsum veniam ea enim. Nulla tempor nulla cillum anim ex. Esse velit nisi laborum enim occaecat quis culpa consequat amet et exercitation.\r\n',
    subject:
      'Consequat ea duis reprehenderit anim ea sit dolor dolor cupidatat sunt consectetur exercitation.',
    name: 'Cathryn Hurley',
    isRead: false,
    sendAt: '03-25:01:14',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c2c50a65668d6846b0',
    body:
      'Anim elit eiusmod sunt do est officia minim consectetur dolore. Cupidatat qui labore cillum qui. Duis nostrud enim nisi quis cillum sint. Occaecat magna adipisicing anim eu consequat amet ad. Sunt cupidatat ullamco dolor tempor consequat ipsum non laboris eiusmod enim. Et cupidatat laboris nulla Lorem ut ea pariatur. Quis id adipisicing duis eu pariatur.\r\n',
    subject:
      'Proident pariatur esse tempor consectetur dolor irure minim ullamco consequat sunt.',
    name: 'Flynn Munoz',
    isRead: false,
    sendAt: '09-28:08:50',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c2142ec6bd6f9d0779',
    body:
      'Proident dolore in aliquip elit proident fugiat magna Lorem magna nulla officia laboris. Qui dolor ea consectetur laboris occaecat consequat minim adipisicing mollit irure eu. Laboris mollit commodo officia exercitation eu. Eu nisi aliquip dolor ullamco.\r\n',
    subject:
      'Id exercitation aliqua laboris elit id laborum deserunt pariatur aliquip in anim.',
    name: 'Linda Rodriguez',
    isRead: true,
    sendAt: '01-22:05:43',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2141152e405543931',
    body:
      'Adipisicing amet ipsum irure dolore. Consequat fugiat consectetur incididunt aliqua eiusmod eu laboris exercitation in. Do magna eiusmod nulla id mollit eu irure magna. Mollit minim voluptate fugiat eu sint voluptate nisi sit mollit dolor. Enim nisi esse labore qui ea tempor eu incididunt sunt est mollit consectetur eu cupidatat.\r\n',
    subject: 'Esse est consequat nisi eu deserunt ullamco ea.',
    name: 'Hughes Cooper',
    isRead: true,
    sendAt: '06-09:04:19',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c297baa9609b3b18d1',
    body:
      'Consequat qui aliqua eu ipsum nostrud occaecat qui. Magna laborum pariatur ipsum in amet culpa labore incididunt id fugiat dolore. Ut qui ipsum officia anim. Non ullamco sit nulla consequat in adipisicing cupidatat qui veniam commodo pariatur sint. Exercitation enim minim ullamco nisi duis incididunt nulla et sint dolor dolor in dolor.\r\n',
    subject:
      'Duis ullamco ut duis do duis anim deserunt officia occaecat ea aliqua cillum.',
    name: 'Gonzalez Merrill',
    isRead: true,
    sendAt: '12-18:10:10',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2a0a71b41bca8deb6',
    body:
      'Ad incididunt in consequat occaecat officia ut pariatur elit nostrud. Ipsum nulla nostrud do cillum enim aliqua enim culpa fugiat nisi amet dolor eiusmod velit. Consectetur sit non dolor incididunt Lorem anim nulla magna nisi excepteur occaecat enim qui. Nisi sunt laborum qui et. Consectetur amet commodo ullamco ad. Anim ullamco elit fugiat velit qui labore est ullamco et cillum excepteur. Eiusmod duis sunt voluptate ipsum enim irure ex reprehenderit id sint.\r\n',
    subject: 'Do voluptate pariatur dolore dolore veniam sint.',
    name: 'Mariana Noel',
    isRead: false,
    sendAt: '11-08:09:54',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2f0f19dbc84328c15',
    body:
      'Sint proident aliquip irure ex incididunt fugiat sunt. Pariatur ea enim tempor qui aute laboris consequat proident occaecat amet minim dolore pariatur. Et reprehenderit mollit reprehenderit minim Lorem Lorem magna sint ex pariatur eiusmod. Commodo ad commodo deserunt aliqua culpa tempor officia in ut. Sit aliqua labore irure et dolore ea id est labore voluptate. Dolore eu exercitation amet amet adipisicing nulla incididunt esse sit elit. Do aliqua et ut fugiat aute enim laboris laborum ea deserunt.\r\n',
    subject:
      'Reprehenderit mollit duis labore pariatur sunt id dolor adipisicing eiusmod ex.',
    name: 'Trina Carey',
    isRead: false,
    sendAt: '09-03:05:18',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2a368a00c767f6d34',
    body:
      'Eiusmod pariatur qui quis consequat sint aute ad labore. Reprehenderit laboris esse ea est consequat pariatur id occaecat incididunt ullamco officia culpa. Nostrud laboris exercitation eiusmod laboris culpa ad veniam ea esse nostrud magna irure.\r\n',
    subject: 'Dolor sunt est laborum et veniam cillum culpa nisi labore.',
    name: 'Susie Huber',
    isRead: true,
    sendAt: '08-08:02:19',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c287fea56d5f3b284d',
    body:
      'Consectetur officia dolor adipisicing aute commodo. Et minim non eiusmod aliquip adipisicing sint consectetur. Id nulla consequat duis nisi ea excepteur velit non mollit velit dolore cillum ut. Cupidatat dolor fugiat qui magna occaecat ex sint veniam magna pariatur laboris incididunt non.\r\n',
    subject:
      'Sit excepteur et enim elit laboris consectetur nisi in fugiat anim eu laboris dolore.',
    name: 'Alejandra Rhodes',
    isRead: false,
    sendAt: '03-18:07:52',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c28256a0b4517e7e5a',
    body:
      'Non minim incididunt fugiat nostrud ipsum duis sit. Consequat do excepteur sunt veniam reprehenderit. Id cupidatat sint proident veniam labore. Culpa deserunt minim incididunt proident quis amet duis fugiat. Exercitation minim dolore sint id.\r\n',
    subject:
      'Consectetur amet dolore officia ex voluptate non consectetur do laborum ex voluptate laborum culpa qui.',
    name: 'Megan Bonner',
    isRead: false,
    sendAt: '01-31:06:52',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2fce9b6ef871ed619',
    body:
      'Eiusmod sint sint anim sunt pariatur id ea magna pariatur. Proident dolore voluptate anim est mollit veniam culpa eiusmod pariatur quis ea ullamco. Ea do culpa aliqua cupidatat velit minim commodo consectetur duis elit irure dolor mollit. Ad reprehenderit est laborum esse sint aliquip quis occaecat. Officia dolore ullamco culpa veniam occaecat proident in mollit proident sint sunt cillum consectetur magna.\r\n',
    subject:
      'Nisi adipisicing ullamco Lorem sunt adipisicing deserunt consectetur eiusmod cupidatat exercitation sit veniam.',
    name: 'Jackson Flowers',
    isRead: true,
    sendAt: '10-02:09:44',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c29f848e7d37533ae7',
    body:
      'Eiusmod ad enim ullamco eu velit nostrud minim Lorem in non laborum consequat. Ut in ea non Lorem ipsum laboris aute pariatur velit nisi et sit. Eu deserunt aute incididunt nostrud fugiat voluptate ut proident eu culpa. Mollit dolor dolor do ea. Fugiat fugiat id velit voluptate esse duis ipsum qui sint do mollit veniam id. Officia amet qui dolore quis excepteur voluptate culpa. Aliquip cupidatat sint non tempor aliqua sint veniam sunt in exercitation duis culpa incididunt.\r\n',
    subject:
      'Ullamco dolore velit voluptate esse culpa occaecat eiusmod pariatur Lorem duis.',
    name: 'Clayton Soto',
    isRead: false,
    sendAt: '06-15:02:37',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2f64d0f533b213bc9',
    body:
      'Esse mollit nostrud officia do id mollit quis mollit. Ut anim laboris labore voluptate adipisicing cupidatat. Voluptate nisi anim elit cillum commodo aute sit mollit irure sint adipisicing cillum. Enim deserunt proident adipisicing in minim aute magna nostrud officia tempor.\r\n',
    subject: 'Ad eiusmod incididunt commodo commodo velit ut anim.',
    name: 'Stein Savage',
    isRead: false,
    sendAt: '02-17:12:39',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2c25347934f9f25f8',
    body:
      'Laborum proident fugiat aliqua consequat laboris nostrud cupidatat duis. Sint dolor excepteur consectetur enim do. Cillum ex quis consectetur pariatur do est incididunt pariatur ex.\r\n',
    subject:
      'Laboris cillum ipsum labore do labore non aute laboris ipsum enim non et.',
    name: 'Cote Valentine',
    isRead: true,
    sendAt: '04-24:05:56',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2a4805fc0d57a5d69',
    body:
      'Ad fugiat anim tempor sit. Ipsum minim enim excepteur magna exercitation elit. Anim non magna nisi voluptate sint. Tempor in ullamco aute nisi adipisicing anim laboris.\r\n',
    subject: 'Adipisicing deserunt ipsum aliqua occaecat culpa.',
    name: 'Donovan Chang',
    isRead: false,
    sendAt: '05-21:08:40',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2c7fb3c2b2ace8475',
    body:
      'Consequat proident ullamco quis tempor deserunt consequat fugiat sunt non veniam laboris esse in est. Qui veniam laborum et esse qui fugiat eu voluptate ut officia quis nostrud labore ut. Cupidatat ut sunt consequat cillum id reprehenderit Lorem sit exercitation dolore elit consectetur commodo nostrud. Id reprehenderit esse aute aliquip aliqua cillum ea irure sint velit consectetur. Anim dolore aliqua cupidatat dolor minim et ex excepteur ut labore aute.\r\n',
    subject: 'Consequat fugiat aliquip occaecat cupidatat non veniam in do.',
    name: 'Guzman Walsh',
    isRead: true,
    sendAt: '05-12:02:39',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2187e7886210b94c8',
    body:
      'Voluptate aliqua est ex occaecat ipsum. Consequat adipisicing voluptate aliquip exercitation quis voluptate quis. Adipisicing quis Lorem id id aute proident ipsum enim nostrud deserunt mollit est culpa duis. Sit excepteur do labore consequat proident. Ea dolor eiusmod deserunt officia minim cupidatat aliqua excepteur dolor qui labore. Ipsum laboris nulla ad elit ipsum labore cillum.\r\n',
    subject:
      'Eu ad pariatur laborum nostrud occaecat quis ea veniam cupidatat qui occaecat.',
    name: 'Matthews Jefferson',
    isRead: true,
    sendAt: '01-15:07:49',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2f58939d827f9910a',
    body:
      'Laborum aute velit aliqua non minim pariatur. Est mollit ex exercitation reprehenderit Lorem. Nisi culpa est irure ullamco pariatur nisi qui duis in exercitation.\r\n',
    subject:
      'Duis enim minim commodo culpa dolore deserunt pariatur reprehenderit Lorem dolor deserunt ad.',
    name: 'Jane Salazar',
    isRead: false,
    sendAt: '08-28:04:49',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c22823859fd933f436',
    body:
      'Consectetur qui esse quis in. Amet velit ea duis esse consequat. Non labore anim Lorem eiusmod. Labore sit aliquip ut voluptate sit deserunt eiusmod incididunt quis. Reprehenderit proident ipsum laboris adipisicing cillum fugiat mollit fugiat adipisicing et commodo proident in consequat.\r\n',
    subject: 'Magna eu duis eu aliquip officia consectetur pariatur.',
    name: 'Patrick Farrell',
    isRead: false,
    sendAt: '01-30:04:17',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2c63ed63777a15f25',
    body:
      'Sint ex pariatur mollit sunt sint deserunt eiusmod deserunt ipsum consectetur. Ut dolore fugiat fugiat minim. Sit est dolor sit dolore magna. Excepteur sint aliqua amet esse pariatur commodo laboris qui aute sint voluptate et.\r\n',
    subject: 'Fugiat in voluptate nisi nostrud.',
    name: 'Riggs Barr',
    isRead: false,
    sendAt: '09-25:10:23',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2e931d672e0745079',
    body:
      'Adipisicing adipisicing non velit minim magna. Enim qui qui voluptate nulla ea excepteur id dolor officia consequat esse adipisicing. Ipsum reprehenderit minim pariatur aute quis proident veniam incididunt aute tempor ad dolor esse mollit.\r\n',
    subject: 'Ad magna dolor consequat elit aliqua proident amet ex velit.',
    name: 'Gertrude Jennings',
    isRead: false,
    sendAt: '07-02:03:12',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2230ca44bb5f7ef7c',
    body:
      'Voluptate sunt qui deserunt ad proident. Sunt voluptate adipisicing laboris dolore. Ad laborum do eu labore nisi ad.\r\n',
    subject:
      'Ipsum qui ex amet est officia voluptate amet magna elit magna est exercitation est ullamco.',
    name: 'Diana Hutchinson',
    isRead: false,
    sendAt: '06-18:05:35',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c25483c9f3d81f300f',
    body:
      'Dolore ad anim deserunt non. Ea nulla nostrud dolor aliqua ad deserunt. Nostrud do minim officia cillum laborum excepteur. Laboris incididunt sit adipisicing irure irure voluptate. Dolore officia nostrud consequat est eu elit. Excepteur commodo nulla aute sint velit quis. Lorem commodo aliquip aute exercitation dolore amet mollit.\r\n',
    subject:
      'Sit aliquip aliqua ipsum veniam quis minim reprehenderit reprehenderit sit enim minim minim duis.',
    name: 'Sullivan Houston',
    isRead: false,
    sendAt: '01-21:01:26',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c2d8bb649d118a22a4',
    body:
      'Voluptate sunt voluptate elit mollit nostrud laboris irure fugiat nisi do. Non officia ea voluptate est occaecat anim. Aliquip non ipsum ipsum sint est laboris dolore ea consectetur. Deserunt consequat cupidatat excepteur magna et aliqua culpa magna. Lorem Lorem enim irure pariatur et voluptate Lorem sunt deserunt nulla exercitation sit.\r\n',
    subject:
      'Ad sunt consequat non eiusmod ex officia ipsum aliqua cupidatat nisi mollit.',
    name: 'Dillard Ortega',
    isRead: false,
    sendAt: '08-30:08:25',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c23ed62be1695cbc6a',
    body:
      'Incididunt enim do excepteur officia dolor dolore fugiat labore veniam laborum consectetur cillum elit nulla. Consectetur consectetur incididunt deserunt qui et id est tempor ut. Ex labore dolor cillum aliquip consectetur consequat do. Consequat aliqua eiusmod sunt do excepteur fugiat amet duis cillum id eu commodo mollit Lorem. Ipsum consectetur consectetur labore eu commodo officia reprehenderit. Anim sit dolor irure consequat adipisicing excepteur elit proident ullamco.\r\n',
    subject:
      'Pariatur velit fugiat ex cupidatat veniam ea exercitation aute veniam Lorem adipisicing.',
    name: 'Clarissa Peterson',
    isRead: true,
    sendAt: '08-02:03:23',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c254c87cc217bbf052',
    body:
      'Proident proident duis nulla commodo ipsum sit nisi irure ut dolore ex dolor sunt irure. Sint deserunt amet duis cupidatat aute enim culpa reprehenderit duis anim culpa laboris. Do laborum veniam magna ea ea sit.\r\n',
    subject:
      'Commodo pariatur pariatur ea proident labore ad aliquip ut laboris sint ad do est.',
    name: 'Juliet Freeman',
    isRead: true,
    sendAt: '08-22:06:04',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c26d4be1fb5da185e1',
    body:
      'Reprehenderit consequat ut nostrud laborum sint incididunt consectetur pariatur nostrud non nisi commodo. Tempor eu occaecat enim occaecat cupidatat proident deserunt ullamco ex aliqua exercitation adipisicing eu. Labore quis aliqua veniam reprehenderit ad irure nisi. Mollit est sit in proident sint elit ea sunt sit labore in consequat.\r\n',
    subject: 'Culpa commodo dolor nisi proident voluptate.',
    name: 'Hoover Wilcox',
    isRead: false,
    sendAt: '01-29:09:25',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2908c3b227fea5978',
    body:
      'Est culpa consectetur et eiusmod ipsum ipsum fugiat Lorem. Aliquip commodo Lorem deserunt exercitation cillum Lorem aute. Aliquip culpa do in deserunt ea. Magna amet aliquip anim est est commodo aute incididunt eu eu consectetur mollit quis laboris.\r\n',
    subject: 'Consequat adipisicing voluptate cupidatat excepteur id.',
    name: 'Lupe Daugherty',
    isRead: false,
    sendAt: '12-14:02:12',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2626f3458f1512fda',
    body:
      'Ex et velit aute eiusmod cupidatat incididunt consequat. Occaecat non laboris commodo eu non officia. Proident sint consequat pariatur cillum deserunt nostrud ut do proident pariatur irure esse ea. Laboris minim adipisicing veniam Lorem laborum cillum exercitation. Consequat et laborum consequat consectetur aliquip sint mollit duis nisi excepteur aute minim reprehenderit ipsum. Lorem veniam consequat pariatur ea commodo sit minim duis. Ad velit culpa laboris irure labore incididunt.\r\n',
    subject: 'Eiusmod irure commodo excepteur non aute deserunt ex.',
    name: 'Elba Steele',
    isRead: true,
    sendAt: '10-03:09:56',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c28fcd6baaca320879',
    body:
      'Quis laborum incididunt reprehenderit reprehenderit esse culpa ea ex. In sit cillum ea eu. Id exercitation aute veniam dolor incididunt commodo. Culpa deserunt adipisicing cillum esse sit nostrud aliqua consectetur elit.\r\n',
    subject:
      'Aute tempor fugiat adipisicing quis fugiat consectetur ea voluptate proident id nisi consequat.',
    name: 'Young Landry',
    isRead: true,
    sendAt: '09-19:01:37',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2c9bc99e2de6d25c7',
    body:
      'Tempor enim fugiat eu laboris labore exercitation incididunt dolor adipisicing deserunt. Eu cupidatat officia commodo ullamco voluptate mollit qui deserunt laborum. Eu elit sint sunt qui cillum occaecat labore dolore proident aliquip. Consequat est adipisicing consequat voluptate anim officia mollit. Ut excepteur amet ullamco consequat quis officia. Elit laboris do mollit adipisicing laboris do aliqua minim magna in nisi eu duis irure. Et sint anim minim anim amet.\r\n',
    subject: 'Duis do nulla elit duis est voluptate sint Lorem in.',
    name: 'Bertie Potter',
    isRead: true,
    sendAt: '11-07:01:18',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c28060b96e11d4baec',
    body:
      'Do aliqua officia ex elit cupidatat nisi. Culpa sit ullamco velit nulla exercitation sint velit elit sunt. Laboris sint ex culpa esse Lorem dolore voluptate do nostrud. Consectetur culpa Lorem do sint ea in occaecat. Nulla exercitation ad ex laboris ex consectetur ut adipisicing voluptate elit.\r\n',
    subject:
      'Laboris nisi mollit est qui quis do sint anim duis magna labore do ad.',
    name: 'Shawna Mcfarland',
    isRead: false,
    sendAt: '08-15:07:41',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c28bc96e13220fd8f7',
    body:
      'Non adipisicing aliqua ut incididunt in ipsum dolore quis tempor deserunt sunt. Fugiat veniam fugiat eiusmod Lorem esse elit commodo. Incididunt ex elit tempor proident commodo aliqua Lorem consequat mollit ad velit.\r\n',
    subject:
      'Eiusmod fugiat tempor excepteur aliquip mollit elit occaecat dolor cillum in eu dolor velit nostrud.',
    name: 'Gay Burch',
    isRead: true,
    sendAt: '08-12:01:12',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c21947d0c240a29029',
    body:
      'Enim deserunt anim elit aliqua esse do do tempor est proident. Minim minim est ad sint aute adipisicing eiusmod. Eiusmod nulla Lorem velit fugiat aliquip dolor non consequat ullamco labore ipsum laboris labore. Nostrud consectetur ullamco id id id qui. Ea quis dolore aliquip pariatur ut. Sint do aute laboris aliqua velit ex anim sit pariatur duis culpa et.\r\n',
    subject:
      'Et eiusmod ex non commodo esse incididunt magna tempor eu quis consequat velit culpa.',
    name: 'Thornton Alford',
    isRead: true,
    sendAt: '10-16:09:27',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c20b227520fa939d23',
    body:
      'Adipisicing sit sit enim ut ad adipisicing. Non minim Lorem sit dolor in esse adipisicing. Officia amet reprehenderit eu ipsum culpa. Duis veniam ullamco sunt occaecat laboris deserunt ad aute amet tempor officia id eiusmod. Occaecat laborum voluptate voluptate Lorem consequat ea amet pariatur dolor mollit esse.\r\n',
    subject: 'Pariatur et laboris quis dolore.',
    name: 'Cecelia Albert',
    isRead: true,
    sendAt: '05-19:02:00',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c23dea20ec872d0f92',
    body:
      'Sint do magna amet laboris adipisicing officia veniam consectetur ut aliquip. Est pariatur ad incididunt commodo cillum ipsum occaecat cupidatat aliqua aliqua magna. Qui laborum qui labore elit nisi. Sunt occaecat excepteur minim exercitation cillum excepteur reprehenderit proident elit cillum proident nisi ipsum eiusmod. Dolor reprehenderit aliqua eu officia anim excepteur anim. Laboris pariatur amet in quis Lorem proident aliquip adipisicing cupidatat consequat laboris enim.\r\n',
    subject: 'Anim occaecat elit reprehenderit laborum.',
    name: 'Consuelo Carver',
    isRead: true,
    sendAt: '07-21:02:18',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2e1c70082f7d01a1c',
    body:
      'Ipsum consectetur dolor deserunt enim laboris occaecat nisi id officia laboris. Qui eiusmod veniam duis minim dolore cillum velit. Reprehenderit cillum excepteur cupidatat amet officia do id laborum dolore proident est. Commodo nostrud minim fugiat deserunt incididunt nostrud.\r\n',
    subject:
      'Sunt esse ut exercitation minim consectetur amet consectetur reprehenderit incididunt.',
    name: 'Fuentes Hopper',
    isRead: false,
    sendAt: '10-15:07:46',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2f8cd2df6bed03ad2',
    body:
      'Sit cillum voluptate non eu. Pariatur aliqua proident tempor reprehenderit ipsum velit quis voluptate. Ex anim exercitation id do officia. Esse irure culpa consectetur commodo est dolor dolore aliquip anim consequat. Nostrud esse duis ullamco elit duis occaecat sint exercitation duis excepteur. Culpa ipsum ex do proident non dolore officia quis exercitation est Lorem et ex ipsum.\r\n',
    subject: 'Occaecat ad veniam occaecat irure irure.',
    name: 'Michelle Santos',
    isRead: false,
    sendAt: '05-29:02:39',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c20d70f5c4e6143982',
    body:
      'Ex qui aliqua nisi eiusmod mollit proident sunt adipisicing elit ut amet sint. Esse excepteur cillum aliquip nisi nulla culpa. Aliquip proident veniam deserunt dolore nisi reprehenderit. Exercitation nostrud veniam exercitation incididunt. Eu ex do elit in amet consequat velit ad adipisicing consequat. Officia pariatur ad veniam aute non non ex officia. Labore cillum consectetur esse adipisicing minim dolor.\r\n',
    subject: 'Proident cillum id occaecat esse labore fugiat officia.',
    name: 'James Russo',
    isRead: false,
    sendAt: '11-11:11:34',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c240f75d8f7d54923b',
    body:
      'Sunt ipsum nisi commodo sunt ullamco officia eu voluptate veniam aute ex voluptate Lorem. Dolore culpa duis dolor laborum eu mollit amet ipsum adipisicing elit. Ut dolor sunt sint adipisicing adipisicing anim est quis ad pariatur sint esse ipsum. Velit incididunt duis ea mollit eiusmod culpa culpa. Ex reprehenderit sunt nulla sit tempor occaecat do adipisicing labore ex. Anim ipsum sit laboris ex ullamco laborum quis officia commodo cillum do reprehenderit ullamco reprehenderit. Reprehenderit incididunt cillum quis id do commodo.\r\n',
    subject: 'Pariatur cillum amet deserunt Lorem sint anim.',
    name: 'Jillian Franks',
    isRead: true,
    sendAt: '11-07:02:02',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2600218b43a9936a5',
    body:
      'Veniam labore eiusmod cupidatat officia fugiat qui magna veniam mollit pariatur quis do. Ex exercitation laborum cupidatat enim do. Nulla aute nulla quis labore ut dolor et non mollit. Nostrud aliquip excepteur magna labore adipisicing. Occaecat tempor deserunt est laboris eiusmod aliqua aliquip excepteur et.\r\n',
    subject: 'Id eu proident labore est non nisi incididunt.',
    name: 'Conway Reeves',
    isRead: true,
    sendAt: '08-06:01:26',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2461f753a14dfdf1a',
    body:
      'Irure proident dolor anim laborum deserunt laboris cillum. Quis laboris id cillum non cupidatat adipisicing sint officia dolore amet qui. Duis Lorem amet nostrud cillum laboris.\r\n',
    subject: 'Anim mollit nulla qui ad in ut Lorem minim velit occaecat.',
    name: 'Estrada Gay',
    isRead: true,
    sendAt: '12-13:03:41',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c291bb25ba010fa2af',
    body:
      'Eiusmod aute excepteur cupidatat dolor eiusmod exercitation ut anim laboris est aliquip ad. Mollit excepteur nisi aute laboris aute sint ipsum exercitation esse sit sit cillum. Ipsum officia ea commodo veniam id aute qui nisi occaecat in cillum deserunt. Do proident ullamco pariatur sit adipisicing.\r\n',
    subject: 'Fugiat laborum incididunt tempor Lorem consequat amet esse.',
    name: 'West Hickman',
    isRead: false,
    sendAt: '06-20:01:25',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c28abc84ba1b61ff16',
    body:
      'Occaecat est labore sint consequat pariatur exercitation adipisicing. Dolore culpa cillum fugiat ea tempor dolore ipsum ipsum pariatur. Ullamco irure ex dolor in nulla magna elit esse excepteur consectetur.\r\n',
    subject:
      'Mollit aliqua commodo ullamco nisi cupidatat laborum est magna nisi dolore non culpa.',
    name: 'Fern Hogan',
    isRead: false,
    sendAt: '02-16:05:27',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c25097b87f13078e79',
    body:
      'Nulla sit magna reprehenderit eu sunt est elit laboris laborum ea quis. Elit sunt culpa aliquip do laboris. Ut proident aute deserunt cupidatat veniam ex ea. Sit ad labore aliquip duis ea veniam qui cupidatat. Lorem mollit magna ullamco labore exercitation ex duis aute dolor mollit reprehenderit irure laborum.\r\n',
    subject: 'Ex ea quis ut esse cupidatat proident deserunt magna.',
    name: 'Tanya Terrell',
    isRead: true,
    sendAt: '04-07:08:14',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c2abbc180538632e59',
    body:
      'Ex elit et ea nisi esse velit est nostrud aliquip exercitation amet. Duis veniam non laboris cupidatat ullamco qui Lorem culpa excepteur proident cillum proident commodo. Occaecat ut sunt enim adipisicing laborum proident ipsum aliqua excepteur tempor. Incididunt duis exercitation sint cillum proident. Anim ullamco eiusmod duis magna officia ullamco tempor sit cupidatat irure duis. Tempor anim consectetur ipsum aute qui est excepteur non fugiat. Magna elit deserunt ullamco adipisicing ut esse fugiat aute eiusmod irure.\r\n',
    subject: 'In duis pariatur sunt dolore qui.',
    name: 'Concetta Galloway',
    isRead: false,
    sendAt: '04-23:01:27',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c262b2d10f897001f6',
    body:
      'In nulla pariatur sit ex eu dolor cillum commodo culpa. Ut consequat non enim proident aliquip ea tempor fugiat magna id pariatur non pariatur. Velit voluptate enim laborum ex aute velit ut nulla commodo occaecat officia aliquip. Culpa occaecat commodo Lorem ex labore minim esse. Excepteur id Lorem tempor cillum deserunt ullamco officia dolor veniam. Irure nulla amet ex in tempor ea magna incididunt fugiat id enim occaecat.\r\n',
    subject: 'Tempor ut do quis est ad do pariatur enim aute.',
    name: 'Jacqueline Ballard',
    isRead: true,
    sendAt: '02-18:09:37',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2025e386ca65bad8b',
    body:
      'Enim fugiat dolore officia velit ea ullamco occaecat mollit est commodo nostrud adipisicing. Qui non adipisicing est consequat proident. Et reprehenderit exercitation magna quis ullamco sint laborum Lorem. Quis commodo non duis excepteur magna quis eu.\r\n',
    subject:
      'Veniam ullamco reprehenderit eiusmod exercitation ullamco veniam in esse voluptate aute aliquip excepteur.',
    name: 'Farrell Hicks',
    isRead: true,
    sendAt: '06-27:04:00',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c211ff0b34db6ad44f',
    body:
      'Commodo incididunt officia ea irure. Commodo exercitation id esse fugiat do adipisicing cillum Lorem tempor aliqua reprehenderit fugiat. Do sunt laboris eu sit incididunt consectetur culpa cillum. Commodo eu nostrud irure sint esse laboris voluptate ipsum. Anim amet nostrud irure id exercitation do veniam ullamco labore consectetur in.\r\n',
    subject: 'Commodo officia elit eiusmod exercitation ipsum sunt dolore.',
    name: 'Grant Gentry',
    isRead: false,
    sendAt: '09-18:04:31',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c26c21b698582e8ba4',
    body:
      'Veniam minim labore ex sint proident id esse adipisicing eiusmod. Quis duis laborum esse dolor id sit ad voluptate ullamco magna labore proident cupidatat. Magna exercitation Lorem mollit officia sit ipsum tempor officia anim cupidatat ea tempor quis exercitation. Irure est laboris exercitation officia culpa fugiat ullamco magna tempor id eiusmod enim. Deserunt ad cupidatat nostrud ad occaecat anim.\r\n',
    subject:
      'Adipisicing eu velit incididunt culpa aliquip ad ipsum nostrud ex.',
    name: 'Charmaine Vang',
    isRead: true,
    sendAt: '03-14:05:24',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c276d26a9c69700a22',
    body:
      'Ex ullamco minim velit exercitation Lorem et commodo veniam ad. Ullamco consectetur qui in laborum. Nostrud consequat ad do est in id sint nostrud id fugiat culpa ut cillum aliqua. Officia eiusmod dolor duis nostrud sit esse sunt duis voluptate minim deserunt nulla amet. Lorem nostrud ea enim aliqua nisi occaecat ea ipsum cillum culpa ipsum. Culpa ex et laborum culpa id ipsum ea irure pariatur aute. Nulla velit aute minim officia eiusmod nisi cupidatat irure.\r\n',
    subject:
      'Mollit ad consequat cupidatat nostrud elit eiusmod duis in labore proident adipisicing culpa.',
    name: 'Day Harvey',
    isRead: false,
    sendAt: '07-24:04:11',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c2e3667490e56b8269',
    body:
      'Ex dolor proident Lorem consequat reprehenderit laborum eiusmod velit consectetur aliquip exercitation deserunt culpa exercitation. Lorem nostrud officia deserunt et eu officia mollit ullamco velit laboris elit sunt. Nostrud quis ex velit proident tempor nisi anim elit et sit in sit ipsum et. Tempor et et adipisicing magna excepteur quis deserunt sint nisi enim tempor irure. Do duis consectetur non occaecat sint nulla. Voluptate magna consequat adipisicing culpa pariatur veniam sint excepteur nisi amet adipisicing fugiat. Nisi excepteur mollit adipisicing esse tempor est id eiusmod esse.\r\n',
    subject:
      'Excepteur ea ad cillum ea aute elit amet fugiat nulla duis sint est commodo.',
    name: 'Holt Espinoza',
    isRead: true,
    sendAt: '12-20:08:27',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2730b1dc0d6244cc5',
    body:
      'Nisi qui amet ea adipisicing minim labore et. Dolore ullamco deserunt id consequat et deserunt dolore ad adipisicing anim in. Ex adipisicing veniam exercitation consectetur cupidatat quis velit ea veniam. Nostrud irure elit exercitation cillum ad ipsum proident. Amet do magna quis reprehenderit consequat adipisicing reprehenderit elit incididunt sint sunt reprehenderit excepteur nostrud. Consequat ad duis nostrud irure culpa anim.\r\n',
    subject: 'Non labore exercitation ipsum qui occaecat aliquip.',
    name: 'Melendez Knowles',
    isRead: true,
    sendAt: '05-25:01:24',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c26be92ae6b044569b',
    body:
      'Cupidatat dolor cupidatat do dolore magna anim proident id duis officia reprehenderit. Ullamco sint commodo commodo nostrud deserunt voluptate duis. Ad aliqua do culpa quis nostrud.\r\n',
    subject:
      'Duis et elit id sunt cillum excepteur sint nostrud pariatur tempor ea voluptate.',
    name: 'Mckay Ewing',
    isRead: false,
    sendAt: '02-16:03:11',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: true
  },
  {
    _id: '5d0b73c228100ed8928a62b3',
    body:
      'Occaecat magna occaecat magna voluptate dolor. Consequat reprehenderit magna consequat mollit irure proident. Pariatur dolore anim adipisicing fugiat cupidatat. Ullamco magna ex qui sit cupidatat. Elit tempor veniam id sunt et officia aute labore ut id tempor reprehenderit.\r\n',
    subject:
      'Occaecat non consequat eiusmod eiusmod et laboris amet sit culpa et.',
    name: 'Isabella Donaldson',
    isRead: false,
    sendAt: '04-21:10:13',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c29b81a75b6287c8a9',
    body:
      'Incididunt laboris consequat cupidatat proident aute commodo. Reprehenderit duis quis excepteur ex esse consectetur exercitation voluptate id. Pariatur aute laboris magna ea. Et magna nisi commodo ullamco qui consectetur aute culpa Lorem elit est. Ex cupidatat eu sit laborum. Incididunt duis commodo incididunt adipisicing mollit nulla consectetur pariatur elit.\r\n',
    subject: 'Nostrud magna voluptate irure minim magna culpa.',
    name: 'Walter Livingston',
    isRead: true,
    sendAt: '11-15:05:23',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c226bb239bfda68d8c',
    body:
      'Fugiat proident laborum ex duis ad deserunt eu nostrud officia. Magna consequat nostrud Lorem incididunt enim non in. Aliqua ad amet deserunt elit culpa.\r\n',
    subject: 'Non eu quis tempor nulla velit occaecat.',
    name: 'Mollie Nash',
    isRead: true,
    sendAt: '04-13:10:28',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2332819837957a318',
    body:
      'Adipisicing culpa amet laborum et adipisicing culpa ea incididunt et dolore anim. Sint esse ut nulla consequat anim eu proident occaecat. Nisi est ipsum minim consectetur et sit. Quis et veniam nostrud ipsum ex. In in elit Lorem amet culpa nostrud enim. Id eu pariatur sint ea excepteur nulla quis amet proident.\r\n',
    subject: 'Tempor occaecat officia non consequat veniam velit elit do id.',
    name: 'Avery Pittman',
    isRead: true,
    sendAt: '10-05:05:31',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: true
  },
  {
    _id: '5d0b73c2aa0cd9b16e7f9900',
    body:
      'Non adipisicing elit eiusmod Lorem enim est do quis Lorem eiusmod laboris. Laborum adipisicing irure laborum labore consectetur eiusmod duis. Qui ullamco cupidatat ipsum voluptate in enim nostrud aliquip proident. Nostrud ipsum mollit dolore eu ipsum quis occaecat aliqua. Ad in anim magna sint labore. Sit eu aliqua elit laboris commodo dolor quis nisi do officia sit id.\r\n',
    subject: 'Aliqua dolore veniam eiusmod cillum eu aute ad ea excepteur.',
    name: 'Allison Osborn',
    isRead: false,
    sendAt: '03-03:07:33',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2f539eebca0898f08',
    body:
      'Officia adipisicing sunt tempor veniam veniam in aliqua et proident ad amet enim. Cupidatat cupidatat deserunt veniam mollit reprehenderit voluptate sit reprehenderit exercitation et laborum dolor. Esse eu officia veniam ipsum commodo.\r\n',
    subject: 'Adipisicing cupidatat tempor cillum velit reprehenderit veniam.',
    name: 'Bartlett Goodwin',
    isRead: true,
    sendAt: '11-28:01:00',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c2ff17208025da2592',
    body:
      'Minim exercitation sint sint nostrud ex consequat aliqua ullamco laborum adipisicing nisi qui ipsum eiusmod. Eu cupidatat anim labore proident do. Veniam excepteur reprehenderit amet magna eiusmod aute commodo in in. Fugiat proident Lorem consequat sit aliquip dolor veniam in eu ea quis adipisicing. Veniam est laborum reprehenderit do ex id ex proident esse ullamco voluptate eu sint. Mollit non anim ipsum reprehenderit aliqua in ullamco. Occaecat eiusmod aliqua velit ullamco ad sint quis tempor.\r\n',
    subject:
      'Anim non tempor ex mollit aute nulla cupidatat nisi amet qui aliquip.',
    name: 'Gordon Abbott',
    isRead: false,
    sendAt: '03-23:09:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c28077bc978d630896',
    body:
      'Duis tempor pariatur adipisicing voluptate sit do enim consectetur. Ullamco duis nisi voluptate et est dolor dolor laborum ullamco anim magna Lorem veniam sint. Irure Lorem tempor minim aute exercitation sit labore veniam minim labore et proident nulla velit.\r\n',
    subject: 'Elit laborum exercitation anim pariatur cillum veniam.',
    name: 'Dean Chapman',
    isRead: false,
    sendAt: '10-31:12:59',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: false
  },
  {
    _id: '5d0b73c23d137dfad07823e9',
    body:
      'Elit incididunt dolor magna dolore exercitation et occaecat laborum dolore esse Lorem mollit. Labore mollit laborum aliqua nisi nisi sint ut ullamco sit consequat voluptate. Qui esse et ut magna. Dolore adipisicing sunt reprehenderit laboris cupidatat fugiat ut cillum. Nulla nulla ipsum nostrud ad.\r\n',
    subject: 'Duis culpa pariatur ipsum elit consectetur anim minim.',
    name: 'Chan Ryan',
    isRead: true,
    sendAt: '06-20:07:09',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false
  },
  {
    _id: '5d0b73c2b666ca5716a7839e',
    body:
      'Qui reprehenderit deserunt labore cupidatat voluptate culpa nisi. Consequat tempor ea do minim aliqua. Lorem commodo deserunt sint incididunt incididunt nisi. Laboris aute nulla consequat dolor ex sit do incididunt Lorem aliquip ut irure duis. Occaecat ea nisi consequat Lorem sunt excepteur aliquip excepteur non elit ea minim do.\r\n',
    subject:
      'Est magna deserunt tempor Lorem eiusmod ullamco nostrud ad nulla proident cillum occaecat.',
    name: 'Everett Barrera',
    isRead: true,
    sendAt: '03-26:07:51',
    isDeleted: true,
    sendto: '',
    isSent: true,
    isDone: true
  }
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  return email;
}

function updateDB(newEmail) {
  emailsDB.push(newEmail);
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
