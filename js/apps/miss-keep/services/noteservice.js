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
  // var newNoteToCopy = noteToCopy;
  // notesDB.push(newNoteToCopy);
  // storageService.store(NOTES_KEY, notesDB);
  var newNoteToCopy = {
    audio: noteToCopy.audio,
    color: noteToCopy.color,
    content: noteToCopy.content,
    isDone: noteToCopy.isDone,
    isPin: noteToCopy.isPin,
    picture: noteToCopy.picture,
    type: noteToCopy.type,
    video: noteToCopy.video,
    todos: noteToCopy.todos,
    _id: noteToCopy._id + '1'
  };
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
    isPin: false,
    todos: {
      todo1: '',
      todo2: '',
      todo3: ''
    }
  },
  {
    _id: '5d0bb6a527776acfdf3d66ef',
    picture: '',
    color: 'teal',
    content: '',
    type: 'noteVideo',
    video: 'http://www.youtube.com/embed/KlFDwM9GnJI', //Should be http? https?
    audio: '',
    isDone: false,
    isPin: false,
    todos: {
      todo1: '',
      todo2: '',
      todo3: ''
    }
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
    isPin: false,
    todos: {
      todo1: '',
      todo2: '',
      todo3: ''
    }
  },
  {
    _id: '5d0bb6a5e6eb588ac8ade55d',
    picture: '',
    color: 'blue',
    content: '',
    type: 'noteTodo',
    video: '',
    audio: '',
    isDone: false,
    isPin: false,
    todos: {
      todo1: 'Finish Sprint',
      todo2: 'drink beer',
      todo3: 'start next project'
    }
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
    isPin: false,
    todos: {
      todo1: '',
      todo2: '',
      todo3: ''
    }
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
    isPin: false,
    todos: {
      todo1: '',
      todo2: '',
      todo3: ''
    }
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
    isPin: false,
    todos: {
      todo1: '',
      todo2: '',
      todo3: ''
    }
  }
];
