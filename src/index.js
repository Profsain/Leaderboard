import _ from 'lodash';
import './style.css';
import addNewScore from './modules/addscores.js';
import renderScores from './modules/renderscores.js';

const form = document.getElementById('form');
const userName = form.elements.username;
const userScore = form.elements.userscore;
const refreshBtn = document.querySelector('.refresh-btn')
;
// create new game using the api
const newGame = {name: 'gamezy'}

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newGame),
})
.then(response => response.json())
.then(game => {
  return game;
})
.catch(error => {
  return error;
});

// submit new score data to the api
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userName.value && userScore.value) {
    addNewScore(userName, userScore);
    form.reset()
  }
});

// fetch score data from the api on Refresh button click
refreshBtn.addEventListener('click', () => {
  renderScores();
});

// load score on page load
window.addEventListener('load', renderScores)