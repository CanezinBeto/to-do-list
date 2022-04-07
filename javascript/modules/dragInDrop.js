export default class DragInDrop {
  constructor() {}

  // Método para evento dragIniti
  dragInit() {
    const section = document.querySelector('[data-js="sec-drop"]')
    const ul = document.querySelector('[data-js="drop"]')
    const li = document.querySelectorAll('li')
    const media = matchMedia('(min-width: 650px)').matches

    li.forEach((item) => {
      item.addEventListener('dragstart', () => {
        if (media) {
          section.classList.add('drop-bg')
          ul.classList.add('drop')
        }
      })
    })
  }

  // Método para evento de dragEnd
  dragEnd() {
    const li = document.querySelectorAll('li')

    li.forEach((item) => {
      item.addEventListener('dragend', ({ target }) => {
        const ulDrop = document.querySelector('[data-js="drop"]')
        const media = matchMedia('(min-width: 650px)').matches

        if (media) {
          ulDrop.appendChild(target)
          this.contador--
        }
        if (this.ul.children.length <= 0)
          this.main.classList.remove('list-content')
      })
    })
    this.removeAllLiInUlDrop()
  }

  // Método para remover todas LI
  removeAllLiInUlDrop() {
    const li = document.querySelectorAll('li')
    const ulDrop = document.querySelector('[data-js="drop"]')
    const btnRemoveDrop = document.querySelector('[data-js="removerDrop"]')

    btnRemoveDrop.addEventListener('click', (event) => {
      event.preventDefault()
      if (ulDrop.children.length > 0) {
        li.forEach((item) => {
          ulDrop.removeChild(item)
          this.contador = 0
        })
      }
    })
  }
}
