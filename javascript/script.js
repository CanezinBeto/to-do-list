export default class ToDoList {
  constructor(input, btnAdd, btnDelete, btnSave) {
    this.input = document.querySelector(input)
    this.btnAdd = document.querySelector(btnAdd)
    this.btnDelete = document.querySelector(btnDelete)
    this.btnSave = document.querySelector(btnSave)
    this.contador = 0
  }

  createElement(element) {
    this.element = document.createElement(element)
    return this.element
  }

  createArrayLi() {
    this.arrayLi = []

    for (let index = 0; this.arrayLi.length < 10; index++) {
      this.arrayLi.push(this.createElement('li'))
    }
    return this.arrayLi
  }

  createArrayImg() {
    this.arrayImg = []

    for (let index = 0; this.arrayImg.length < 10; index++) {
      this.arrayImg.push(this.createElement('img'))
    }
    return this.arrayImg
  }

  createArraySpan() {
    this.arraySpan = []

    for (let index = 0; this.arraySpan.length < 10; index++) {
      this.arraySpan.push(this.createElement('span'))
    }
    return this.span
  }

  init() {
    console.log(this.btnAdd, this.btnDelete, this.btnSave, this.input)
  }
}
