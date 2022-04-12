import ToDoList from './modules/todoList.js'
import DragInDrop from './modules/dragInDrop.js'
import fetchBitcoin from './modules/fetchBitcoin.js'
import DateActual from './modules/date.js'

fetchBitcoin('https://blockchain.info/ticker', '[data-js="dollar"]')

const toDoList = new ToDoList(
  '[data-js="input"]',
  '[data-js="add"]',
  '[data-js="remove"]',
  '[data-js="save"]',
  '[data-js="ul"]',
  '[data-js="main"]'
)

const date = new DateActual('[data-js="date"]', '[data-js="hours"]')

const draInDrop = new DragInDrop('[data-js="ul"]', '[data-js="add"]')

toDoList.init()
draInDrop.init()
date.init()
