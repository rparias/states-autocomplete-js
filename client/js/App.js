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
        fetchStates(value).then(response => this.renderStatesList(response.data))
      }
    })
  }

  /**
   * Create and render the datalist of states
   * @param  {Array} states  The states to use for the list
   */
  renderStatesList (states) {
    console.log('states', states)
    let $dataList = document.createElement('datalist')
    $dataList.id = 'states-datalist'
    this.$statesInput.setAttribute('list', $dataList.id)

    let $fragment = document.createDocumentFragment()

    states.forEach(state => {
      let $option = document.createElement('option')
      $option.textContent = state.name
      $fragment.append($option)
    })

    $dataList.append($fragment)

    this.$statesInput.after($dataList)
  }
}

new App()

/**
 * Fetch the states based on the input
 * @param  {String} searchTerm  The input used to search the states
 */
async function fetchStates(searchTerm) {
  try {
    const response = await fetch(`http://localhost:3000/api/states?term=${searchTerm}`)
    const filteredStates = response.json()
    return filteredStates
  } catch (err) {
    console.log('err')
    throw new Error(err)
  }
}