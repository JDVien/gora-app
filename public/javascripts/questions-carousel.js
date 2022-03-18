
let i = 0;
const getQuestion = async () => {
  const nextQuestionBttn = document.querySelector('.get-question')
  const carousel = document.querySelector('.question-divs')
  const questionResponse = await fetch('/questions/all');
  const questionData = await questionResponse.json();
  const questionDiv = document.querySelector('.questions-divs')
  console.log(questionData)
nextQuestionBttn.onclick = function() {

    console.log(i)

    questionDiv.innerHTML = `
      <div class='carousel'>
        <div class='carousel-item'>
          <p>${questionData[i].title}</p>
          <a href=/questions/${questionData[i].id}> <img src=${questionData[i].imgLink}></a>
        </div>
      </div>

    `
    i++;
  }
}
getQuestion();
