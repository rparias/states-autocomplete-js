export async function fetchStates(searchTerm) {
  try {
    const response = await fetch(`http://localhost:3000/api/states?term=${searchTerm}`)
    const filteredStates = response.json()
    return filteredStates
  } catch (err) {
    console.log('err')
    throw new Error(err)
  }
}