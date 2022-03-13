'use strict'

import '../sass/app.scss'

class App {
  constructor() {
    this.$statesInput = document.querySelector('#states')

    this.addEventListeners();
  }

  addEventListeners() {
    this.$statesInput.addEventListener("keyup", () => {
      const { value } = this.$statesInput
      if(value.length >= 2) {
        this.fetchStates(value)
      }
    })
  }

  fetchStates(inputStates) {
    console.log(inputStates)
  }
}

new App()