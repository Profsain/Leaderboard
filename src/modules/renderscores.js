import fetchScoreData from "./fetchscoredata.js";

const renderScores = async () => {
  const ul = document.querySelector('.scores');
  const instruction = document.querySelector('.indicator');
  let scoreData = await fetchScoreData();
  
  scoreData.result.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('li')
    li.innerHTML = `<li>${item.user}: ${item.score}</li>`;

    ul.append(li);
  });
  
  if (ul !== null) {
    instruction.style.display = 'none';
    ul.style.display = 'block';
  } 
}

export default renderScores;