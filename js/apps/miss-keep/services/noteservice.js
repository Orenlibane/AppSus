import storageService from '../../../main-service/storage.js';

const NOTES_KEY = 'notesDB';

export default {
  query
};

function query() {
  var notes = storageService.load(NOTES_KEY);
  if (!notes) {
    notes = notesDB;
    storageService.store(NOTES_KEY, notes);
  }
  notesDB = notes;
  return notesDB;
}

var notesDB = [
  {
    _id: '5d0bb6a54cab31bbd2da13fa',
    picture: '',
    color: 'gray',
    content: 'Dolor excepteur aute nostrud aute ut amet.',
    type: 'noteTxt'
  },
  {
    _id: '5d0bb6a527776acfdf3d66ef',
    picture: 'http://placehold.it/32x32',
    color: 'gray',
    content: 'Ipsum excepteur veniam ea nostrud adipisicing.',
    type: 'noteTxt'
  },
  {
    _id: '5d0bb6a55304d6ea02dce1ce',
    picture: 'http://placehold.it/32x32',
    color: 'gray',
    content: 'Et adipisicing ut occaecat aliqua dolore pariatur irure magna.',
    type: 'noteTxt'
  },
  {
    _id: '5d0bb6a5e6eb588ac8ade55d',
    picture: 'http://placehold.it/32x32',
    color: 'gray',
    content:
      'Aliqua officia sunt id reprehenderit aliqua est incididunt nostrud.',
    type: 'noteTxt'
  },
  {
    _id: '5d0bb6a570c979da8649f2b2',
    picture: 'http://placehold.it/32x32',
    color: 'gray',
    content:
      'Magna ad nisi aliquip nulla nisi proident cupidatat excepteur excepteur labore ut quis.',
    type: 'noteTxt'
  },
  {
    _id: '5d0bb6a5a6f2bf2ef8dc6d9d',
    picture: 'http://placehold.it/32x32',
    color: 'gray',
    content: 'Excepteur velit mollit officia reprehenderit.',
    type: 'noteTxt'
  },
  {
    _id: '5d0bb6a5a910732224c94fd6',
    picture: 'http://placehold.it/32x32',
    color: 'gray',
    content:
      'Enim sit cupidatat deserunt adipisicing dolor consectetur proident aute esse dolor nulla.',
    type: 'noteTxt'
  }
];
