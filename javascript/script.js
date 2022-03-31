export default class ToDoList {
  constructor(input, btnAdd, btnDelete, btnSave) {
    this.input = document.querySelector(input)
    this.btnAdd = document.querySelector(btnAdd)
    this.btnDelete = document.querySelector(btnDelete)
    this.btnSave = document.querySelector(btnSave)
    this.contador = 0
  }

  // Método para criar um elemento HTML
  createElement(element) {
    this.element = document.createElement(element)
    return this.element
  }

  // Método para criar um array de elementos LI HTML
  createArrayLi() {
    this.arrayLi = []

    for (let index = 0; this.arrayLi.length < 10; index++) {
      this.arrayLi.push(this.createElement('li'))
    }
    return this.arrayLi
  }

  // Método para criar um array de elementos IMG HTML
  createArrayImg() {
    this.arrayImg = []

    for (let index = 0; this.arrayImg.length < 10; index++) {
      this.arrayImg.push(this.createElement('img'))
    }
    return this.arrayImg
  }

  // Método para criar um array de elementos SPAN HTML
  createArraySpan() {
    this.arraySpan = []

    for (let index = 0; this.arraySpan.length < 10; index++) {
      this.arraySpan.push(this.createElement('span'))
    }
    return this.span
  }

  // Método para incluir os span's ao li
  addSpanInLi() {
    this.arrayLi.forEach((item, index) => {
      item.appendChild(this.arraySpan[index])
    })
  }

  // Método para incluir img ao li
  addImgInLi() {
    this.arrayLi.forEach((item, index) => {
      item.appendChild(this.arrayImg[index])
    })
  }

  // Método para iniciar o App
  init() {
    console.log(this.btnAdd, this.btnDelete, this.btnSave, this.input)
  }
}
