export default function Autocomplete() {

  return `
  <div class="autocomplete-component">
    <label for="states">U.S. States</label>
    <input type="text" id="states" placeholder="Search states" autocomplete="off">
    <button id="clear-button">x</button>
    <datalist id="states-datalist"/>
  </div>
  `;
}
