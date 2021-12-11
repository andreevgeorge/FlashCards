const startButton = document.getElementById('startButton');
const divQwestion = document.getElementById('qwestion');
const textOfQwestion = document.getElementById('textOfQwestion');
const form = document.getElementById('flashcard');
const divWithQuestion = document.getElementById('divWithQuestion');
const divStat = document.getElementById('statistics');
const hTopic = document.getElementById('topic');

let arrofQuestion;
let currentQuestionId;
let curQuesIndex;
let round;
let arrLength;
let deckIndex;

startButton.addEventListener('click', async (event) => {
  divQwestion.style.visibility = 'visible';
  startButton.style.visibility = 'hidden';
  startButton.style.display = 'none';

  deckIndex = event.view.location.href.slice(-3).replace(/\D+/gm, '');
  let response = await fetch(`/allques/${deckIndex}`, { // запрос на созд массива
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  arrofQuestion = await response.json(); // массив айдишников вопросов
  for (let i = 0; i < arrofQuestion.length; i++) {
    arrofQuestion[i].countTry = 0;
  }
  arrLength = arrofQuestion.length;
  curQuesIndex = Math.floor(Math.random() * arrofQuestion.length);
  let response2 = await fetch(`/oneques`, { // запрос на вопрос
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: arrofQuestion[curQuesIndex].id,
    })
  });
  arrofQuestion[curQuesIndex].countTry += 1;
  let question = await response2.json();
  textOfQwestion.innerText = question.question;
  currentQuestionId = arrofQuestion[curQuesIndex];
  let roundResponse = await fetch(`/createround`, { // запрос на вопрос
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: deckIndex,
    })
  });
  roundResponse = await roundResponse.json();
  round = roundResponse;
})

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let answer = form.querySelector('#answer').value;
  //console.log(answer);
  let response3 = await fetch('/check', { // запрос на проверку
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      answer, currentQuestionId, round
    })
  });
  let statusAnswer = await response3.json();
  //console.log('statusAnswer', statusAnswer)
  if (statusAnswer) {
    arrofQuestion.splice(curQuesIndex, 1)
  }
  form.reset();
  console.log(arrofQuestion.length);
  if (arrofQuestion.length === 0){
    console.log('ПРОВЕРКА')
    
     let stat = await fetch(`/stat`, { // запрос на статистику
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idRound: round,
        deckIndex
      })
    });

    let statistics = await stat.json();
    
    //console.log(divWithQuestion);
    divQwestion.style.visibility = 'hidden';
    divStat.style.visibility = 'visible';
    divQwestion.style.display = 'none';

    let statInfo = `<p>Вы завершили игру <strong>${statistics.topicName}</strong>.<br>Вы ответили на <strong>${statistics.firstAttemptsCount}</strong> из <strong>${arrLength}</strong> вопросов с первого раза.<br>Вы сделали
    <strong>${statistics.attemptsCount}</strong> догадок для завершения игры.</p>`

    divStat.insertAdjacentHTML('beforeend', statInfo);

  } else {
  curQuesIndex = Math.floor(Math.random() * arrofQuestion.length);
  let response2 = await fetch(`/oneques`, { // запрос на вопрос
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: arrofQuestion[curQuesIndex].id,
    })
  });
  arrofQuestion[curQuesIndex].countTry += 1;
  let question = await response2.json();
  textOfQwestion.innerText = question.question;
  currentQuestionId = arrofQuestion[curQuesIndex];
}
})
