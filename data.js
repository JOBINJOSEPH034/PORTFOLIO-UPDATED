
const scriptURL = 'https://script.google.com/macros/s/AKfycbyPhXURkkL-oYqlKgbX6qhALTuZKfRHMj63gM0IbU4QldV77M5OSZwRWWXQU2cZf-4t4w/exec'


const form = document.forms['form-data']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
