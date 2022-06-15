import fetchScoreData from "./fetchscoredata.js";

const renderScores = async () => {
  const ul = document.querySelector('.scores');
  let scoreData = await fetchScoreData();

  const firstThirty = scoreData.result.slice(1, 30);
  
  firstThirty.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('li')
    li.innerHTML = `<li>${item.user}: ${item.score}</li>`;

    ul.append(li);
  });
}

export default renderScores;