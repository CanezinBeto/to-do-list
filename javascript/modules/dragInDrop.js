export default class DragInDrop {
  constructor(ul, btnAdd) {
    this.ul = document.querySelector(ul)
    this.btnAdd = document.querySelector(btnAdd)
    this.liSave = this.ul.children

    // Bind das funções chamadas em eventos
    this.dragOver = this.dragOver.bind(this)
    this.dragEnd = this.dragEnd.bind(this)
  }

  // Método para dragover Save
  dragOverSave() {
    const arrayLi = [...this.liSave]
    let target
    arrayLi.forEach((item) => {
      item.addEventListener('dragover', (event) => {
        event.preventDefault()
        target = event.target
      })
    })
    return target
  }

  // Método para evento de dragEnd
  dragEndSave() {
    const arrayLi = [...this.liSave]
    arrayLi.forEach((item) => {
      item.addEventListener('dragend', ({ target }) => {
        this.ul.insertBefore(target, this.dragOverSave())
      })
    })
  }

  // Método para dragOver
  dragOver() {
    const li = document.querySelectorAll('li')
    let target
    li.forEach((item) => {
      item.addEventListener('dragover', (event) => {
        event.preventDefault()
        target = event.target
      })
    })
    return target
  }

  // Método para dragEnd
  dragEnd() {
    const li = document.querySelectorAll('li')
    li.forEach((item) => {
      item.addEventListener('dragend', ({ target }) => {
        this.ul.insertBefore(target, this.dragOver())
      })
    })
  }

  // Evento de adicionar Li para atualizar os li
  attLi() {
    this.btnAdd.addEventListener('click', this.dragEnd)
  }

  // Método para iniciar drag in drop
  init() {
    this.dragEndSave()
    this.attLi()
  }
}
