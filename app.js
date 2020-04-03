const form = document
  .querySelector('form')
  .addEventListener('submit', (evt) => {
    evt.preventDefault()

    const input = document.querySelector('#autocomplete-input')
    const copyInput = document.querySelector('#copy-input')
    copyInput.value = ''
    const encrypted = btoa(input.value)
    const encrptionGenerated = document.querySelector('#encryption-generated')
    encrptionGenerated.classList.remove('encrypted')
    const URL = `${window.location.hostname}:${window.location.port}${window.location.pathname}#${encrypted}`
    copyInput.value = URL
    document.querySelector('#copy-btn').addEventListener('click', () => {
      copyInput.select()
      document.execCommand('copy')
      M.toast({ html: 'Copied', classes: 'rounded', displayLength: 500 })
    })
  })

const decodeHash = () => {
  const url = window.location.hash.replace('#', '')
  console.log(atob(url))
  return atob(url)
}

if (window.location.hash !== "") {
    const decoded = decodeHash()
    let text = `
    <h5>Secret message is</h5>
    <p>${decoded}</p>
    `
    const secretMessage = document.querySelector(".secret-message")
    secretMessage.innerHTML = text
    secretMessage.classList.remove("encrypted")
}
