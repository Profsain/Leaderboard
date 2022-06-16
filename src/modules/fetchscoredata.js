const fetchScoreData = async () => {
  let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores';
  try {
    let response = await fetch(url);
    return await response.json();

  } catch (error) {
    console.log(error);
  }

}

export default fetchScoreData;