const addNewScore = (userName, userScore) => {
  const scoreData = {
    user: userName.value,
    score: userScore.value
  }

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  })
    .then(response => response.json())
    .then(score => {
      console.log('New score added:', score);
    })
    .catch(error => {
      console.log('Error Message:', error);
    });
}

export default addNewScore;