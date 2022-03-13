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
      DatalistStates(this.$statesInput)
    })
    this.$statesInput.addEventListener("input", () => {
      console.log('hola')
    })
  }
}

new App()