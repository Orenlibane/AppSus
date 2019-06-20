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
    _id: '5d0b64aa3c54a8d478990e82',
    body:
      'Aliqua qui laboris exercitation occaecat esse cillum sit ipsum aute do eu cillum. Sint ea sint eu irure voluptate dolore mollit non pariatur ad officia incididunt aute. Non occaecat adipisicing consequat mollit reprehenderit occaecat deserunt culpa anim incididunt veniam. Adipisicing do laboris dolore laboris in magna sunt. Est aliquip exercitation magna enim sint commodo et occaecat. In veniam officia deserunt ea culpa veniam.\r\n',
    subject:
      'Magna fugiat consequat ut amet id irure proident adipisicing ullamco proident ea ea amet excepteur.',
    name: 'Delgado Weaver',
    isRead: false,
    sendAt: '2016-11-19T10:45:33 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aad53594566b38fb96',
    body:
      'Anim reprehenderit excepteur reprehenderit proident voluptate ut ad proident officia. Tempor est ut et veniam ea deserunt voluptate est. Anim aliquip eiusmod tempor nostrud incididunt. Minim esse magna minim elit velit nisi consectetur. Ad sit aute deserunt ullamco commodo dolor voluptate reprehenderit aliquip dolore magna do consequat. Proident incididunt ullamco ipsum mollit cillum laborum do quis cupidatat.\r\n',
    subject:
      'Non duis occaecat eu enim qui officia dolore eiusmod deserunt aute Lorem esse irure.',
    name: 'Barrett Hampton',
    isRead: true,
    sendAt: '2018-10-04T12:03:09 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aaf7b03a5db4ecd9b7',
    body:
      'Nisi sit esse laborum ad magna amet eiusmod ex. Excepteur quis in consectetur ad cillum pariatur nostrud. Nisi eu ullamco labore ex enim labore ut. Sint dolore duis cillum aute deserunt duis irure. Eiusmod Lorem dolore excepteur tempor esse et. Sit tempor eiusmod in esse. Ipsum in irure non reprehenderit anim aute adipisicing id.\r\n',
    subject: 'Culpa minim do ut magna Lorem anim.',
    name: 'Tameka Caldwell',
    isRead: true,
    sendAt: '2016-02-12T12:27:28 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa861bc657c320b0b0',
    body:
      'Do aute laboris cillum sint sit consectetur. Non laboris laborum sunt consectetur reprehenderit labore aute nulla minim. Est ut aute nisi culpa magna. Id et magna adipisicing sit officia proident. Nostrud officia sunt sunt et qui quis. Ad do est ipsum ipsum velit esse exercitation sunt enim veniam sit est. Amet mollit deserunt culpa irure id in nulla magna esse.\r\n',
    subject: 'Reprehenderit ea cillum et in irure sint officia nostrud aute.',
    name: 'Stewart Stafford',
    isRead: true,
    sendAt: '2014-06-20T03:13:13 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aad8cabfa2a4ee2422',
    body:
      'Irure quis excepteur incididunt officia cillum consectetur sunt occaecat. Nisi eiusmod id ex non et irure esse ex pariatur nisi irure cillum ut ipsum. Aliqua exercitation fugiat ea cillum adipisicing reprehenderit ad anim cupidatat eu. Aute dolore Lorem enim qui excepteur. Reprehenderit nisi ullamco in consequat officia aute. Adipisicing labore incididunt nisi dolore ipsum deserunt dolore ipsum enim nostrud enim velit fugiat ut. Id labore officia eiusmod in esse duis officia aute consectetur proident aliqua mollit id sit.\r\n',
    subject:
      'Et do sit laboris incididunt mollit minim mollit qui esse et minim nostrud minim qui.',
    name: 'Hazel Aguirre',
    isRead: false,
    sendAt: '2018-03-13T03:15:14 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa1e2693afd3409b53',
    body:
      'Ex ex aliquip non voluptate. Aute id ea reprehenderit laboris fugiat velit consectetur incididunt velit duis fugiat consequat velit laboris. Aliquip consectetur pariatur in nostrud anim. Minim exercitation quis ullamco dolor pariatur qui enim cupidatat.\r\n',
    subject:
      'Officia ea proident deserunt Lorem exercitation tempor cupidatat irure.',
    name: 'Alvarez Clements',
    isRead: false,
    sendAt: '2014-02-01T07:02:06 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aac061b66e6064e2ed',
    body:
      'Tempor sunt mollit tempor excepteur occaecat pariatur ut occaecat. Ipsum cupidatat reprehenderit aliquip deserunt elit veniam. Cillum pariatur excepteur nisi in ullamco qui magna aliquip sunt. Ad voluptate dolor culpa non labore qui esse qui ullamco ad. Lorem do id mollit fugiat cillum Lorem enim minim aliquip consectetur cupidatat anim irure.\r\n',
    subject:
      'Nostrud commodo quis anim commodo consectetur occaecat proident adipisicing tempor.',
    name: 'Jamie Shaw',
    isRead: false,
    sendAt: '2017-08-04T12:32:16 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa4c3edfc8fb3bd794',
    body:
      'Consectetur tempor aute excepteur amet nostrud pariatur do duis adipisicing aliqua commodo nulla duis dolore. Non voluptate mollit ad velit sint ipsum. Laboris consectetur excepteur quis in exercitation pariatur minim ex ullamco esse occaecat aute mollit. Reprehenderit commodo magna nisi ipsum sit tempor dolore magna ipsum dolore. Qui occaecat aliquip dolor veniam. Culpa labore veniam excepteur minim ad nisi veniam.\r\n',
    subject: 'Duis anim officia nisi irure officia officia ad velit.',
    name: 'Bernice Bishop',
    isRead: true,
    sendAt: '2016-09-04T06:34:32 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa1aa1809b8f518fad',
    body:
      'Aliqua ut pariatur cupidatat esse do minim nostrud fugiat eiusmod enim sunt anim. Officia aute Lorem incididunt proident velit esse culpa laboris est dolor Lorem irure. Fugiat laboris qui ipsum qui excepteur incididunt esse aute ipsum ullamco tempor fugiat. Nostrud veniam cillum ullamco minim sit irure ex sint ipsum proident. Est est consequat consequat est ex do eiusmod do incididunt et mollit. Irure aute dolor elit est veniam ullamco cillum elit incididunt id ad occaecat fugiat eu.\r\n',
    subject:
      'Aute officia fugiat quis dolore tempor nulla Lorem sit officia cupidatat.',
    name: 'Dean Duncan',
    isRead: true,
    sendAt: '2014-02-13T04:57:55 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa0e8cfbe01769ea67',
    body:
      'Irure sit voluptate culpa enim. Irure cupidatat anim do incididunt eiusmod deserunt nostrud sint anim. Incididunt est ullamco ea incididunt culpa eu sint pariatur incididunt consequat laboris minim laborum. Cillum dolore in veniam eu. Incididunt exercitation duis tempor adipisicing cillum aute qui. Quis in nostrud consequat tempor incididunt magna occaecat pariatur adipisicing enim ut.\r\n',
    subject: 'Quis sint aliquip cillum excepteur do.',
    name: 'Hester Shields',
    isRead: true,
    sendAt: '2019-05-14T11:49:31 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aaf2894ab54e3d2ac4',
    body:
      'Eu id veniam amet id voluptate minim ex. Laboris anim reprehenderit irure occaecat nisi tempor sunt id aute aliqua consequat Lorem mollit ullamco. Eiusmod ut ad et tempor. Veniam dolore laborum laborum in pariatur consectetur non veniam irure laboris. Dolor eiusmod sit cillum cillum exercitation aliquip. Sit anim aliqua reprehenderit cupidatat.\r\n',
    subject: 'Commodo ex consequat aliqua aliqua.',
    name: 'Obrien Ware',
    isRead: true,
    sendAt: '2018-03-09T06:14:39 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa171f536bf29ae6d5',
    body:
      'Do esse ut veniam amet ut do nostrud. Magna aliquip quis mollit mollit anim aute ut. Occaecat amet aliqua anim sunt minim tempor nisi magna veniam velit.\r\n',
    subject:
      'Mollit commodo minim laborum non minim tempor eiusmod labore non minim in occaecat.',
    name: 'Roslyn Torres',
    isRead: true,
    sendAt: '2015-09-15T06:26:15 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aacfdac84b39f9ac5a',
    body:
      'Eu occaecat qui quis enim nostrud exercitation ex. Ullamco sunt excepteur laboris ipsum enim consectetur adipisicing laborum adipisicing Lorem. Exercitation est exercitation ut velit. Culpa consectetur nulla in sint elit ea consequat non. Quis adipisicing excepteur do in dolore cillum aliqua sit reprehenderit deserunt aute.\r\n',
    subject: 'Officia magna est aute Lorem nisi fugiat ea duis.',
    name: 'Kelly Leon',
    isRead: true,
    sendAt: '2014-02-28T01:01:16 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa702653c5cc957bea',
    body:
      'Eiusmod amet ea amet in pariatur mollit magna adipisicing. Consectetur irure quis proident enim consequat anim nostrud proident id excepteur ullamco. Laborum culpa aliqua do irure consectetur nostrud id tempor dolor velit eiusmod. Do ipsum veniam labore non nulla deserunt et occaecat do nisi. Quis deserunt eu sit adipisicing laboris id laboris laboris aute. Voluptate consectetur ipsum velit eu culpa adipisicing. Exercitation non qui consectetur occaecat commodo.\r\n',
    subject:
      'Eiusmod et exercitation laboris quis anim duis aliqua duis amet aliqua esse aliquip.',
    name: 'Jocelyn Jenkins',
    isRead: true,
    sendAt: '2014-10-25T06:31:10 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa1d17206a0c0778e6',
    body:
      'Velit Lorem dolor sint exercitation fugiat. Quis ipsum labore anim sit commodo nisi aliqua adipisicing in consequat eiusmod tempor commodo. Ut in id id est cillum veniam consequat.\r\n',
    subject: 'Aliqua commodo ut ad eu esse cillum.',
    name: 'Pittman York',
    isRead: true,
    sendAt: '2018-10-01T03:46:26 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aace4c599e74656c61',
    body:
      'Proident elit duis labore proident cillum consequat deserunt. Id esse aute nulla do consequat tempor deserunt mollit do cupidatat irure aliquip aliqua. Aute aliqua nisi aute exercitation nostrud consequat. Dolor Lorem Lorem occaecat dolor pariatur do do dolor. Ut minim reprehenderit laboris elit ex mollit non amet proident. Eu laborum aliquip nostrud enim eu ex fugiat aliqua laboris labore.\r\n',
    subject: 'Deserunt sit culpa reprehenderit officia do magna.',
    name: 'Hall Harding',
    isRead: false,
    sendAt: '2014-10-01T07:37:41 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa027ae9d53616d163',
    body:
      'Qui cupidatat eu et mollit pariatur laborum est exercitation veniam est consectetur officia. Nisi reprehenderit aliquip non magna laborum. Laboris culpa ipsum ea laborum est eu est nostrud id cillum velit. Ut ad eu pariatur ut id eu culpa adipisicing sunt. Consequat cillum laboris id proident in est et est laborum voluptate.\r\n',
    subject: 'Elit voluptate cupidatat tempor id.',
    name: 'Lopez Garner',
    isRead: true,
    sendAt: '2017-06-09T03:22:42 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aae3e600d837b39a00',
    body:
      'Laborum aliquip aliquip aute magna enim nisi esse ex elit aliqua culpa fugiat qui amet. Id minim mollit enim deserunt id enim irure elit irure voluptate consequat ullamco adipisicing dolor. Nulla irure irure laboris laborum veniam est id.\r\n',
    subject:
      'Dolore culpa qui pariatur consequat irure cillum pariatur eiusmod veniam sunt enim.',
    name: 'Hays Warner',
    isRead: false,
    sendAt: '2016-02-05T01:02:34 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aad4ed026a67a7f816',
    body:
      'Veniam dolore excepteur quis id commodo esse in cillum labore dolore veniam. Consectetur do magna sunt adipisicing voluptate duis id elit veniam proident. Ullamco elit ad enim cillum.\r\n',
    subject:
      'Ea esse est Lorem Lorem est esse in dolor tempor ea enim eiusmod aliquip.',
    name: 'Joanne Vaughn',
    isRead: true,
    sendAt: '2018-09-29T07:56:36 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa34ec6f0ead0bd3a3',
    body:
      'Elit voluptate quis aliquip nulla amet. Adipisicing Lorem esse exercitation magna adipisicing excepteur fugiat fugiat. Ullamco cupidatat incididunt quis velit officia non sint ullamco exercitation aliqua est sunt. Proident ad mollit adipisicing occaecat sunt incididunt nostrud qui consectetur. In magna anim cillum mollit. Esse incididunt eiusmod qui commodo irure occaecat culpa ullamco exercitation eu culpa qui. Tempor eiusmod dolore cillum commodo nostrud laboris Lorem qui in.\r\n',
    subject: 'Amet veniam officia occaecat eu aute nulla.',
    name: 'Kline Osborne',
    isRead: false,
    sendAt: '2014-10-05T10:36:47 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa65b29c966f196e8b',
    body:
      'Velit aute magna et ad pariatur. Cupidatat ex id est pariatur eiusmod est eiusmod. Ex sint tempor nisi consequat. Quis quis ad ut deserunt velit ea sit aliquip pariatur.\r\n',
    subject:
      'Enim dolore deserunt commodo quis elit excepteur quis excepteur cillum laboris.',
    name: 'Good Neal',
    isRead: false,
    sendAt: '2018-10-29T03:20:30 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aac113b3c30ea1c30d',
    body:
      'Do amet laborum cillum irure consequat proident. Do enim eu deserunt veniam deserunt ad commodo. Esse aute culpa adipisicing nisi laboris incididunt velit incididunt nisi dolore anim laborum nisi id. Consectetur culpa ullamco nostrud ipsum mollit amet id et velit cillum tempor occaecat anim. Laborum aute eiusmod eu minim nisi ipsum proident aliqua dolor.\r\n',
    subject:
      'Nostrud commodo exercitation occaecat culpa cillum reprehenderit culpa mollit nisi.',
    name: 'Dotson Gray',
    isRead: false,
    sendAt: '2017-04-01T01:26:16 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aae6b93047b24b6005',
    body:
      'Excepteur proident cupidatat irure ipsum dolore. Pariatur proident consequat dolor deserunt aute ut officia exercitation labore sint veniam occaecat enim enim. Aliquip ex voluptate esse dolore ipsum sit ipsum nulla nulla ex pariatur ipsum ea velit. Exercitation pariatur eiusmod excepteur consectetur. Enim magna fugiat labore elit Lorem anim fugiat fugiat non dolore.\r\n',
    subject: 'Lorem aute ipsum irure esse laboris sint dolore.',
    name: 'Ingram Short',
    isRead: true,
    sendAt: '2019-02-28T04:00:32 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aaec28140fec03e766',
    body:
      'Id non ullamco non dolor sit dolore proident cillum. Amet incididunt proident aliquip do. Voluptate mollit qui id cillum laboris aute elit ad ut dolore aliquip. Aute proident eiusmod exercitation cillum magna veniam dolore. Nisi consequat veniam cupidatat duis aliqua occaecat dolore duis. Ut qui excepteur velit eiusmod mollit proident nisi est occaecat mollit cupidatat labore aute amet.\r\n',
    subject: 'Nulla esse sit magna tempor irure esse occaecat occaecat.',
    name: 'Moran Beard',
    isRead: false,
    sendAt: '2017-06-17T01:54:01 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aae7977a8df099b2c2',
    body:
      'Minim quis nisi pariatur dolor aute nostrud. Quis fugiat enim non proident pariatur dolor aliqua. Irure laborum ea excepteur deserunt aute id. Laborum in exercitation proident culpa ut nisi velit nisi dolor id. Labore tempor cupidatat velit ex do anim ipsum laboris ipsum. Mollit veniam exercitation irure proident aute eiusmod ex qui mollit esse sint commodo ullamco. Sint velit ipsum mollit tempor exercitation sint enim sunt adipisicing nisi.\r\n',
    subject:
      'Culpa voluptate nulla non eiusmod officia sunt Lorem consectetur fugiat commodo cillum ullamco elit.',
    name: 'Jenny Freeman',
    isRead: false,
    sendAt: '2015-11-11T07:22:36 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aada0a121f58212031',
    body:
      'Eu laboris culpa magna id proident sint velit Lorem laboris fugiat amet excepteur ea. Velit proident amet duis labore duis id elit mollit cillum excepteur aute sint in. Sit aute mollit adipisicing quis est. Culpa veniam non elit ea ex nisi consequat in reprehenderit occaecat mollit cupidatat cillum nulla.\r\n',
    subject: 'Commodo ad nulla mollit ullamco.',
    name: 'Young Mcleod',
    isRead: false,
    sendAt: '2016-11-21T05:23:28 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa8613eb61b3d217cf',
    body:
      'Id cillum pariatur quis proident laborum aliqua labore excepteur dolore qui nostrud eu dolor cillum. Veniam cupidatat consequat enim incididunt fugiat sit. Consectetur culpa nisi deserunt ut culpa. Qui ipsum nisi aliquip minim Lorem. Do non ullamco ipsum deserunt cupidatat do mollit ex proident aute excepteur cupidatat. Anim qui in consectetur cupidatat aute qui nisi.\r\n',
    subject: 'Aliquip est ut in magna aute qui ea elit Lorem.',
    name: 'Shana Carrillo',
    isRead: true,
    sendAt: '2015-10-05T10:42:46 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aae2814060ed9b17c1',
    body:
      'Nisi labore ut dolor pariatur commodo. Irure aute esse pariatur incididunt cillum et officia. Dolore irure consequat deserunt proident aute dolor adipisicing mollit ipsum ad id magna eiusmod. Id ipsum incididunt cillum elit nulla sunt deserunt veniam. Veniam dolor veniam ea anim amet ea sint Lorem.\r\n',
    subject:
      'Anim quis occaecat incididunt proident cillum laboris elit incididunt ad excepteur aliqua.',
    name: 'Pam Williams',
    isRead: true,
    sendAt: '2019-02-05T01:52:35 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa6a6bd50e8b4e7932',
    body:
      'Ex exercitation aliquip sit pariatur magna aliqua ullamco. Ad Lorem veniam aliqua occaecat aute occaecat. Qui et mollit amet nulla consectetur esse ut cupidatat irure exercitation veniam. Duis veniam consequat consectetur aliquip duis. Pariatur magna irure est laborum.\r\n',
    subject:
      'Ullamco incididunt laboris Lorem labore consectetur ullamco duis ex Lorem nisi pariatur reprehenderit irure nostrud.',
    name: 'Bryant Gillespie',
    isRead: true,
    sendAt: '2014-05-09T04:09:45 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa7f7caa6e7f9259b7',
    body:
      'Sint magna non dolore consectetur adipisicing nostrud eiusmod esse et elit consectetur enim. Esse culpa magna excepteur irure. In irure voluptate nulla sint id elit exercitation ut duis elit.\r\n',
    subject:
      'Tempor duis excepteur sit reprehenderit eiusmod nisi dolore dolor consectetur voluptate consectetur aliqua fugiat est.',
    name: 'Lula Mcneil',
    isRead: true,
    sendAt: '2016-06-06T09:37:44 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aadca2046f1bd7a2b7',
    body:
      'Aute reprehenderit consequat labore ad ipsum dolore ea officia laboris pariatur. Et adipisicing occaecat labore esse ut Lorem reprehenderit tempor non in. Consequat cupidatat officia duis ex cillum irure laboris et aute adipisicing excepteur id.\r\n',
    subject:
      'Eu ullamco sit voluptate ea ipsum excepteur occaecat Lorem nisi duis.',
    name: 'Frieda Giles',
    isRead: false,
    sendAt: '2018-02-08T11:12:29 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa899920c5cec07769',
    body:
      'Cillum laboris aliqua aliquip ut dolore incididunt mollit. Irure sint do ullamco voluptate non eu magna ipsum magna commodo sit ex. Cillum ipsum consequat ad ad anim ea laborum magna.\r\n',
    subject:
      'Enim adipisicing aliquip voluptate officia pariatur voluptate deserunt elit dolor voluptate occaecat.',
    name: 'Jimenez Graves',
    isRead: true,
    sendAt: '2014-03-16T08:47:13 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aaf8881edd91c5907c',
    body:
      'Esse exercitation cillum ad consequat. Consequat magna occaecat excepteur aute nostrud ut exercitation exercitation quis tempor velit consequat anim exercitation. Et nostrud consequat duis non Lorem dolore reprehenderit. Commodo qui occaecat dolore deserunt officia aute incididunt excepteur aute. Mollit qui dolore consectetur ipsum id occaecat esse est officia laborum cupidatat fugiat.\r\n',
    subject:
      'Quis incididunt cillum cupidatat consectetur elit amet do veniam.',
    name: 'Lauri Pearson',
    isRead: true,
    sendAt: '2019-06-16T11:50:34 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa5862879b99f09f75',
    body:
      'Sit pariatur aute pariatur adipisicing culpa sunt veniam sunt id in cupidatat exercitation. Adipisicing cupidatat eu sit elit ut fugiat ex. Sit labore adipisicing voluptate quis adipisicing duis culpa cillum magna ipsum dolor eu dolore.\r\n',
    subject: 'Lorem ex Lorem adipisicing labore.',
    name: 'Diann Rutledge',
    isRead: true,
    sendAt: '2016-02-02T04:21:18 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa0741e577e3ad496b',
    body:
      'Sint est velit dolor ipsum aliqua aliqua cupidatat. Aliqua nisi est cupidatat ut id aliquip labore cillum eiusmod qui nisi. Occaecat velit quis aliquip do reprehenderit Lorem commodo tempor excepteur consectetur ad ullamco aliquip ad. Magna veniam aliquip in sint sint fugiat cillum et deserunt fugiat esse ut eiusmod non. Nulla culpa ex quis aliquip deserunt. Voluptate nisi laborum incididunt ad ea tempor aliqua duis duis occaecat elit.\r\n',
    subject: 'Commodo aliqua occaecat mollit consequat culpa non Lorem.',
    name: 'Moreno Hewitt',
    isRead: true,
    sendAt: '2015-03-31T12:41:04 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa352eeacef7410f7b',
    body:
      'Veniam aute amet laborum anim pariatur id nostrud culpa officia. Excepteur officia cillum incididunt nulla mollit irure commodo quis non exercitation qui nisi pariatur ullamco. Fugiat consequat commodo aliqua eiusmod. Qui ad est eiusmod magna eiusmod incididunt. Duis magna nostrud officia laborum consectetur ipsum velit ullamco cillum excepteur ullamco.\r\n',
    subject: 'Et esse ex sit irure culpa cillum.',
    name: 'Selena Foster',
    isRead: false,
    sendAt: '2014-04-27T06:58:24 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aab759fda3373206f9',
    body:
      'Officia ullamco proident ipsum laborum id commodo mollit pariatur commodo ipsum dolor. Ut mollit laboris duis laborum officia sit reprehenderit deserunt eiusmod incididunt et et aliqua duis. In eiusmod id culpa duis culpa laborum esse ex eu. Veniam mollit cupidatat eiusmod duis ipsum id adipisicing. Qui nisi nulla Lorem ullamco ipsum culpa. Mollit amet quis Lorem elit esse sit in in dolor nisi magna voluptate. Reprehenderit officia consectetur cupidatat esse ullamco laborum cupidatat anim.\r\n',
    subject:
      'Mollit ea do veniam laborum non non ex voluptate occaecat non labore.',
    name: 'Orr Frye',
    isRead: true,
    sendAt: '2019-01-22T01:42:18 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aaf05454ab77718cde',
    body:
      'Exercitation minim Lorem enim fugiat. Cupidatat amet veniam in est dolore. Sint laboris ex commodo nostrud incididunt mollit eiusmod voluptate occaecat pariatur. Velit proident reprehenderit consectetur nostrud.\r\n',
    subject:
      'Occaecat ipsum incididunt dolore aliqua commodo proident laborum reprehenderit cupidatat quis exercitation consectetur consectetur fugiat.',
    name: 'Allyson Mcclure',
    isRead: false,
    sendAt: '2017-09-16T05:53:41 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa5544d42ac33eac66',
    body:
      'Laborum ullamco occaecat sunt ipsum. Eiusmod veniam laborum aute veniam elit magna deserunt cupidatat aute laborum dolore do. Eiusmod veniam adipisicing ad officia anim qui laboris enim aliquip. Lorem pariatur adipisicing elit aliqua non sit enim magna. Commodo proident eu fugiat fugiat eu esse irure.\r\n',
    subject:
      'Labore do culpa do Lorem nostrud et non eu labore labore consectetur et veniam.',
    name: 'Renee Pruitt',
    isRead: false,
    sendAt: '2016-04-13T06:18:04 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa637bc8c4848c8746',
    body:
      'Sit aliqua pariatur aliquip sint laboris. Ut nostrud elit ullamco elit labore ut ut. Ullamco officia dolore laborum dolore est voluptate ut eiusmod excepteur laboris. Ad reprehenderit aliqua nostrud ullamco nulla do elit commodo officia nulla id eiusmod proident. Incididunt nostrud enim minim tempor magna voluptate laboris Lorem aute sunt culpa amet enim fugiat. Culpa sunt nostrud ex duis ea irure nisi irure.\r\n',
    subject:
      'Lorem ut nulla velit adipisicing dolore excepteur in sint irure in.',
    name: 'Harriett Woodard',
    isRead: false,
    sendAt: '2016-10-28T04:52:01 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aaadc981f483c051a0',
    body:
      'Commodo ex reprehenderit dolore qui. Velit qui occaecat cupidatat cupidatat sunt quis labore sunt duis. Enim pariatur nisi non voluptate. Nostrud cupidatat voluptate nostrud occaecat laboris non sint enim sint. Ullamco consequat magna culpa eu laborum tempor anim. Dolor elit ipsum deserunt anim esse eiusmod deserunt. Adipisicing veniam esse irure pariatur ex et minim.\r\n',
    subject:
      'Ipsum aliqua nostrud aute ipsum cupidatat consequat do eu voluptate voluptate ipsum.',
    name: 'Trisha Marshall',
    isRead: false,
    sendAt: '2018-10-14T11:23:04 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa298e5d5c188a0d84',
    body:
      'Ipsum reprehenderit et adipisicing dolor esse laborum nulla fugiat fugiat. Occaecat amet mollit sunt deserunt ad nulla ea. Id adipisicing do consectetur non nulla consequat nulla incididunt id id nisi. Fugiat sunt sunt cillum consectetur sunt ipsum dolore velit cupidatat. Elit aliquip pariatur esse ad sit eu consequat elit excepteur aute. Nisi sit magna sunt elit adipisicing aliqua aliqua Lorem.\r\n',
    subject: 'Tempor exercitation velit sunt laboris adipisicing.',
    name: 'Mandy Baldwin',
    isRead: false,
    sendAt: '2014-02-25T01:55:52 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa13f1c1fee7280e75',
    body:
      'Incididunt do nulla dolore aliqua laborum aliqua amet sunt eiusmod exercitation eu eiusmod cupidatat. Consectetur culpa eu consequat eiusmod non sint in quis voluptate laboris fugiat officia excepteur. Dolore irure commodo cillum eiusmod proident ullamco fugiat fugiat consequat ea magna elit ea.\r\n',
    subject:
      'Eiusmod exercitation occaecat tempor cupidatat nulla aliquip ullamco culpa ad.',
    name: 'Golden Pena',
    isRead: false,
    sendAt: '2017-03-17T05:22:39 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa79846fbfaeb33ffe',
    body:
      'Nulla dolor laboris adipisicing ex ex labore ut minim aute nostrud adipisicing cupidatat duis tempor. Esse magna et proident amet incididunt labore cupidatat excepteur eu aute sunt nisi. Qui do eiusmod reprehenderit incididunt et minim duis esse magna excepteur sunt officia non. Magna reprehenderit esse exercitation veniam anim enim consequat culpa nostrud laboris id cillum. Cupidatat nisi dolor tempor tempor duis irure veniam do exercitation. Ex ad sunt magna reprehenderit voluptate cillum labore ea. Nisi nisi voluptate anim quis sunt elit laborum mollit qui.\r\n',
    subject:
      'Nostrud cillum enim quis velit velit elit ea quis et ea esse dolor in.',
    name: 'Benson Gentry',
    isRead: false,
    sendAt: '2016-12-23T11:49:44 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa1417d193aa55fa85',
    body:
      'Mollit cupidatat dolor tempor adipisicing nostrud in sit sunt. Nisi incididunt incididunt dolor consequat Lorem excepteur proident. Ut qui aliqua nulla magna consectetur nulla aute aliquip Lorem laborum qui laboris anim. Officia sint Lorem laboris esse exercitation eu id. Tempor mollit cupidatat anim excepteur veniam dolor proident adipisicing reprehenderit. Exercitation in ad exercitation proident aliqua deserunt consequat elit eiusmod in. Deserunt irure qui proident dolore excepteur nostrud duis officia consectetur deserunt enim fugiat.\r\n',
    subject: 'Aliquip non ullamco do mollit qui.',
    name: 'Katherine Alvarado',
    isRead: false,
    sendAt: '2015-11-21T05:59:57 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa3d981d5f9c001876',
    body:
      'Non sunt in anim id nisi et esse aute irure. Mollit dolore irure nostrud culpa eiusmod elit quis consequat anim in. Nisi sit magna cupidatat voluptate aliquip nisi minim fugiat consequat ea nostrud. Ipsum voluptate minim non incididunt reprehenderit nulla enim qui esse minim culpa fugiat. Ex eiusmod id ipsum laborum. Proident id eiusmod irure nostrud adipisicing aute cupidatat eu.\r\n',
    subject:
      'Enim cillum cupidatat excepteur cillum ad aliqua cupidatat commodo do.',
    name: 'Alexandra Franklin',
    isRead: false,
    sendAt: '2015-02-22T05:58:37 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aad8f6a62072e580f2',
    body:
      'Non enim excepteur eiusmod laboris occaecat anim esse minim minim voluptate ipsum irure et duis. Elit fugiat irure duis pariatur cillum nisi velit tempor non nisi aute ullamco laborum. Quis adipisicing ex exercitation do tempor ut ullamco id non. Aliquip dolor reprehenderit exercitation sit nulla eiusmod officia consectetur ipsum nisi officia Lorem occaecat.\r\n',
    subject:
      'Ad laboris minim ullamco nisi nostrud esse sint ullamco pariatur Lorem proident adipisicing.',
    name: 'Penelope Steele',
    isRead: false,
    sendAt: '2016-05-02T12:07:08 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa37832a0f8ef498a3',
    body:
      'Excepteur eiusmod irure aliqua deserunt consectetur est laborum minim velit exercitation sunt irure fugiat. Sint ipsum consectetur irure laboris consectetur voluptate tempor deserunt minim esse est culpa irure consectetur. Sint duis magna aliqua amet. Commodo laborum velit minim culpa aliqua excepteur incididunt eu.\r\n',
    subject: 'Ea consectetur sit dolore duis.',
    name: 'Day Quinn',
    isRead: false,
    sendAt: '2019-02-20T01:08:58 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa2e3a5d545ea0ee9b',
    body:
      'Non est exercitation minim est nisi exercitation esse. Culpa voluptate sit eiusmod occaecat nisi nostrud. Aute nulla quis consectetur Lorem quis voluptate. Voluptate amet tempor nostrud minim ad pariatur consequat ad magna ipsum id nisi fugiat. Elit officia ex aute qui sunt ea reprehenderit exercitation esse pariatur veniam dolore. In labore labore est esse id sunt occaecat nisi aliquip elit do esse et occaecat.\r\n',
    subject: 'Fugiat proident tempor eu nisi dolor deserunt ipsum.',
    name: 'Kristie Trujillo',
    isRead: true,
    sendAt: '2019-04-27T04:32:00 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aaf19ee57f52b0646d',
    body:
      'Anim irure sit eiusmod dolor aliqua ea occaecat deserunt aute culpa sint adipisicing aliquip. Aliqua et non consequat nostrud aliquip fugiat enim. Nulla exercitation ex proident minim dolore culpa id Lorem incididunt dolor qui.\r\n',
    subject: 'Consectetur do aute do non.',
    name: 'Avery Bolton',
    isRead: false,
    sendAt: '2017-11-12T12:44:52 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa65107c3ea1a76946',
    body:
      'Irure cillum sit labore elit minim fugiat culpa anim fugiat. Magna ipsum nisi aliqua reprehenderit cupidatat nisi. Deserunt laboris deserunt excepteur occaecat dolore aliqua voluptate amet aliquip consectetur est. Velit nostrud aliquip nostrud nostrud minim.\r\n',
    subject: 'Aute elit laborum dolore eiusmod.',
    name: 'Wolf Stewart',
    isRead: false,
    sendAt: '2019-02-28T06:22:31 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa44beea7945b10cb4',
    body:
      'Deserunt incididunt cupidatat sit labore elit veniam ad deserunt irure do voluptate nostrud do proident. Magna aliquip voluptate ipsum amet enim occaecat commodo exercitation veniam Lorem ea. Aute consectetur elit officia dolor sint ipsum ullamco Lorem aute ullamco nisi labore. Sint consequat consequat exercitation enim cupidatat quis dolore nulla pariatur aute. Cillum nulla esse qui ipsum laboris reprehenderit sunt amet culpa magna. Dolore eu veniam exercitation ad.\r\n',
    subject: 'Ipsum nostrud laborum occaecat enim excepteur amet est.',
    name: 'Eileen Rojas',
    isRead: true,
    sendAt: '2015-10-05T04:39:54 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa216ed06661b03432',
    body:
      'Exercitation eiusmod irure ipsum ullamco ipsum officia ex laborum magna. Amet magna consequat eiusmod sit sint dolore. Aliqua Lorem minim excepteur aute officia ad sit. Ad nisi ad in enim sint consectetur.\r\n',
    subject: 'Culpa eiusmod sunt sit nisi.',
    name: 'Buckner Hayden',
    isRead: false,
    sendAt: '2017-12-17T08:05:48 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa758571bc75e53448',
    body:
      'Consectetur eiusmod magna quis fugiat voluptate. Aliquip officia laboris pariatur Lorem amet incididunt elit et eu. Eu cillum et ea ad ea labore labore amet consequat adipisicing aute adipisicing culpa.\r\n',
    subject:
      'Sit proident Lorem esse velit ea voluptate nulla aliqua pariatur proident sunt aute laborum.',
    name: 'Courtney Porter',
    isRead: true,
    sendAt: '2015-01-31T04:49:30 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aab6e2a43ef5ec98ae',
    body:
      'Ad officia ipsum velit commodo proident pariatur irure. Ipsum nostrud est aute reprehenderit veniam fugiat et id cupidatat. Ea velit nostrud incididunt eiusmod occaecat non quis elit.\r\n',
    subject: 'Ut sunt officia excepteur duis ipsum.',
    name: 'Rodriguez Cole',
    isRead: false,
    sendAt: '2018-05-07T07:18:04 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa054194e3ace5097e',
    body:
      'Eiusmod laborum in enim ea cillum dolor. Est sint nulla sit labore cupidatat id quis sint dolor. Ad sit Lorem aute dolor. Laborum aute amet tempor sint ea amet non do nisi labore exercitation. Ea ipsum pariatur nulla anim magna consectetur adipisicing.\r\n',
    subject: 'Commodo irure non dolor magna eu pariatur laborum irure sunt.',
    name: 'Mays Chapman',
    isRead: false,
    sendAt: '2017-09-21T10:14:58 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa2a3e6c1a6c23f797',
    body:
      'Aliquip occaecat nostrud labore velit est aliquip culpa cillum nulla ipsum deserunt. In dolore ex aliquip cupidatat fugiat. Irure aliquip cillum eiusmod officia commodo elit.\r\n',
    subject:
      'Minim qui sunt nostrud nostrud nostrud veniam ipsum commodo officia.',
    name: 'Rutledge Rasmussen',
    isRead: true,
    sendAt: '2017-03-26T11:39:08 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa6029c29071c7d243',
    body:
      'Cillum irure fugiat eiusmod eiusmod proident aliquip irure. In esse commodo ut officia dolor et. Do ipsum proident fugiat nisi ea. Id nisi veniam sunt nisi quis adipisicing proident. Adipisicing aliquip nisi Lorem non. Anim consequat dolore officia laboris. Culpa magna cupidatat eu excepteur duis nisi est mollit laboris proident eiusmod.\r\n',
    subject: 'Eu nostrud est laboris minim labore id aliqua.',
    name: 'Justice Schroeder',
    isRead: false,
    sendAt: '2015-10-27T10:10:36 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa5efbe5c2af436df9',
    body:
      'Et deserunt occaecat nulla dolor officia tempor dolor amet reprehenderit consectetur cupidatat officia pariatur. Qui non laborum reprehenderit sint aliquip sit eu dolore velit excepteur commodo in veniam. Quis minim non est nulla officia mollit nisi elit aliqua consequat duis.\r\n',
    subject:
      'Ut pariatur tempor deserunt dolore consectetur Lorem labore officia commodo pariatur ut aliqua consequat.',
    name: 'Meagan Pace',
    isRead: false,
    sendAt: '2017-02-02T01:48:19 -02:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aa5e0ba2de6b903e34',
    body:
      'Quis pariatur qui nisi eiusmod et esse sunt officia nulla ex. Veniam officia voluptate Lorem labore veniam excepteur nisi magna incididunt non exercitation quis veniam. Commodo laboris aliquip proident voluptate tempor consectetur. Amet fugiat dolore est eu ex quis elit culpa laboris in qui.\r\n',
    subject: 'Ullamco fugiat labore ex non ut nostrud ad fugiat cillum velit.',
    name: 'Snider Sampson',
    isRead: true,
    sendAt: '2018-11-06T12:32:20 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aad90cb2bd484e28fe',
    body:
      'Tempor esse adipisicing laboris sit. Id exercitation ut duis nostrud. Esse magna ut minim commodo elit fugiat minim sunt laboris velit exercitation sit qui eu. Consectetur laboris non ut aliqua.\r\n',
    subject:
      'Excepteur aliquip officia reprehenderit ex incididunt culpa labore ex.',
    name: 'Booth Conway',
    isRead: true,
    sendAt: '2017-09-11T08:54:16 -03:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa2b2ffd81893e6fbe',
    body:
      'Dolore in laborum qui anim Lorem ex. Labore est occaecat deserunt anim aute dolor veniam voluptate fugiat ut laborum cupidatat eiusmod. Qui sint fugiat qui laboris aliqua anim aliqua anim exercitation. Dolor non esse fugiat tempor esse voluptate esse ea occaecat amet dolore pariatur eiusmod. Ex aliquip non deserunt et ullamco exercitation in magna magna consequat nisi reprehenderit.\r\n',
    subject: 'Exercitation non Lorem tempor fugiat dolore consequat magna.',
    name: 'Tabitha Shepherd',
    isRead: false,
    sendAt: '2015-03-24T03:46:33 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aa744b3c9118d400b1',
    body:
      'Qui ea in nostrud velit voluptate. Duis enim nisi magna ea proident proident incididunt. Aliqua exercitation culpa cillum tempor veniam ea eiusmod ut officia anim. Officia laborum eu voluptate incididunt pariatur ut officia irure anim dolore. Nostrud tempor Lorem aute et laborum labore culpa ipsum elit commodo voluptate. Irure ea fugiat pariatur velit labore dolore aliquip velit esse amet incididunt cupidatat sint. Aute labore est esse in adipisicing tempor nulla Lorem adipisicing.\r\n',
    subject:
      'Dolore non esse enim velit cillum pariatur officia cillum labore nisi velit.',
    name: 'Wendi Levy',
    isRead: true,
    sendAt: '2018-12-01T12:53:53 -02:00',
    isDeleted: true
  },
  {
    _id: '5d0b64aadd66c259e4e0ec9a',
    body:
      'Ut fugiat eu minim amet. Non sit sint Lorem fugiat culpa mollit deserunt. Quis aliquip magna eiusmod ut sunt ad dolor qui ea pariatur exercitation esse aliqua ea.\r\n',
    subject:
      'Labore consequat anim consectetur fugiat ut labore quis occaecat qui in fugiat duis reprehenderit.',
    name: 'Bettie Salas',
    isRead: true,
    sendAt: '2016-06-02T02:11:42 -03:00',
    isDeleted: false
  },
  {
    _id: '5d0b64aac5979ab85dde495a',
    body:
      'Voluptate duis mollit eu ut sit tempor id laboris id consequat. Aliquip laborum qui nulla laborum laborum veniam magna in non cupidatat consequat eu. Qui id officia laborum occaecat do aliquip aliqua nisi non qui consectetur duis ipsum.\r\n',
    subject:
      'Cillum laboris cupidatat ea adipisicing commodo est aliquip tempor esse voluptate.',
    name: 'Francisca Lynn',
    isRead: false,
    sendAt: '2015-01-04T12:12:18 -02:00',
    isDeleted: false
  }
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  return email;
}
