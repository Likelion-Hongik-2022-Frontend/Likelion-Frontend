import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deletedTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const dispatchAddTodo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deletedTodo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEacth((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', dispatchDeleteToDo);
    btn.innerText = 'DEL';
    li.id = toDo.id;
    li.innerText = toDo.text;
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddTodo(toDo);
};

form.addEventListener('submit', onSubmit);
