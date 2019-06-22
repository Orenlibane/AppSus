import utilService from '../../../main-service/util-service.js';


export default {
    getEmptyTodo,
    query,
    add,
    toggle
}

var gTodos = [];
_createTodos();

function query() {
    return gTodos;
}
function add(todo) {
    todo.id = utilService.makeId();
    gTodos.unshift(todo)
}
function toggle(todo) {
    todo.isDone = !todo.isDone;
}


function _createTodos() {
    add(getEmptyTodo('Finish Sprint 3 And Stay A Live'))
    add(getEmptyTodo('Go To The Beach'))

}

function getEmptyTodo(txt = '') {
    return { txt, isDone: false, priority: 0 }
}
