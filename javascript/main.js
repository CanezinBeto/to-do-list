const input = document.querySelector('[data-js="input"]')
const btnAdd = document.querySelector('[data-js="add"]')
const ul = document.querySelector('[data-js="ul"]')
const delet = document.querySelector('[data-js="remover"]')
const salvar = document.querySelector('[data-js="salvar"]')
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
  if (contador <= 9) {
    ul.appendChild(initialArrayLi[contador])
    addSpanInLi()
    addImgInLi()
    contador++
  }
}

// Função para salvar os dados
const saveItens = (name, valor) => {
  localStorage[name] = valor
}
const salveBody = () => {
  saveItens('body', document.body.children)
}

// Função para deletar todos as li's
const deleteLi = () => {
  const li = document.querySelectorAll('li')
  li.forEach((item) => {
    ul.removeChild(item)
    contador = 0
  })
}

// Eventos
btnAdd.addEventListener('click', handleClick)
initialArrayImg.forEach((item) => {
  item.addEventListener('click', () => {
    ul.removeChild(item.parentElement)
    contador--
  })
})
delet.addEventListener('click', deleteLi)
salvar.addEventListener('click', salveBody)
