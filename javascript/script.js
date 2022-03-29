export default class ToDoList {
  constructor(input, btnAdd, btnDelete, btnSave) {
    this.input = document.querySelector(input)
    this.btnAdd = document.querySelector(btnAdd)
    this.btnDelete = document.querySelector(btnDelete)
    this.btnSave = document.querySelector(btnSave)
    this.arrayLi = []
    this.contador = 0
  }

  createElement(element) {
    this.element = document.createElement(element)
    return this.element
  }

  createArrayLi() {
    for (let index = 0; this.arrayLi.length < 10; index++) {
      this.arrayLi.push(this.createElement('li'))
    }
  }

  init() {
    console.log(this.btnAdd, this.btnDelete, this.btnSave, this.input)
  }
}
