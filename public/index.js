async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

document.getElementById('btn-submit').addEventListener("click", function (e){
  e.preventDefault();
  let message = document.getElementById('mesage');
  let email = document.getElementById('email');
  let name = document.getElementById('name');
  console.log(email.value);
  postData('http://www.carlosng.com/sendMail', { email: email.value, name: name.value, message: message.value })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  if(message) message.value = '';
  if(email) email.value = '';
  if(name) name.value = '';

});
