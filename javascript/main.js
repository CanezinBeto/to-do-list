import ToDoList from './script.js'
const input = document.querySelector('[data-js="input"]')
const btnAdd = document.querySelector('[data-js="add"]')
const ul = document.querySelector('[data-js="ul"]')
const delet = document.querySelector('[data-js="remover"]')
const salvar = document.querySelector('[data-js="salvar"]')
const main = document.querySelector('[data-js="main"]')
const initialArrayLi = []
const initialArraySpan = []
const initialArrayImg = []
let contador = 0

// Função que Cria os elementos
const createElement = (elemento) => {
  const element = document.createElement(elemento)
  return element
}

// Loop para criar 10 elementos, incluir cada um em sua array, e adicionar alguns atrubutos
for (let index = 0; initialArrayLi.length < 10; index++) {
  initialArrayLi.push(createElement('li'))
  initialArraySpan.push(createElement('span'))
  initialArraySpan[index].classList.add('list-span')
  initialArrayImg.push(createElement('img'))
  initialArrayImg[index].setAttribute('src', './img/delete.svg')
  initialArrayImg[index].setAttribute('data-js', 'delete')
}

// Função que adiciona o span ao li
const addSpanInLi = () => {
  if (contador <= 9)
    initialArrayLi[contador].appendChild(initialArraySpan[contador])
}

// Função que adiciona as imagens ao li
const addImgInLi = () => {
  if (contador <= 9) {
    initialArrayLi[contador].appendChild(initialArrayImg[contador])
    initialArraySpan[contador].innerText = input.value
  }
}

// Função que atualiza a lista quando o botão add for acionado
const handleClick = (event) => {
  event.preventDefault()
  if (input.value === '') {
    alert('Você precisa preenher o campo de tarefa')
    return
  }
  if (contador <= 9) {
    ul.appendChild(initialArrayLi[contador])
    addSpanInLi()
    addImgInLi()
    contador++
    input.value = ''
    main.classList.add('list-content')
  }
}

// Função para salvar os dados
const saveItens = () => {
  const ulContent = ul.innerHTML
  localStorage['ul'] = ulContent
}

// Função que captura os dados do localStorage e transforma em elementos HTML
const saveUl = () => {
  const ulParse = new DOMParser()
  const ulElement = ulParse.parseFromString(localStorage['ul'], 'text/html')
  const liElements = ulElement.querySelectorAll('li')

  if (liElements.length > 0) {
    contador = liElements.length
    main.classList.add('list-content')
  }
  liElements.forEach((item) => {
    ul.appendChild(item)
  })
  const delet = document.querySelectorAll('[data-js="delete"]')
  delet.forEach((item) => {
    item.addEventListener('click', () => {
      ul.removeChild(item.parentElement)
      contador--
      if (contador < 1) {
        main.classList.remove('list-content')
      }
    })
  })
}
saveUl()

// Função para deletar todos as li's
const deleteLi = () => {
  const li = document.querySelectorAll('li')
  li.forEach((item) => {
    ul.removeChild(item)
    contador = 0
    if (contador < 1) {
      main.classList.remove('list-content')
    }
  })
}

// Eventos
btnAdd.addEventListener('click', handleClick)
initialArrayImg.forEach((item) => {
  item.addEventListener('click', () => {
    ul.removeChild(item.parentElement)
    contador--
    if (contador < 1) {
      main.classList.remove('list-content')
    }
  })
})
delet.addEventListener('click', deleteLi)
salvar.addEventListener('click', saveItens)

const toDoList = new ToDoList(
  '[data-js="input"]',
  '[data-js="add"]',
  '[data-js="remover"]',
  '[data-js="salvar"]'
)

toDoList.init()
toDoList.createArrayLi()
console.log(toDoList.arrayLi)
