const fetchScoreData = async () => {
  let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores';
  const indicator = document.querySelector('.indicator');

  try {

    indicator.textContent = '........loading';
    indicator.style.display = 'block';
    let response = await fetch(url);
    return await response.json();

  } catch (error) {
    return error;
  }

}

export default fetchScoreData;