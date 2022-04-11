import ToDoList from './modules/todoList.js'
import DragInDrop from './modules/dragInDrop.js'
import fetchBitcoin from './modules/fetchBitcoin.js'

fetchBitcoin('https://blockchain.info/ticker', '[data-js="dolar"]')

const toDoList = new ToDoList(
  '[data-js="input"]',
  '[data-js="add"]',
  '[data-js="remover"]',
  '[data-js="salvar"]',
  '[data-js="ul"]',
  '[data-js="main"]'
)

const draInDrop = new DragInDrop('[data-js="ul"]', '[data-js="add"]')

toDoList.init()
draInDrop.init()
