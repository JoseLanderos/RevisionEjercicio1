const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//cambiar la llamada a la clase name
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location'); // agregar un elemento con la clase location

async function displayUser(username) { // en esta linea se agrega la expresion para tener una promesa
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); // la expresion await solo es permitida en funciones async
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`// correccion de la referencia a la variable $n
}

displayUser('stolinski').catch(handleError);