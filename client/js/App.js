'use strict'

import '../sass/app.scss'
import DatalistStates from './DatalistStates'

class App {
  constructor() {
    this.$statesInput = document.querySelector('#states')
    this.$datalistStates = document.querySelector('#states-datalist')
    this.$clearButton = document.querySelector('#clear-button')

    this.addEventListeners()
  }

  addEventListeners() {
    this.$statesInput.addEventListener("keyup", () => {
      this.renderDatalist()
    })

    this.$clearButton.addEventListener("click", () => {
      this.$statesInput.value = ''
      this.renderDatalist()
    })
  }

  renderDatalist() {
    let shouldRender = this.shouldRenderDatalist()
    DatalistStates(this.$statesInput, shouldRender)
  }

  shouldRenderDatalist() {
    let options = this.$datalistStates.childNodes
    let shouldRender = this.$statesInput.value.length === 0 ? false : true

    for(var i = 0; i < options.length; i++) {
      if(this.$statesInput.value === options[i].value) {
        shouldRender = false
        break
      }
    }

    return shouldRender
  }
}

new App()