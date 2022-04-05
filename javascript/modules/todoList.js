export default class ToDoList {
  constructor(input, btnAdd, btnDelete, btnSave, ul, main) {
    this.input = document.querySelector(input)
    this.btnAdd = document.querySelector(btnAdd)
    this.btnDelete = document.querySelector(btnDelete)
    this.btnSave = document.querySelector(btnSave)
    this.ul = document.querySelector(ul)
    this.main = document.querySelector(main)
    this.contador = 0

    // Bind dos métodos que são chamados em eventos
    this.addLiInUL = this.addLiInUL.bind(this)
    this.removeAllLiInUl = this.removeAllLiInUl.bind(this)
    this.saveUlContent = this.saveUlContent.bind(this)
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
      this.arrayLi[index].setAttribute('draggable', 'true')
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

  // Método de adicionar LI ao UL
  addLiInUL(event) {
    event.preventDefault()

    if (this.input.value === '') {
      alert('Você precisa preencher o campo de tarefa')
      return
    }

    if (this.contador <= 9) {
      this.ul.appendChild(this.arrayLi[this.contador])
      this.main.classList.add('list-content')
      this.addValueInputInSpan()
      this.contador++
      this.input.value = ''
    }
  }

  // Método para remover todas LI
  removeAllLiInUl() {
    const li = document.querySelectorAll('li')

    li.forEach((item) => {
      this.ul.removeChild(item)
      this.contador = 0

      if (this.contador < 1) {
        this.main.classList.remove('list-content')
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
    this.arrayImg.forEach((item) => {
      item.addEventListener('click', ({ target }) => {
        this.ul.removeChild(target.parentNode)
        this.contador--

        if (this.contador < 1) {
          this.main.classList.remove('list-content')
        }
      })
    })
  }

  // Método para chamar evento de salvar o conteudo do Ul dentro do localStorage
  clickInSave() {
    this.btnSave.addEventListener('click', this.saveUlContent)
  }

  // Método para salvar a ul no localStorage
  saveUlContent() {
    const ulContent = this.ul.innerHTML

    localStorage['ul'] = ulContent
  }

  // Método para pegar o body da ul no localStorage e adicionar a propria ul
  getLocalStorage() {
    const ulParse = new DOMParser()
    const ulChilds = ulParse.parseFromString(localStorage['ul'], 'text/html')
    const li = ulChilds.querySelectorAll('li')

    if (li.length > 0) {
      this.contador = li.length
      this.main.classList.add('list-content')
    }

    li.forEach((item) => {
      this.ul.appendChild(item)
    })

    const delet = document.querySelectorAll('[data-js="delete"]')
    delet.forEach((item) => {
      item.addEventListener('click', () => {
        this.ul.removeChild(item.parentElement)
        this.contador--
        if (this.contador < 1) {
          this.main.classList.remove('list-content')
        }
      })
    })
  }

  // Método para pegar LI completa
  getLiComplete() {
    this.createArrayImg()
    this.createArraySpan()
    this.createArrayLi()
  }

  // Método para iniciar o App
  init() {
    this.getLiComplete()
    this.clickInAdd()
    this.clickInRemoveAllLi()
    this.clickInRemoveLi()
    this.clickInSave()
    this.getLocalStorage()

    return this
  }
}
