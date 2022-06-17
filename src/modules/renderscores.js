import fetchScoreData from "./fetchscoredata.js";

const renderScores = async () => {
  const ul = document.querySelector('.scores');
  const indicator = document.querySelector('.indicator');
  let scoreData = await fetchScoreData();
  
  let sortedScore = scoreData.result.sort((a, b) => a.score - b.score);
  sortedScore.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('li')
    li.innerHTML = `<li>${item.user}: ${item.score}</li>`;

    ul.append(li);
  });
  
  if (ul !== null) {
    indicator.style.display = 'none';
    ul.style.display = 'block';
  } 
}

export default renderScores;