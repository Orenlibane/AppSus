import storageService from '../../../main-service/storage.js';

const NOTES_KEY = 'notesDB';

export default {
  query,
  updateDB,
  deleteNote,
  copyNote,
  saveNotesToDb,
  pinNote
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

function updateDB(newNote) {
  notesDB.push(newNote);
  storageService.store(NOTES_KEY, notesDB);
}

function deleteNote(idx) {
  notesDB.splice(idx, 1);
  storageService.store(NOTES_KEY, notesDB);
}

function copyNote(noteToCopy) {
  var newNoteToCopy = noteToCopy;
  notesDB.push(newNoteToCopy);
  storageService.store(NOTES_KEY, notesDB);
}

function saveNotesToDb() {
  storageService.store(NOTES_KEY, notesDB);
}

function pinNote(noteToPin) {
  if (noteToPin.isPin) {
    noteToPin.isPin = false;
    let pinnedNote = noteToPin;
    notesDB.push(pinnedNote);
  } else {
    noteToPin.isPin = true;
    let pinnedNote = noteToPin;
    notesDB.unshift(pinnedNote);
  }
  storageService.store(NOTES_KEY, notesDB);
}

var notesDB = [
  {
    _id: '5d0bb6a54cab31bbd2da13fa',
    picture:
      'https://media.licdn.com/dms/image/C4E03AQGYu3yXuPPVRA/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=vIUzQvoIcGcINvqf_nlQXu0lZXjcvVgxdx0ZGYVlCJQ',
    color: 'red',
    content: '',
    type: 'noteImg',
    video: '',
    audio: '',
    isDone: true,
    isPin: false
  },
  {
    _id: '5d0bb6a527776acfdf3d66ef',
    picture: '',
    color: 'teal',
    content: '',
    type: 'noteVideo',
    video: 'https://www.youtube.com/embed/KlFDwM9GnJI',
    audio: '',
    isDone: false,
    isPin: false
  },
  {
    _id: '5d0bb6a55304d6ea02dce1ce',
    picture: '',
    color: 'yellow',
    content: 'Well, we need to get set up for sprint 4 i guess.',
    type: 'noteTxt',
    video: '',
    audio: '',
    isDone: true,
    isPin: false
  },
  {
    _id: '5d0bb6a5e6eb588ac8ade55d',
    picture:
      'data:image/jpeg;base64,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',
    color: 'blue',
    content: '',
    type: 'noteImg',
    video: '',
    audio: '',
    isDone: false,
    isPin: false
  },
  {
    _id: '5d0bb6a570c979da8649f2b2',
    picture: 'https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg',
    color: 'yellow',
    content: '',
    type: 'noteImg',
    video: '',
    audio: '',
    isDone: false,
    isPin: false
  },
  {
    _id: '5d0bb6a5a6f2bf2ef8dc6d9d',
    picture: 'https://media.makeameme.org/created/you-dont-want-sisydh.jpg',
    color: 'gray',
    content: '',
    type: 'noteImg',
    video: '',
    audio: '',
    isDone: false,
    isPin: false
  },
  {
    _id: '5d0bb6a5a910732224c94fd6',
    picture: '',
    color: 'blue',
    content: 'Only 2 days LEFT',
    type: 'noteTxt',
    video: '',
    audio: '',
    isDone: false,
    isPin: false
  }
];
