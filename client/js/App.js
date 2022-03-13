'use strict'

import '../sass/app.scss'
import DatalistStates from './DatalistStates'

class App {
  constructor() {
    this.$statesInput = document.querySelector('#states')
    this.$datalistStates = document.querySelector('#states-datalist')

    this.addEventListeners()
  }

  addEventListeners() {
    this.$statesInput.addEventListener("keyup", () => {
      this.renderDatalist()
    })
  }

  renderDatalist() {
    let options = this.$datalistStates.childNodes
    let shouldRender = true

    for(var i = 0; i < options.length; i++) {
      if(this.$statesInput.value === options[i].value) {
        shouldRender = false
        break
      }
    }

    DatalistStates(this.$statesInput, shouldRender)
  }
}

new App()