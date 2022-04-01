export default class ToDoList {
  constructor(input, btnAdd, btnDelete, btnSave) {
    this.input = document.querySelector(input)
    this.btnAdd = document.querySelector(btnAdd)
    this.btnDelete = document.querySelector(btnDelete)
    this.btnSave = document.querySelector(btnSave)
    this.contador = 0

    // Bind dos métodos que são chamados em eventos
    this.addLiInUL = this.addLiInUL.bind(this)
    this.removeAllLiInUl = this.removeAllLiInUl.bind(this)
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
    this.addSpanInLi()
    this.addImgInLi()
    return this.arrayLi
  }

  // Método para criar um array de elementos IMG HTML
  createArrayImg() {
    this.arrayImg = []

    for (let index = 0; this.arrayImg.length < 10; index++) {
      this.arrayImg.push(this.createElement('img'))
      this.arrayImg[index].setAttribute('src', './img/delete.svg')
      this.arrayImg[index].setAttribute('data-js', 'delete')
    }
    return this.arrayImg
  }

  // Método para criar um array de elementos SPAN HTML
  createArraySpan() {
    this.arraySpan = []

    for (let index = 0; this.arraySpan.length < 10; index++) {
      this.arraySpan.push(this.createElement('span'))
      this.arraySpan[index].classList.add('list-span')
    }
    return this.arraySpan
  }

  // Método para adicionar valores digitados aos spans criados
  addValueInputInSpan() {
    this.arraySpan[this.contador].innerText = this.input.value
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

  // Evento de adicionar LI
  addLiInUL(event) {
    event.preventDefault()
    const ul = document.querySelector('[data-js="ul"]')
    const main = document.querySelector('[data-js="main"]')

    if (this.input.value === '') {
      alert('Você precisa preencher o campo de tarefa')
      return
    }

    if (this.contador <= 9) {
      ul.appendChild(this.arrayLi[this.contador])
      main.classList.add('list-content')
      this.addValueInputInSpan()
      this.contador++
      this.input.value = ''
    }
  }

  // Método para remover todas LI
  removeAllLiInUl() {
    const li = document.querySelectorAll('li')
    const ul = document.querySelector('[data-js="ul"]')
    const main = document.querySelector('[data-js="main"]')
    li.forEach((item) => {
      ul.removeChild(item)
      this.contador = 0

      if (this.contador < 1) {
        main.classList.remove('list-content')
      }
    })
  }

  // Método para chamar o evento de adicionar LI
  clickInAdd() {
    this.btnAdd.addEventListener('click', this.addLiInUL)
  }

  // Método para chamar o eveto de remover todas LI
  clickInRemoveAllLi() {
    this.btnDelete.addEventListener('click', this.removeAllLiInUl)
  }

  // Método para chamar evento de remover uma Li
  clickInRemoveLi() {
    const ul = document.querySelector('[data-js="ul"]')
    const main = document.querySelector('[data-js="main"]')

    this.arrayImg.forEach((item) => {
      item.addEventListener('click', ({ target }) => {
        ul.removeChild(target.parentNode)
        this.contador--

        if (this.contador < 1) {
          main.classList.remove('list-content')
        }
      })
    })
  }

  // Método para iniciar o App
  init() {
    this.createArrayImg()
    this.createArraySpan()
    this.createArrayLi()
    this.clickInAdd()
    this.clickInRemoveAllLi()
    this.clickInRemoveLi()
  }
}
