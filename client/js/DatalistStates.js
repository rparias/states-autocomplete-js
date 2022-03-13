import { fetchStates } from './states'

/**
 * Create and render the datalist of states
 * @param  {Array} states  The states to use for the list
 * @param  {DOM Element} parentElement  The parent element where the datalist will be rendered
 */
function getDatalistStates(states, parentElement) {
  removeExistingDatalist()
  let $dataList = document.createElement('datalist')
  $dataList.id = 'states-datalist'
  parentElement.setAttribute('list', $dataList.id)

  let $fragment = document.createDocumentFragment()

  states.forEach(state => {
    let $option = document.createElement('option')
    $option.textContent = state.name
    $fragment.append($option)
  })

  $dataList.append($fragment)

  parentElement.after($dataList)
}

function removeExistingDatalist() {
  let $existingDatalist = document.getElementById('states-datalist')
  $existingDatalist?.remove()
}

export default function DatalistStates(parentElementWithInputValue) {
  const { value } = parentElementWithInputValue
  if(value.length >= 2) {
    fetchStates(value).then(response => getDatalistStates(response.data, parentElementWithInputValue))
  }
}