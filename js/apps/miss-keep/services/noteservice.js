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
  [
    {
      _id: '5d0ba1cd294a125b1db53a05',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    },
    {
      _id: '5d0ba1cd6ee22df5fa971acd',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    },
    {
      _id: '5d0ba1cdf4c21b8ff339c3dc',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    },
    {
      _id: '5d0ba1cd43bde719b80d1727',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    },
    {
      _id: '5d0ba1cde9f64eb30819a774',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    },
    {
      _id: '5d0ba1cd67e4d3f2c29cd1d6',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    },
    {
      _id: '5d0ba1cd7292690ae3ba1a4a',
      picture: 'http://placehold.it/32x32',
      color: 'gray',
      content: 'qfqfw',
      type: ''
    }
  ]
];
