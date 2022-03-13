'use strict'

import '../sass/app.scss'
import DatalistStates from './DatalistStates'

class App {
  constructor() {
    this.$statesInput = document.querySelector('#states')

    this.addEventListeners()
  }

  addEventListeners() {
    this.$statesInput.addEventListener("keyup", () => {
      DatalistStates(this.$statesInput)
    })
  }
}

new App()