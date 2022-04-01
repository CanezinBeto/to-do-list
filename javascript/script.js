import ToDoList from './modules/todoList.js'

const toDoList = new ToDoList(
  '[data-js="input"]',
  '[data-js="add"]',
  '[data-js="remover"]',
  '[data-js="salvar"]',
  '[data-js="ul"]',
  '[data-js="main"]'
)

toDoList.init()
