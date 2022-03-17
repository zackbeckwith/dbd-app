const baseUrl = 'https://dbd-api.herokuapp.com'

export function getSurvivorList() {
  return fetch(`${baseUrl}/survivors`)
  .then(res => res.json())
}

export function getSurvivorPerkList() {

}

export function getKillerList() {
  return fetch(`${baseUrl}/killers`)
  .then(res => res.json())
}

export function getKillerPerkList() {
  
}