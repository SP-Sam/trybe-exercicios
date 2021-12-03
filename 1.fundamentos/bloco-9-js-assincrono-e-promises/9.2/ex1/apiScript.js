// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' } 
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data)
    .then(joke => {
      const body = document.querySelector('body');
      const h3 = document.createElement('h3');

      h3.innerHTML = joke.joke;
      body.appendChild(h3);
    });
};

window.onload = () => fetchJoke();