const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//cambiar la llamada a la clase name
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); // agregar un elemento con la clase location

async function displayUser(username) { // en esta linea se agrega la expresion para tener una promesa
try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`// correccion de la referencia a la variable $n
}

displayUser('stolinski').catch(handleError);