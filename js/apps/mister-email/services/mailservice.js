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
    _id: '5d0b53e234dad150b48f0919',
    body:
      'Proident elit ullamco ullamco culpa magna est officia aliquip qui nostrud adipisicing. In esse anim voluptate excepteur nulla mollit aliquip occaecat aliqua eu exercitation deserunt. Fugiat mollit deserunt fugiat amet ipsum pariatur ullamco duis irure consectetur exercitation. Ex consequat cupidatat duis ipsum deserunt anim nostrud commodo sint magna enim sint.\r\n',
    subject: 'Minim nulla irure duis aliquip cillum consequat exercitation.',
    name: 'Teri Herrera',
    isRead: false,
    sendAt: '2018-09-22T03:03:04 -03:00'
  },
  {
    _id: '5d0b53e28424660a02619b69',
    body:
      'Ullamco sit nulla proident veniam cillum consectetur. Qui et officia in proident magna sunt excepteur aliquip occaecat aliqua elit sint Lorem nulla. Dolore tempor veniam cupidatat ullamco excepteur velit culpa magna duis non nulla consectetur. Nulla eu magna adipisicing aute officia ut elit esse eiusmod sit anim. Cillum occaecat enim laboris incididunt consectetur enim sunt amet nostrud culpa.\r\n',
    subject: 'Cillum dolor dolore dolor ut nulla mollit.',
    name: 'Moody Andrews',
    isRead: false,
    sendAt: '2017-02-22T05:20:06 -02:00'
  },
  {
    _id: '5d0b53e2ed8bacf14df56131',
    body:
      'Dolor in veniam ullamco minim veniam non id laboris in cupidatat consequat est sunt proident. Aliqua id id reprehenderit officia nostrud fugiat do dolore esse veniam ullamco aliquip irure. Lorem magna laborum voluptate pariatur elit aliqua enim consectetur commodo et deserunt. Adipisicing eiusmod aliquip ipsum nisi commodo occaecat commodo qui ea quis. Pariatur magna velit dolore mollit velit elit fugiat dolor. Eiusmod aliquip ex aliqua excepteur commodo fugiat ad est deserunt aliquip consectetur sunt commodo culpa. Fugiat culpa consequat velit adipisicing dolor Lorem velit deserunt ullamco anim.\r\n',
    subject: 'Aute irure eu irure consectetur eu.',
    name: 'Sharlene Baldwin',
    isRead: false,
    sendAt: '2015-12-21T09:42:06 -02:00'
  },
  {
    _id: '5d0b53e2ea0851833aa8aa66',
    body:
      'Nostrud tempor sint sit sint. Proident aliquip enim dolor laboris. Consequat eu nisi culpa proident ad id proident amet dolor duis incididunt. Reprehenderit laboris in voluptate qui commodo officia laborum deserunt eu commodo aute adipisicing cillum ut. Ea reprehenderit dolor ullamco aliquip non enim laboris fugiat minim officia eiusmod ullamco id nulla. Velit ex ea consectetur proident ut ex proident elit cillum quis occaecat tempor cillum.\r\n',
    subject:
      'Cillum eu aliquip ut quis esse labore eu consequat esse magna irure tempor.',
    name: 'Martina Rocha',
    isRead: true,
    sendAt: '2017-09-06T04:35:20 -03:00'
  },
  {
    _id: '5d0b53e27fe8f593101bce16',
    body:
      'Deserunt ea cupidatat laborum velit exercitation duis qui eiusmod culpa do. Consequat non aute nulla labore veniam deserunt officia magna aute mollit exercitation consequat. Amet labore fugiat consectetur labore proident. Ipsum pariatur nulla laboris laboris laborum culpa cillum ipsum voluptate magna consequat minim mollit. Sit quis dolore sunt officia id labore adipisicing ipsum adipisicing duis commodo proident id. Duis amet ipsum ipsum in reprehenderit ut.\r\n',
    subject:
      'Consectetur nulla sint dolore adipisicing proident aute elit nulla pariatur laborum nulla.',
    name: 'Marquita Davidson',
    isRead: true,
    sendAt: '2016-05-03T04:32:03 -03:00'
  },
  {
    _id: '5d0b53e2062112467b489e80',
    body:
      'Pariatur dolor irure anim magna in amet ullamco. Fugiat qui laboris excepteur enim minim irure commodo anim aliquip. Sunt sunt qui consectetur irure cillum consequat adipisicing minim ut aute in reprehenderit magna eu.\r\n',
    subject:
      'Non eiusmod velit amet duis in in occaecat nisi incididunt duis nisi aute sint.',
    name: 'William Frazier',
    isRead: false,
    sendAt: '2018-06-14T11:56:11 -03:00'
  },
  {
    _id: '5d0b53e2b8d396d96c026c01',
    body:
      'Et consequat commodo irure ad officia proident sunt tempor in reprehenderit enim incididunt. Fugiat sit aute ipsum deserunt nostrud sint. Voluptate sit labore dolor aliqua non ad excepteur incididunt quis dolor ullamco. Ullamco in ea dolore nisi enim Lorem fugiat non duis voluptate occaecat ad culpa.\r\n',
    subject: 'Pariatur aute est qui ullamco officia proident irure aliquip.',
    name: 'Fox Luna',
    isRead: true,
    sendAt: '2017-04-11T07:53:18 -03:00'
  },
  {
    _id: '5d0b53e260fd111b2c4b7da5',
    body:
      'Nisi dolore qui pariatur minim esse. Enim ea commodo ad ea ea labore minim dolore amet cillum. Sit dolor ut id laboris nostrud. Exercitation non fugiat consequat proident amet nisi exercitation sint pariatur ex exercitation consequat proident. Deserunt commodo do id exercitation velit labore. Adipisicing non dolore incididunt sit cupidatat magna exercitation velit nostrud.\r\n',
    subject: 'Sunt mollit commodo enim consectetur dolore.',
    name: 'Brock Sweet',
    isRead: false,
    sendAt: '2016-12-15T11:00:35 -02:00'
  },
  {
    _id: '5d0b53e2b5678cc0eecfcb3e',
    body:
      'Adipisicing reprehenderit minim velit aliquip minim mollit duis Lorem veniam. Duis ut tempor non cillum excepteur duis dolor aute et sunt ipsum proident eiusmod. Lorem culpa nostrud commodo consectetur in ad. Officia proident velit tempor cupidatat sint quis occaecat labore anim. Amet proident cupidatat eu ipsum dolore commodo velit proident amet Lorem.\r\n',
    subject: 'Est quis occaecat amet eiusmod.',
    name: 'Guerra Mccarty',
    isRead: false,
    sendAt: '2017-10-12T12:52:59 -03:00'
  },
  {
    _id: '5d0b53e230d95e0a214048af',
    body:
      'Duis nisi culpa occaecat voluptate nulla ut proident ullamco et labore velit est dolor. Amet do esse mollit occaecat ex consequat aute cupidatat et proident magna. Laborum tempor aliqua quis commodo proident tempor deserunt non.\r\n',
    subject:
      'Deserunt qui nulla aute officia sunt est veniam ad nulla deserunt consequat quis.',
    name: 'Rutledge Harding',
    isRead: false,
    sendAt: '2015-08-10T06:11:52 -03:00'
  },
  {
    _id: '5d0b53e2a3983ce9b0c2c735',
    body:
      'Do magna exercitation sit nisi reprehenderit aute nostrud id exercitation ut commodo tempor ex excepteur. Laboris Lorem eu nostrud cupidatat eiusmod excepteur cillum elit labore. Nostrud nisi sit incididunt duis do sit voluptate eu do aute velit pariatur. Ipsum nulla id ullamco nostrud ad incididunt labore amet duis. Eiusmod sit exercitation consequat ea duis deserunt aute reprehenderit. Aliqua tempor irure ea veniam ipsum aliqua aliqua excepteur elit irure Lorem et.\r\n',
    subject: 'Eiusmod laboris voluptate elit eu laborum amet.',
    name: 'Jeannine Giles',
    isRead: true,
    sendAt: '2014-04-09T02:43:37 -03:00'
  },
  {
    _id: '5d0b53e248acd4a11a2f755b',
    body:
      'Commodo irure ex irure veniam aliqua. Velit sit reprehenderit elit nisi sunt non consectetur eu. Do quis et velit esse amet cillum non officia fugiat labore dolore quis labore. Nostrud ad labore mollit commodo dolor fugiat aliqua eiusmod.\r\n',
    subject: 'Est ea deserunt culpa sit dolore minim pariatur minim.',
    name: 'Bonner Cox',
    isRead: true,
    sendAt: '2016-10-12T09:21:40 -03:00'
  },
  {
    _id: '5d0b53e2fdcc867882b24157',
    body:
      'Lorem est ut eu reprehenderit deserunt tempor adipisicing nulla minim quis aute laboris nulla. Cupidatat ut aute enim nulla et tempor excepteur id voluptate. Eiusmod dolor Lorem dolor qui ea aliquip laboris. Id labore duis commodo mollit. Do mollit ipsum est cillum. Officia aliquip laboris esse nulla in mollit adipisicing proident cupidatat in excepteur. Pariatur nostrud eiusmod voluptate do amet ex id ut sint.\r\n',
    subject:
      'Ullamco anim eu ullamco ut voluptate sit aliqua quis dolor aute consectetur.',
    name: 'Lorrie Rivers',
    isRead: true,
    sendAt: '2016-05-09T04:56:34 -03:00'
  },
  {
    _id: '5d0b53e210f084b9db6c9bdf',
    body:
      'Commodo occaecat dolor cillum id tempor qui enim nostrud ad nostrud aute. Id in laborum elit commodo aute pariatur fugiat officia dolor nisi in in. Exercitation do est ea pariatur exercitation reprehenderit sunt cupidatat eu. Veniam laboris officia commodo ut amet consequat ad esse sit sunt culpa. In culpa consectetur fugiat sit aliqua duis est deserunt consequat. Occaecat laborum sint aute occaecat.\r\n',
    subject: 'Eu voluptate est eu sit.',
    name: 'Reyes Snow',
    isRead: true,
    sendAt: '2017-07-27T03:16:54 -03:00'
  },
  {
    _id: '5d0b53e2b2f3495eaa5c0335',
    body:
      'Sint occaecat Lorem deserunt occaecat qui pariatur adipisicing cillum sint mollit. Exercitation cupidatat incididunt tempor aliquip. Culpa proident et dolor veniam sunt ullamco fugiat officia irure non ullamco eu minim elit. Velit ullamco mollit reprehenderit nostrud commodo. Excepteur qui pariatur cillum fugiat pariatur incididunt ea aliqua pariatur amet laboris et. Do pariatur id labore irure non consequat anim Lorem. Ex deserunt Lorem consectetur laboris id aliquip.\r\n',
    subject: 'Excepteur ipsum laborum minim exercitation voluptate.',
    name: 'Foreman Pratt',
    isRead: true,
    sendAt: '2015-04-29T01:58:25 -03:00'
  },
  {
    _id: '5d0b53e2fa0cfd21ab8a5055',
    body:
      'Cillum aute et labore magna cillum proident in anim aliquip sit qui. Laboris eu officia ex magna. Sunt ad veniam et eu proident. Excepteur dolore do do occaecat ad.\r\n',
    subject:
      'Nulla in excepteur cillum excepteur id Lorem dolor tempor commodo.',
    name: 'Buchanan Bender',
    isRead: false,
    sendAt: '2016-10-20T04:38:53 -03:00'
  },
  {
    _id: '5d0b53e2f6361fb27cc959ff',
    body:
      'Mollit in dolore ad ullamco et qui mollit mollit fugiat cupidatat aute dolor incididunt. Fugiat ipsum fugiat quis do aute reprehenderit consequat cillum. Non eu tempor irure in consectetur reprehenderit. Aute reprehenderit proident aute fugiat occaecat dolore occaecat duis qui cillum laboris cillum incididunt. Est in magna cillum Lorem laborum veniam irure fugiat velit sunt est. Aliqua minim velit laborum eiusmod laborum fugiat ex consequat sint ex est sunt reprehenderit nostrud.\r\n',
    subject:
      'Cupidatat duis eiusmod minim tempor labore eu amet reprehenderit in esse consequat.',
    name: 'Bright Foley',
    isRead: true,
    sendAt: '2017-12-02T05:27:40 -02:00'
  },
  {
    _id: '5d0b53e28eb29c8d59c8b54c',
    body:
      'Nulla ea minim dolor ea pariatur aliqua eiusmod Lorem non incididunt aute irure. Tempor aliquip aliquip commodo nisi nisi pariatur id ea ad quis occaecat. Ex pariatur culpa voluptate dolor adipisicing non. Id amet sunt occaecat duis velit veniam do.\r\n',
    subject:
      'Dolore sit dolor culpa laboris laboris eu tempor dolor amet minim veniam adipisicing.',
    name: 'Yesenia Cameron',
    isRead: true,
    sendAt: '2018-01-17T02:35:12 -02:00'
  },
  {
    _id: '5d0b53e2bb06eef42be2ca61',
    body:
      'Et occaecat consequat cupidatat fugiat mollit fugiat irure irure anim. Elit Lorem pariatur proident consectetur nostrud ad. Enim ipsum sunt duis et occaecat officia amet nulla nulla nisi non.\r\n',
    subject: 'Cupidatat minim excepteur non eiusmod laborum ut Lorem ullamco.',
    name: 'Reynolds Hardin',
    isRead: true,
    sendAt: '2017-07-12T11:05:27 -03:00'
  },
  {
    _id: '5d0b53e2ba86d730fc228c63',
    body:
      'Consequat exercitation nisi nostrud tempor aute sunt. Sit aliqua occaecat incididunt magna nisi et aliquip commodo occaecat ullamco nostrud laborum esse. Ut consequat laborum fugiat dolore adipisicing anim. Culpa dolore veniam commodo dolor pariatur. Nostrud laborum ad aliquip duis velit eiusmod deserunt deserunt quis consequat voluptate irure eu mollit.\r\n',
    subject: 'Commodo aliquip eiusmod est aliquip irure ea elit do mollit.',
    name: 'Haynes Brewer',
    isRead: true,
    sendAt: '2018-04-02T12:49:11 -03:00'
  },
  {
    _id: '5d0b53e28733c8d4a5c3356d',
    body:
      'Laborum ipsum exercitation consectetur anim in exercitation Lorem. Enim ad sunt do elit proident laboris dolor nostrud exercitation. Pariatur dolor id cillum excepteur consectetur.\r\n',
    subject: 'Mollit ut velit reprehenderit elit.',
    name: 'Sparks Thompson',
    isRead: false,
    sendAt: '2019-01-18T04:57:18 -02:00'
  },
  {
    _id: '5d0b53e216061ad8b4ffa35d',
    body:
      'Cillum sint occaecat veniam deserunt. Exercitation culpa fugiat dolor ea exercitation do culpa Lorem aliquip adipisicing sint. Deserunt amet in aliqua incididunt excepteur ut culpa do exercitation sunt. Exercitation quis sunt qui tempor ea ipsum ullamco.\r\n',
    subject:
      'Esse do quis ad cupidatat et Lorem ad deserunt anim dolore cillum adipisicing.',
    name: 'Judy Burris',
    isRead: false,
    sendAt: '2017-09-22T01:12:23 -03:00'
  },
  {
    _id: '5d0b53e22a97b3c409454b77',
    body:
      'Est eiusmod consequat commodo culpa veniam sint commodo nisi veniam et veniam et. Ut velit cillum ipsum sint in. Nostrud cillum commodo amet non. Cupidatat do aute sit culpa nisi qui aliquip laboris est et enim cillum eiusmod. Cupidatat ut veniam nisi commodo cillum aute. Pariatur ipsum irure duis nostrud eiusmod do quis irure.\r\n',
    subject:
      'Aliquip esse anim ad id est irure elit consectetur duis nisi nostrud cupidatat.',
    name: 'Benjamin Lambert',
    isRead: false,
    sendAt: '2019-04-15T07:52:11 -03:00'
  },
  {
    _id: '5d0b53e2cfb948f65381a7a2',
    body:
      'In in labore cupidatat ea voluptate quis. Irure incididunt ea nisi adipisicing adipisicing magna Lorem anim tempor labore duis laborum. Deserunt Lorem ullamco consectetur Lorem elit non. In anim occaecat officia consectetur. Voluptate laborum anim consectetur ut qui commodo ut. Deserunt voluptate aute nisi pariatur excepteur ea sunt.\r\n',
    subject: 'Pariatur nulla ipsum sunt ullamco culpa sunt veniam magna ex.',
    name: 'Sweeney Houston',
    isRead: true,
    sendAt: '2017-06-15T09:19:50 -03:00'
  },
  {
    _id: '5d0b53e2c317e958cbafa941',
    body:
      'Dolore Lorem qui adipisicing amet proident. Nostrud ipsum reprehenderit ex quis occaecat. Dolor mollit aliqua exercitation adipisicing do nulla dolor amet.\r\n',
    subject:
      'Ex elit nisi laboris proident ipsum culpa proident pariatur exercitation cupidatat.',
    name: 'Autumn Chambers',
    isRead: true,
    sendAt: '2015-11-10T04:22:35 -02:00'
  },
  {
    _id: '5d0b53e2483725d6975b54a4',
    body:
      'In eu proident irure deserunt fugiat deserunt et enim. Consequat adipisicing aliquip duis mollit. Adipisicing ea ut laborum anim. Elit ad voluptate officia tempor in occaecat et sunt ex tempor. Ex adipisicing excepteur cupidatat consectetur occaecat cillum et quis ipsum consequat amet eiusmod aute culpa.\r\n',
    subject:
      'Sit deserunt laboris non consequat anim proident excepteur enim eiusmod amet laboris ullamco ex.',
    name: 'Marcia Osborn',
    isRead: true,
    sendAt: '2014-04-08T10:54:12 -03:00'
  },
  {
    _id: '5d0b53e23c34e272a128864c',
    body:
      'Ad cupidatat mollit ullamco aliquip. Reprehenderit sint velit anim do. Ea dolore et excepteur reprehenderit ipsum nulla minim aute enim irure duis veniam excepteur.\r\n',
    subject: 'Minim esse fugiat fugiat nostrud non sit.',
    name: 'Katrina Evans',
    isRead: false,
    sendAt: '2016-10-01T11:21:30 -03:00'
  },
  {
    _id: '5d0b53e2fbb64f81090a899c',
    body:
      'Ea irure elit qui eu. Minim amet est cupidatat culpa eiusmod velit aute. Exercitation aute aute id veniam tempor irure commodo in excepteur enim.\r\n',
    subject:
      'Aliquip amet veniam cupidatat nostrud occaecat labore reprehenderit velit dolore consequat adipisicing cillum ex in.',
    name: 'Mcbride Dennis',
    isRead: false,
    sendAt: '2014-04-08T02:22:12 -03:00'
  },
  {
    _id: '5d0b53e2b4482371a66ffe63',
    body:
      'Voluptate in voluptate sint aute Lorem id cillum pariatur et dolor fugiat. Est cupidatat dolore ut ut ullamco officia dolore anim consectetur. Aute reprehenderit fugiat aliqua velit enim exercitation irure fugiat deserunt non est consectetur ea minim. Qui enim aute aliqua sunt exercitation.\r\n',
    subject: 'Pariatur consectetur mollit sint ea.',
    name: 'Porter Santos',
    isRead: true,
    sendAt: '2015-03-22T09:59:12 -02:00'
  },
  {
    _id: '5d0b53e2fa5c056706c76857',
    body:
      'Aliqua exercitation velit excepteur qui reprehenderit. Mollit laborum eiusmod anim reprehenderit pariatur magna. Amet et cillum qui ipsum et incididunt laboris. Ullamco enim quis amet adipisicing tempor cupidatat enim veniam laboris reprehenderit nisi cupidatat consequat adipisicing. Pariatur dolor culpa veniam qui in officia velit culpa adipisicing minim.\r\n',
    subject: 'Qui magna esse sint nostrud quis laboris laborum ullamco.',
    name: 'Owens Mcintyre',
    isRead: false,
    sendAt: '2018-09-09T12:27:22 -03:00'
  },
  {
    _id: '5d0b53e2c6fa5a56f72bea49',
    body:
      'Dolore laborum occaecat cupidatat sunt enim occaecat velit dolore. Magna ut dolore irure aliqua enim proident. Consectetur labore occaecat magna aute et ipsum. Laborum est et esse ipsum aliquip esse et laborum nostrud sint incididunt tempor non est.\r\n',
    subject: 'Dolore non dolor elit adipisicing.',
    name: 'Lesa Briggs',
    isRead: true,
    sendAt: '2014-03-12T12:24:50 -02:00'
  },
  {
    _id: '5d0b53e2bf8d82a8cabaac94',
    body:
      'Ad est elit sunt ex quis irure elit aliquip ex fugiat deserunt Lorem minim. Minim do nostrud cillum occaecat sint in dolor do aliquip voluptate dolore ipsum amet nulla. Nostrud amet labore sunt sint fugiat culpa occaecat officia ullamco adipisicing. Pariatur velit eu exercitation aliquip commodo. Tempor voluptate ullamco magna magna proident id officia consequat cupidatat quis aliquip duis laborum. Nostrud sint do veniam et qui consequat sint aliquip ullamco exercitation.\r\n',
    subject: 'Dolore mollit reprehenderit mollit sunt nostrud.',
    name: 'Sandra Frost',
    isRead: false,
    sendAt: '2017-06-04T02:43:00 -03:00'
  },
  {
    _id: '5d0b53e291f61d13cfcd60d0',
    body:
      'Nisi non nulla irure nisi amet. Id laborum nostrud non dolore aliqua esse cupidatat nulla non do. Irure et do cillum minim tempor. Commodo sit sint ipsum consectetur sunt non commodo consequat ut voluptate tempor ad exercitation. Sint excepteur non do ipsum. Ut consequat culpa exercitation labore ut ullamco excepteur aliquip aute laboris exercitation. Culpa sint officia sunt ullamco tempor nisi esse do ea.\r\n',
    subject:
      'Occaecat consequat eu nisi proident proident ex incididunt adipisicing pariatur irure eu.',
    name: 'Austin Hooper',
    isRead: true,
    sendAt: '2015-04-28T02:13:45 -03:00'
  },
  {
    _id: '5d0b53e29b8e5071eabf4a1c',
    body:
      'Officia eiusmod et ut ex qui do. Sint veniam nulla nulla adipisicing consequat proident nisi. Magna ullamco duis minim labore nulla in do commodo adipisicing occaecat qui proident mollit. Enim irure ea veniam sunt aute sit culpa.\r\n',
    subject: 'Exercitation deserunt esse commodo eiusmod pariatur.',
    name: 'Massey Edwards',
    isRead: false,
    sendAt: '2019-01-31T02:50:31 -02:00'
  },
  {
    _id: '5d0b53e2c4806459f337f575',
    body:
      'Quis excepteur aliqua enim eiusmod dolore nulla ut dolore fugiat sint sit nulla. Velit consequat non proident pariatur aute tempor do enim reprehenderit amet do. Qui sunt ipsum nisi do. Aute ut deserunt aute Lorem nostrud amet eiusmod culpa esse irure esse enim. Et duis do veniam aute in Lorem sit commodo deserunt occaecat non nostrud. Cillum eu sit id duis ipsum enim. Anim sint aliqua ullamco non.\r\n',
    subject:
      'Laboris irure consequat enim excepteur cupidatat ullamco occaecat exercitation qui voluptate dolor commodo ea deserunt.',
    name: 'Gay Bates',
    isRead: false,
    sendAt: '2016-05-04T08:43:19 -03:00'
  },
  {
    _id: '5d0b53e264b9e7a8a87dfec8',
    body:
      'Fugiat eiusmod cillum ad sit aute pariatur ipsum. Non reprehenderit eiusmod ut deserunt est ad pariatur. Consequat sint fugiat deserunt anim aute non enim laboris sunt voluptate fugiat. Non sunt minim mollit sunt mollit veniam reprehenderit duis dolor eiusmod officia ipsum. Pariatur consequat eu irure id exercitation et culpa minim enim est. Consectetur in officia eiusmod est magna sunt reprehenderit reprehenderit eiusmod sunt nostrud amet culpa. Proident proident non cillum velit ut est culpa in eiusmod tempor.\r\n',
    subject: 'Sunt in laboris aliquip laboris ullamco esse eiusmod.',
    name: 'Adele Bolton',
    isRead: true,
    sendAt: '2016-12-31T10:15:42 -02:00'
  },
  {
    _id: '5d0b53e2da0566db8be365e6',
    body:
      'Dolore enim pariatur nisi amet occaecat adipisicing occaecat sint aute voluptate ad. Ut nostrud Lorem magna eu sit eiusmod nisi cillum anim consectetur culpa. Lorem ea exercitation do ad do voluptate laboris nisi. Proident Lorem reprehenderit ipsum velit nostrud anim deserunt officia. Ipsum nisi consequat sunt sint incididunt aliqua consequat culpa cupidatat aliquip esse ut esse anim. Elit dolore fugiat reprehenderit cillum aliquip non officia. Ipsum minim anim mollit pariatur esse Lorem dolor qui commodo.\r\n',
    subject:
      'Officia incididunt proident sit deserunt sint voluptate velit ea eu ipsum et.',
    name: 'Emma Lindsey',
    isRead: true,
    sendAt: '2018-11-21T03:35:00 -02:00'
  },
  {
    _id: '5d0b53e24ebdeafc1b7f26fb',
    body:
      'Occaecat est Lorem tempor adipisicing reprehenderit incididunt enim elit. Ex adipisicing in magna et fugiat occaecat ad ut aute esse laboris magna ad. Culpa eu incididunt deserunt culpa mollit nisi. Velit fugiat voluptate adipisicing ipsum labore fugiat velit minim ea sint qui labore. Exercitation aute deserunt culpa veniam officia minim Lorem elit et velit. Duis eiusmod voluptate anim enim dolor aliqua amet. Adipisicing incididunt nulla esse ad enim.\r\n',
    subject:
      'Nisi proident cupidatat fugiat ullamco consectetur eu irure sit incididunt sunt duis amet officia anim.',
    name: 'Lamb Sampson',
    isRead: false,
    sendAt: '2016-09-07T08:56:41 -03:00'
  },
  {
    _id: '5d0b53e25aa928f928157438',
    body:
      'Cillum anim sit cupidatat minim ullamco reprehenderit nostrud. Sit irure laboris veniam do qui id. Anim ullamco officia nulla dolore. Irure laboris duis non mollit enim Lorem exercitation ut elit.\r\n',
    subject:
      'Voluptate culpa culpa ea aliquip fugiat deserunt cillum reprehenderit.',
    name: 'Mcfadden Terrell',
    isRead: true,
    sendAt: '2017-10-21T02:09:28 -03:00'
  },
  {
    _id: '5d0b53e2f1a95c1fdecabcdc',
    body:
      'Et cupidatat et qui occaecat id sit enim Lorem occaecat irure veniam ea laboris. Aute amet culpa consequat cupidatat duis proident aliqua. Do ipsum in consequat non esse culpa sit sunt.\r\n',
    subject: 'Officia aute cillum aliquip duis aute velit consequat nisi in.',
    name: 'Rosemarie Hewitt',
    isRead: true,
    sendAt: '2017-03-23T08:59:57 -02:00'
  }
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  return email;
}
