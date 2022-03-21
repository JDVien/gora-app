
window.addEventListener("DOMContentLoaded", event => {

  let questionDiv = document.querySelector('.profile-question-divs')
  let answerDiv = document.querySelector('.profile-answer-divs')
  let commentDiv = document.querySelector('.profile-comment-divs')
  let questionBtn = document.getElementById("profile-questions")
  let answerBtn = document.getElementById("profile-answers");
  let commentBtn = document.getElementById("profile-comments")
  answerBtn.onclick = function () {
    if (answerDiv.classList.contains('hidden')) {
      answerDiv.classList.remove('hidden')
      questionDiv.classList.add('hidden')
      commentDiv.classList.add('hidden')
    }
  }
  questionBtn.onclick = function () {
    if (questionDiv.classList.contains('hidden')) {
      questionDiv.classList.remove('hidden')
      answerDiv.classList.add('hidden')
      commentDiv.classList.add('hidden')

    }
    document.body.classList.toggle('end-state')
  }
  commentBtn.onclick = function () {
    if (commentDiv.classList.contains('hidden')) {
      commentDiv.classList.remove('hidden')
      questionDiv.classList.add('hidden')
      answerDiv.classList.add('hidden')
    }
  }
})
