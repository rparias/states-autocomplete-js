import { fetchStates } from './states'

/**
 * Create and render the datalist of states
 * @param  {Array} states  The states to use for the list
 * @param  {DOM Element} parentElement  The parent element where the datalist will be rendered
 */
function getDatalistStates(states, parentElement) {
  removeExistingDatalistOptions()
  let $dataList = document.getElementById('states-datalist')
  parentElement.setAttribute('list', $dataList.id)

  let $fragment = document.createDocumentFragment()

  let statesToIterate = states
  if(states.length > 5) {
    statesToIterate = states.slice(0, 5)
  }
  statesToIterate.forEach(state => {
    let $option = document.createElement('option')
    $option.textContent = state.name
    $fragment.append($option)
  })

  $dataList.append($fragment)

  parentElement.after($dataList)
}

function removeExistingDatalistOptions() {
  let parent = document.getElementById('states-datalist')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export default function DatalistStates(parentElementWithInputValue, shouldRender) {
  const { value } = parentElementWithInputValue
  if(value.length >= 2 && shouldRender) {
    fetchStates(value).then(response => getDatalistStates(response.data, parentElementWithInputValue))
  }
}